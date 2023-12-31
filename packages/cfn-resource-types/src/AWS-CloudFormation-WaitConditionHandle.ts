import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::CloudFormation::WaitConditionHandle
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html}
 */
export type CloudFormationWaitConditionHandleProperties = {};
/**
 * Attribute type definition for `AWS::CloudFormation::WaitConditionHandle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html#aws-resource-cloudformation-waitconditionhandle-return-values}
 */
export type CloudFormationWaitConditionHandleAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::CloudFormation::WaitConditionHandle
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html}
 */
export class CloudFormationWaitConditionHandle extends $Resource<
  "AWS::CloudFormation::WaitConditionHandle",
  CloudFormationWaitConditionHandleProperties,
  CloudFormationWaitConditionHandleAttributes
> {
  public static readonly Type = "AWS::CloudFormation::WaitConditionHandle";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionHandleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationWaitConditionHandle.Type,
      properties,
      CloudFormationWaitConditionHandle.AttributeNames,
      options,
    );
  }
}
