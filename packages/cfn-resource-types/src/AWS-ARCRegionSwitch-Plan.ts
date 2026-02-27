import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ARCRegionSwitch::Plan`.
 * Represents a plan that specifies Regions, IAM roles, and workflows of logic required to perform the desired change to your multi-Region application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arcregionswitch-plan.html}
 */
export type ARCRegionSwitchPlanProperties = {
  AssociatedAlarms?: AssociatedAlarmMap;
  Description?: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  ExecutionRole: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?$`
   */
  Name: string;
  /**
   * @pattern `^[a-z]{2}-[a-z-]+-\d+$`
   */
  PrimaryRegion?: string;
  RecoveryApproach: RecoveryApproach;
  /**
   * @min `1`
   * @max `10080`
   */
  RecoveryTimeObjectiveMinutes?: number;
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  Regions: string[];
  ReportConfiguration?: ReportConfiguration;
  Tags?: Tags;
  Triggers?: Trigger[];
  Workflows: Workflow[];
};
/**
 * Attribute type definition for `AWS::ARCRegionSwitch::Plan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arcregionswitch-plan.html#aws-resource-arcregionswitch-plan-return-values}
 */
export type ARCRegionSwitchPlanAttributes = {
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:arc-region-switch::[0-9]{12}:plan/([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?):([a-z0-9]{6})$`
   */
  Arn: string;
  HealthChecksForPlan: Record<
    string,
    {
      HealthCheckId: string;
      Region: string;
    }[]
  >;
  /**
   * @pattern `^\d{12}$`
   */
  Owner: string;
  PlanHealthChecks: string[];
  Route53HealthChecks: {
    HealthCheckIds: string[];
    HostedZoneIds: string[];
    RecordNames: string[];
    Regions: string[];
  };
  Version: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.AlarmCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-alarmcondition.html}
 */
export type AlarmCondition = "red" | "green";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.AlarmType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-alarmtype.html}
 */
export type AlarmType = "applicationHealth" | "trigger";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ArcRoutingControlConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-arcroutingcontrolconfiguration.html}
 */
export type ArcRoutingControlConfiguration = {
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
  RegionAndRoutingControls: RegionAndRoutingControls;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ArcRoutingControlState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-arcroutingcontrolstate.html}
 */
export type ArcRoutingControlState = {
  RoutingControlArn: string;
  State: RoutingControlStateChange;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Asg`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-asg.html}
 */
export type Asg = {
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:autoscaling:[a-z0-9-]+:\d{12}:autoScalingGroup:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}:autoScalingGroupName/[\S\s]{1,255}$`
   */
  Arn?: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.AssociatedAlarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-associatedalarm.html}
 */
export type AssociatedAlarm = {
  AlarmType: AlarmType;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
  ResourceIdentifier: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.AssociatedAlarmMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-associatedalarmmap.html}
 */
export type AssociatedAlarmMap = Record<string, AssociatedAlarm>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.CustomActionLambdaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-customactionlambdaconfiguration.html}
 */
export type CustomActionLambdaConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  Lambdas: Lambdas[];
  RegionToRun: RegionToRunIn;
  RetryIntervalMinutes: number;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: LambdaUngraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.DocumentDbConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-documentdbconfiguration.html}
 */
export type DocumentDbConfiguration = {
  Behavior: any;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  DatabaseClusterArns: string[];
  ExternalId?: string;
  /**
   * @pattern `^[A-Za-z][0-9A-Za-z-:._]*$`
   */
  GlobalClusterIdentifier: string;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: DocumentDbUngraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.DocumentDbUngraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-documentdbungraceful.html}
 */
export type DocumentDbUngraceful = {
  Ungraceful?: DocumentDbUngracefulBehavior;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.DocumentDbUngracefulBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-documentdbungracefulbehavior.html}
 */
export type DocumentDbUngracefulBehavior = "failover";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Ec2AsgCapacityIncreaseConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-ec2asgcapacityincreaseconfiguration.html}
 */
export type Ec2AsgCapacityIncreaseConfiguration = {
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  Asgs: Asg[];
  CapacityMonitoringApproach?: any;
  TargetPercent?: number;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: Ec2Ungraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Ec2Ungraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-ec2ungraceful.html}
 */
export type Ec2Ungraceful = {
  /**
   * @min `0`
   * @max `99`
   */
  MinimumSuccessPercentage: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.EcsCapacityIncreaseConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-ecscapacityincreaseconfiguration.html}
 */
export type EcsCapacityIncreaseConfiguration = {
  CapacityMonitoringApproach?: any;
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  Services: Service[];
  TargetPercent?: number;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: EcsUngraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.EcsUngraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-ecsungraceful.html}
 */
export type EcsUngraceful = {
  /**
   * @min `0`
   * @max `99`
   */
  MinimumSuccessPercentage: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.EksCluster`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-ekscluster.html}
 */
