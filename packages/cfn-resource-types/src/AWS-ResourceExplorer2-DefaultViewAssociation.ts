import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ResourceExplorer2::DefaultViewAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html}
 */
export type ResourceExplorer2DefaultViewAssociationProperties = {
  ViewArn: string;
};
/**
 * Attribute type definition for `AWS::ResourceExplorer2::DefaultViewAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html#aws-resource-resourceexplorer2-defaultviewassociation-return-values}
 */
export type ResourceExplorer2DefaultViewAssociationAttributes = {
  /**
   * The AWS principal that the default view is associated with, used as the unique identifier for this resource.
   * @pattern `^[0-9]{12}$`
   */
  AssociatedAwsPrincipal: string;
};
/**
 * Definition of AWS::ResourceExplorer2::DefaultViewAssociation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html}
 */
export class ResourceExplorer2DefaultViewAssociation extends $Resource<
  "AWS::ResourceExplorer2::DefaultViewAssociation",
  ResourceExplorer2DefaultViewAssociationProperties,
  ResourceExplorer2DefaultViewAssociationAttributes
> {
  public static readonly Type =
    "AWS::ResourceExplorer2::DefaultViewAssociation";
  constructor(
    logicalId: string,
    properties: ResourceExplorer2DefaultViewAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ResourceExplorer2DefaultViewAssociation.Type,
      properties,
      options,
    );
  }
}
