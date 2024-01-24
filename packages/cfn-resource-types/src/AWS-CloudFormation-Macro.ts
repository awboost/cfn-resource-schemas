import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFormation::Macro
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html}
 */
export type CloudFormationMacroProperties = {
  Description?: string;
  FunctionName: string;
  LogGroupName?: string;
  LogRoleARN?: string;
  Name: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::Macro`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#aws-resource-cloudformation-macro-return-values}
 */
export type CloudFormationMacroAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::CloudFormation::Macro
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html}
 */
export class CloudFormationMacro extends $Resource<
  "AWS::CloudFormation::Macro",
  CloudFormationMacroProperties,
  CloudFormationMacroAttributes
> {
  public static readonly Type = "AWS::CloudFormation::Macro";
  constructor(
    logicalId: string,
    properties: CloudFormationMacroProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationMacro.Type, properties, options);
  }
}
