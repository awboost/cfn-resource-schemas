import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Omics::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-configuration.html}
 */
export type OmicsConfigurationProperties = {
  /**
   * Optional description for the configuration.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  /**
   * User-friendly name for the configuration.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9][A-Za-z0-9\-\._]*$`
   */
  Name: string;
  /**
   * Required run-specific configurations.
   */
  RunConfigurations: RunConfigurations;
  /**
   * Tags for the configuration.
   */
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-configuration.html#aws-resource-omics-configuration-return-values}
 */
export type OmicsConfigurationAttributes = {
  /**
   * Unique resource identifier for the configuration.
   * @minLength `1`
   * @maxLength `190`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  /**
   * Configuration creation timestamp.
   */
  CreationTime: string;
  /**
   * Current configuration status.
   */
  Status:
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "DELETED"
    | "FAILED";
  /**
   * Unique identifier for the configuration.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Uuid: string;
};
/**
 * Type definition for `AWS::Omics::Configuration.RunConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-configuration-runconfigurations.html}
 */
export type RunConfigurations = {
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::Omics::Configuration.TagMap`.
 * A map of resource tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-configuration-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::Omics::Configuration.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-configuration-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * @maxLength `16`
   */
  SubnetIds?: string[];
};
/**
 * Resource schema for AWS::Omics::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-configuration.html}
 */
export class OmicsConfiguration extends $Resource<
  "AWS::Omics::Configuration",
  OmicsConfigurationProperties,
  OmicsConfigurationAttributes
> {
  public static readonly Type = "AWS::Omics::Configuration";
  constructor(
    logicalId: string,
    properties: OmicsConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsConfiguration.Type, properties, options);
  }
}
