import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Neptune::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html}
 */
export type NeptuneDBInstanceProperties = {
  AllowMajorVersionUpgrade?: boolean;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  DBClusterIdentifier?: string;
  DBInstanceClass: string;
  DBInstanceIdentifier?: string;
  DBParameterGroupName?: string;
  DBSnapshotIdentifier?: string;
  DBSubnetGroupName?: string;
  PreferredMaintenanceWindow?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Neptune::DBInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#aws-resource-neptune-dbinstance-return-values}
 */
export type NeptuneDBInstanceAttributes = {
  Endpoint: string;
  Id: string;
  Port: string;
};
/**
 * Type definition for `AWS::Neptune::DBInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbinstance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Neptune::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html}
 */
export class NeptuneDBInstance extends $Resource<
  "AWS::Neptune::DBInstance",
  NeptuneDBInstanceProperties,
  NeptuneDBInstanceAttributes
> {
  public static readonly Type = "AWS::Neptune::DBInstance";
  public static readonly AttributeNames = [
    "Endpoint" as const,
    "Id" as const,
    "Port" as const,
  ];
  constructor(
    logicalId: string,
    properties: NeptuneDBInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NeptuneDBInstance.Type,
      properties,
      NeptuneDBInstance.AttributeNames,
      options,
    );
  }
}
