import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::Standard resource represents the implementation of an individual AWS Security Hub Standard in your account. It requires you have SecurityHub enabled before you can enable the Standard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html}
 */
export type SecurityHubStandardProperties = {
  /**
   * StandardsControls to disable from this Standard.
   * @minLength `0`
   * @maxLength `100`
   */
  DisabledStandardsControls?: StandardsControl[];
  /**
   * The ARN of the Standard being enabled
   * @pattern `arn:aws\S*:securityhub:\S`
   */
  StandardsArn: string;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Standard`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#aws-resource-securityhub-standard-return-values}
 */
export type SecurityHubStandardAttributes = {
  /**
   * The ARN of the StandardsSubscription for the account ID, region, and Standard.
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  StandardsSubscriptionArn: string;
};
/**
 * Type definition for `AWS::SecurityHub::Standard.StandardsControl`.
 * An individual StandardsControl within the Standard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-standard-standardscontrol.html}
 */
export type StandardsControl = {
  /**
   * the reason the standard control is disabled
   */
  Reason?: string;
  /**
   * the Arn for the standard control.
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  StandardsControlArn: string;
};
/**
 * The AWS::SecurityHub::Standard resource represents the implementation of an individual AWS Security Hub Standard in your account. It requires you have SecurityHub enabled before you can enable the Standard.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html}
 */
export class SecurityHubStandard extends $Resource<
  "AWS::SecurityHub::Standard",
  SecurityHubStandardProperties,
  SecurityHubStandardAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Standard";
  constructor(
    logicalId: string,
    properties: SecurityHubStandardProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubStandard.Type, properties, options);
  }
}
