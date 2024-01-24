import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFormationWaitCondition.Type, properties, options);
  }
}
