import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::ECS::Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html}
 */
export type ECSServiceProperties = {
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];
  Cluster?: string;
  DeploymentConfiguration?: DeploymentConfiguration;
  DeploymentController?: DeploymentController;
  DesiredCount?: number;
  EnableECSManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  HealthCheckGracePeriodSeconds?: number;
  LaunchType?: "EC2" | "FARGATE" | "EXTERNAL";
  LoadBalancers?: LoadBalancer[];
  NetworkConfiguration?: NetworkConfiguration;
  PlacementConstraints?: PlacementConstraint[];
  PlacementStrategies?: PlacementStrategy[];
  PlatformVersion?: string;
  PropagateTags?: "SERVICE" | "TASK_DEFINITION";
  Role?: string;
  SchedulingStrategy?: "DAEMON" | "REPLICA";
  ServiceConnectConfiguration?: ServiceConnectConfiguration;
  ServiceName?: string;
  ServiceRegistries?: ServiceRegistry[];
  Tags?: Tag[];
  TaskDefinition?: string;
};
/**
 * Attribute type definition for `AWS::ECS::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#aws-resource-ecs-service-return-values}
 */
export type ECSServiceAttributes = {
  Name: string;
  ServiceArn: string;
};
/**
 * Type definition for `AWS::ECS::Service.AwsVpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html}
 */
export type AwsVpcConfiguration = {
  AssignPublicIp?: "DISABLED" | "ENABLED";
  SecurityGroups?: string[];
  Subnets?: string[];
};
/**
 * Type definition for `AWS::ECS::Service.CapacityProviderStrategyItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html}
 */
export type CapacityProviderStrategyItem = {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentAlarms`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html}
 */
export type DeploymentAlarms = {
  AlarmNames: string[];
  Enable: boolean;
  Rollback: boolean;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentCircuitBreaker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html}
 */
export type DeploymentCircuitBreaker = {
  Enable: boolean;
  Rollback: boolean;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html}
 */
export type DeploymentConfiguration = {
  Alarms?: DeploymentAlarms;
  DeploymentCircuitBreaker?: DeploymentCircuitBreaker;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
};
/**
 * Type definition for `AWS::ECS::Service.DeploymentController`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcontroller.html}
 */
export type DeploymentController = {
  Type?: "CODE_DEPLOY" | "ECS" | "EXTERNAL";
};
/**
 * Type definition for `AWS::ECS::Service.EBSTagSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html}
 */
export type EBSTagSpecification = {
  PropagateTags?: "SERVICE" | "TASK_DEFINITION";
  ResourceType: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::ECS::Service.LoadBalancer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html}
 */
export type LoadBalancer = {
  ContainerName?: string;
  ContainerPort?: number;
  LoadBalancerName?: string;
  TargetGroupArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html}
 */
export type LogConfiguration = {
  LogDriver?: string;
  Options?: Record<string, string>;
  SecretOptions?: Secret[];
};
/**
 * Type definition for `AWS::ECS::Service.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  AwsvpcConfiguration?: AwsVpcConfiguration;
};
/**
 * Type definition for `AWS::ECS::Service.PlacementConstraint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html}
 */
export type PlacementConstraint = {
  Expression?: string;
  Type: "distinctInstance" | "memberOf";
};
/**
 * Type definition for `AWS::ECS::Service.PlacementStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html}
 */
export type PlacementStrategy = {
  Field?: string;
  Type: "binpack" | "random" | "spread";
};
/**
 * Type definition for `AWS::ECS::Service.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html}
 */
export type Secret = {
  Name: string;
  ValueFrom: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectClientAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html}
 */
export type ServiceConnectClientAlias = {
  DnsName?: string;
  Port: number;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html}
 */
export type ServiceConnectConfiguration = {
  Enabled: boolean;
  LogConfiguration?: LogConfiguration;
  Namespace?: string;
  Services?: ServiceConnectService[];
};
/**
 * Type definition for `AWS::ECS::Service.ServiceConnectService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html}
 */
export type ServiceConnectService = {
  ClientAliases?: ServiceConnectClientAlias[];
  DiscoveryName?: string;
  IngressPortOverride?: number;
  PortName: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceManagedEBSVolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html}
 */
export type ServiceManagedEBSVolumeConfiguration = {
  Encrypted?: boolean;
  FilesystemType?: string;
  Iops?: number;
  KmsKeyId?: string;
  RoleArn: string;
  SizeInGiB?: number;
  SnapshotId?: string;
  TagSpecifications?: EBSTagSpecification[];
  Throughput?: number;
  VolumeType?: string;
};
/**
 * Type definition for `AWS::ECS::Service.ServiceRegistry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html}
 */
export type ServiceRegistry = {
  ContainerName?: string;
  ContainerPort?: number;
  Port?: number;
  RegistryArn?: string;
};
/**
 * Type definition for `AWS::ECS::Service.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::ECS::Service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html}
 */
export class ECSService extends $Resource<
  "AWS::ECS::Service",
  ECSServiceProperties,
  ECSServiceAttributes
> {
  public static readonly Type = "AWS::ECS::Service";
  public static readonly AttributeNames = [
    "Name" as const,
    "ServiceArn" as const,
  ];
  constructor(
    logicalId: string,
    properties: ECSServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ECSService.Type,
      properties,
      ECSService.AttributeNames,
      options,
    );
  }
}
