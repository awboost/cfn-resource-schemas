import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::HostedConfigurationVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html}
 */
export type AppConfigHostedConfigurationVersionProperties = {
  /**
   * The application ID.
   * @pattern `[a-z0-9]{4,7}`
   */
  ApplicationId: string;
  /**
   * The configuration profile ID.
   * @pattern `[a-z0-9]{4,7}`
   */
  ConfigurationProfileId: string;
  /**
   * The content of the configuration or the configuration data.
   */
  Content: string;
  /**
   * A standard MIME type describing the format of the configuration content.
   * @minLength `1`
   * @maxLength `255`
   */
  ContentType: string;
  /**
   * A description of the hosted configuration version.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
   */
  LatestVersionNumber?: number;
  /**
   * A user-defined label for an AWS AppConfig hosted configuration version.
   * @minLength `0`
   * @maxLength `64`
   * @pattern `^$|.*[^0-9].*`
   */
  VersionLabel?: string;
};
/**
 * Attribute type definition for `AWS::AppConfig::HostedConfigurationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#aws-resource-appconfig-hostedconfigurationversion-return-values}
 */
export type AppConfigHostedConfigurationVersionAttributes = {
  /**
   * Current version number of hosted configuration version.
   */
  VersionNumber: string;
};
/**
 * Resource Type definition for AWS::AppConfig::HostedConfigurationVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html}
 */
export class AppConfigHostedConfigurationVersion extends $Resource<
  "AWS::AppConfig::HostedConfigurationVersion",
  AppConfigHostedConfigurationVersionProperties,
  AppConfigHostedConfigurationVersionAttributes
> {
  public static readonly Type = "AWS::AppConfig::HostedConfigurationVersion";
  constructor(
    logicalId: string,
    properties: AppConfigHostedConfigurationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppConfigHostedConfigurationVersion.Type,
      properties,
      options,
    );
  }
}
