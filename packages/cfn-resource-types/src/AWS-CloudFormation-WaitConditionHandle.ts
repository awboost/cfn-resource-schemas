import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CloudFormation::WaitConditionHandle
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-waitconditionhandle.html}
 */
export type CloudFormationWaitConditionHandleProperties = Record<string, never>;
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
  constructor(
    logicalId: string,
    properties: CloudFormationWaitConditionHandleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CloudFormationWaitConditionHandle.Type,
      properties,
      options,
    );
  }
}
