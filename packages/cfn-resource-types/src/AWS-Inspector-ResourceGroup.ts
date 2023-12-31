import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Inspector::ResourceGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html}
 */
export type InspectorResourceGroupProperties = {
  ResourceGroupTags: Tag[];
};
/**
 * Attribute type definition for `AWS::Inspector::ResourceGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html#aws-resource-inspector-resourcegroup-return-values}
 */
export type InspectorResourceGroupAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::Inspector::ResourceGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspector-resourcegroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Inspector::ResourceGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html}
 */
export class InspectorResourceGroup extends $Resource<
  "AWS::Inspector::ResourceGroup",
  InspectorResourceGroupProperties,
  InspectorResourceGroupAttributes
> {
  public static readonly Type = "AWS::Inspector::ResourceGroup";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: InspectorResourceGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      InspectorResourceGroup.Type,
      properties,
      InspectorResourceGroup.AttributeNames,
      options,
    );
  }
}
