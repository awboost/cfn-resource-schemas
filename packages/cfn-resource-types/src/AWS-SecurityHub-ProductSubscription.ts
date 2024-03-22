import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::ProductSubscription resource represents a subscription to a service that is allowed to generate findings for your Security Hub account. One product subscription resource is created for each product enabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html}
 */
export type SecurityHubProductSubscriptionProperties = {
  /**
   * The generic ARN of the product being subscribed to
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  ProductArn: string;
};
/**
 * Attribute type definition for `AWS::SecurityHub::ProductSubscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html#aws-resource-securityhub-productsubscription-return-values}
 */
export type SecurityHubProductSubscriptionAttributes = {
  /**
   * The ARN of the product subscription for the account
   * @pattern `arn:aws\S*:securityhub:\S*`
   */
  ProductSubscriptionArn: string;
};
/**
 * The AWS::SecurityHub::ProductSubscription resource represents a subscription to a service that is allowed to generate findings for your Security Hub account. One product subscription resource is created for each product enabled.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html}
 */
export class SecurityHubProductSubscription extends $Resource<
  "AWS::SecurityHub::ProductSubscription",
  SecurityHubProductSubscriptionProperties,
  SecurityHubProductSubscriptionAttributes
> {
  public static readonly Type = "AWS::SecurityHub::ProductSubscription";
  constructor(
    logicalId: string,
    properties: SecurityHubProductSubscriptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubProductSubscription.Type, properties, options);
  }
}
