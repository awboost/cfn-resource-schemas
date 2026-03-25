import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EMR::Cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html}
 */
export type EMRClusterProperties = {
  /**
   * A JSON string for selecting additional features.
   */
  AdditionalInfo?: Record<string, any> | string;
  /**
   * The applications installed on this cluster.
   */
  Applications?: Application[];
  /**
   * An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
   */
  AutoScalingRole?: string;
  /**
   * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates.
   */
  AutoTerminationPolicy?: AutoTerminationPolicy;
  /**
   * A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
   */
  BootstrapActions?: BootstrapActionConfig[];
  /**
   * Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.
   */
  Configurations?: EMRConfiguration[];
  /**
   * Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
   */
  CustomAmiId?: string;
  /**
   * The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   */
  EbsRootVolumeIops?: number;
  /**
   * The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
   */
  EbsRootVolumeSize?: number;
  /**
   * The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   */
  EbsRootVolumeThroughput?: number;
  /**
   * A specification of the number and type of Amazon EC2 instances.
   */
  Instances: JobFlowInstancesConfig;
  /**
   * Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is EMR_EC2_DefaultRole. In order to use the default role, you must have already created it using the CLI or console
   */
  JobFlowRole: string;
  /**
   * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see Use Kerberos Authentication in the Amazon EMR Management Guide.
   */
  KerberosAttributes?: KerberosAttributes;
  /**
   * The AWS KMS key used for encrypting log files. If a value is not provided, the logs remain encrypted by AES-256. This attribute is only available with Amazon EMR version 5.30.0 and later, excluding Amazon EMR 6.0.0.
   */
  LogEncryptionKmsKeyId?: string;
  /**
   * The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.
   */
  LogUri?: string;
  /**
   * The specified managed scaling policy for an Amazon EMR cluster.
   */
  ManagedScalingPolicy?: ManagedScalingPolicy;
  /**
   * Specifies the configuration for cluster logging.
   */
  MonitoringConfiguration?: MonitoringConfiguration;
  /**
   * The name of the job flow.
   */
  Name: string;
  /**
   * Specifies a particular Amazon Linux release for all nodes in a cluster launch RunJobFlow request. If a release is not specified, Amazon EMR uses the latest validated Amazon Linux release for cluster launch.
   */
  OSReleaseLabel?: string;
  /**
   * The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.
   */
  PlacementGroupConfigs?: PlacementGroupConfig[];
  /**
   * The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form emr-x.x.x, where x.x.x is an Amazon EMR release version such as emr-5.14.0.
   */
  ReleaseLabel?: string;
  /**
   * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized.
   */
  ScaleDownBehavior?:
    | "TERMINATE_AT_INSTANCE_HOUR"
    | "TERMINATE_AT_TASK_COMPLETION";
  /**
   * The name of the security configuration applied to the cluster.
   */
  SecurityConfiguration?: string;
  /**
   * The IAM role that Amazon EMR assumes in order to access AWS resources on your behalf.
   */
  ServiceRole: string;
  /**
   * Specifies the number of steps that can be executed concurrently.
   */
  StepConcurrencyLevel?: number;
  Steps?: StepConfig[];
  Tags?: Tag[];
  /**
   * Indicates whether the cluster is visible to IAM principals in the AWS account associated with the cluster. When true, IAM principals in the AWS account can perform EMR cluster actions on the cluster that their IAM policies allow. When false, only the IAM principal that created the cluster and the AWS account root user can perform EMR actions, regardless of IAM permissions policies attached to other IAM principals.
   */
  VisibleToAllUsers?: boolean;
};
/**
 * Attribute type definition for `AWS::EMR::Cluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#aws-resource-emr-cluster-return-values}
 */
export type EMRClusterAttributes = {
  /**
   * The unique identifier for the cluster.
   */
  Id: string;
  /**
   * The public DNS name of the master node (instance), such as ec2-12-123-123-123.us-west-2.compute.amazonaws.com.
   */
  MasterPublicDNS: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html}
 */
export type Application = {
  /**
   * This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.
   */
  AdditionalInfo?: Record<string, string>;
  /**
   * Arguments for Amazon EMR to pass to the application
   */
  Args?: string[];
  /**
   * The name of the application.
   */
  Name?: string;
  /**
   * The version of the application.
   */
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
  /**
   * Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days)
   */
  IdleTimeout?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.BootstrapActionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html}
 */
export type BootstrapActionConfig = {
  /**
   * The name of the bootstrap action.
   */
  Name: string;
  ScriptBootstrapAction: ScriptBootstrapActionConfig;
};
/**
 * Type definition for `AWS::EMR::Cluster.CloudWatchAlarmDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html}
 */
