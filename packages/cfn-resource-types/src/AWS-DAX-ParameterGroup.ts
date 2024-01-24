import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DAX::ParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html}
 */
export type DAXParameterGroupProperties = {
  Description?: string;
  ParameterGroupName?: string;
  ParameterNameValues?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::DAX::ParameterGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#aws-resource-dax-parametergroup-return-values}
 */
export type DAXParameterGroupAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::DAX::ParameterGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html}
 */
export class DAXParameterGroup extends $Resource<
  "AWS::DAX::ParameterGroup",
  DAXParameterGroupProperties,
  DAXParameterGroupAttributes
> {
  public static readonly Type = "AWS::DAX::ParameterGroup";
  constructor(
    logicalId: string,
    properties: DAXParameterGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DAXParameterGroup.Type, properties, options);
  }
}
