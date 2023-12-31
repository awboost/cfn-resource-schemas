import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::RolesAnywhere::Profile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html}
 */
export type RolesAnywhereProfileProperties = {
  /**
   * @min `900`
   * @max `43200`
   */
  DurationSeconds?: number;
  Enabled?: boolean;
  ManagedPolicyArns?: string[];
  Name: string;
  RequireInstanceProperties?: boolean;
  RoleArns: string[];
  SessionPolicy?: string;
  /**
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RolesAnywhere::Profile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#aws-resource-rolesanywhere-profile-return-values}
 */
export type RolesAnywhereProfileAttributes = {
  ProfileArn: string;
  /**
   * @pattern `[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}`
   */
  ProfileId: string;
};
/**
 * Type definition for `AWS::RolesAnywhere::Profile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::RolesAnywhere::Profile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html}
 */
export class RolesAnywhereProfile extends $Resource<
  "AWS::RolesAnywhere::Profile",
  RolesAnywhereProfileProperties,
  RolesAnywhereProfileAttributes
> {
  public static readonly Type = "AWS::RolesAnywhere::Profile";
  public static readonly AttributeNames = [
    "ProfileArn" as const,
    "ProfileId" as const,
  ];
  constructor(
    logicalId: string,
    properties: RolesAnywhereProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RolesAnywhereProfile.Type,
      properties,
      RolesAnywhereProfile.AttributeNames,
      options,
    );
  }
}
