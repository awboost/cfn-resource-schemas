import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EMR::InstanceGroupConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html}
 */
export type EMRInstanceGroupConfigProperties = {
  AutoScalingPolicy?: AutoScalingPolicy;
  BidPrice?: string;
  Configurations?: Configuration[];
  CustomAmiId?: string;
  EbsConfiguration?: EbsConfiguration;
  InstanceCount: number;
  InstanceRole: string;
  InstanceType: string;
  JobFlowId: string;
  Market?: string;
  Name?: string;
};
/**
 * Attribute type definition for `AWS::EMR::InstanceGroupConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#aws-resource-emr-instancegroupconfig-return-values}
 */
export type EMRInstanceGroupConfigAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.AutoScalingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-autoscalingpolicy.html}
 */
export type AutoScalingPolicy = {
  Constraints: ScalingConstraints;
  Rules: ScalingRule[];
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.CloudWatchAlarmDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html}
 */
export type CloudWatchAlarmDefinition = {
  ComparisonOperator: string;
  Dimensions?: MetricDimension[];
  EvaluationPeriods?: number;
  MetricName: string;
  Namespace?: string;
  Period: number;
  Statistic?: string;
  Threshold: number;
  Unit?: string;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-configuration.html}
 */
export type Configuration = {
  Classification?: string;
  ConfigurationProperties?: Record<string, string>;
  Configurations?: Configuration[];
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.EbsBlockDeviceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsblockdeviceconfig.html}
 */
export type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification;
  VolumesPerInstance?: number;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.EbsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsconfiguration.html}
 */
export type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
  EbsOptimized?: boolean;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.MetricDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-metricdimension.html}
 */
export type MetricDimension = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.ScalingAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingaction.html}
 */
export type ScalingAction = {
  Market?: string;
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.ScalingConstraints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingconstraints.html}
 */
export type ScalingConstraints = {
  MaxCapacity: number;
  MinCapacity: number;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.ScalingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html}
 */
export type ScalingRule = {
  Action: ScalingAction;
  Description?: string;
  Name: string;
  Trigger: ScalingTrigger;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.ScalingTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingtrigger.html}
 */
export type ScalingTrigger = {
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.SimpleScalingPolicyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-simplescalingpolicyconfiguration.html}
 */
export type SimpleScalingPolicyConfiguration = {
  AdjustmentType?: string;
  CoolDown?: number;
  ScalingAdjustment: number;
};
/**
 * Type definition for `AWS::EMR::InstanceGroupConfig.VolumeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html}
 */
export type VolumeSpecification = {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
};
/**
 * Resource Type definition for AWS::EMR::InstanceGroupConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html}
 */
export class EMRInstanceGroupConfig extends $Resource<
  "AWS::EMR::InstanceGroupConfig",
  EMRInstanceGroupConfigProperties,
  EMRInstanceGroupConfigAttributes
> {
  public static readonly Type = "AWS::EMR::InstanceGroupConfig";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EMRInstanceGroupConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EMRInstanceGroupConfig.Type,
      properties,
      EMRInstanceGroupConfig.AttributeNames,
      options,
    );
  }
}
