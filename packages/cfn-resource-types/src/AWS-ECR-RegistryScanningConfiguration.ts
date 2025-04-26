import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::RegistryScanningConfiguration controls the scanning configuration for an Amazon Elastic Container Registry (Amazon Private ECR). For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html}
 */
export type ECRRegistryScanningConfigurationProperties = {
  /**
   * The scanning rules associated with the registry. A registry scanning configuration may contain a maximum of 2 rules.
   * @minLength `0`
   * @maxLength `2`
   */
  Rules: ScanningRule[];
  /**
   * The type of scanning configured for the registry.
   */
  ScanType: ScanType;
};
/**
 * Attribute type definition for `AWS::ECR::RegistryScanningConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html#aws-resource-ecr-registryscanningconfiguration-return-values}
 */
export type ECRRegistryScanningConfigurationAttributes = {
  /**
   * The registry id.
   * @pattern `^[0-9]{12}$`
   */
  RegistryId: string;
};
/**
 * Type definition for `AWS::ECR::RegistryScanningConfiguration.FilterType`.
 * The type associated with the filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-filtertype.html}
 */
export type FilterType = "WILDCARD";
/**
 * Type definition for `AWS::ECR::RegistryScanningConfiguration.RepositoryFilter`.
 * The details of a scanning repository filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-repositoryfilter.html}
 */
export type RepositoryFilter = {
  /**
   * The filter to use when scanning.
   * @pattern `^[a-z0-9*](?:[._\-/a-z0-9*]?[a-z0-9*]+)*$`
   */
  Filter: string;
  /**
   * The type associated with the filter.
   */
  FilterType: FilterType;
};
/**
 * Type definition for `AWS::ECR::RegistryScanningConfiguration.ScanFrequency`.
 * The frequency that scans are performed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-scanfrequency.html}
 */
export type ScanFrequency = "SCAN_ON_PUSH" | "CONTINUOUS_SCAN";
/**
 * Type definition for `AWS::ECR::RegistryScanningConfiguration.ScanningRule`.
 * A rule representing the details of a scanning configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-scanningrule.html}
 */
export type ScanningRule = {
  /**
   * The repository filters associated with the scanning configuration for a private registry.
   * @minLength `0`
   * @maxLength `100`
   */
  RepositoryFilters: RepositoryFilter[];
  /**
   * The frequency that scans are performed.
   */
  ScanFrequency: ScanFrequency;
};
/**
 * Type definition for `AWS::ECR::RegistryScanningConfiguration.ScanType`.
 * The type of scanning configured for the registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-scantype.html}
 */
export type ScanType = "BASIC" | "ENHANCED";
/**
 * The AWS::ECR::RegistryScanningConfiguration controls the scanning configuration for an Amazon Elastic Container Registry (Amazon Private ECR). For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html}
 */
export class ECRRegistryScanningConfiguration extends $Resource<
  "AWS::ECR::RegistryScanningConfiguration",
  ECRRegistryScanningConfigurationProperties,
  ECRRegistryScanningConfigurationAttributes
> {
  public static readonly Type = "AWS::ECR::RegistryScanningConfiguration";
  constructor(
    logicalId: string,
    properties: ECRRegistryScanningConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ECRRegistryScanningConfiguration.Type,
      properties,
      options,
    );
  }
}
