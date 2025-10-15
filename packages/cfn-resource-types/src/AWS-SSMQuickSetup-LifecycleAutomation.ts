import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSMQuickSetup::LifecycleAutomation that executes SSM Automation documents in response to CloudFormation lifecycle events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-lifecycleautomation.html}
 */
export type SSMQuickSetupLifecycleAutomationProperties = {
  /**
   * The name of the Automation document to execute
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^\S+$`
   */
  AutomationDocument: string;
  /**
   * Parameters to be passed to the Automation Document
   */
  AutomationParameters: AutomationParameters;
  /**
   * A unique identifier used for generating a unique logical ID for the custom resource
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ResourceKey: string;
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::SSMQuickSetup::LifecycleAutomation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-lifecycleautomation.html#aws-resource-ssmquicksetup-lifecycleautomation-return-values}
 */
export type SSMQuickSetupLifecycleAutomationAttributes = {
  /**
   * The id from the association that is returned when creating the association
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  AssociationId: string;
};
/**
 * Type definition for `AWS::SSMQuickSetup::LifecycleAutomation.AutomationParameters`.
 * Parameters to be passed to the Automation Document
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-lifecycleautomation-automationparameters.html}
 */
export type AutomationParameters = Record<string, string[]>;
/**
 * Type definition for `AWS::SSMQuickSetup::LifecycleAutomation.TagsMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-lifecycleautomation-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Resource Type definition for AWS::SSMQuickSetup::LifecycleAutomation that executes SSM Automation documents in response to CloudFormation lifecycle events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-lifecycleautomation.html}
 */
export class SSMQuickSetupLifecycleAutomation extends $Resource<
  "AWS::SSMQuickSetup::LifecycleAutomation",
  SSMQuickSetupLifecycleAutomationProperties,
  SSMQuickSetupLifecycleAutomationAttributes
> {
  public static readonly Type = "AWS::SSMQuickSetup::LifecycleAutomation";
  constructor(
    logicalId: string,
    properties: SSMQuickSetupLifecycleAutomationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMQuickSetupLifecycleAutomation.Type,
      properties,
      options,
    );
  }
}
