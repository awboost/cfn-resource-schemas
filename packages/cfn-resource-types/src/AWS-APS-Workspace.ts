import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::APS::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html}
 */
export type APSWorkspaceProperties = {
  /**
   * The AMP Workspace alert manager definition data
   */
  AlertManagerDefinition?: string;
  /**
   * AMP Workspace alias.
   * @minLength `0`
   * @maxLength `100`
   */
  Alias?: string;
  /**
   * KMS Key ARN used to encrypt and decrypt AMP workspace data.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:kms:[-a-z0-9]+:[0-9]{12}:key/.+$`
   */
  KmsKeyArn?: string;
  /**
   * Logging configuration
   */
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::APS::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#aws-resource-aps-workspace-return-values}
 */
export type APSWorkspaceAttributes = {
  /**
   * Workspace arn.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * AMP Workspace prometheus endpoint
   */
  PrometheusEndpoint: string;
  /**
   * Required to identify a specific APS Workspace.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}$`
   */
  WorkspaceId: string;
};
/**
 * Type definition for `AWS::APS::Workspace.LoggingConfiguration`.
 * Logging configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * CloudWatch log group ARN
   * @minLength `0`
   * @maxLength `512`
   */
  LogGroupArn?: string;
};
/**
 * Type definition for `AWS::APS::Workspace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::APS::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html}
 */
export class APSWorkspace extends $Resource<
  "AWS::APS::Workspace",
  APSWorkspaceProperties,
  APSWorkspaceAttributes
> {
  public static readonly Type = "AWS::APS::Workspace";
  constructor(
    logicalId: string,
    properties: APSWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSWorkspace.Type, properties, options);
  }
}
