import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudFormation::WaitCondition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html}
 */
export type CloudFormationWaitConditionProperties = {
  Count?: number;
  Handle?: string;
  Timeout?: string;
};
/**
 * Attribute type definition for `AWS::CloudFormation::WaitCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html#aws-resource-cloudformation-waitcondition-return-values}
 */
export type CloudFormationWaitConditionAttributes = {
  Data: Record<string, any>;
  Id: string;
};
/**
 * Resource Type definition for AWS::CloudFormation::WaitCondition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitcondition.html}
 */
export class CloudFormationWaitCondition extends $Resource<
  "AWS::CloudFormation::WaitCondition",
  CloudFormationWaitConditionProperties,
  CloudFormationWaitConditionAttributes
> {
  public static readonly Type = "AWS::CloudFormation::WaitCondition";
  public static readonly AttributeNames = ["Data" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationWaitCondition.Type,
      properties,
      CloudFormationWaitCondition.AttributeNames,
      options,
    );
  }
}
