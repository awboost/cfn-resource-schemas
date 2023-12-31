import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [
    "Id" as const,
    "SecretAccessKey" as const,
  ];
  constructor(
    logicalId: string,
    properties: IAMAccessKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IAMAccessKey.Type,
      properties,
      IAMAccessKey.AttributeNames,
      options,
    );
  }
}
