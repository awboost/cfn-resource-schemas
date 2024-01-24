import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: ServiceCatalogServiceActionAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogServiceActionAssociation.Type,
      properties,
      options,
    );
  }
}
