import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: IAMUserToGroupAdditionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMUserToGroupAddition.Type,
      properties,
      IAMUserToGroupAddition.AttributeNames,
      options,
    );
  }
}
