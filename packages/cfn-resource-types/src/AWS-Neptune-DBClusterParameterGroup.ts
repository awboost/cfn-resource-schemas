import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Neptune::DBClusterParameterGroup resource creates a new Amazon Neptune DB cluster parameter group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export type NeptuneDBClusterParameterGroupProperties = {
  /**
   * Provides the customer-specified description for this DB cluster parameter group.
   */
  Description: string;
  /**
   * Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher.
   */
  Family: string;
  /**
   * Provides the name of the DB cluster parameter group.
   */
  Name?: string;
  /**
   * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
   */
  Parameters: Record<string, any>;
  /**
   * The list of tags for the cluster parameter group.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Neptune::DBClusterParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbclusterparametergroup-tag.html}
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
 * The AWS::Neptune::DBClusterParameterGroup resource creates a new Amazon Neptune DB cluster parameter group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export class NeptuneDBClusterParameterGroup extends $Resource<
  "AWS::Neptune::DBClusterParameterGroup",
  NeptuneDBClusterParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Neptune::DBClusterParameterGroup";
  constructor(
    logicalId: string,
    properties: NeptuneDBClusterParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneDBClusterParameterGroup.Type, properties, options);
  }
}
