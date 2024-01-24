import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DevOpsGuru::ResourceCollection`.
 * This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html}
 */
export type DevOpsGuruResourceCollectionProperties = {
  /**
   * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
   */
  ResourceCollectionFilter: ResourceCollectionFilter;
};
/**
 * Attribute type definition for `AWS::DevOpsGuru::ResourceCollection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#aws-resource-devopsguru-resourcecollection-return-values}
 */
export type DevOpsGuruResourceCollectionAttributes = {
  /**
   * The type of ResourceCollection
   */
  ResourceCollectionType: "AWS_CLOUD_FORMATION" | "AWS_TAGS";
};
/**
 * Type definition for `AWS::DevOpsGuru::ResourceCollection.CloudFormationCollectionFilter`.
 * CloudFormation resource for DevOps Guru to monitor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.html}
 */
export type CloudFormationCollectionFilter = {
  /**
   * An array of CloudFormation stack names.
   * @minLength `1`
   * @maxLength `1000`
   */
  StackNames?: string[];
};
/**
 * Type definition for `AWS::DevOpsGuru::ResourceCollection.ResourceCollectionFilter`.
 * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-resourcecollectionfilter.html}
 */
export type ResourceCollectionFilter = {
  /**
   * CloudFormation resource for DevOps Guru to monitor
   */
  CloudFormation?: CloudFormationCollectionFilter;
  /**
   * Tagged resources for DevOps Guru to monitor
   */
  Tags?: TagCollection[];
};
/**
 * Type definition for `AWS::DevOpsGuru::ResourceCollection.TagCollection`.
 * Tagged resource for DevOps Guru to monitor
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-tagcollection.html}
 */
export type TagCollection = {
  /**
   * A Tag key for DevOps Guru app boundary.
   * @minLength `1`
   * @maxLength `128`
   */
  AppBoundaryKey?: string;
  /**
   * Tag values of DevOps Guru app boundary.
   * @minLength `1`
   * @maxLength `1000`
   */
  TagValues?: string[];
};
/**
 * Resource type definition for `AWS::DevOpsGuru::ResourceCollection`.
 * This resource schema represents the ResourceCollection resource in the Amazon DevOps Guru.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html}
 */
export class DevOpsGuruResourceCollection extends $Resource<
  "AWS::DevOpsGuru::ResourceCollection",
  DevOpsGuruResourceCollectionProperties,
  DevOpsGuruResourceCollectionAttributes
> {
  public static readonly Type = "AWS::DevOpsGuru::ResourceCollection";
  constructor(
    logicalId: string,
    properties: DevOpsGuruResourceCollectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevOpsGuruResourceCollection.Type, properties, options);
  }
}
