import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::ServiceCatalog::ServiceAction
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html}
 */
export type ServiceCatalogServiceActionProperties = {
  AcceptLanguage?: "en" | "jp" | "zh";
  Definition: DefinitionParameter[];
  DefinitionType: "SSM_AUTOMATION";
  /**
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::ServiceAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html#aws-resource-servicecatalog-serviceaction-return-values}
 */
export type ServiceCatalogServiceActionAttributes = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Id: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::ServiceAction.DefinitionParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html}
 */
export type DefinitionParameter = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   */
  Key: string;
  /**
   * @maxLength `4096`
   */
  Value: string;
};
/**
 * Resource Schema for AWS::ServiceCatalog::ServiceAction
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html}
 */
export class ServiceCatalogServiceAction extends $Resource<
  "AWS::ServiceCatalog::ServiceAction",
  ServiceCatalogServiceActionProperties,
  ServiceCatalogServiceActionAttributes
> {
  public static readonly Type = "AWS::ServiceCatalog::ServiceAction";
  constructor(
    logicalId: string,
    properties: ServiceCatalogServiceActionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ServiceCatalogServiceAction.Type, properties, options);
  }
}
