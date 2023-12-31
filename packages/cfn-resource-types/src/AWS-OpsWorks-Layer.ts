import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::OpsWorks::Layer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html}
 */
export type OpsWorksLayerProperties = {
  Attributes?: Record<string, string>;
  AutoAssignElasticIps: boolean;
  AutoAssignPublicIps: boolean;
  CustomInstanceProfileArn?: string;
  CustomJson?: Record<string, any>;
  CustomRecipes?: Recipes;
  CustomSecurityGroupIds?: string[];
  EnableAutoHealing: boolean;
  InstallUpdatesOnBoot?: boolean;
  LifecycleEventConfiguration?: LifecycleEventConfiguration;
  LoadBasedAutoScaling?: LoadBasedAutoScaling;
  Name: string;
  Packages?: string[];
  Shortname: string;
  StackId: string;
  Tags?: Tag[];
  Type: string;
  UseEbsOptimizedInstances?: boolean;
  VolumeConfigurations?: VolumeConfiguration[];
};
/**
 * Attribute type definition for `AWS::OpsWorks::Layer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html#aws-resource-opsworks-layer-return-values}
 */
export type OpsWorksLayerAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.AutoScalingThresholds`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-autoscalingthresholds.html}
 */
export type AutoScalingThresholds = {
  CpuThreshold?: number;
  IgnoreMetricsTime?: number;
  InstanceCount?: number;
  LoadThreshold?: number;
  MemoryThreshold?: number;
  ThresholdsWaitTime?: number;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.LifecycleEventConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-lifecycleeventconfiguration.html}
 */
export type LifecycleEventConfiguration = {
  ShutdownEventConfiguration?: ShutdownEventConfiguration;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.LoadBasedAutoScaling`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-loadbasedautoscaling.html}
 */
export type LoadBasedAutoScaling = {
  DownScaling?: AutoScalingThresholds;
  Enable?: boolean;
  UpScaling?: AutoScalingThresholds;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.Recipes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-recipes.html}
 */
export type Recipes = {
  Configure?: string[];
  Deploy?: string[];
  Setup?: string[];
  Shutdown?: string[];
  Undeploy?: string[];
};
/**
 * Type definition for `AWS::OpsWorks::Layer.ShutdownEventConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-shutdowneventconfiguration.html}
 */
export type ShutdownEventConfiguration = {
  DelayUntilElbConnectionsDrained?: boolean;
  ExecutionTimeout?: number;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::OpsWorks::Layer.VolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-layer-volumeconfiguration.html}
 */
export type VolumeConfiguration = {
  Encrypted?: boolean;
  Iops?: number;
  MountPoint?: string;
  NumberOfDisks?: number;
  RaidLevel?: number;
  Size?: number;
  VolumeType?: string;
};
/**
 * Resource Type definition for AWS::OpsWorks::Layer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-layer.html}
 */
export class OpsWorksLayer extends $Resource<
  "AWS::OpsWorks::Layer",
  OpsWorksLayerProperties,
  OpsWorksLayerAttributes
> {
  public static readonly Type = "AWS::OpsWorks::Layer";
  constructor(
    logicalId: string,
    properties: OpsWorksLayerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpsWorksLayer.Type, properties, options);
  }
}
