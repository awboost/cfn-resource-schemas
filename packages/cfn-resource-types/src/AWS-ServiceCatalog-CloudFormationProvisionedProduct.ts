import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html}
 */
export type ServiceCatalogCloudFormationProvisionedProductProperties = {
  AcceptLanguage?: "en" | "jp" | "zh";
  /**
   * @maxLength `5`
   */
  NotificationArns?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  PathId?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  PathName?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ProductId?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  ProductName?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  ProvisionedProductName?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ProvisioningArtifactId?: string;
  ProvisioningArtifactName?: string;
  ProvisioningParameters?: ProvisioningParameter[];
  ProvisioningPreferences?: ProvisioningPreferences;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ServiceCatalog::CloudFormationProvisionedProduct`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html}
 */
export type ServiceCatalogCloudFormationProvisionedProductAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  CloudformationStackArn: string;
  /**
   * List of key-value pair outputs.
   */
  Outputs: Record<string, string>;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ProvisionedProductId: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  RecordId: string;
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningparameter.html}
 */
export type ProvisioningParameter = {
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
 * Type definition for `AWS::ServiceCatalog::CloudFormationProvisionedProduct.ProvisioningPreferences`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-provisioningpreferences.html}
 */
export type ProvisioningPreferences = {
  StackSetAccounts?: string[];
  /**
   * @min `0`
   */
  StackSetFailureToleranceCount?: number;
  /**
   * @min `0`
   * @max `100`
   */
  StackSetFailureTolerancePercentage?: number;
  /**
   * @min `1`
   */
  StackSetMaxConcurrencyCount?: number;
  /**
   * @min `1`
   * @max `100`
   */
  StackSetMaxConcurrencyPercentage?: number;
  StackSetOperationType?: "CREATE" | "UPDATE" | "DELETE";
  StackSetRegions?: string[];
};
/**
 * Type definition for `AWS::ServiceCatalog::CloudFormationProvisionedProduct.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-cloudformationprovisionedproduct-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource Schema for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-cloudformationprovisionedproduct.html}
 */
export class ServiceCatalogCloudFormationProvisionedProduct extends $Resource<
  "AWS::ServiceCatalog::CloudFormationProvisionedProduct",
  ServiceCatalogCloudFormationProvisionedProductProperties,
  ServiceCatalogCloudFormationProvisionedProductAttributes
> {
  public static readonly Type =
    "AWS::ServiceCatalog::CloudFormationProvisionedProduct";
  constructor(
    logicalId: string,
    properties: ServiceCatalogCloudFormationProvisionedProductProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ServiceCatalogCloudFormationProvisionedProduct.Type,
      properties,
      options,
    );
  }
}
