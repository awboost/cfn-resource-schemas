import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html}
 */
export type ServiceCatalogServiceActionAssociationProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\Z`
   */
  ProductId: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\Z`
   */
  ProvisioningArtifactId: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\Z`
   */
  ServiceActionId: string;
};
/**
 * Resource Schema for AWS::ServiceCatalog::ServiceActionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceactionassociation.html}
 */
export class ServiceCatalogServiceActionAssociation extends $Resource<
  "AWS::ServiceCatalog::ServiceActionAssociation",
  ServiceCatalogServiceActionAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ServiceCatalog::ServiceActionAssociation";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ServiceCatalogServiceActionAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogServiceActionAssociation.Type,
      properties,
      ServiceCatalogServiceActionAssociation.AttributeNames,
      options,
    );
  }
}
