import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html}
 */
export type SageMakerClusterProperties = {
  /**
   * Configuration for cluster auto-scaling
   */
  AutoScaling?: ClusterAutoScalingConfig;
  /**
   * The name of the HyperPod Cluster.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ClusterName?: string;
  /**
   * The cluster role for the autoscaler to assume.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ClusterRole?: string;
  /**
   * The instance groups of the SageMaker HyperPod cluster.
   * @minLength `1`
   */
  InstanceGroups?: ClusterInstanceGroup[];
  /**
   * Determines the scaling strategy for the SageMaker HyperPod cluster. When set to 'Continuous', enables continuous scaling which dynamically manages node provisioning. If the parameter is omitted, uses the standard scaling approach in previous release.
   */
  NodeProvisioningMode?: "Continuous";
  /**
   * If node auto-recovery is set to true, faulty nodes will be replaced or rebooted when a failure is detected. If set to false, nodes will be labelled when a fault is detected.
   */
  NodeRecovery?: "Automatic" | "None";
  /**
   * Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.
   */
  Orchestrator?: Orchestrator;
  /**
   * The restricted instance groups of the SageMaker HyperPod cluster.
   * @minLength `1`
   */
  RestrictedInstanceGroups?: ClusterRestrictedInstanceGroup[];
  /**
   * Custom tags for managing the SageMaker HyperPod cluster as an AWS resource. You can add tags to your cluster in the same way you add them in other AWS services that support tagging.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Configuration for tiered storage in the SageMaker HyperPod cluster.
   */
  TieredStorageConfig?: TieredStorageConfig;
  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
   */
  VpcConfig?: VpcConfig;
};
/**
 * Attribute type definition for `AWS::SageMaker::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#aws-resource-sagemaker-cluster-return-values}
 */
export type SageMakerClusterAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the HyperPod Cluster.
   * @maxLength `256`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:cluster/[a-z0-9]{12}$`
   */
  ClusterArn: string;
  /**
   * The status of the HyperPod Cluster.
   */
  ClusterStatus:
    | "Creating"
    | "Deleting"
    | "Failed"
    | "InService"
    | "RollingBack"
    | "SystemUpdating"
    | "Updating";
  /**
   * The time at which the HyperPod cluster was created.
   */
  CreationTime: string;
  /**
   * The failure message of the HyperPod Cluster.
   */
  FailureMessage: string;
  /**
   * The instance groups of the SageMaker HyperPod cluster.
   * @minLength `1`
   */
  InstanceGroups: {
    /**
     * The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
     * @min `0`
     */
    CurrentCount: number;
  }[];
  /**
   * The restricted instance groups of the SageMaker HyperPod cluster.
   * @minLength `1`
   */
  RestrictedInstanceGroups: {
    /**
     * The number of instances that are currently in the restricted instance group of a SageMaker HyperPod cluster.
     * @min `0`
     */
    CurrentCount: number;
  }[];
};
/**
 * Type definition for `AWS::SageMaker::Cluster.AlarmDetails`.
 * The details of the alarm to monitor during the AMI update.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-alarmdetails.html}
 */
export type AlarmDetails = {
  /**
   * The name of the alarm.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `(?!\s*$).+`
   */
  AlarmName: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.CapacitySizeConfig`.
 * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-capacitysizeconfig.html}
 */
export type CapacitySizeConfig = {
  /**
   * Specifies whether SageMaker should process the update by amount or percentage of instances.
   * @pattern `INSTANCE_COUNT|CAPACITY_PERCENTAGE`
   */
  Type: string;
  /**
   * Specifies the amount or percentage of instances SageMaker updates at a time.
   * @min `1`
   */
  Value: number;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterAutoScalingConfig`.
 * Configuration for cluster auto-scaling
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterautoscalingconfig.html}
 */
export type ClusterAutoScalingConfig = {
  /**
   * The type of auto-scaler to use
   */
  AutoScalerType?: "Karpenter";
  /**
   * The auto-scaling mode for the cluster
   */
  Mode: "Enable" | "Disable";
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterCapacityRequirements`.
 * Specifies the capacity requirements configuration for an instance group
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clustercapacityrequirements.html}
 */
