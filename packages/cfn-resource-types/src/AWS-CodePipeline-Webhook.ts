import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodePipeline::Webhook
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html}
 */
export type CodePipelineWebhookProperties = {
  Authentication: string;
  AuthenticationConfiguration: WebhookAuthConfiguration;
  Filters: WebhookFilterRule[];
  Name?: string;
  RegisterWithThirdParty?: boolean;
  TargetAction: string;
  TargetPipeline: string;
  TargetPipelineVersion: number;
};
/**
 * Attribute type definition for `AWS::CodePipeline::Webhook`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html#aws-resource-codepipeline-webhook-return-values}
 */
export type CodePipelineWebhookAttributes = {
  Id: string;
  Url: string;
};
/**
 * Type definition for `AWS::CodePipeline::Webhook.WebhookAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html}
 */
export type WebhookAuthConfiguration = {
  AllowedIPRange?: string;
  SecretToken?: string;
};
/**
 * Type definition for `AWS::CodePipeline::Webhook.WebhookFilterRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html}
 */
export type WebhookFilterRule = {
  JsonPath: string;
  MatchEquals?: string;
};
/**
 * Resource Type definition for AWS::CodePipeline::Webhook
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html}
 */
export class CodePipelineWebhook extends $Resource<
  "AWS::CodePipeline::Webhook",
  CodePipelineWebhookProperties,
  CodePipelineWebhookAttributes
> {
  public static readonly Type = "AWS::CodePipeline::Webhook";
  constructor(
    logicalId: string,
    properties: CodePipelineWebhookProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodePipelineWebhook.Type, properties, options);
  }
}