export type CloudWatchAlarmDefinition = {
  /**
   * Determines how the metric specified by MetricName is compared to the value specified by Threshold.
   */
  ComparisonOperator:
    | "GREATER_THAN_OR_EQUAL"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL";
  Dimensions?: MetricDimension[];
  /**
   * The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is 1.
   */
  EvaluationPeriods?: number;
  /**
   * The name of the CloudWatch metric that is watched to determine an alarm condition.
   */
  MetricName: string;
  /**
   * The namespace for the CloudWatch metric. The default is AWS/ElasticMapReduce.
   */
  Namespace?: string;
  /**
   * The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify 300.
   */
  Period: number;
  /**
   * The statistic to apply to the metric associated with the alarm. The default is AVERAGE.
   */
  Statistic?: "SAMPLE_COUNT" | "AVERAGE" | "SUM" | "MINIMUM" | "MAXIMUM";
  /**
   * The value against which the specified statistic is compared.
   */
  Threshold: number;
  /**
   * The unit of measure associated with the CloudWatch metric being watched. The value specified for Unit must correspond to the units specified in the CloudWatch metric.
   */
  Unit?:
    | "NONE"
    | "SECONDS"
    | "MICRO_SECONDS"
    | "MILLI_SECONDS"
    | "BYTES"
    | "KILO_BYTES"
    | "MEGA_BYTES"
    | "GIGA_BYTES"
    | "TERA_BYTES"
    | "BITS"
    | "KILO_BITS"
    | "MEGA_BITS"
    | "GIGA_BITS"
    | "TERA_BITS"
    | "PERCENT"
    | "COUNT"
    | "BYTES_PER_SECOND"
    | "KILO_BYTES_PER_SECOND"
    | "MEGA_BYTES_PER_SECOND"
    | "GIGA_BYTES_PER_SECOND"
    | "TERA_BYTES_PER_SECOND"
    | "BITS_PER_SECOND"
    | "KILO_BITS_PER_SECOND"
    | "MEGA_BITS_PER_SECOND"
    | "GIGA_BITS_PER_SECOND"
    | "TERA_BITS_PER_SECOND"
    | "COUNT_PER_SECOND";
};
/**
 * Type definition for `AWS::EMR::Cluster.CloudWatchLogConfiguration`.
 * Holds CloudWatch log configuration settings and metadata that specify settings like log files to monitor and where to send them.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchlogconfiguration.html}
 */
export type CloudWatchLogConfiguration = {
  /**
   * Specifies if CloudWatch logging is enabled.
   */
  Enabled: boolean;
  /**
   * The ARN of the encryption key used to encrypt the logs.
   */
  EncryptionKeyArn?: string;
  /**
   * The name of the CloudWatch log group where logs are published.
   */
  LogGroupName?: string;
  /**
   * The prefix of the log stream name.
   */
  LogStreamNamePrefix?: string;
  /**
   * A map of log types to file names for publishing logs to the standard output or standard error streams for CloudWatch. Valid log types include STEP_LOGS, SPARK_DRIVER, and SPARK_EXECUTOR. Valid file names for each type include STDOUT and STDERR.
   */
  LogTypes?: Record<string, string[]>;
};
/**
 * Type definition for `AWS::EMR::Cluster.ComputeLimits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html}
 */
export type ComputeLimits = {
  /**
   *  The upper boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
   */
  MaximumCapacityUnits: number;
  /**
   * The upper boundary of EC2 units for core node type in a cluster. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes.
   */
  MaximumCoreCapacityUnits?: number;
  /**
   *  The upper boundary of On-Demand EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot Instances.
   */
  MaximumOnDemandCapacityUnits?: number;
  /**
   * The lower boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
   */
  MinimumCapacityUnits: number;
  /**
   * The unit type used for specifying a managed scaling policy.
   */
  UnitType: "InstanceFleetUnits" | "Instances" | "VCPU";
};
/**
 * Type definition for `AWS::EMR::Cluster.EbsBlockDeviceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsblockdeviceconfig.html}
 */
export type EbsBlockDeviceConfig = {
  VolumeSpecification: VolumeSpecification;
  /**
   * Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group
   */
  VolumesPerInstance?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.EbsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsconfiguration.html}
 */
export type EbsConfiguration = {
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
  /**
   * Indicates whether an Amazon EBS volume is EBS-optimized.
   */
  EbsOptimized?: boolean;
};
/**
 * Type definition for `AWS::EMR::Cluster.EMRConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-emrconfiguration.html}
 */
