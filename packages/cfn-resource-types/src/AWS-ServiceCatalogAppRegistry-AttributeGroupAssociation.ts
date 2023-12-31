import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroupassociation.html}
 */
export type ServiceCatalogAppRegistryAttributeGroupAssociationProperties = {
  /**
   * The name or the Id of the Application.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+|[a-z0-9]{12}`
   */
  Application: string;
  /**
   * The name or the Id of the AttributeGroup.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+|[a-z0-9]{12}`
   */
  AttributeGroup: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroupassociation.html}
 */
export type ServiceCatalogAppRegistryAttributeGroupAssociationAttributes = {
  /**
   * @pattern `arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:/applications/[a-z0-9]+`
   */
  ApplicationArn: string;
  /**
   * @pattern `arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:/attribute-groups/[a-z0-9]+`
   */
  AttributeGroupArn: string;
};
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroupassociation.html}
 */
export class ServiceCatalogAppRegistryAttributeGroupAssociation extends $Resource<
  "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation",
  ServiceCatalogAppRegistryAttributeGroupAssociationProperties,
  ServiceCatalogAppRegistryAttributeGroupAssociationAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation";
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryAttributeGroupAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAppRegistryAttributeGroupAssociation.Type,
      properties,
      options,
    );
  }
}