export type ClusterCapacityRequirements = {
  /**
   * Options for OnDemand capacity
   */
  OnDemand?: ClusterOnDemandOptions;
  /**
   * Options for Spot capacity
   */
  Spot?: ClusterSpotOptions;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterEbsVolumeConfig`.
 * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterebsvolumeconfig.html}
 */
export type ClusterEbsVolumeConfig = {
  RootVolume?: boolean;
  /**
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:/_-]*$`
   */
  VolumeKmsKeyId?: string;
  /**
   * The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
   * @min `1`
   * @max `16384`
   */
  VolumeSizeInGB?: number;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterInstanceGroup`.
 * Details of an instance group in a SageMaker HyperPod cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancegroup.html}
 */
export type ClusterInstanceGroup = {
  /**
   * Specifies the capacity requirements configuration for an instance group
   */
  CapacityRequirements?: ClusterCapacityRequirements;
  /**
   * The execution role for the instance group to assume.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRole: string;
  /**
   * AMI Id to be used for launching EC2 instances - HyperPodPublicAmiId or CustomAmiId
   * @minLength `7`
   * @maxLength `21`
   * @pattern `^ami-[0-9a-fA-F]{8,17}|default$`
   */
  ImageId?: string;
  /**
   * The number of instances you specified to add to the instance group of a SageMaker HyperPod cluster.
   * @min `0`
   */
  InstanceCount: number;
  /**
   * The name of the instance group of a SageMaker HyperPod cluster.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  InstanceGroupName: string;
  /**
   * The instance storage configuration for the instance group.
   * @maxLength `1`
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[];
  /**
   * The instance type of the instance group of a SageMaker HyperPod cluster.
   */
  InstanceType: string;
  /**
   * Kubernetes configuration for cluster nodes including labels and taints.
   */
  KubernetesConfig?: ClusterKubernetesConfig;
  /**
   * The lifecycle configuration for a SageMaker HyperPod cluster.
   */
  LifeCycleConfig: ClusterLifeCycleConfig;
  /**
   * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[];
  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
   */
  OverrideVpcConfig?: VpcConfig;
  /**
   * The configuration object of the schedule that SageMaker follows when updating the AMI.
   */
  ScheduledUpdateConfig?: ScheduledUpdateConfig;
  /**
   * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
   * @min `1`
   * @max `2`
   */
  ThreadsPerCore?: number;
  /**
   * The Amazon Resource Name (ARN) of the training plan to use for this cluster instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
   * @minLength `50`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-plan/.*$`
   */
  TrainingPlanArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterInstanceStorageConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterinstancestorageconfig.html}
 */
export type ClusterInstanceStorageConfig = {
  /**
   * Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to /opt/sagemaker.
   */
  EbsVolumeConfig?: ClusterEbsVolumeConfig;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterKubernetesConfig`.
 * Kubernetes configuration for cluster nodes including labels and taints.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterkubernetesconfig.html}
 */
export type ClusterKubernetesConfig = {
  /**
   * A map of Kubernetes labels to apply to cluster nodes.
   */
  Labels?: ClusterKubernetesLabels;
  /**
   * A list of Kubernetes taints to apply to cluster nodes. Maximum of 50 taints.
   * @maxLength `50`
   */
  Taints?: ClusterKubernetesTaint[];
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterKubernetesLabels`.
 * A map of Kubernetes labels to apply to cluster nodes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterkuberneteslabels.html}
 */
export type ClusterKubernetesLabels = Record<string, string>;
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterKubernetesTaint`.
 * A Kubernetes taint to apply to cluster nodes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterkubernetestaint.html}
 */
export type ClusterKubernetesTaint = {
  /**
   * The effect of the taint.
   */
  Effect: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
  /**
   * The key of the taint.
   */
  Key: string;
  /**
   * The value of the taint.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterLifeCycleConfig`.
 * The lifecycle configuration for a SageMaker HyperPod cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterlifecycleconfig.html}
 */
export type ClusterLifeCycleConfig = {
  /**
   * The file name of the entrypoint script of lifecycle scripts under SourceS3Uri. This entrypoint script runs during cluster creation.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[\S\s]+$`
   */
  OnCreate: string;
  /**
   * An Amazon S3 bucket path where your lifecycle scripts are stored.
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  SourceS3Uri: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterOnDemandOptions`.
 * Options for OnDemand capacity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterondemandoptions.html}
 */
export type ClusterOnDemandOptions = Record<string, any>;
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterOrchestratorEksConfig`.
 * Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterorchestratoreksconfig.html}
 */
export type ClusterOrchestratorEksConfig = {
  /**
   * The ARN of the EKS cluster, such as arn:aws:eks:us-west-2:123456789012:cluster/my-eks-cluster
   */
  ClusterArn: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterRestrictedInstanceGroup`.
 * Details of a restricted instance group in a SageMaker HyperPod cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterrestrictedinstancegroup.html}
 */
