import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Neptune::DBInstance resource creates an Amazon Neptune DB instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html}
 */
export type NeptuneDBInstanceProperties = {
  /**
   * Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.
   */
  AllowMajorVersionUpgrade?: boolean;
  /**
     * Indicates that minor version patches are applied automatically.
    
    When updating this property, some interruptions may occur.
     */
  AutoMinorVersionUpgrade?: boolean;
  /**
   * Specifies the name of the Availability Zone the DB instance is located in.
   */
  AvailabilityZone?: string;
  /**
   * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
   */
  DBClusterIdentifier?: string;
  /**
     * Contains the name of the compute and memory capacity class of the DB instance.
    
    If you update this property, some interruptions may occur.
     */
  DBInstanceClass: string;
  /**
   * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
   */
  DBInstanceIdentifier?: string;
  /**
   * The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template. If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
   */
  DBParameterGroupName?: string;
  /**
     * This parameter is not supported.
    
    `AWS::Neptune::DBInstance` does not support restoring from snapshots.
    
    `AWS::Neptune::DBCluster` does support restoring from snapshots.
    
    
     */
  DBSnapshotIdentifier?: string;
  /**
   * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).
   */
  DBSubnetGroupName?: string;
  /**
   * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   */
  PreferredMaintenanceWindow?: string;
  /**
   * Indicates that public accessibility is enabled. This should be enabled in combination with IAM Auth enabled on the DBCluster
   */
  PubliclyAccessible?: boolean;
  /**
   * An arbitrary set of tags (key-value pairs) for this DB instance.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Neptune::DBInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#aws-resource-neptune-dbinstance-return-values}
 */
export type NeptuneDBInstanceAttributes = {
  /**
   * The connection endpoint for the database. For example: `mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`.
   */
  Endpoint: string;
  /**
   * The port number on which the database accepts connections. For example: `8182`.
   */
  Port: string;
};
/**
 * Type definition for `AWS::Neptune::DBInstance.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbinstance-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * The AWS::Neptune::DBInstance resource creates an Amazon Neptune DB instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html}
 */
export class NeptuneDBInstance extends $Resource<
  "AWS::Neptune::DBInstance",
  NeptuneDBInstanceProperties,
  NeptuneDBInstanceAttributes
> {
  public static readonly Type = "AWS::Neptune::DBInstance";
  constructor(
    logicalId: string,
    properties: NeptuneDBInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneDBInstance.Type, properties, options);
  }
}