export type EMRConfiguration = {
  /**
   * The classification within a configuration.
   */
  Classification?: string;
  ConfigurationProperties?: Record<string, string>;
  Configurations?: EMRConfiguration[];
};
/**
 * Type definition for `AWS::EMR::Cluster.HadoopJarStepConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html}
 */
export type HadoopJarStepConfig = {
  Args?: string[];
  /**
   * A path to a JAR file run during the step.
   */
  Jar: string;
  /**
   * The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
   */
  MainClass?: string;
  /**
   * A list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.
   */
  StepProperties?: KeyValue[];
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceFleetConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html}
 */
export type InstanceFleetConfig = {
  InstanceTypeConfigs?: InstanceTypeConfig[];
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
  /**
   * The friendly name of the instance fleet.
   */
  Name?: string;
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
  /**
   * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision
   */
  TargetOnDemandCapacity?: number;
  /**
   * The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision.
   */
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
 * Type definition for `AWS::EMR::Cluster.InstanceFleetResizingSpecifications`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetresizingspecifications.html}
 */
export type InstanceFleetResizingSpecifications = {
  OnDemandResizeSpecification?: OnDemandResizingSpecification;
  SpotResizeSpecification?: SpotResizingSpecification;
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceGroupConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html}
 */
export type InstanceGroupConfig = {
  /**
   * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
   */
  AutoScalingPolicy?: AutoScalingPolicy;
  /**
   * If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify OnDemandPrice to set the amount equal to the On-Demand price, or specify an amount in USD.
   */
  BidPrice?: string;
  /**
   * The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
   */
  Configurations?: EMRConfiguration[];
  /**
   * The custom AMI ID to use for the provisioned instance group.
   */
  CustomAmiId?: string;
  /**
   * EBS configurations that will be attached to each EC2 instance in the instance group.
   */
  EbsConfiguration?: EbsConfiguration;
  /**
   * Target number of instances for the instance group.
   */
  InstanceCount: number;
  /**
   * The EC2 instance type for all instances in the instance group.
   */
  InstanceType: string;
  /**
   * Market type of the EC2 instances used to create a cluster node.
   */
  Market?: "ON_DEMAND" | "SPOT";
  /**
   * Friendly name given to the instance group.
   */
  Name?: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.InstanceTypeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html}
 */
export type InstanceTypeConfig = {
  /**
   * The bid price for each EC2 Spot Instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
   */
  BidPrice?: string;
  /**
   * The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%). If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;
  /**
   * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.
   */
  Configurations?: EMRConfiguration[];
  /**
   * The custom AMI ID to use for the instance type.
   */
  CustomAmiId?: string;
  /**
   * The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by InstanceType.
   */
  EbsConfiguration?: EbsConfiguration;
  /**
   * An EC2 instance type, such as m3.xlarge.
   */
  InstanceType: string;
  /**
   * The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type. Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
   */
  Priority?: number;
  /**
   * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.
   */
  WeightedCapacity?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.JobFlowInstancesConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html}
 */
export type JobFlowInstancesConfig = {
  /**
   * A list of additional Amazon EC2 security group IDs for the master node.
   */
  AdditionalMasterSecurityGroups?: string[];
  /**
   * A list of additional Amazon EC2 security group IDs for the core and task nodes.
   */
  AdditionalSlaveSecurityGroups?: string[];
  CoreInstanceFleet?: InstanceFleetConfig;
  /**
   * Configuration for the instance groups in a cluster.
   */
  CoreInstanceGroup?: InstanceGroupConfig;
  /**
   * The name of the EC2 key pair that can be used to connect to the master node using SSH as the user called 'hadoop'.
   */
  Ec2KeyName?: string;
  /**
   * Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.
   */
  Ec2SubnetId?: string;
  /**
   * Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.
   */
  Ec2SubnetIds?: string[];
  /**
   * The identifier of the Amazon EC2 security group for the master node. If you specify EmrManagedMasterSecurityGroup, you must also specify EmrManagedSlaveSecurityGroup.
   */
  EmrManagedMasterSecurityGroup?: string;
  /**
   * The identifier of the Amazon EC2 security group for the core and task nodes. If you specify EmrManagedSlaveSecurityGroup, you must also specify EmrManagedMasterSecurityGroup.
   */
  EmrManagedSlaveSecurityGroup?: string;
  /**
   * Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the AmiVersion parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.
   */
  HadoopVersion?: string;
  /**
   * Specifies whether the cluster should remain available after completing all steps. Defaults to true. For more information about configuring cluster termination, see Control Cluster Termination in the EMR Management Guide.
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;
  MasterInstanceFleet?: InstanceFleetConfig;
  /**
   * Configuration for the instance groups in a cluster.
   */
  MasterInstanceGroup?: InstanceGroupConfig;
  /**
   * The Availability Zone in which the cluster runs.
   */
  Placement?: PlacementType;
  /**
   * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
   */
  ServiceAccessSecurityGroup?: string;
  TaskInstanceFleets?: InstanceFleetConfig[];
  /**
   * Configuration for the instance groups in a cluster.
   */
  TaskInstanceGroups?: InstanceGroupConfig[];
  /**
   * Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.
   */
  TerminationProtected?: boolean;
  /**
   * Indicates whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster.
   */
  UnhealthyNodeReplacement?: boolean;
};
/**
 * Type definition for `AWS::EMR::Cluster.KerberosAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html}
 */
