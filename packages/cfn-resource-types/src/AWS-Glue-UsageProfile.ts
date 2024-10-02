import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Glue::UsageProfile`.
 * This creates a Resource of UsageProfile type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html}
 */
export type GlueUsageProfileProperties = {
  /**
   * UsageProfile configuration for supported service ex: (Jobs, Sessions).
   */
  Configuration?: ProfileConfiguration;
  /**
   * The description of the UsageProfile.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `[a-zA-Z0-9\-\:\_]{1,64}`
   */
  Description?: string;
  /**
   * The name of the UsageProfile.
   * @minLength `5`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The tags to be applied to this UsageProfiles.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Glue::UsageProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#aws-resource-glue-usageprofile-return-values}
 */
export type GlueUsageProfileAttributes = {
  /**
   * Creation time.
   * @minLength `1`
   * @maxLength `128`
   */
  CreatedOn: string;
};
/**
 * Type definition for `AWS::Glue::UsageProfile.ConfigurationObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-configurationobject.html}
 */
export type ConfigurationObject = {
  AllowedValues?: string[];
  DefaultValue?: string;
  MaxValue?: string;
  MinValue?: string;
};
/**
 * Type definition for `AWS::Glue::UsageProfile.ProfileConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-profileconfiguration.html}
 */
export type ProfileConfiguration = {
  JobConfiguration?: Record<string, ConfigurationObject>;
  SessionConfiguration?: Record<string, ConfigurationObject>;
};
/**
 * Type definition for `AWS::Glue::UsageProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-usageprofile-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Glue::UsageProfile`.
 * This creates a Resource of UsageProfile type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html}
 */
export class GlueUsageProfile extends $Resource<
  "AWS::Glue::UsageProfile",
  GlueUsageProfileProperties,
  GlueUsageProfileAttributes
> {
  public static readonly Type = "AWS::Glue::UsageProfile";
  constructor(
    logicalId: string,
    properties: GlueUsageProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueUsageProfile.Type, properties, options);
  }
}
