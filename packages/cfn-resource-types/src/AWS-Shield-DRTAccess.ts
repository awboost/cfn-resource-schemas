import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Shield::DRTAccess`.
 * Config the role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your AWS account while assisting with attack mitigation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html}
 */
export type ShieldDRTAccessProperties = {
  /**
   * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.
   * @maxLength `10`
   */
  LogBucketList?: string[];
  /**
   * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.
   * @maxLength `2048`
   */
  RoleArn: string;
};
/**
 * Attribute type definition for `AWS::Shield::DRTAccess`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html#aws-resource-shield-drtaccess-return-values}
 */
export type ShieldDRTAccessAttributes = {
  AccountId: string;
};
/**
 * Resource type definition for `AWS::Shield::DRTAccess`.
 * Config the role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your AWS account while assisting with attack mitigation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html}
 */
export class ShieldDRTAccess extends $Resource<
  "AWS::Shield::DRTAccess",
  ShieldDRTAccessProperties,
  ShieldDRTAccessAttributes
> {
  public static readonly Type = "AWS::Shield::DRTAccess";
  public static readonly AttributeNames = ["AccountId" as const];
  constructor(
    logicalId: string,
    properties: ShieldDRTAccessProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ShieldDRTAccess.Type,
      properties,
      ShieldDRTAccess.AttributeNames,
      options,
    );
  }
}
