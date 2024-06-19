import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::RDS::DBParameterGroup`` resource creates a custom parameter group for an RDS database family.
 This type can be declared in a template and referenced in the ``DBParameterGroupName`` property of an ``AWS::RDS::DBInstance`` resource.
 For information about configuring parameters for Amazon RDS DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide*.
 For information about configuring parameters for Amazon Aurora DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
  Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html}
 */
export type RDSDBParameterGroupProperties = {
  /**
     * The name of the DB parameter group.
     Constraints:
      +  Must be 1 to 255 letters, numbers, or hyphens.
      +  First character must be a letter
      +  Can't end with a hyphen or contain two consecutive hyphens
      
     If you don't specify a value for ``DBParameterGroupName`` property, a name is automatically created for the DB parameter group.
      This value is stored as a lowercase string.
     * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
     */
  DBParameterGroupName?: string;
  /**
   * Provides the customer-specified description for this DB parameter group.
   */
  Description: string;
  /**
     * The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a DB engine and engine version compatible with that DB parameter group family.
      The DB parameter group family can't be changed when updating a DB parameter group.
      To list all of the available parameter group families, use the following command:
      ``aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"``
     The output contains duplicates.
     For more information, see ``CreateDBParameterGroup``.
     */
  Family: string;
  /**
     * An array of parameter names and values for the parameter update. At least one parameter name and value must be supplied. Subsequent arguments are optional.
     RDS for Db2 requires you to bring your own Db2 license. You must enter your IBM customer ID (``rds.ibm_customer_id``) and site number (``rds.ibm_site_id``) before starting a Db2 instance.
     For more information about DB parameters and DB parameter groups for Amazon RDS DB engines, see [Working with DB Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide*.
     For more information about DB cluster and DB instance parameters and parameter groups for Amazon Aurora DB engines, see [Working with DB Parameter Groups and DB Cluster Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
       AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used.
     */
  Parameters?: Record<string, any>;
  /**
     * An optional array of key-value pairs to apply to this DB parameter group.
       Currently, this is the only property that supports drift detection.
     * @maxLength `50`
     */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBParameterGroup.Tag`.
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup-tag.html}
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
 * The ``AWS::RDS::DBParameterGroup`` resource creates a custom parameter group for an RDS database family.
 This type can be declared in a template and referenced in the ``DBParameterGroupName`` property of an ``AWS::RDS::DBInstance`` resource.
 For information about configuring parameters for Amazon RDS DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide*.
 For information about configuring parameters for Amazon Aurora DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
  Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html}
 */
export class RDSDBParameterGroup extends $Resource<
  "AWS::RDS::DBParameterGroup",
  RDSDBParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBParameterGroup";
  constructor(
    logicalId: string,
    properties: RDSDBParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSDBParameterGroup.Type, properties, options);
  }
}
