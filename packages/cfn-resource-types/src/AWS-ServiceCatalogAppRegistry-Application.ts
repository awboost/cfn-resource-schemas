import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-application.html}
 */
export type ServiceCatalogAppRegistryApplicationProperties = {
  /**
   * The description of the application.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The name of the application.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+`
   */
  Name: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::ServiceCatalogAppRegistry::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-application.html}
 */
export type ServiceCatalogAppRegistryApplicationAttributes = {
  /**
   * The name of the application.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\w+`
   */
  ApplicationName: string;
  /**
   * The key of the AWS application tag, which is awsApplication. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value.
   * @maxLength `128`
   * @pattern `\w+`
   */
  ApplicationTagKey: string;
  /**
   * The value of the AWS application tag, which is the identifier of an associated resource. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value.
   * @maxLength `256`
   * @pattern `\[a-zA-Z0-9_-:/]+`
   */
  ApplicationTagValue: string;
  /**
   * @pattern `arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:/applications/[a-z0-9]+`
   */
  Arn: string;
  /**
   * @pattern `[a-z0-9]{26}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::ServiceCatalogAppRegistry::Application.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalogappregistry-application-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-appregistry-application.html}
 */
export class ServiceCatalogAppRegistryApplication extends $Resource<
  "AWS::ServiceCatalogAppRegistry::Application",
  ServiceCatalogAppRegistryApplicationProperties,
  ServiceCatalogAppRegistryApplicationAttributes
> {
  public static readonly Type = "AWS::ServiceCatalogAppRegistry::Application";
  constructor(
    logicalId: string,
    properties: ServiceCatalogAppRegistryApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogAppRegistryApplication.Type,
      properties,
      options,
    );
  }
}
