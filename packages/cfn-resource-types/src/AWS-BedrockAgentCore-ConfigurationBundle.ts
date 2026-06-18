import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::ConfigurationBundle Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-configurationbundle.html}
 */
export type BedrockAgentCoreConfigurationBundleProperties = {
  /**
   * The branch name for version tracking.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_/-]{0,127}$`
   */
  BranchName?: string;
  /**
   * The name for the configuration bundle. Names must be unique within your account.
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]{0,99}$`
   */
  BundleName: string;
  /**
   * A commit message describing the version of the configuration bundle.
   * @minLength `1`
   * @maxLength `500`
   */
  CommitMessage?: string;
  /**
   * A map of component identifiers to their configurations.
   */
  Components: Record<string, ComponentConfiguration>;
  /**
   * The source that created a configuration bundle version.
   */
  CreatedBy?: VersionCreatedBySource;
  /**
   * The description for the configuration bundle.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^.+$`
   */
  Description?: string;
  /**
   * The ARN of the KMS key used to encrypt component configurations.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
  /**
   * Tags to assign to the configuration bundle.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::ConfigurationBundle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-configurationbundle.html#aws-resource-bedrockagentcore-configurationbundle-return-values}
 */
export type BedrockAgentCoreConfigurationBundleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   * @pattern `^arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}:configuration-bundle/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  BundleArn: string;
  /**
   * The unique identifier of the configuration bundle.
   * @pattern `^[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}$`
   */
  BundleId: string;
  /**
   * The timestamp when the configuration bundle was created.
   */
  CreatedAt: string;
  /**
   * The version lineage metadata that tracks parent versions and creation source.
   */
  LineageMetadata: {
    /**
     * The branch name for this version.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^[a-zA-Z][a-zA-Z0-9_/-]{0,127}$`
     */
    BranchName: string;
    /**
     * A commit message describing the changes in this version.
     * @minLength `1`
     * @maxLength `500`
     */
    CommitMessage: string;
    /**
     * The source that created a configuration bundle version.
     */
    CreatedBy: {
      /**
       * The Amazon Resource Name (ARN) of the source, if applicable.
       */
      Arn: string;
      /**
       * The name of the source (for example, user, optimization-job, or system).
       */
      Name: string;
    };
    /**
     * A list of parent version identifiers.
     */
    ParentVersionIds: string[];
  };
  /**
   * The timestamp when the configuration bundle was last updated.
   */
  UpdatedAt: string;
  /**
   * The version identifier of the configuration bundle.
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  VersionId: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ConfigurationBundle.ComponentConfiguration`.
 * The configuration for a component within a configuration bundle.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-configurationbundle-componentconfiguration.html}
 */
export type ComponentConfiguration = {
  /**
   * The configuration values as a flexible JSON document.
   */
  Configuration: Record<string, any>;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ConfigurationBundle.Tag`.
 * A tag consisting of a key-value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-configurationbundle-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ConfigurationBundle.VersionCreatedBySource`.
 * The source that created a configuration bundle version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-configurationbundle-versioncreatedbysource.html}
 */
export type VersionCreatedBySource = {
  /**
   * The Amazon Resource Name (ARN) of the source, if applicable.
   */
  Arn?: string;
  /**
   * The name of the source (for example, user, optimization-job, or system).
   */
  Name: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::ConfigurationBundle.VersionLineageMetadata`.
 * The version lineage metadata that tracks parent versions and creation source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-configurationbundle-versionlineagemetadata.html}
 */
export type VersionLineageMetadata = {
  /**
   * The branch name for this version.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_/-]{0,127}$`
   */
  BranchName?: string;
  /**
   * A commit message describing the changes in this version.
   * @minLength `1`
   * @maxLength `500`
   */
  CommitMessage?: string;
  /**
   * The source that created a configuration bundle version.
   */
  CreatedBy?: VersionCreatedBySource;
  /**
   * A list of parent version identifiers.
   */
  ParentVersionIds?: string[];
};
/**
 * Definition of AWS::BedrockAgentCore::ConfigurationBundle Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-configurationbundle.html}
 */
export class BedrockAgentCoreConfigurationBundle extends $Resource<
  "AWS::BedrockAgentCore::ConfigurationBundle",
  BedrockAgentCoreConfigurationBundleProperties,
  BedrockAgentCoreConfigurationBundleAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::ConfigurationBundle";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreConfigurationBundleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreConfigurationBundle.Type,
      properties,
      options,
    );
  }
}
