import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::ReplicationConfiguration resource configures the replication destinations for an Amazon Elastic Container Registry (Amazon Private ECR). For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export type ECRReplicationConfigurationProperties = {
  /**
   * An object representing the replication configuration for a registry.
   */
  ReplicationConfiguration: ReplicationConfiguration;
};
/**
 * Attribute type definition for `AWS::ECR::ReplicationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#aws-resource-ecr-replicationconfiguration-return-values}
 */
export type ECRReplicationConfigurationAttributes = {
  /**
   * The RegistryId associated with the aws account.
   */
  RegistryId: string;
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.FilterType`.
 * Type of repository filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-filtertype.html}
 */
export type FilterType = "PREFIX_MATCH";
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.ReplicationConfiguration`.
 * An object representing the replication configuration for a registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html}
 */
export type ReplicationConfiguration = {
  /**
   * An array of objects representing the replication rules for a replication configuration. A replication configuration may contain a maximum of 10 rules.
   * @minLength `0`
   * @maxLength `10`
   */
  Rules: ReplicationRule[];
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.ReplicationDestination`.
 * An array of objects representing the details of a replication destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html}
 */
export type ReplicationDestination = {
  /**
   * A Region to replicate to.
   * @pattern `[0-9a-z-]{2,25}`
   */
  Region: string;
  /**
   * The account ID of the destination registry to replicate to.
   * @pattern `^[0-9]{12}$`
   */
  RegistryId: string;
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.ReplicationRule`.
 * An array of objects representing the details of a replication destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html}
 */
export type ReplicationRule = {
  /**
   * An array of objects representing the details of a replication destination.
   * @minLength `1`
   * @maxLength `25`
   */
  Destinations: ReplicationDestination[];
  /**
   * An array of objects representing the details of a repository filter.
   * @minLength `0`
   * @maxLength `100`
   */
  RepositoryFilters?: RepositoryFilter[];
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.RepositoryFilter`.
 * An array of objects representing the details of a repository filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html}
 */
export type RepositoryFilter = {
  /**
   * The repository filter to be applied for replication.
   * @pattern `^(?:[a-z0-9]+(?:[._-][a-z0-9]*)/‍*)*[a-z0-9]*(?:[._-][a-z0-9]*)*$`
   */
  Filter: string;
  /**
   * Type of repository filter
   */
  FilterType: FilterType;
};
/**
 * The AWS::ECR::ReplicationConfiguration resource configures the replication destinations for an Amazon Elastic Container Registry (Amazon Private ECR). For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/replication.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export class ECRReplicationConfiguration extends $Resource<
  "AWS::ECR::ReplicationConfiguration",
  ECRReplicationConfigurationProperties,
  ECRReplicationConfigurationAttributes
> {
  public static readonly Type = "AWS::ECR::ReplicationConfiguration";
  constructor(
    logicalId: string,
    properties: ECRReplicationConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRReplicationConfiguration.Type, properties, options);
  }
}
