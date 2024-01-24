import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SupportApp::SlackWorkspaceConfiguration`.
 * An AWS Support App resource that creates, updates, lists, and deletes Slack workspace configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html}
 */
export type SupportAppSlackWorkspaceConfigurationProperties = {
  /**
   * The team ID in Slack, which uniquely identifies a workspace.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^\S+$`
   */
  TeamId: string;
  /**
   * An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[0-9]+$`
   */
  VersionId?: string;
};
/**
 * Resource type definition for `AWS::SupportApp::SlackWorkspaceConfiguration`.
 * An AWS Support App resource that creates, updates, lists, and deletes Slack workspace configurations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html}
 */
export class SupportAppSlackWorkspaceConfiguration extends $Resource<
  "AWS::SupportApp::SlackWorkspaceConfiguration",
  SupportAppSlackWorkspaceConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SupportApp::SlackWorkspaceConfiguration";
  constructor(
    logicalId: string,
    properties: SupportAppSlackWorkspaceConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SupportAppSlackWorkspaceConfiguration.Type,
      properties,
      options,
    );
  }
}
