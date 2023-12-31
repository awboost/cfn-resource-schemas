import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: NeptuneDBParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NeptuneDBParameterGroup.Type,
      properties,
      NeptuneDBParameterGroup.AttributeNames,
      options,
    );
  }
}
