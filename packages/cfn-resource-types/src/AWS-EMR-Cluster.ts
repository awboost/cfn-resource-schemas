import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EMR::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html}
 */
export type EMRClusterProperties = {
  AdditionalInfo?: Record<string, any>;
  Applications?: Application[];
  AutoScalingRole?: string;
  AutoTerminationPolicy?: AutoTerminationPolicy;
  BootstrapActions?: BootstrapActionConfig[];
  Configurations?: Configuration[];
  CustomAmiId?: string;
  EbsRootVolumeSize?: number;
  Instances: JobFlowInstancesConfig;
  JobFlowRole: string;
  KerberosAttributes?: KerberosAttributes;
  LogEncryptionKmsKeyId?: string;
  LogUri?: string;
  ManagedScalingPolicy?: ManagedScalingPolicy;
  Name: string;
  OSReleaseLabel?: string;
  ReleaseLabel?: string;
  ScaleDownBehavior?: string;
  SecurityConfiguration?: string;
  ServiceRole: string;
  StepConcurrencyLevel?: number;
  Steps?: StepConfig[];
  Tags?: Tag[];
  VisibleToAllUsers?: boolean;
};
/**
 * Attribute type definition for `AWS::EMR::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#aws-resource-emr-cluster-return-values}
 */
export type EMRClusterAttributes = {
  Id: string;
  MasterPublicDNS: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html}
 */
export type Application = {
  AdditionalInfo?: Record<string, string>;
  Args?: string[];
  Name?: string;
  Version?: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.AutoScalingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoscalingpolicy.html}
 */
export type AutoScalingPolicy = {
  Constraints: ScalingConstraints;
  Rules: ScalingRule[];
};
/**
 * Type definition for `AWS::EMR::Cluster.AutoTerminationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoterminationpolicy.html}
 */
export type AutoTerminationPolicy = {
  IdleTimeout?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.BootstrapActionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html}
 */
export type BootstrapActionConfig = {
  Name: string;
  ScriptBootstrapAction: ScriptBootstrapActionConfig;
};
/**
 * Type definition for `AWS::EMR::Cluster.CloudWatchAlarmDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html}
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
 * Type definition for `AWS::EMR::Cluster.ComputeLimits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html}
 */
export type ComputeLimits = {
  MaximumCapacityUnits: number;
  MaximumCoreCapacityUnits?: number;
  MaximumOnDemandCapacityUnits?: number;
  MinimumCapacityUnits: number;
  UnitType: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html}
 */
export type Configuration = {
  Classification?: string;
  ConfigurationProperties?: Record<string, string>;
  Configurations?: Configuration[];
};
/**
 * Type definition for `AWS::EMR::Cluster.EbsBlockDeviceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsblockdeviceconfig.html}
 */
export type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification;
  VolumesPerInstance?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.EbsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsconfiguration.html}
 */
export type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
  EbsOptimized?: boolean;
};
/**
 * Type definition for `AWS::EMR::Cluster.HadoopJarStepConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html}
 */
export type HadoopJarStepConfig = {
  Args?: string[];
  Jar: string;
  MainClass?: string;
  StepProperties?: KeyValue[];
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceFleetConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html}
 */
export type InstanceFleetConfig = {
  InstanceTypeConfigs?: InstanceTypeConfig[];
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  Name?: string;
  TargetOnDemandCapacity?: number;
  TargetSpotCapacity?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceFleetProvisioningSpecifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetprovisioningspecifications.html}
 */
export type InstanceFleetProvisioningSpecifications = {
  OnDemandSpecification?: OnDemandProvisioningSpecification;
  SpotSpecification?: SpotProvisioningSpecification;
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceGroupConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html}
 */
export type InstanceGroupConfig = {
  AutoScalingPolicy?: AutoScalingPolicy;
  BidPrice?: string;
  Configurations?: Configuration[];
  CustomAmiId?: string;
  EbsConfiguration?: EbsConfiguration;
  InstanceCount: number;
  InstanceType: string;
  Market?: string;
  Name?: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceTypeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html}
 */
