import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::Logs::LogGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html}
 */
export type LogsLogGroupProperties = {
  /**
     * The body of the policy document you want to use for this topic.
    
    You can only add one policy per topic.
    
    The policy must be in JSON string format.
    
    Length Constraints: Maximum length of 30720
     */
  DataProtectionPolicy?: Record<string, any>;
  /**
   * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
   * @maxLength `256`
   * @pattern `^arn:[a-z0-9-]+:kms:[a-z0-9-]+:\d{12}:(key|alias)/.+\Z`
   */
  KmsKeyId?: string;
  /**
   * The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[.\-_/#A-Za-z0-9]{1,512}\Z`
   */
  LogGroupName?: string;
  /**
   * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, and 3653.
   */
  RetentionInDays?:
    | 1
    | 3
    | 5
    | 7
    | 14
    | 30
    | 60
    | 90
    | 120
    | 150
    | 180
    | 365
    | 400
    | 545
    | 731
    | 1096
    | 1827
    | 2192
    | 2557
    | 2922
    | 3288
    | 3653;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Logs::LogGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#aws-resource-logs-loggroup-return-values}
 */
export type LogsLogGroupAttributes = {
  /**
   * The CloudWatch log group ARN.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Logs::LogGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-logs-loggroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::Logs::LogGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html}
 */
export class LogsLogGroup extends $Resource<
  "AWS::Logs::LogGroup",
  LogsLogGroupProperties,
  LogsLogGroupAttributes
> {
  public static readonly Type = "AWS::Logs::LogGroup";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: LogsLogGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LogsLogGroup.Type,
      properties,
      LogsLogGroup.AttributeNames,
      options,
    );
  }
}
