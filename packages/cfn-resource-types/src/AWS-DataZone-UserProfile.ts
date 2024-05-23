import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::UserProfile`.
 * A user profile represents Amazon DataZone users. Amazon DataZone supports both IAM roles and SSO identities to interact with the Amazon DataZone Management Console and the data portal for different purposes. Domain administrators use IAM roles to perform the initial administrative domain-related work in the Amazon DataZone Management Console, including creating new Amazon DataZone domains, configuring metadata form types, and implementing policies. Data workers use their SSO corporate identities via Identity Center to log into the Amazon DataZone Data Portal and access projects where they have memberships.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html}
 */
export type DataZoneUserProfileProperties = {
  /**
   * The identifier of the Amazon DataZone domain in which the user profile would be created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The status of the user profile.
   */
  Status?: UserProfileStatus;
  /**
   * The ID of the user.
   * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|^[a-zA-Z_0-9+=,.@-]+$|^arn:aws:iam::\d{12}:.+$)`
   */
  UserIdentifier: string;
  /**
   * The type of the user.
   */
  UserType?: UserType;
};
/**
 * Attribute type definition for `AWS::DataZone::UserProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#aws-resource-datazone-userprofile-return-values}
 */
export type DataZoneUserProfileAttributes = {
  Details: UserProfileDetails;
  /**
   * The identifier of the Amazon DataZone domain in which the user profile is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the Amazon DataZone user profile.
   */
  Id: string;
  /**
   * The type of the user profile.
   */
  Type: UserProfileType;
};
/**
 * Type definition for `AWS::DataZone::UserProfile.IamUserProfileDetails`.
 * The details of the IAM User Profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-iamuserprofiledetails.html}
 */
export type IamUserProfileDetails = {
  /**
   * The ARN of the IAM User Profile.
   */
  Arn?: string;
};
/**
 * Type definition for `AWS::DataZone::UserProfile.SsoUserProfileDetails`.
 * The details of the SSO User Profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-ssouserprofiledetails.html}
 */
export type SsoUserProfileDetails = {
  /**
   * The First Name of the IAM User Profile.
   */
  FirstName?: string;
  /**
   * The Last Name of the IAM User Profile.
   */
  LastName?: string;
  /**
   * The username of the SSO User Profile.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[a-zA-Z_0-9+=,.@-]+$`
   */
  Username?: string;
};
/**
 * Type definition for `AWS::DataZone::UserProfile.UserProfileDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofiledetails.html}
 */
export type UserProfileDetails =
  | {
      /**
       * The details of the IAM User Profile.
       */
      Iam: IamUserProfileDetails;
    }
  | {
      /**
       * The details of the SSO User Profile.
       */
      Sso: SsoUserProfileDetails;
    };
/**
 * Type definition for `AWS::DataZone::UserProfile.UserProfileStatus`.
 * The status of the user profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofilestatus.html}
 */
export type UserProfileStatus =
  | "ASSIGNED"
  | "NOT_ASSIGNED"
  | "ACTIVATED"
  | "DEACTIVATED";
/**
 * Type definition for `AWS::DataZone::UserProfile.UserProfileType`.
 * The type of the user profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-userprofiletype.html}
 */
export type UserProfileType = "IAM" | "SSO";
/**
 * Type definition for `AWS::DataZone::UserProfile.UserType`.
 * The type of the user.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-userprofile-usertype.html}
 */
export type UserType = "IAM_USER" | "IAM_ROLE" | "SSO_USER";
/**
 * Resource type definition for `AWS::DataZone::UserProfile`.
 * A user profile represents Amazon DataZone users. Amazon DataZone supports both IAM roles and SSO identities to interact with the Amazon DataZone Management Console and the data portal for different purposes. Domain administrators use IAM roles to perform the initial administrative domain-related work in the Amazon DataZone Management Console, including creating new Amazon DataZone domains, configuring metadata form types, and implementing policies. Data workers use their SSO corporate identities via Identity Center to log into the Amazon DataZone Data Portal and access projects where they have memberships.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html}
 */
export class DataZoneUserProfile extends $Resource<
  "AWS::DataZone::UserProfile",
  DataZoneUserProfileProperties,
  DataZoneUserProfileAttributes
> {
  public static readonly Type = "AWS::DataZone::UserProfile";
  constructor(
    logicalId: string,
    properties: DataZoneUserProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneUserProfile.Type, properties, options);
  }
}
