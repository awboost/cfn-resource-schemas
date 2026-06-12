import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::AWSExternalAnthropic::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-awsexternalanthropic-workspace.html}
 */
export type AWSExternalAnthropicWorkspaceProperties = {
  /**
   * Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.
   */
  DataResidency?: DataResidency;
  /**
   * The name of the workspace.
   * @minLength `1`
   * @maxLength `40`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AWSExternalAnthropic::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-awsexternalanthropic-workspace.html#aws-resource-awsexternalanthropic-workspace-return-values}
 */
export type AWSExternalAnthropicWorkspaceAttributes = {
  /**
   * The ARN of the workspace.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:[a-zA-Z0-9_\-]+:aws-external-anthropic:[a-zA-Z0-9_\-]+:[0-9]+:workspace/wrkspc_[A-Za-z0-9]+$`
   */
  Arn: string;
  /**
   * The timestamp when the workspace was created.
   */
  CreatedAt: string;
  /**
   * The unique identifier of the workspace.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^wrkspc_[A-Za-z0-9]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::AWSExternalAnthropic::Workspace.DataResidency`.
 * Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-awsexternalanthropic-workspace-dataresidency.html}
 */
export type DataResidency = {
  /**
   * Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.
   */
  AllowedInferenceGeos?: string[];
  /**
   * Default inference geo applied when requests omit the parameter. Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.
   */
  DefaultInferenceGeo?: string;
  /**
   * Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.
   */
  WorkspaceGeo?: string;
};
/**
 * Type definition for `AWS::AWSExternalAnthropic::Workspace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-awsexternalanthropic-workspace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::AWSExternalAnthropic::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-awsexternalanthropic-workspace.html}
 */
export class AWSExternalAnthropicWorkspace extends $Resource<
  "AWS::AWSExternalAnthropic::Workspace",
  AWSExternalAnthropicWorkspaceProperties,
  AWSExternalAnthropicWorkspaceAttributes
> {
  public static readonly Type = "AWS::AWSExternalAnthropic::Workspace";
  constructor(
    logicalId: string,
    properties: AWSExternalAnthropicWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AWSExternalAnthropicWorkspace.Type, properties, options);
  }
}