export type KerberosAttributes = {
  /**
   * The Active Directory password for ADDomainJoinUser.
   */
  ADDomainJoinPassword?: string;
  /**
   * Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.
   */
  ADDomainJoinUser?: string;
  /**
   * Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.
   */
  CrossRealmTrustPrincipalPassword?: string;
  /**
   * The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
   */
  KdcAdminPassword: string;
  /**
   * The name of the Kerberos realm to which all nodes in a cluster belong. For example, EC2.INTERNAL.
   */
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
  ScalingStrategy?: string;
  UtilizationPerformanceIndex?: number;
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
 * Type definition for `AWS::EMR::Cluster.MonitoringConfiguration`.
 * Contains CloudWatch log configuration metadata and settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-monitoringconfiguration.html}
 */
export type MonitoringConfiguration = {
  /**
   * Holds CloudWatch log configuration settings and metadata that specify settings like log files to monitor and where to send them.
   */
  CloudWatchLogConfiguration?: CloudWatchLogConfiguration;
};
/**
 * Type definition for `AWS::EMR::Cluster.OnDemandCapacityReservationOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandcapacityreservationoptions.html}
 */
export type OnDemandCapacityReservationOptions = {
  /**
   * Supported values: none, open
   */
  CapacityReservationPreference?: string;
  CapacityReservationResourceGroupArn?: string;
  /**
   * Supported values: use-capacity-reservations-first
   */
  UsageStrategy?: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.OnDemandProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandprovisioningspecification.html}
 */
export type OnDemandProvisioningSpecification = {
  /**
   * Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is lowest-price (the default), which launches the lowest price first.
   */
  AllocationStrategy: string;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
};
/**
 * Type definition for `AWS::EMR::Cluster.OnDemandResizingSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandresizingspecification.html}
 */
export type OnDemandResizingSpecification = {
  AllocationStrategy?: string;
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
  TimeoutDurationMinutes?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.PlacementGroupConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementgroupconfig.html}
 */
export type PlacementGroupConfig = {
  /**
   * Role of the instance in the cluster.
   */
  InstanceRole: "MASTER" | "CORE" | "TASK";
  /**
   * Amazon EC2 Placement Group strategy associated with instance role.
   */
  PlacementStrategy?: "SPREAD" | "PARTITION" | "CLUSTER" | "NONE";
};
/**
 * Type definition for `AWS::EMR::Cluster.PlacementType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementtype.html}
 */
export type PlacementType = {
  /**
   * The Amazon EC2 Availability Zone for the cluster. AvailabilityZone is used for uniform instance groups, while AvailabilityZones (plural) is used for instance fleets.
   */
  AvailabilityZone: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingaction.html}
 */
export type ScalingAction = {
  /**
   * Not available for instance groups. Instance groups use the market type specified for the group.
   */
  Market?: "ON_DEMAND" | "SPOT";
  /**
   * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
   */
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingConstraints`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingconstraints.html}
 */
export type ScalingConstraints = {
  /**
   * The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.
   */
  MaxCapacity: number;
  /**
   * The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.
   */
  MinCapacity: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html}
 */
export type ScalingRule = {
  /**
   * The conditions that trigger an automatic scaling activity.
   */
  Action: ScalingAction;
  /**
   * A friendly, more verbose description of the automatic scaling rule.
   */
  Description?: string;
  /**
   * The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.
   */
  Name: string;
  /**
   * The CloudWatch alarm definition that determines when automatic scaling activity is triggered.
   */
  Trigger: ScalingTrigger;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScalingTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingtrigger.html}
 */
export type ScalingTrigger = {
  /**
   * The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.
   */
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
};
/**
 * Type definition for `AWS::EMR::Cluster.ScriptBootstrapActionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scriptbootstrapactionconfig.html}
 */
