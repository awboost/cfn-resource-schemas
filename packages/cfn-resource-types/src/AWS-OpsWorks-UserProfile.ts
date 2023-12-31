import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: OpsWorksUserProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpsWorksUserProfile.Type,
      properties,
      OpsWorksUserProfile.AttributeNames,
      options,
    );
  }
}
