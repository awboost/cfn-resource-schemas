import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroup.html}
 */
export type ServiceCatalogAppRegistryAttributeGroupProperties = {
  Attributes: Record<string, any>;
  /**
   * The description of the attribute group.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The name of the attribute group.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+`
   */
  Name: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::ServiceCatalogAppRegistry::AttributeGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroup.html}
 */
export type ServiceCatalogAppRegistryAttributeGroupAttributes = {
  /**
   * @pattern `arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:/attribute-groups/[a-z0-9]+`
   */
  Arn: string;
  /**
   * @pattern `[a-z0-9]{12}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::ServiceCatalogAppRegistry::AttributeGroup.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalogappregistry-attributegroup-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-attributegroup.html}
 */
export class ServiceCatalogAppRegistryAttributeGroup extends $Resource<
  "AWS::ServiceCatalogAppRegistry::AttributeGroup",
  ServiceCatalogAppRegistryAttributeGroupProperties,
  ServiceCatalogAppRegistryAttributeGroupAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::AttributeGroup";
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryAttributeGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAppRegistryAttributeGroup.Type,
      properties,
      options,
    );
  }
}
