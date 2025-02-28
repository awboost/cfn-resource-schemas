import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ECR::ReplicationConfiguration`` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see [Using Service-Linked Roles for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the *Amazon Elastic Container Registry User Guide*.
  When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see ``AWS::ECR::RegistryPolicy``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html}
 */
export type ECRReplicationConfigurationProperties = {
  /**
   * The replication configuration for a registry.
   */
  ReplicationConfiguration: ReplicationConfiguration;
};
/**
 * Attribute type definition for `AWS::ECR::ReplicationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#aws-resource-ecr-replicationconfiguration-return-values}
 */
export type ECRReplicationConfigurationAttributes = {
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
 * The replication configuration for a registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html}
 */
export type ReplicationConfiguration = {
  /**
   * An array of objects representing the replication destinations and repository filters for a replication configuration.
   * @minLength `0`
   * @maxLength `10`
   */
  Rules: ReplicationRule[];
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.ReplicationDestination`.
 * An array of objects representing the destination for a replication rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html}
 */
export type ReplicationDestination = {
  /**
   * The Region to replicate to.
   * @pattern `[0-9a-z-]{2,25}`
   */
  Region: string;
  /**
   * The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
   * @pattern `^[0-9]{12}$`
   */
  RegistryId: string;
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.ReplicationRule`.
 * An array of objects representing the replication destinations and repository filters for a replication configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html}
 */
export type ReplicationRule = {
  /**
   * An array of objects representing the destination for a replication rule.
   * @minLength `1`
   * @maxLength `25`
   */
  Destinations: ReplicationDestination[];
  /**
   * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
   * @minLength `0`
   * @maxLength `100`
   */
  RepositoryFilters?: RepositoryFilter[];
};
/**
 * Type definition for `AWS::ECR::ReplicationConfiguration.RepositoryFilter`.
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html}
 */
export type RepositoryFilter = {
  /**
   * The repository filter details. When the ``PREFIX_MATCH`` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
   * @pattern `^(?:[a-z0-9]+(?:[._-][a-z0-9]*)/‍*)*[a-z0-9]*(?:[._-][a-z0-9]*)*$`
   */
  Filter: string;
  /**
   * The repository filter type. The only supported value is ``PREFIX_MATCH``, which is a repository name prefix specified with the ``filter`` parameter.
   */
  FilterType: FilterType;
};
/**
 * The ``AWS::ECR::ReplicationConfiguration`` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see [Using Service-Linked Roles for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the *Amazon Elastic Container Registry User Guide*.
  When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see ``AWS::ECR::RegistryPolicy``.
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
