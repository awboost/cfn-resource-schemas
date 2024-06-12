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
