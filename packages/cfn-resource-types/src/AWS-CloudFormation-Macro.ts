import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationMacroProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationMacro.Type,
      properties,
      CloudFormationMacro.AttributeNames,
      options,
    );
  }
}
