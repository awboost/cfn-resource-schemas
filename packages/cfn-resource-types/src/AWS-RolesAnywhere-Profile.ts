import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * @minLength `0`
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
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: RolesAnywhereProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RolesAnywhereProfile.Type, properties, options);
  }
}