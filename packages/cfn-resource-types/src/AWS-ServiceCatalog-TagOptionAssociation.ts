import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogTagOptionAssociation.Type,
      properties,
      ServiceCatalogTagOptionAssociation.AttributeNames,
      options,
    );
  }
}
