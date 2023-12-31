import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::UserToGroupAddition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html}
 */
export type IAMUserToGroupAdditionProperties = {
  GroupName: string;
  Users: string[];
};
/**
 * Attribute type definition for `AWS::IAM::UserToGroupAddition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html#aws-resource-iam-usertogroupaddition-return-values}
 */
export type IAMUserToGroupAdditionAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::IAM::UserToGroupAddition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html}
 */
export class IAMUserToGroupAddition extends $Resource<
  "AWS::IAM::UserToGroupAddition",
  IAMUserToGroupAdditionProperties,
  IAMUserToGroupAdditionAttributes
> {
  public static readonly Type = "AWS::IAM::UserToGroupAddition";
  constructor(
    logicalId: string,
    properties: IAMUserToGroupAdditionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMUserToGroupAddition.Type, properties, options);
  }
}