export type EksCluster = {
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:eks:[a-z0-9-]+:\d{12}:cluster/[a-zA-Z0-9][a-zA-Z0-9-_]{0,99}$`
   */
  ClusterArn: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.EksResourceScalingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-eksresourcescalingconfiguration.html}
 */
export type EksResourceScalingConfiguration = {
  CapacityMonitoringApproach?: any;
  /**
   * @minLength `2`
   */
  EksClusters?: EksCluster[];
  KubernetesResourceType: KubernetesResourceType;
  /**
   * @minLength `1`
   */
  ScalingResources?: KubernetesScalingApplication[];
  /**
   * @min `1`
   */
  TargetPercent?: number;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: EksResourceScalingUngraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.EksResourceScalingUngraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-eksresourcescalingungraceful.html}
 */
export type EksResourceScalingUngraceful = {
  /**
   * @min `0`
   * @max `99`
   */
  MinimumSuccessPercentage: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ExecutionApprovalConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-executionapprovalconfiguration.html}
 */
export type ExecutionApprovalConfiguration = {
  ApprovalRole: string;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ExecutionBlockConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-executionblockconfiguration.html}
 */
export type ExecutionBlockConfiguration =
  | {
      CustomActionLambdaConfig: CustomActionLambdaConfiguration;
    }
  | {
      Ec2AsgCapacityIncreaseConfig: Ec2AsgCapacityIncreaseConfiguration;
    }
  | {
      ExecutionApprovalConfig: ExecutionApprovalConfiguration;
    }
  | {
      ArcRoutingControlConfig: ArcRoutingControlConfiguration;
    }
  | {
      GlobalAuroraConfig: GlobalAuroraConfiguration;
    }
  | {
      ParallelConfig: ParallelExecutionBlockConfiguration;
    }
  | {
      RegionSwitchPlanConfig: RegionSwitchPlanConfiguration;
    }
  | {
      EcsCapacityIncreaseConfig: EcsCapacityIncreaseConfiguration;
    }
  | {
      EksResourceScalingConfig: EksResourceScalingConfiguration;
    }
  | {
      Route53HealthCheckConfig: Route53HealthCheckConfiguration;
    }
  | {
      DocumentDbConfig: DocumentDbConfiguration;
    }
  | {
      RdsPromoteReadReplicaConfig: RdsPromoteReadReplicaConfiguration;
    }
  | {
      RdsCreateCrossRegionReadReplicaConfig: RdsCreateCrossRegionReplicaConfiguration;
    };
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ExecutionBlockType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-executionblocktype.html}
 */
export type ExecutionBlockType =
  | "CustomActionLambda"
  | "ManualApproval"
  | "AuroraGlobalDatabase"
  | "EC2AutoScaling"
  | "ARCRoutingControl"
  | "ARCRegionSwitchPlan"
  | "Parallel"
  | "ECSServiceScaling"
  | "EKSResourceScaling"
  | "Route53HealthCheck"
  | "DocumentDb"
  | "RdsPromoteReadReplica"
  | "RdsCreateCrossRegionReplica";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.GlobalAuroraConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-globalauroraconfiguration.html}
 */
export type GlobalAuroraConfiguration = {
  Behavior: any;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  DatabaseClusterArns: string[];
  ExternalId?: string;
  GlobalClusterIdentifier: string;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
  Ungraceful?: GlobalAuroraUngraceful;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.GlobalAuroraUngraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-globalauroraungraceful.html}
 */
export type GlobalAuroraUngraceful = {
  Ungraceful?: GlobalAuroraUngracefulBehavior;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.GlobalAuroraUngracefulBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-globalauroraungracefulbehavior.html}
 */
export type GlobalAuroraUngracefulBehavior = "failover";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.HealthCheckState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-healthcheckstate.html}
 */
export type HealthCheckState = {
  HealthCheckId?: string;
  Region?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.KubernetesResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-kubernetesresourcetype.html}
 */
export type KubernetesResourceType = {
  ApiVersion: string;
  Kind: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.KubernetesScalingApplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-kubernetesscalingapplication.html}
 */
export type KubernetesScalingApplication = Record<
  string,
  RegionalScalingResource
>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.KubernetesScalingResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-kubernetesscalingresource.html}
 */
export type KubernetesScalingResource = {
  HpaName?: string;
  Name: string;
  /**
   * @pattern `^[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Lambdas`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-lambdas.html}
 */
export type Lambdas = {
  Arn?: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.LambdaUngraceful`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-lambdaungraceful.html}
 */
export type LambdaUngraceful = {
  Behavior?: any;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ParallelExecutionBlockConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-parallelexecutionblockconfiguration.html}
 */
export type ParallelExecutionBlockConfiguration = {
  Steps: Step[];
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RdsCreateCrossRegionReplicaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-rdscreatecrossregionreplicaconfiguration.html}
 */
export type RdsCreateCrossRegionReplicaConfiguration = {
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  DbInstanceArnMap: RdsDbInstanceArnMap;
  ExternalId?: string;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RdsDbInstanceArnMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-rdsdbinstancearnmap.html}
 */
export type RdsDbInstanceArnMap = Record<string, string>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RdsPromoteReadReplicaConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-rdspromotereadreplicaconfiguration.html}
 */
