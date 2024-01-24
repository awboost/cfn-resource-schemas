import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Neptune::DBClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export type NeptuneDBClusterParameterGroupProperties = {
  Description: string;
  Family: string;
  Name?: string;
  Parameters: Record<string, any>;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Neptune::DBClusterParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#aws-resource-neptune-dbclusterparametergroup-return-values}
 */
export type NeptuneDBClusterParameterGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Neptune::DBClusterParameterGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbclusterparametergroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Neptune::DBClusterParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html}
 */
export class NeptuneDBClusterParameterGroup extends $Resource<
  "AWS::Neptune::DBClusterParameterGroup",
  NeptuneDBClusterParameterGroupProperties,
  NeptuneDBClusterParameterGroupAttributes
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
