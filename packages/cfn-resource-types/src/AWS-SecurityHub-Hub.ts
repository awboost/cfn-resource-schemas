import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::Hub resource represents the implementation of the AWS Security Hub service in your account. One hub resource is created for each Region in which you enable Security Hub.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export type SecurityHubHubProperties = {
  /**
   * Whether to automatically enable new controls when they are added to standards that are enabled
   */
  AutoEnableControls?: boolean;
  /**
   * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
   * @pattern `^(SECURITY_CONTROL|STANDARD_CONTROL)$`
   */
  ControlFindingGenerator?: string;
  /**
   * Whether to enable the security standards that Security Hub has designated as automatically enabled.
   */
  EnableDefaultStandards?: boolean;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::SecurityHub::Hub`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#aws-resource-securityhub-hub-return-values}
 */
export type SecurityHubHubAttributes = {
  /**
   * An ARN is automatically created for the customer.
   * @pattern `^arn:.*`
   */
  ARN: string;
  /**
   * The date and time when Security Hub was enabled in the account.
   */
  SubscribedAt: string;
};
/**
 * Type definition for `AWS::SecurityHub::Hub.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityhub-hub-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * The AWS::SecurityHub::Hub resource represents the implementation of the AWS Security Hub service in your account. One hub resource is created for each Region in which you enable Security Hub.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html}
 */
export class SecurityHubHub extends $Resource<
  "AWS::SecurityHub::Hub",
  SecurityHubHubProperties,
  SecurityHubHubAttributes
> {
  public static readonly Type = "AWS::SecurityHub::Hub";
  constructor(
    logicalId: string,
    properties: SecurityHubHubProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubHub.Type, properties, options);
  }
}
