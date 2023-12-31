import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorks::UserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html}
 */
export type OpsWorksUserProfileProperties = {
  AllowSelfManagement?: boolean;
  IamUserArn: string;
  SshPublicKey?: string;
  SshUsername?: string;
};
/**
 * Attribute type definition for `AWS::OpsWorks::UserProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#aws-resource-opsworks-userprofile-return-values}
 */
export type OpsWorksUserProfileAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::UserProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html}
 */
export class OpsWorksUserProfile extends $Resource<
  "AWS::OpsWorks::UserProfile",
  OpsWorksUserProfileProperties,
  OpsWorksUserProfileAttributes
> {
  public static readonly Type = "AWS::OpsWorks::UserProfile";
  constructor(
    logicalId: string,
    properties: OpsWorksUserProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpsWorksUserProfile.Type, properties, options);
  }
}
