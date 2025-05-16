import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECR::RegistryScanningConfiguration`.
 * The scanning configuration for a private registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registryscanningconfiguration.html}
 */
export type ECRRegistryScanningConfigurationProperties = {
  /**
   * The scanning rules associated with the registry.
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
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
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
 * The scanning rules associated with the registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-registryscanningconfiguration-scanningrule.html}
 */
export type ScanningRule = {
  /**
   * The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.
   * @minLength `0`
   * @maxLength `100`
   */
  RepositoryFilters: RepositoryFilter[];
  /**
   * The frequency that scans are performed at for a private registry. When the ``ENHANCED`` scan type is specified, the supported scan frequencies are ``CONTINUOUS_SCAN`` and ``SCAN_ON_PUSH``. When the ``BASIC`` scan type is specified, the ``SCAN_ON_PUSH`` scan frequency is supported. If scan on push is not specified, then the ``MANUAL`` scan frequency is set by default.
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
 * Resource type definition for `AWS::ECR::RegistryScanningConfiguration`.
 * The scanning configuration for a private registry.
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
