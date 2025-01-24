import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html}
 */
export type SSMIncidentsReplicationSetProperties = {
  /**
   * Configures the ReplicationSet deletion protection.
   */
  DeletionProtected?: boolean;
  /**
   * The ReplicationSet configuration.
   * @minLength `1`
   * @maxLength `3`
   */
  Regions: ReplicationRegion[];
  /**
   * The tags to apply to the replication set.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSMIncidents::ReplicationSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#aws-resource-ssmincidents-replicationset-return-values}
 */
export type SSMIncidentsReplicationSetAttributes = {
  /**
   * The ARN of the ReplicationSet.
   * @maxLength `1000`
   * @pattern `^arn:aws(-(cn|us-gov|iso(-b)?))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ReplicationSet.RegionConfiguration`.
 * The ReplicationSet regional configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-regionconfiguration.html}
 */
export type RegionConfiguration = {
  /**
   * The AWS Key Management Service key ID or Key Alias to use to encrypt your replication set.
   * @maxLength `2048`
   */
  SseKmsKeyId: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ReplicationSet.ReplicationRegion`.
 * The ReplicationSet regional configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-replicationregion.html}
 */
export type ReplicationRegion = {
  /**
   * The ReplicationSet regional configuration.
   */
  RegionConfiguration?: RegionConfiguration;
  /**
   * The AWS region name.
   * @maxLength `20`
   */
  RegionName?: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ReplicationSet.Tag`.
 * A key-value pair to tag a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-replicationset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::SSMIncidents::ReplicationSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html}
 */
export class SSMIncidentsReplicationSet extends $Resource<
  "AWS::SSMIncidents::ReplicationSet",
  SSMIncidentsReplicationSetProperties,
  SSMIncidentsReplicationSetAttributes
> {
  public static readonly Type = "AWS::SSMIncidents::ReplicationSet";
  constructor(
    logicalId: string,
    properties: SSMIncidentsReplicationSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMIncidentsReplicationSet.Type, properties, options);
  }
}
