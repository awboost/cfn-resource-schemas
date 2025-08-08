import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::Monitor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-monitor.html}
 */
export type DeadlineMonitorProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  IdentityCenterInstanceArn: string;
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):iam::\d{12}:role(/[!-.0-~]+)/‍*[\w+=,.@-]+$`
   */
  RoleArn: string;
  /**
   * @pattern `^[a-z0-9-]{1,100}$`
   */
  Subdomain: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Deadline::Monitor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-monitor.html#aws-resource-deadline-monitor-return-values}
 */
export type DeadlineMonitorAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):deadline:[a-z0-9-]+:[0-9]+:monitor/monitor-[0-9a-z]{32}$`
   */
  Arn: string;
  IdentityCenterApplicationArn: string;
  /**
   * @pattern `^monitor-[0-9a-f]{32}$`
   */
  MonitorId: string;
  Url: string;
};
/**
 * Type definition for `AWS::Deadline::Monitor.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-monitor-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Definition of AWS::Deadline::Monitor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-monitor.html}
 */
export class DeadlineMonitor extends $Resource<
  "AWS::Deadline::Monitor",
  DeadlineMonitorProperties,
  DeadlineMonitorAttributes
> {
  public static readonly Type = "AWS::Deadline::Monitor";
  constructor(
    logicalId: string,
    properties: DeadlineMonitorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineMonitor.Type, properties, options);
  }
}
