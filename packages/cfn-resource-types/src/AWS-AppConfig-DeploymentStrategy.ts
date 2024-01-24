import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentStrategyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigDeploymentStrategy.Type, properties, options);
  }
}
