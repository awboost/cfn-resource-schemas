import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::DMS::ReplicationInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html}
 */
export type DMSReplicationInstanceProperties = {
  AllocatedStorage?: number;
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ReplicationInstanceClass: string;
  ReplicationInstanceIdentifier?: string;
  ReplicationSubnetGroupIdentifier?: string;
  ResourceIdentifier?: string;
  Tags?: Tag[];
  VpcSecurityGroupIds?: string[];
};
/**
 * Attribute type definition for `AWS::DMS::ReplicationInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#aws-resource-dms-replicationinstance-return-values}
 */
export type DMSReplicationInstanceAttributes = {
  Id: string;
  ReplicationInstancePrivateIpAddresses: string;
  ReplicationInstancePublicIpAddresses: string;
};
/**
 * Type definition for `AWS::DMS::ReplicationInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-replicationinstance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::DMS::ReplicationInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html}
 */
export class DMSReplicationInstance extends $Resource<
  "AWS::DMS::ReplicationInstance",
  DMSReplicationInstanceProperties,
  DMSReplicationInstanceAttributes
> {
  public static readonly Type = "AWS::DMS::ReplicationInstance";
  public static readonly AttributeNames = [
    "Id" as const,
    "ReplicationInstancePrivateIpAddresses" as const,
    "ReplicationInstancePublicIpAddresses" as const,
  ];
  constructor(
    logicalId: string,
    properties: DMSReplicationInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DMSReplicationInstance.Type,
      properties,
      DMSReplicationInstance.AttributeNames,
      options,
    );
  }
}
