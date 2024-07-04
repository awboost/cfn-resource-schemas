import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::RDS::DBClusterParameterGroup`` resource creates a new Amazon RDS DB cluster parameter group.
 For information about configuring parameters for Amazon Aurora DB clusters, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
  If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
 If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
 */
export type RDSDBClusterParameterGroupProperties = {
  /**
     * The name of the DB cluster parameter group.
     Constraints:
      +  Must not match the name of an existing DB cluster parameter group.
      
     If you don't specify a value for ``DBClusterParameterGroupName`` property, a name is automatically created for the DB cluster parameter group.
      This value is stored as a lowercase string.
     * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
     */
  DBClusterParameterGroupName?: string;
  /**
   * A friendly description for this DB cluster parameter group.
   */
  Description: string;
  /**
     * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family.
      The DB cluster parameter group family can't be changed when updating a DB cluster parameter group.
      To list all of the available parameter group families, use the following command:
      ``aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"``
     The output contains duplicates.
     For more information, see ``CreateDBClusterParameterGroup``.
     */
  Family: string;
  /**
   * Provides a list of parameters for the DB cluster parameter group.
   */
  Parameters: Record<string, any>;
  /**
   * An optional array of key-value pairs to apply to this DB cluster parameter group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBClusterParameterGroup.Tag`.
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbclusterparametergroup-tag.html}
 */
export type Tag = {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The ``AWS::RDS::DBClusterParameterGroup`` resource creates a new Amazon RDS DB cluster parameter group.
 For information about configuring parameters for Amazon Aurora DB clusters, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
  If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
 If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
 */
export class RDSDBClusterParameterGroup extends $Resource<
  "AWS::RDS::DBClusterParameterGroup",
  RDSDBClusterParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBClusterParameterGroup";
  constructor(
    logicalId: string,
    properties: RDSDBClusterParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBClusterParameterGroup.Type, properties, options);
  }
}
