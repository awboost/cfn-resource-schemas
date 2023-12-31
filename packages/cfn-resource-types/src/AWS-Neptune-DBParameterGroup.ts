import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Neptune::DBParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export type NeptuneDBParameterGroupProperties = {
  Description: string;
  Family: string;
  Name?: string;
  Parameters: Record<string, any>;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Neptune::DBParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#aws-resource-neptune-dbparametergroup-return-values}
 */
export type NeptuneDBParameterGroupAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Neptune::DBParameterGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbparametergroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Neptune::DBParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html}
 */
export class NeptuneDBParameterGroup extends $Resource<
  "AWS::Neptune::DBParameterGroup",
  NeptuneDBParameterGroupProperties,
  NeptuneDBParameterGroupAttributes
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
