import chalk from "chalk";
import JsonPointer from "json-pointer";
import { format } from "node:util";

export type Problem = {
  fileName: string;
  pointer: string;
  level: "error" | "info" | "warn";
  message: string;
  args?: any[];
};

export class SchemaContext<T> {
  public static hasError(problems: Problem[]): boolean {
    return problems.some((x) => x.level === "error");
  }

  public readonly fileName: string;
  public readonly pointer: string;
  public readonly problems: Problem[];

  constructor(fileName: string, pointer = "", problems: Problem[] = []) {
    this.pointer = pointer;
    this.fileName = fileName;
    this.problems = problems;
  }

  public child<U>(
    selector: (n: Navigator<T>) => Navigator<U>,
  ): SchemaContext<U> {
    return selector(
      makeNavigator(this.fileName, this.pointer, this.problems),
    )();
  }

  public override<X>(): SchemaContext<X> {
    return this as any;
  }

  public error(message: string, ...args: any[]): this {
    this.problems.push({
      args,
      fileName: this.fileName,
      level: "error",
      message,
      pointer: this.pointer,
    });
    return this;
  }

  public hasError(): boolean {
    return this.problems.some(
      (x) => x.level === "error" && x.fileName === this.fileName,
    );
  }

  public info(message: string, ...args: any[]): this {
    this.problems.push({
      args,
      fileName: this.fileName,
      level: "info",
      message,
      pointer: this.pointer,
    });
    return this;
  }

  public narrow<X extends T>(): SchemaContext<X> {
    return this;
  }

  public printProblems(): void {
    if (this.problems.length) {
      console.error(
        "\n" +
          chalk.underline(chalk.whiteBright(this.fileName || "<unknown file>")),
      );
    }

    for (const problem of this.problems) {
      const message = problem.args
        ? format(problem.message, ...problem.args)
        : problem.message;

      if (problem.level === "error") {
        console.error(
          `  ${chalk.red("error")} ${chalk.gray(problem.pointer)} ${message}`,
        );
      } else if (problem.level === "info") {
        console.error(
          `  ${chalk.cyan("info ")} ${chalk.gray(problem.pointer)} ${message}`,
        );
      } else if (problem.level === "warn") {
        console.error(
          `  ${chalk.yellow("warn ")} ${chalk.gray(
            problem.pointer,
          )} ${message}`,
        );
      }
    }
  }

  public ref<U = T>(ref: string): SchemaContext<U> {
    if (ref.includes("#")) {
      const [fileName, pointer] = ref.split("#", 2);
      return new SchemaContext(
        fileName || this.fileName,
        pointer,
        this.problems,
      );
    }
    return new SchemaContext<U>(this.fileName, ref, this.problems);
  }

  public throw(message: string, ...args: any[]): never {
    throw new Error(
      format(`${this.fileName}#${this.pointer}: ${message}`, ...args),
    );
  }

  public warn(message: string, ...args: any[]): this {
    this.problems.push({
      args,
      fileName: this.fileName,
      level: "warn",
      message,
      pointer: this.pointer,
    });
    return this;
  }
}

type Navigator<T> = (T extends Record<PropertyKey, any>
  ? {
      [K in keyof T]-?: Navigator<Exclude<T[K], undefined>>;
    }
  : unknown) & {
  (): SchemaContext<T>;
};

function makeNavigator<T>(
  fileName: string,
  pointer: string,
  problems: Problem[],
): Navigator<T> {
  return new Proxy(new Function() as any, {
    apply(): any {
      return new SchemaContext(fileName, pointer, problems);
    },

    get(target, propertyKey): any {
      if (typeof propertyKey === "symbol") {
        return target[propertyKey];
      }
      return makeNavigator(
        fileName,
        `${pointer}/${JsonPointer.escape(propertyKey)}`,
        problems,
      );
    },
  });
}
