import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export type ServiceCatalogTagOptionAssociationProperties = {
  ResourceId: string;
  TagOptionId: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::TagOptionAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#aws-resource-servicecatalog-tagoptionassociation-return-values}
 */
export type ServiceCatalogTagOptionAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export class ServiceCatalogTagOptionAssociation extends $Resource<
  "AWS::ServiceCatalog::TagOptionAssociation",
  ServiceCatalogTagOptionAssociationProperties,
  ServiceCatalogTagOptionAssociationAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::TagOptionAssociation";
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogTagOptionAssociation.Type,
      properties,
      options,
    );
  }
}
