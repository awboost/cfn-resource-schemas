import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppConfig::DeploymentStrategy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html}
 */
export type AppConfigDeploymentStrategyProperties = {
  DeploymentDurationInMinutes: number;
  Description?: string;
  FinalBakeTimeInMinutes?: number;
  GrowthFactor: number;
  GrowthType?: string;
  Name: string;
  ReplicateTo: string;
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::AppConfig::DeploymentStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#aws-resource-appconfig-deploymentstrategy-return-values}
 */
export type AppConfigDeploymentStrategyAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AppConfig::DeploymentStrategy.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deploymentstrategy-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::AppConfig::DeploymentStrategy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html}
 */
export class AppConfigDeploymentStrategy extends $Resource<
  "AWS::AppConfig::DeploymentStrategy",
  AppConfigDeploymentStrategyProperties,
  AppConfigDeploymentStrategyAttributes
> {
  public static readonly Type = "AWS::AppConfig::DeploymentStrategy";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentStrategyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppConfigDeploymentStrategy.Type,
      properties,
      AppConfigDeploymentStrategy.AttributeNames,
      options,
    );
  }
}
