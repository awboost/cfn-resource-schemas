import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResourceGroups::Group`.
 * Schema for ResourceGroups::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html}
 */
export type ResourceGroupsGroupProperties = {
  Configuration?: ConfigurationItem[];
  /**
   * The description of the resource group
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The name of the resource group
   * @maxLength `128`
   */
  Name: string;
  ResourceQuery?: ResourceQuery;
  Resources?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ResourceGroups::Group`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#aws-resource-resourcegroups-group-return-values}
 */
export type ResourceGroupsGroupAttributes = {
  /**
   * The Resource Group ARN.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ResourceGroups::Group.ConfigurationItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationitem.html}
 */
export type ConfigurationItem = {
  Parameters?: ConfigurationParameter[];
  Type?: string;
};
/**
 * Type definition for `AWS::ResourceGroups::Group.ConfigurationParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-configurationparameter.html}
 */
export type ConfigurationParameter = {
  Name?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::ResourceGroups::Group.Query`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-query.html}
 */
export type Query = {
  ResourceTypeFilters?: string[];
  StackIdentifier?: string;
  TagFilters?: TagFilter[];
};
/**
 * Type definition for `AWS::ResourceGroups::Group.ResourceQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-resourcequery.html}
 */
export type ResourceQuery = {
  Query?: Query;
  Type?: "TAG_FILTERS_1_0" | "CLOUDFORMATION_STACK_1_0";
};
/**
 * Type definition for `AWS::ResourceGroups::Group.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tag.html}
 */
export type Tag = {
  /**
   * @pattern `^(?!aws:).+`
   */
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ResourceGroups::Group.TagFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourcegroups-group-tagfilter.html}
 */
export type TagFilter = {
  Key?: string;
  Values?: string[];
};
/**
 * Resource type definition for `AWS::ResourceGroups::Group`.
 * Schema for ResourceGroups::Group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html}
 */
export class ResourceGroupsGroup extends $Resource<
  "AWS::ResourceGroups::Group",
  ResourceGroupsGroupProperties,
  ResourceGroupsGroupAttributes
> {
  public static readonly Type = "AWS::ResourceGroups::Group";
  constructor(
    logicalId: string,
    properties: ResourceGroupsGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResourceGroupsGroup.Type, properties, options);
  }
}
