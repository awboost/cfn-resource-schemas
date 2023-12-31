import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ServiceCatalogTagOptionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogTagOption.Type,
      properties,
      ServiceCatalogTagOption.AttributeNames,
      options,
    );
  }
}
