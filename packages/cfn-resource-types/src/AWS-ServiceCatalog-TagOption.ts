import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export type ServiceCatalogTagOptionProperties = {
  Active?: boolean;
  Key: string;
  Value: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::TagOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#aws-resource-servicecatalog-tagoption-return-values}
 */
export type ServiceCatalogTagOptionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export class ServiceCatalogTagOption extends $Resource<
  "AWS::ServiceCatalog::TagOption",
  ServiceCatalogTagOptionProperties,
  ServiceCatalogTagOptionAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::TagOption";
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ServiceCatalogTagOption.Type, properties, options);
  }
}
