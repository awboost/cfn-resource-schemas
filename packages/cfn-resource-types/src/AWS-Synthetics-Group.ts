import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Synthetics::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html}
 */
export type SyntheticsGroupProperties = {
  /**
   * Name of the group.
   * @pattern `^[0-9a-z_\-]{1,64}$`
   */
  Name: string;
  /**
   * @maxLength `10`
   */
  ResourceArns?: string[];
  /**
   * @minLength `0`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Synthetics::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html#aws-resource-synthetics-group-return-values}
 */
export type SyntheticsGroupAttributes = {
  /**
   * Id of the group.
   */
  Id: string;
};
/**
 * Type definition for `AWS::Synthetics::Group.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-group-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)([a-zA-Z\d\s_.:/=+\-@]+)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([a-zA-Z\d\s_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Synthetics::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html}
 */
export class SyntheticsGroup extends $Resource<
  "AWS::Synthetics::Group",
  SyntheticsGroupProperties,
  SyntheticsGroupAttributes
> {
  public static readonly Type = "AWS::Synthetics::Group";
  constructor(
    logicalId: string,
    properties: SyntheticsGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SyntheticsGroup.Type, properties, options);
  }
}
