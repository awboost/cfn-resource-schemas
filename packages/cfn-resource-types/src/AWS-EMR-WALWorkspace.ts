import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::EMR::WALWorkspace Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html}
 */
export type EMRWALWorkspaceProperties = {
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The name of the emrwal container
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  WALWorkspaceName?: string;
};
/**
 * Type definition for `AWS::EMR::WALWorkspace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-walworkspace-tag.html}
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
 * Resource schema for AWS::EMR::WALWorkspace Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html}
 */
export class EMRWALWorkspace extends $Resource<
  "AWS::EMR::WALWorkspace",
  EMRWALWorkspaceProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EMR::WALWorkspace";
  constructor(
    logicalId: string,
    properties: EMRWALWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRWALWorkspace.Type, properties, options);
  }
}
