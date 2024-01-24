import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::Deployment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html}
 */
export type AppConfigDeploymentProperties = {
  ApplicationId: string;
  ConfigurationProfileId: string;
  ConfigurationVersion: string;
  DeploymentStrategyId: string;
  Description?: string;
  EnvironmentId: string;
  KmsKeyIdentifier?: string;
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::AppConfig::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#aws-resource-appconfig-deployment-return-values}
 */
export type AppConfigDeploymentAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AppConfig::Deployment.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::AppConfig::Deployment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html}
 */
export class AppConfigDeployment extends $Resource<
  "AWS::AppConfig::Deployment",
  AppConfigDeploymentProperties,
  AppConfigDeploymentAttributes
> {
  public static readonly Type = "AWS::AppConfig::Deployment";
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigDeployment.Type, properties, options);
  }
}
