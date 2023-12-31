import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::FMS::NotificationChannel`.
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html}
 */
export type FMSNotificationChannelProperties = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([^\s]+)$`
   */
  SnsRoleName: string;
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([^\s]+)$`
   */
  SnsTopicArn: string;
};
/**
 * Resource type definition for `AWS::FMS::NotificationChannel`.
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html}
 */
export class FMSNotificationChannel extends $Resource<
  "AWS::FMS::NotificationChannel",
  FMSNotificationChannelProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::FMS::NotificationChannel";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: FMSNotificationChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      FMSNotificationChannel.Type,
      properties,
      FMSNotificationChannel.AttributeNames,
      options,
    );
  }
}