export type InstanceTypeConfig = {
  BidPrice?: string;
  BidPriceAsPercentageOfOnDemandPrice?: number;
  Configurations?: Configuration[];
  CustomAmiId?: string;
  EbsConfiguration?: EbsConfiguration;
  InstanceType: string;
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.JobFlowInstancesConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html}
 */
export type JobFlowInstancesConfig = {
  AdditionalMasterSecurityGroups?: string[];
  AdditionalSlaveSecurityGroups?: string[];
  CoreInstanceFleet?: InstanceFleetConfig;
  CoreInstanceGroup?: InstanceGroupConfig;
  Ec2KeyName?: string;
  Ec2SubnetId?: string;
  Ec2SubnetIds?: string[];
  EmrManagedMasterSecurityGroup?: string;
  EmrManagedSlaveSecurityGroup?: string;
  HadoopVersion?: string;
  KeepJobFlowAliveWhenNoSteps?: boolean;
  MasterInstanceFleet?: InstanceFleetConfig;
  MasterInstanceGroup?: InstanceGroupConfig;
  Placement?: PlacementType;
  ServiceAccessSecurityGroup?: string;
  TaskInstanceFleets?: InstanceFleetConfig[];
  TaskInstanceGroups?: InstanceGroupConfig[];
  TerminationProtected?: boolean;
};
/**
 * Type definition for `AWS::EMR::Cluster.KerberosAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html}
 */
export type KerberosAttributes = {
  ADDomainJoinPassword?: string;
  ADDomainJoinUser?: string;
  CrossRealmTrustPrincipalPassword?: string;
  KdcAdminPassword: string;
  Realm: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.KeyValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-keyvalue.html}
 */
export type KeyValue = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.ManagedScalingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-managedscalingpolicy.html}
 */
export type ManagedScalingPolicy = {
  ComputeLimits?: ComputeLimits;
};
/**
 * Type definition for `AWS::EMR::Cluster.MetricDimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-metricdimension.html}
 */
export type MetricDimension = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.OnDemandProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandprovisioningspecification.html}
 */
export type OnDemandProvisioningSpecification = {
  AllocationStrategy: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.PlacementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementtype.html}
 */
export type PlacementType = {
  AvailabilityZone: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingaction.html}
 */
export type ScalingAction = {
  Market?: string;
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingConstraints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingconstraints.html}
 */
export type ScalingConstraints = {
  MaxCapacity: number;
  MinCapacity: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html}
 */
export type ScalingRule = {
  Action: ScalingAction;
  Description?: string;
  Name: string;
  Trigger: ScalingTrigger;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingtrigger.html}
 */
export type ScalingTrigger = {
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScriptBootstrapActionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scriptbootstrapactionconfig.html}
 */
export type ScriptBootstrapActionConfig = {
  Args?: string[];
  Path: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.SimpleScalingPolicyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html}
 */
export type SimpleScalingPolicyConfiguration = {
  AdjustmentType?: string;
  CoolDown?: number;
  ScalingAdjustment: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.SpotProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html}
 */
export type SpotProvisioningSpecification = {
  AllocationStrategy?: string;
  BlockDurationMinutes?: number;
  TimeoutAction: string;
  TimeoutDurationMinutes: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.StepConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html}
 */
export type StepConfig = {
  ActionOnFailure?: string;
  HadoopJarStep: HadoopJarStepConfig;
  Name: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.VolumeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html}
 */
export type VolumeSpecification = {
  Iops?: number;
  SizeInGB: number;
  Throughput?: number;
  VolumeType: string;
};
/**
 * Resource Type definition for AWS::EMR::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html}
 */
export class EMRCluster extends $Resource<
  "AWS::EMR::Cluster",
  EMRClusterProperties,
  EMRClusterAttributes
> {
  public static readonly Type = "AWS::EMR::Cluster";
  constructor(
    logicalId: string,
    properties: EMRClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRCluster.Type, properties, options);
  }
}