export type ClusterRestrictedInstanceGroup = {
  /**
   * The configuration for the restricted instance groups (RIG) environment.
   */
  EnvironmentConfig: EnvironmentConfig;
  /**
   * The execution role for the instance group to assume.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRole: string;
  /**
   * The number of instances you specified to add to the restricted instance group of a SageMaker HyperPod cluster.
   * @min `0`
   */
  InstanceCount: number;
  /**
   * The name of the instance group of a SageMaker HyperPod cluster.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  InstanceGroupName: string;
  /**
   * The instance storage configuration for the instance group.
   * @maxLength `1`
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[];
  /**
   * The instance type of the instance group of a SageMaker HyperPod cluster.
   */
  InstanceType: string;
  /**
   * Nodes will undergo advanced stress test to detect and replace faulty instances, based on the type of deep health check(s) passed in.
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[];
  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
   */
  OverrideVpcConfig?: VpcConfig;
  /**
   * The number you specified to TreadsPerCore in CreateCluster for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading.
   * @min `1`
   * @max `2`
   */
  ThreadsPerCore?: number;
  /**
   * The Amazon Resource Name (ARN) of the training plan to use for this cluster restricted instance group. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan.
   * @minLength `50`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:training-plan/.*$`
   */
  TrainingPlanArn?: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ClusterSpotOptions`.
 * Options for Spot capacity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-clusterspotoptions.html}
 */
export type ClusterSpotOptions = Record<string, any>;
/**
 * Type definition for `AWS::SageMaker::Cluster.DeepHealthCheckType`.
 * The type of deep health check(s) to be performed on the instances in the SageMaker HyperPod cluster instance group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-deephealthchecktype.html}
 */
export type DeepHealthCheckType = "InstanceStress" | "InstanceConnectivity";
/**
 * Type definition for `AWS::SageMaker::Cluster.DeploymentConfig`.
 * The configuration to use when updating the AMI versions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-deploymentconfig.html}
 */
export type DeploymentConfig = {
  /**
   * An array that contains the alarms that SageMaker monitors to know whether to roll back the AMI update.
   */
  AutoRollbackConfiguration?: AlarmDetails[];
  /**
   * The policy that SageMaker uses when updating the AMI versions of the cluster.
   */
  RollingUpdatePolicy?: RollingUpdatePolicy;
  /**
   * The duration in seconds that SageMaker waits before updating more instances in the cluster.
   * @min `0`
   * @max `3600`
   */
  WaitIntervalInSeconds?: number;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.EnvironmentConfig`.
 * The configuration for the restricted instance groups (RIG) environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-environmentconfig.html}
 */
export type EnvironmentConfig = {
  /**
   * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
   */
  FSxLustreConfig?: FSxLustreConfig;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.FSxLustreConfig`.
 * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-fsxlustreconfig.html}
 */
export type FSxLustreConfig = {
  /**
   * The throughput capacity of the FSx for Lustre file system, measured in MB/s per TiB of storage.
   * @min `125`
   * @max `1000`
   */
  PerUnitStorageThroughput: number;
  /**
   * The storage capacity of the FSx for Lustre file system, specified in gibibytes (GiB).
   * @min `1200`
   * @max `100800`
   */
  SizeInGiB: number;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.Orchestrator`.
 * Specifies parameter(s) specific to the orchestrator, e.g. specify the EKS cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-orchestrator.html}
 */
export type Orchestrator = {
  /**
   * Specifies parameter(s) related to EKS as orchestrator, e.g. the EKS cluster nodes will attach to,
   */
  Eks: ClusterOrchestratorEksConfig;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.RollingUpdatePolicy`.
 * The policy that SageMaker uses when updating the AMI versions of the cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-rollingupdatepolicy.html}
 */
export type RollingUpdatePolicy = {
  /**
   * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
   */
  MaximumBatchSize: CapacitySizeConfig;
  /**
   * The configuration of the size measurements of the AMI update. Using this configuration, you can specify whether SageMaker should update your instance group by an amount or percentage of instances.
   */
  RollbackMaximumBatchSize?: CapacitySizeConfig;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.ScheduledUpdateConfig`.
 * The configuration object of the schedule that SageMaker follows when updating the AMI.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-scheduledupdateconfig.html}
 */
export type ScheduledUpdateConfig = {
  /**
   * The configuration to use when updating the AMI versions.
   */
  DeploymentConfig?: DeploymentConfig;
  /**
   * A cron expression that specifies the schedule that SageMaker follows when updating the AMI.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `cron\((?:[0-5][0-9]|[0-9]|) (?:[01][0-9]|2[0-3]|[0-9]) (?:[1-9]|0[1-9]|[12][0-9]|3[01]|\?) (?:[1-9]|0[1-9]|1[0-2]|\*|\/‍*(?:[1-9]|1[0-2])|) (?:MON|TUE|WED|THU|FRI|SAT|SUN|[1-7]|\?|L|(?:[1-7]#[1-5])|(?:[1-7]L)) (?:20[2-9][0-9]|\*|)\)`
   */
  ScheduleExpression: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Cluster.TieredStorageConfig`.
 * Configuration for tiered storage in the SageMaker HyperPod cluster.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-tieredstorageconfig.html}
 */
export type TieredStorageConfig = {
  /**
   * The percentage of instance memory to allocate for tiered storage.
   */
  InstanceMemoryAllocationPercentage?: number;
  /**
   * The mode of tiered storage.
   */
  Mode: "Enable" | "Disable";
};
/**
 * Type definition for `AWS::SageMaker::Cluster.VpcConfig`.
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-cluster-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model.
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Resource Type definition for AWS::SageMaker::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html}
 */
export class SageMakerCluster extends $Resource<
  "AWS::SageMaker::Cluster",
  SageMakerClusterProperties,
  SageMakerClusterAttributes
> {
  public static readonly Type = "AWS::SageMaker::Cluster";
  constructor(
    logicalId: string,
    properties: SageMakerClusterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerCluster.Type, properties, options);
  }
}
