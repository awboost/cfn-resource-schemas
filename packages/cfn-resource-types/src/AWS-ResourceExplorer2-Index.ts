import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ResourceExplorer2::Index Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html}
 */
export type ResourceExplorer2IndexProperties = {
  Tags?: TagMap;
  Type: IndexType;
};
/**
 * Attribute type definition for `AWS::ResourceExplorer2::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html#aws-resource-resourceexplorer2-index-return-values}
 */
export type ResourceExplorer2IndexAttributes = {
  Arn: string;
  IndexState: IndexState;
};
/**
 * Type definition for `AWS::ResourceExplorer2::Index.IndexState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-index-indexstate.html}
 */
export type IndexState =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "DELETED"
  | "UPDATING";
/**
 * Type definition for `AWS::ResourceExplorer2::Index.IndexType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-index-indextype.html}
 */
export type IndexType = "LOCAL" | "AGGREGATOR";
/**
 * Type definition for `AWS::ResourceExplorer2::Index.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-index-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::ResourceExplorer2::Index Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-index.html}
 */
export class ResourceExplorer2Index extends $Resource<
  "AWS::ResourceExplorer2::Index",
  ResourceExplorer2IndexProperties,
  ResourceExplorer2IndexAttributes
> {
  public static readonly Type = "AWS::ResourceExplorer2::Index";
  constructor(
    logicalId: string,
    properties: ResourceExplorer2IndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResourceExplorer2Index.Type, properties, options);
  }
}
