import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::ResourceExplorer2::View Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html}
 */
export type ResourceExplorer2ViewProperties = {
  Filters?: SearchFilter;
  IncludedProperties?: IncludedProperty[];
  Scope?: string;
  Tags?: TagMap;
  /**
   * @pattern `^[a-zA-Z0-9\-]{1,64}$`
   */
  ViewName: string;
};
/**
 * Attribute type definition for `AWS::ResourceExplorer2::View`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#aws-resource-resourceexplorer2-view-return-values}
 */
export type ResourceExplorer2ViewAttributes = {
  ViewArn: string;
};
/**
 * Type definition for `AWS::ResourceExplorer2::View.IncludedProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-includedproperty.html}
 */
export type IncludedProperty = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   */
  Name: string;
};
/**
 * Type definition for `AWS::ResourceExplorer2::View.SearchFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-searchfilter.html}
 */
export type SearchFilter = {
  /**
   * @maxLength `2048`
   */
  FilterString: string;
};
/**
 * Type definition for `AWS::ResourceExplorer2::View.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resourceexplorer2-view-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::ResourceExplorer2::View Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html}
 */
export class ResourceExplorer2View extends $Resource<
  "AWS::ResourceExplorer2::View",
  ResourceExplorer2ViewProperties,
  ResourceExplorer2ViewAttributes
> {
  public static readonly Type = "AWS::ResourceExplorer2::View";
  public static readonly AttributeNames = ["ViewArn" as const];
  constructor(
    logicalId: string,
    properties: ResourceExplorer2ViewProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ResourceExplorer2View.Type,
      properties,
      ResourceExplorer2View.AttributeNames,
      options,
    );
  }
}
