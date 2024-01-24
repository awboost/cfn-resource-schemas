import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::ScheduledAudit`.
 * Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html}
 */
export type IoTScheduledAuditProperties = {
  /**
   * The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
   * @pattern `^([1-9]|[12][0-9]|3[01])$|^LAST$|^UNSET_VALUE$`
   */
  DayOfMonth?: string;
  /**
   * The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
   */
  DayOfWeek?:
    | "SUN"
    | "MON"
    | "TUE"
    | "WED"
    | "THU"
    | "FRI"
    | "SAT"
    | "UNSET_VALUE";
  /**
   * How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
   */
  Frequency: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
  /**
   * The name you want to give to the scheduled audit.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  ScheduledAuditName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account.
   */
  TargetCheckNames: string[];
};
/**
 * Attribute type definition for `AWS::IoT::ScheduledAudit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html#aws-resource-iot-scheduledaudit-return-values}
 */
export type IoTScheduledAuditAttributes = {
  /**
   * The ARN (Amazon resource name) of the scheduled audit.
   * @minLength `20`
   * @maxLength `2048`
   */
  ScheduledAuditArn: string;
};
/**
 * Type definition for `AWS::IoT::ScheduledAudit.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-scheduledaudit-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::ScheduledAudit`.
 * Scheduled audits can be used to specify the checks you want to perform during an audit and how often the audit should be run.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html}
 */
export class IoTScheduledAudit extends $Resource<
  "AWS::IoT::ScheduledAudit",
  IoTScheduledAuditProperties,
  IoTScheduledAuditAttributes
> {
  public static readonly Type = "AWS::IoT::ScheduledAudit";
  constructor(
    logicalId: string,
    properties: IoTScheduledAuditProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTScheduledAudit.Type, properties, options);
  }
}