export type ScriptBootstrapActionConfig = {
  /**
   * A list of command line arguments to pass to the bootstrap action script.
   */
  Args?: string[];
  /**
   * Location in Amazon S3 of the script to run during a bootstrap action.
   */
  Path: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.SimpleScalingPolicyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html}
 */
export type SimpleScalingPolicyConfiguration = {
  /**
   * The way in which EC2 instances are added (if ScalingAdjustment is a positive number) or terminated (if ScalingAdjustment is a negative number) each time the scaling activity is triggered. CHANGE_IN_CAPACITY is the default. CHANGE_IN_CAPACITY indicates that the EC2 instance count increments or decrements by ScalingAdjustment, which should be expressed as an integer. PERCENT_CHANGE_IN_CAPACITY indicates the instance count increments or decrements by the percentage specified by ScalingAdjustment, which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. EXACT_CAPACITY indicates the scaling activity results in an instance group with the number of EC2 instances specified by ScalingAdjustment, which should be expressed as a positive integer.
   */
  AdjustmentType?:
    | "CHANGE_IN_CAPACITY"
    | "EXACT_CAPACITY"
    | "PERCENT_CHANGE_IN_CAPACITY";
  /**
   * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.
   */
  CoolDown?: number;
  /**
   * The amount by which to scale in or scale out, based on the specified AdjustmentType. A positive value adds to the instance group's EC2 instance count while a negative number removes instances. If AdjustmentType is set to EXACT_CAPACITY, the number should only be a positive integer. If AdjustmentType is set to PERCENT_CHANGE_IN_CAPACITY, the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.
   */
  ScalingAdjustment: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.SpotProvisioningSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html}
 */
export type SpotProvisioningSpecification = {
  /**
   * Specifies the strategy to use in launching Spot Instance fleets. Currently, the only option is capacity-optimized (the default), which launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching.
   */
  AllocationStrategy?: string;
  /**
   * The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates.
   */
  BlockDurationMinutes?: number;
  /**
   * The action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are TERMINATE_CLUSTER and SWITCH_TO_ON_DEMAND. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
   */
  TimeoutAction: "SWITCH_TO_ON_DEMAND" | "TERMINATE_CLUSTER";
  /**
   * The spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
   */
  TimeoutDurationMinutes: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.SpotResizingSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotresizingspecification.html}
 */
export type SpotResizingSpecification = {
  AllocationStrategy?: string;
  TimeoutDurationMinutes?: number;
};
/**
 * Type definition for `AWS::EMR::Cluster.StepConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html}
 */
export type StepConfig = {
  /**
     * The action to take when the step fails. Use one of the following values:
    
        TERMINATE_CLUSTER - Shuts down the cluster.
    
        CANCEL_AND_WAIT - Cancels any pending steps and returns the cluster to the WAITING state.
    
        CONTINUE - Continues to the next step in the queue.
    
        TERMINATE_JOB_FLOW - Shuts down the cluster. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead.
     If a cluster's StepConcurrencyLevel is greater than 1, do not use AddJobFlowSteps to submit a step with this parameter set to CANCEL_AND_WAIT or TERMINATE_CLUSTER. The step is not submitted and the action fails with a message that the ActionOnFailure setting is not valid.
    
    If you change a cluster's StepConcurrencyLevel to be greater than 1 while a step is running, the ActionOnFailure parameter may not behave as you expect. In this case, for a step that fails with this parameter set to CANCEL_AND_WAIT, pending steps and the running step are not canceled; for a step that fails with this parameter set to TERMINATE_CLUSTER, the cluster does not terminate.
     */
  ActionOnFailure?:
    | "CANCEL_AND_WAIT"
    | "CONTINUE"
    | "TERMINATE_CLUSTER"
    | "TERMINATE_JOB_FLOW";
  /**
   * The JAR file used for the step.
   */
  HadoopJarStep: HadoopJarStepConfig;
  /**
   * The name of the step.
   */
  Name: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-tag.html}
 */
export type Tag = {
  /**
   * A user-defined key, which is the minimum required information for a valid tag. For more information.
   */
  Key: string;
  /**
   * A user-defined value, which is optional in a tag. For more information
   */
  Value: string;
};
/**
 * Type definition for `AWS::EMR::Cluster.VolumeSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html}
 */
export type VolumeSpecification = {
  /**
   * The number of I/O operations per second (IOPS) that the volume supports.
   */
  Iops?: number;
  /**
   * The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
   */
  SizeInGB: number;
  /**
   * The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
   */
  Throughput?: number;
  /**
   * The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.
   */
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
