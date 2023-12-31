import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::RDS::DBParameterGroup resource creates a custom parameter group for an RDS database family
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html}
 */
export type RDSDBParameterGroupProperties = {
  /**
   * Specifies the name of the DB parameter group
   * @pattern `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
   */
  DBParameterGroupName?: string;
  /**
   * Provides the customer-specified description for this DB parameter group.
   */
  Description: string;
  /**
   * The DB parameter group family name.
   */
  Family: string;
  /**
   * An array of parameter names and values for the parameter update.
   */
  Parameters?: Record<string, any>;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::RDS::DBParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup-tag.html}
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
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::RDS::DBParameterGroup resource creates a custom parameter group for an RDS database family
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html}
 */
export class RDSDBParameterGroup extends $Resource<
  "AWS::RDS::DBParameterGroup",
  RDSDBParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::RDS::DBParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RDSDBParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RDSDBParameterGroup.Type,
      properties,
      RDSDBParameterGroup.AttributeNames,
      options,
    );
  }
}
