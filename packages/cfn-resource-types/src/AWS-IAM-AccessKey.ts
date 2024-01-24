import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IAM::AccessKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html}
 */
export type IAMAccessKeyProperties = {
  Serial?: number;
  Status?: string;
  UserName: string;
};
/**
 * Attribute type definition for `AWS::IAM::AccessKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html#aws-resource-iam-accesskey-return-values}
 */
export type IAMAccessKeyAttributes = {
  Id: string;
  SecretAccessKey: string;
};
/**
 * Resource Type definition for AWS::IAM::AccessKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html}
 */
export class IAMAccessKey extends $Resource<
  "AWS::IAM::AccessKey",
  IAMAccessKeyProperties,
  IAMAccessKeyAttributes
> {
  public static readonly Type = "AWS::IAM::AccessKey";
  constructor(
    logicalId: string,
    properties: IAMAccessKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IAMAccessKey.Type, properties, options);
  }
}
