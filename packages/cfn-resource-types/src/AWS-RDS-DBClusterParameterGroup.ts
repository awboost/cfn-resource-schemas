import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon RDS DB cluster parameter group. For more information, see Managing an Amazon Aurora DB Cluster in the Amazon Aurora User Guide.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html}
 */
export type RDSDBClusterParameterGroupProperties = {
  /**
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
   */
  DBClusterParameterGroupName?: string;
  /**
   * A friendly description for this DB cluster parameter group.
   */
  Description: string;
  /**
   * The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family.
   */
  Family: string;
  /**
   * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
   */
  Parameters: Record<string, any>;
  /**
   * The list of tags for the cluster parameter group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBClusterParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbclusterparametergroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::RDS::DBClusterParameterGroup resource creates a new Amazon RDS DB cluster parameter group. For more information, see Managing an Amazon Aurora DB Cluster in the Amazon Aurora User Guide.
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
