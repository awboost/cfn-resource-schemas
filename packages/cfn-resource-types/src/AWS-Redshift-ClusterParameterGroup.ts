import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Redshift::ClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 */
export type RedshiftClusterParameterGroupProperties = {
  /**
   * A description of the parameter group.
   */
  Description: string;
  /**
   * The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.
   */
  ParameterGroupFamily: string;
  /**
   * The name of the cluster parameter group.
   * @maxLength `255`
   */
  ParameterGroupName?: string;
  /**
   * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
   */
  Parameters?: Parameter[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::Redshift::ClusterParameterGroup.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html}
 */
export type Parameter = {
  /**
   * The name of the parameter.
   */
  ParameterName: string;
  /**
   * The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.
   */
  ParameterValue: string;
};
/**
 * Type definition for `AWS::Redshift::ClusterParameterGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-tag.html}
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
  Value: string;
};
/**
 * Resource Type definition for AWS::Redshift::ClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html}
 */
export class RedshiftClusterParameterGroup extends $Resource<
  "AWS::Redshift::ClusterParameterGroup",
  RedshiftClusterParameterGroupProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Redshift::ClusterParameterGroup";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: RedshiftClusterParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftClusterParameterGroup.Type,
      properties,
      RedshiftClusterParameterGroup.AttributeNames,
      options,
    );
  }
}
