#!/usr/bin/env node
import { Command } from "commander";
import { addDownloadCommand } from "./download.js";
import { addGenerateCommand } from "./generate.js";

const program = new Command();

program
  .name("cfn-codegen")
  .description("generate code for CloudFormation resources");

addDownloadCommand(program);
addGenerateCommand(program);

await program.parseAsync(process.argv);
