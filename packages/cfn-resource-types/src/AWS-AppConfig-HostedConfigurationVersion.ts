import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
