import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-resourceassociation.html}
 */
export type ServiceCatalogAppRegistryResourceAssociationProperties = {
  /**
   * The name or the Id of the Application.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+|[a-z0-9]{12}`
   */
  Application: string;
  /**
   * The name or the Id of the Resource.
   * @pattern `\w+|arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:stack/[a-zA-Z][-A-Za-z0-9]{0,127}/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}`
   */
  Resource: string;
  /**
   * The type of the CFN Resource for now it's enum CFN_STACK.
   */
  ResourceType: "CFN_STACK";
};
/**
 * Attribute type definition for `AWS::ServiceCatalogAppRegistry::ResourceAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#aws-resource-servicecatalogappregistry-resourceassociation-return-values}
 */
export type ServiceCatalogAppRegistryResourceAssociationAttributes = {
  /**
   * @pattern `arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:/applications/[a-z0-9]+`
   */
  ApplicationArn: string;
  /**
   * @pattern `arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:stack/[a-zA-Z][-A-Za-z0-9]{0,127}/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}`
   */
  ResourceArn: string;
};
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-resourceassociation.html}
 */
export class ServiceCatalogAppRegistryResourceAssociation extends $Resource<
  "AWS::ServiceCatalogAppRegistry::ResourceAssociation",
  ServiceCatalogAppRegistryResourceAssociationProperties,
  ServiceCatalogAppRegistryResourceAssociationAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalogAppRegistry::ResourceAssociation";
  public static readonly AttributeNames = [
    "ApplicationArn" as const,
    "ResourceArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryResourceAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAppRegistryResourceAssociation.Type,
      properties,
      ServiceCatalogAppRegistryResourceAssociation.AttributeNames,
      options,
    );
  }
}
