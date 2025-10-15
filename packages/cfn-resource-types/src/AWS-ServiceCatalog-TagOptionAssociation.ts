import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export type ServiceCatalogTagOptionAssociationProperties = {
  /**
   * The CloudformationProduct or Portfolio identifier.
   */
  ResourceId?: string;
  /**
   * The TagOption identifier.
   */
  TagOptionId?: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html}
 */
export class ServiceCatalogTagOptionAssociation extends $Resource<
  "AWS::ServiceCatalog::TagOptionAssociation",
  ServiceCatalogTagOptionAssociationProperties,
  Record<string, never>
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
