import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB ParameterGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html}
 */
export type MemoryDBParameterGroupProperties = {
  /**
   * A description of the parameter group.
   */
  Description?: string;
  /**
   * The name of the parameter group family that this parameter group is compatible with.
   */
  Family: string;
  /**
   * The name of the parameter group.
   */
  ParameterGroupName: string;
  /**
   * An map of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional.
   */
  Parameters?: Record<string, any>;
  /**
   * An array of key-value pairs to apply to this parameter group.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MemoryDB::ParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#aws-resource-memorydb-parametergroup-return-values}
 */
export type MemoryDBParameterGroupAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the parameter group.
   */
  ARN: string;
};
/**
 * Type definition for `AWS::MemoryDB::ParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-parametergroup-tag.html}
 */
export type Tag = {
  /**
   * The key for the tag. May not be null.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,128}$`
   */
  Key: string;
  /**
   * The tag's value. May be null.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,256}$`
   */
  Value: string;
};
/**
 * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB ParameterGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html}
 */
export class MemoryDBParameterGroup extends $Resource<
  "AWS::MemoryDB::ParameterGroup",
  MemoryDBParameterGroupProperties,
  MemoryDBParameterGroupAttributes
> {
  public static readonly Type = "AWS::MemoryDB::ParameterGroup";
  public static readonly AttributeNames = ["ARN" as const];
  constructor(
    logicalId: string,
    properties: MemoryDBParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MemoryDBParameterGroup.Type,
      properties,
      MemoryDBParameterGroup.AttributeNames,
      options,
    );
  }
}
