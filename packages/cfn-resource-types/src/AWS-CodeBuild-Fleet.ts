import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeBuild::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html}
 */
export type CodeBuildFleetProperties = {
  /**
   * @min `1`
   */
  BaseCapacity?: number;
  ComputeConfiguration?: ComputeConfiguration;
  ComputeType?:
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | "BUILD_GENERAL1_XLARGE"
    | "BUILD_GENERAL1_2XLARGE"
    | "ATTRIBUTE_BASED_COMPUTE";
  EnvironmentType?:
    | "WINDOWS_SERVER_2019_CONTAINER"
    | "WINDOWS_SERVER_2022_CONTAINER"
    | "LINUX_CONTAINER"
    | "LINUX_GPU_CONTAINER"
    | "ARM_CONTAINER"
    | "MAC_ARM"
    | "LINUX_EC2"
    | "ARM_EC2"
    | "WINDOWS_EC2";
  FleetProxyConfiguration?: ProxyConfiguration;
  /**
   * @pattern `^(?:arn:)[a-zA-Z+-=,._:/@]+$`
   */
  FleetServiceRole?: string;
  FleetVpcConfig?: VpcConfig;
  /**
   * @pattern `^((aws/codebuild/[A-Za-z-]+:[0-9]+(-[0-9._]+)?)|ami-[a-z0-9]{1,1020})$`
   */
  ImageId?: string;
  /**
   * @minLength `2`
   * @maxLength `128`
   */
  Name?: string;
  OverflowBehavior?: "QUEUE" | "ON_DEMAND";
  ScalingConfiguration?: ScalingConfigurationInput;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeBuild::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#aws-resource-codebuild-fleet-return-values}
 */
export type CodeBuildFleetAttributes = {
  /**
   * @minLength `1`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.ComputeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-computeconfiguration.html}
 */
export type ComputeConfiguration = {
  disk?: number;
  machineType?: "GENERAL" | "NVME";
  memory?: number;
  vCpu?: number;
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.FleetProxyRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-fleetproxyrule.html}
 */
export type FleetProxyRule = {
  Effect?: "ALLOW" | "DENY";
  Entities?: string[];
  Type?: "DOMAIN" | "IP";
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.ProxyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-proxyconfiguration.html}
 */
export type ProxyConfiguration = {
  DefaultBehavior?: "ALLOW_ALL" | "DENY_ALL";
  OrderedProxyRules?: FleetProxyRule[];
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.ScalingConfigurationInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-scalingconfigurationinput.html}
 */
export type ScalingConfigurationInput = {
  /**
   * @min `1`
   */
  MaxCapacity?: number;
  ScalingType?: "TARGET_TRACKING_SCALING";
  TargetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[];
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[a-zA-Z+-=._:/]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.TargetTrackingScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-targettrackingscalingconfiguration.html}
 */
export type TargetTrackingScalingConfiguration = {
  MetricType?: "FLEET_UTILIZATION_RATE";
  TargetValue?: number;
};
/**
 * Type definition for `AWS::CodeBuild::Fleet.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-fleet-vpcconfig.html}
 */
export type VpcConfig = {
  SecurityGroupIds?: string[];
  Subnets?: string[];
  VpcId?: string;
};
/**
 * Resource Type definition for AWS::CodeBuild::Fleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html}
 */
export class CodeBuildFleet extends $Resource<
  "AWS::CodeBuild::Fleet",
  CodeBuildFleetProperties,
  CodeBuildFleetAttributes
> {
  public static readonly Type = "AWS::CodeBuild::Fleet";
  constructor(
    logicalId: string,
    properties: CodeBuildFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildFleet.Type, properties, options);
  }
}
