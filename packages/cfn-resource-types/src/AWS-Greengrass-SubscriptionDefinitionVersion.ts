import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Greengrass::SubscriptionDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html}
 */
export type GreengrassSubscriptionDefinitionVersionProperties = {
  SubscriptionDefinitionId: string;
  Subscriptions: Subscription[];
};
/**
 * Attribute type definition for `AWS::Greengrass::SubscriptionDefinitionVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html#aws-resource-greengrass-subscriptiondefinitionversion-return-values}
 */
export type GreengrassSubscriptionDefinitionVersionAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Greengrass::SubscriptionDefinitionVersion.Subscription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-subscriptiondefinitionversion-subscription.html}
 */
export type Subscription = {
  Id: string;
  Source: string;
  Subject: string;
  Target: string;
};
/**
 * Resource Type definition for AWS::Greengrass::SubscriptionDefinitionVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-subscriptiondefinitionversion.html}
 */
export class GreengrassSubscriptionDefinitionVersion extends $Resource<
  "AWS::Greengrass::SubscriptionDefinitionVersion",
  GreengrassSubscriptionDefinitionVersionProperties,
  GreengrassSubscriptionDefinitionVersionAttributes
> {
  public static readonly Type =
    "AWS::Greengrass::SubscriptionDefinitionVersion";
  constructor(
    logicalId: string,
    properties: GreengrassSubscriptionDefinitionVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GreengrassSubscriptionDefinitionVersion.Type,
      properties,
      options,
    );
  }
}
