import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppConfigDeployment.Type,
      properties,
      AppConfigDeployment.AttributeNames,
      options,
    );
  }
}
