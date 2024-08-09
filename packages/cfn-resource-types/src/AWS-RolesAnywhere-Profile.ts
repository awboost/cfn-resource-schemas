import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RolesAnywhere::Profile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html}
 */
export type RolesAnywhereProfileProperties = {
  AcceptRoleSessionName?: boolean;
  AttributeMappings?: AttributeMapping[];
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
 * Type definition for `AWS::RolesAnywhere::Profile.AttributeMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-attributemapping.html}
 */
export type AttributeMapping = {
  CertificateField: CertificateField;
  MappingRules: MappingRule[];
};
/**
 * Type definition for `AWS::RolesAnywhere::Profile.CertificateField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-certificatefield.html}
 */
export type CertificateField = "x509Subject" | "x509Issuer" | "x509SAN";
/**
 * Type definition for `AWS::RolesAnywhere::Profile.MappingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-profile-mappingrule.html}
 */
export type MappingRule = {
  Specifier: string;
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
