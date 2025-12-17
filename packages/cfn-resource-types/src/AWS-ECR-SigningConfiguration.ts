import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::SigningConfiguration resource creates or updates the signing configuration for an Amazon ECR registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-signingconfiguration.html}
 */
export type ECRSigningConfigurationProperties = {
  /**
   * Array of signing rules that define which repositories should be signed and with which signing profiles.
   * @minLength `0`
   * @maxLength `50`
   */
  Rules: Rule[];
};
/**
 * Attribute type definition for `AWS::ECR::SigningConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-signingconfiguration.html#aws-resource-ecr-signingconfiguration-return-values}
 */
export type ECRSigningConfigurationAttributes = {
  /**
   * 12-digit AWS account ID of the ECR registry.
   * @pattern `^[0-9]{12}$`
   */
  RegistryId: string;
};
/**
 * Type definition for `AWS::ECR::SigningConfiguration.FilterType`.
 * Type of repository filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-signingconfiguration-filtertype.html}
 */
export type FilterType = "WILDCARD_MATCH";
/**
 * Type definition for `AWS::ECR::SigningConfiguration.RepositoryFilter`.
 * An array of objects representing the details of a repository filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-signingconfiguration-repositoryfilter.html}
 */
export type RepositoryFilter = {
  /**
   * Repository name pattern (supports '*' wildcard).
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?:[a-z0-9*]+(?:[._-][a-z0-9*]+)/‍*)*[a-z0-9*]+(?:[._-][a-z0-9*]+)*$`
   */
  Filter: string;
  /**
   * Type of repository filter
   */
  FilterType: FilterType;
};
/**
 * Type definition for `AWS::ECR::SigningConfiguration.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-signingconfiguration-rule.html}
 */
export type Rule = {
  /**
   * Optional array of repository filters. If omitted, the rule matches all repositories. If provided, must contain at least one filter. Empty arrays are not allowed.
   * @minLength `1`
   * @maxLength `100`
   */
  RepositoryFilters?: RepositoryFilter[];
  /**
   * AWS Signer signing profile ARN to use for matched repositories.
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:signer:[a-z0-9-]+:[0-9]{12}:\/signing-profiles\/[a-zA-Z0-9_]{2,}$`
   */
  SigningProfileArn: string;
};
/**
 * The AWS::ECR::SigningConfiguration resource creates or updates the signing configuration for an Amazon ECR registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-signingconfiguration.html}
 */
export class ECRSigningConfiguration extends $Resource<
  "AWS::ECR::SigningConfiguration",
  ECRSigningConfigurationProperties,
  ECRSigningConfigurationAttributes
> {
  public static readonly Type = "AWS::ECR::SigningConfiguration";
  constructor(
    logicalId: string,
    properties: ECRSigningConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRSigningConfiguration.Type, properties, options);
  }
}
