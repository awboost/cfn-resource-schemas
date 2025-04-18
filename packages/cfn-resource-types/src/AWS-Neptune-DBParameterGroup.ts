import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::Neptune::DBParameterGroup creates a new DB parameter group. This type can be declared in a template and referenced in the DBParameterGroupName parameter of AWS::Neptune::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export type NeptuneDBParameterGroupProperties = {
  /**
   * Provides the customer-specified description for this DB parameter group.
   */
  Description: string;
  /**
   * Must be `neptune1` for engine versions prior to 1.2.0.0, or `neptune1.2` for engine version `1.2.0.0` and higher.
   */
  Family: string;
  /**
   * Provides the name of the DB parameter group.
   */
  Name?: string;
  /**
     * The parameters to set for this DB parameter group.
    
    The parameters are expressed as a JSON object consisting of key-value pairs.
    
    Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), it triggers AWS CloudFormation to reboot the associated DB instance without failover.
     */
  Parameters: Record<string, any>;
  /**
   * An optional array of key-value pairs to apply to this DB parameter group.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Neptune::DBParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbparametergroup-tag.html}
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
 * AWS::Neptune::DBParameterGroup creates a new DB parameter group. This type can be declared in a template and referenced in the DBParameterGroupName parameter of AWS::Neptune::DBInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export class NeptuneDBParameterGroup extends $Resource<
  "AWS::Neptune::DBParameterGroup",
  NeptuneDBParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBParameterGroup";
  constructor(
    logicalId: string,
    properties: NeptuneDBParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneDBParameterGroup.Type, properties, options);
  }
}
