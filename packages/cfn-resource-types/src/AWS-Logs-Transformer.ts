import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Logs::Transformer`.
 * Specifies a transformer on the log group to transform logs into consistent structured and information rich format.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html}
 */
export type LogsTransformerProperties = {
  /**
   * Existing log group that you want to associate with this transformer.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `[\w#+=/:,.@-]*`
   */
  LogGroupIdentifier: string;
  /**
   * List of processors in a transformer
   * @minLength `1`
   * @maxLength `20`
   */
  TransformerConfig: Processor[];
};
/**
 * Type definition for `AWS::Logs::Transformer.AddKeyEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-addkeyentry.html}
 */
export type AddKeyEntry = {
  /**
   * @maxLength `128`
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Key: string;
  OverwriteIfExists?: boolean;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.CopyValueEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-copyvalueentry.html}
 */
export type CopyValueEntry = {
  OverwriteIfExists?: boolean;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source: string;
  /**
   * @maxLength `128`
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Target: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.EventSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-eventsource.html}
 */
export type EventSource =
  | "CloudTrail"
  | "Route53Resolver"
  | "VPCFlow"
  | "EKSAudit"
  | "AWSWAF";
/**
 * Type definition for `AWS::Logs::Transformer.MoveKeyEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-movekeyentry.html}
 */
export type MoveKeyEntry = {
  OverwriteIfExists?: boolean;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source: string;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Target: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.OcsfVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-ocsfversion.html}
 */
export type OcsfVersion = "V1.1" | "V1.5";
/**
 * Type definition for `AWS::Logs::Transformer.ParseCloudfront`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parsecloudfront.html}
 */
export type ParseCloudfront = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.ParsePostgres`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parsepostgres.html}
 */
export type ParsePostgres = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.ParseRoute53`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parseroute53.html}
 */
export type ParseRoute53 = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.ParseToOCSF`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parsetoocsf.html}
 */
export type ParseToOCSF = {
  EventSource: EventSource;
  /**
   * @minLength `1`
   * @maxLength `10`
   * @pattern `^v\d+\.\d+(\.\d+)?$`
   */
  MappingVersion?: string;
  OcsfVersion: OcsfVersion;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.ParseVPC`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parsevpc.html}
 */
export type ParseVPC = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.ParseWAF`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-parsewaf.html}
 */
export type ParseWAF = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source?: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.Processor`.
 * Individual processor configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-processor.html}
 */
export type Processor = {
  AddKeys?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    Entries: AddKeyEntry[];
  };
  CopyValue?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    Entries: CopyValueEntry[];
  };
  Csv?: {
    /**
     * @minLength `1`
     * @maxLength `100`
     */
    Columns?: string[];
    /**
     * @maxLength `2`
     */
    Delimiter?: string;
    /**
     * @maxLength `1`
     */
    QuoteCharacter?: string;
    Source?: string;
  };
  DateTimeConverter?: {
    Locale?: string;
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    MatchPatterns: string[];
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Source: string;
    SourceTimezone?: string;
    /**
     * @maxLength `128`
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Target: string;
    TargetFormat?: string;
    TargetTimezone?: string;
  };
  DeleteKeys?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    WithKeys: string[];
  };
  Grok?: {
    /**
     * @maxLength `512`
     */
    Match: string;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Source?: string;
  };
  ListToMap?: {
    Flatten?: boolean;
    FlattenedElement?: "first" | "last";
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Key: string;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Source: string;
    /**
     * @maxLength `128`
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Target?: string;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    ValueKey?: string;
  };
  LowerCaseString?: {
    /**
     * @minLength `1`
     * @maxLength `10`
     */
    WithKeys: string[];
  };
  MoveKeys?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    Entries: MoveKeyEntry[];
  };
  ParseCloudfront?: ParseCloudfront;
  ParseJSON?: {
    /**
     * @maxLength `128`
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Destination?: string;
    Source?: string;
  };
  ParseKeyValue?: {
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Destination?: string;
    FieldDelimiter?: string;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    KeyPrefix?: string;
    KeyValueDelimiter?: string;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    NonMatchValue?: string;
    OverwriteIfExists?: boolean;
    /**
     * @pattern `^.*[a-zA-Z0-9]+.*$`
     */
    Source?: string;
  };
  ParsePostgres?: ParsePostgres;
  ParseRoute53?: ParseRoute53;
  ParseToOCSF?: ParseToOCSF;
  ParseVPC?: ParseVPC;
  ParseWAF?: ParseWAF;
  RenameKeys?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    Entries: RenameKeyEntry[];
  };
  SplitString?: {
    /**
     * @minLength `1`
     * @maxLength `10`
     */
    Entries: SplitStringEntry[];
  };
  SubstituteString?: {
    /**
     * @minLength `1`
     * @maxLength `10`
     */
    Entries: SubstituteStringEntry[];
  };
  TrimString?: {
    /**
     * @minLength `1`
     * @maxLength `10`
     */
    WithKeys: string[];
  };
  TypeConverter?: {
    /**
     * @minLength `1`
     * @maxLength `5`
     */
    Entries: TypeConverterEntry[];
  };
  UpperCaseString?: {
    /**
     * @minLength `1`
     * @maxLength `10`
     */
    WithKeys: string[];
  };
};
/**
 * Type definition for `AWS::Logs::Transformer.RenameKeyEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-renamekeyentry.html}
 */
export type RenameKeyEntry = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Key: string;
  OverwriteIfExists?: boolean;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  RenameTo: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.SplitStringEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-splitstringentry.html}
 */
export type SplitStringEntry = {
  /**
   * @maxLength `128`
   */
  Delimiter: string;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.SubstituteStringEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-substitutestringentry.html}
 */
export type SubstituteStringEntry = {
  /**
   * @maxLength `128`
   */
  From: string;
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Source: string;
  /**
   * @maxLength `128`
   */
  To: string;
};
/**
 * Type definition for `AWS::Logs::Transformer.TypeConverterEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-transformer-typeconverterentry.html}
 */
export type TypeConverterEntry = {
  /**
   * @pattern `^.*[a-zA-Z0-9]+.*$`
   */
  Key: string;
  Type: "boolean" | "integer" | "double" | "string";
};
/**
 * Resource type definition for `AWS::Logs::Transformer`.
 * Specifies a transformer on the log group to transform logs into consistent structured and information rich format.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html}
 */
export class LogsTransformer extends $Resource<
  "AWS::Logs::Transformer",
  LogsTransformerProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Logs::Transformer";
  constructor(
    logicalId: string,
    properties: LogsTransformerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsTransformer.Type, properties, options);
  }
}
