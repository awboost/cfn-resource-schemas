import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppConfig::HostedConfigurationVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html}
 */
export type AppConfigHostedConfigurationVersionProperties = {
  ApplicationId: string;
  ConfigurationProfileId: string;
  Content: string;
  ContentType: string;
  Description?: string;
  LatestVersionNumber?: number;
  VersionLabel?: string;
};
/**
 * Attribute type definition for `AWS::AppConfig::HostedConfigurationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#aws-resource-appconfig-hostedconfigurationversion-return-values}
 */
export type AppConfigHostedConfigurationVersionAttributes = {
  Id: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppConfigHostedConfigurationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppConfigHostedConfigurationVersion.Type,
      properties,
      AppConfigHostedConfigurationVersion.AttributeNames,
      options,
    );
  }
}