export type RdsPromoteReadReplicaConfiguration = {
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  DbInstanceArnMap: RdsDbInstanceArnMap;
  ExternalId?: string;
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RecoveryApproach`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-recoveryapproach.html}
 */
export type RecoveryApproach = "activeActive" | "activePassive";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RegionalScalingResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-regionalscalingresource.html}
 */
export type RegionalScalingResource = Record<string, KubernetesScalingResource>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RegionAndRoutingControls`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-regionandroutingcontrols.html}
 */
export type RegionAndRoutingControls = Record<string, ArcRoutingControlState[]>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RegionSwitchPlanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-regionswitchplanconfiguration.html}
 */
export type RegionSwitchPlanConfiguration = {
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:arc-region-switch::[0-9]{12}:plan/([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?):([a-z0-9]{6})$`
   */
  Arn: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RegionToRunIn`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-regiontorunin.html}
 */
export type RegionToRunIn =
  | "activatingRegion"
  | "deactivatingRegion"
  | "activeRegion"
  | "inactiveRegion";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ReportConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-reportconfiguration.html}
 */
export type ReportConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ReportOutput?: ReportOutputConfiguration[];
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.ReportOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-reportoutputconfiguration.html}
 */
export type ReportOutputConfiguration = {
  S3Configuration: S3ReportOutputConfiguration;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Route53HealthCheckConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-route53healthcheckconfiguration.html}
 */
export type Route53HealthCheckConfiguration = {
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  HostedZoneId: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  RecordName: string;
  RecordSets?: Route53ResourceRecordSet[];
  /**
   * @min `1`
   */
  TimeoutMinutes?: number;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Route53ResourceRecordSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-route53resourcerecordset.html}
 */
export type Route53ResourceRecordSet = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  RecordSetIdentifier?: string;
  /**
   * @pattern `^[a-z]{2}-[a-z-]+-\d+$`
   */
  Region?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.RoutingControlStateChange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-routingcontrolstatechange.html}
 */
export type RoutingControlStateChange = "On" | "Off";
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.S3ReportOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-s3reportoutputconfiguration.html}
 */
export type S3ReportOutputConfiguration = {
  /**
   * @pattern `^\d{12}$`
   */
  BucketOwner?: string;
  /**
   * @minLength `3`
   * @maxLength `512`
   * @pattern `^(?:s3://)?[a-z0-9][a-z0-9-]{1,61}[a-z0-9](?:/[^/ ][^/]*)/‍*?$`
   */
  BucketPath?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-service.html}
 */
export type Service = {
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:ecs:[a-z0-9-]+:\d{12}:cluster/[a-zA-Z0-9_-]{1,255}$`
   */
  ClusterArn?: string;
  /**
   * @pattern `^arn:aws[a-zA-Z0-9-]*:iam::[0-9]{12}:role/.+$`
   */
  CrossAccountRole?: string;
  ExternalId?: string;
  /**
   * @pattern `^arn:aws[a-zA-Z-]*:ecs:[a-z0-9-]+:\d{12}:service/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]{1,255}$`
   */
  ServiceArn?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Step`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-step.html}
 */
export type Step = {
  Description?: string;
  ExecutionBlockConfiguration: ExecutionBlockConfiguration;
  ExecutionBlockType: ExecutionBlockType;
  Name: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Trigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-trigger.html}
 */
export type Trigger = {
  Action: WorkflowTargetAction;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Conditions: TriggerCondition[];
  Description?: string;
  MinDelayMinutesBetweenExecutions: number;
  /**
   * @pattern `^[a-z]{2}-[a-z-]+-\d+$`
   */
  TargetRegion: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.TriggerCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-triggercondition.html}
 */
export type TriggerCondition = {
  AssociatedAlarmName: string;
  Condition: AlarmCondition;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.Workflow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-workflow.html}
 */
export type Workflow = {
  Steps?: Step[];
  WorkflowDescription?: string;
  WorkflowTargetAction: WorkflowTargetAction;
  /**
   * @pattern `^[a-z]{2}-[a-z-]+-\d+$`
   */
  WorkflowTargetRegion?: string;
};
/**
 * Type definition for `AWS::ARCRegionSwitch::Plan.WorkflowTargetAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arcregionswitch-plan-workflowtargetaction.html}
 */
export type WorkflowTargetAction = "activate" | "deactivate" | "postRecovery";
/**
 * Resource type definition for `AWS::ARCRegionSwitch::Plan`.
 * Represents a plan that specifies Regions, IAM roles, and workflows of logic required to perform the desired change to your multi-Region application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arcregionswitch-plan.html}
 */
export class ARCRegionSwitchPlan extends $Resource<
  "AWS::ARCRegionSwitch::Plan",
  ARCRegionSwitchPlanProperties,
  ARCRegionSwitchPlanAttributes
> {
  public static readonly Type = "AWS::ARCRegionSwitch::Plan";
  constructor(
    logicalId: string,
    properties: ARCRegionSwitchPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ARCRegionSwitchPlan.Type, properties, options);
  }
}
