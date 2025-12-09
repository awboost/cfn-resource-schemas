import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ECS::ExpressGatewayService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-expressgatewayservice.html}
 */
export type ECSExpressGatewayServiceProperties = {
  Cluster?: string;
  Cpu?: string;
  ExecutionRoleArn: string;
  HealthCheckPath?: string;
  InfrastructureRoleArn: string;
  Memory?: string;
  NetworkConfiguration?: ExpressGatewayServiceNetworkConfiguration;
  PrimaryContainer: ExpressGatewayContainer;
  ScalingTarget?: ExpressGatewayScalingTarget;
  ServiceName?: string;
  Tags?: Tag[];
  TaskRoleArn?: string;
};
/**
 * Attribute type definition for `AWS::ECS::ExpressGatewayService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-expressgatewayservice.html#aws-resource-ecs-expressgatewayservice-return-values}
 */
export type ECSExpressGatewayServiceAttributes = {
  ActiveConfigurations: {
    Cpu: string;
    CreatedAt: string;
    ExecutionRoleArn: string;
    HealthCheckPath: string;
    IngressPaths: {
      AccessType: AccessType;
      Endpoint: string;
    }[];
    Memory: string;
    NetworkConfiguration: {
      SecurityGroups: string[];
      Subnets: string[];
    };
    PrimaryContainer: {
      AwsLogsConfiguration: {
        LogGroup: string;
        LogStreamPrefix: string;
      };
      Command: string[];
      ContainerPort: number;
      Environment: {
        Name: string;
        Value: string;
      }[];
      Image: string;
      RepositoryCredentials: {
        CredentialsParameter: string;
      };
      Secrets: {
        Name: string;
        ValueFrom: string;
      }[];
    };
    ScalingTarget: {
      AutoScalingMetric: ExpressGatewayServiceScalingMetric;
      AutoScalingTargetValue: number;
      MaxTaskCount: number;
      MinTaskCount: number;
    };
    ServiceRevisionArn: string;
    TaskRoleArn: string;
  }[];
  CreatedAt: string;
  ECSManagedResourceArns: {
    AutoScaling: {
      ApplicationAutoScalingPolicies: string[];
      ScalableTarget: string;
    };
    IngressPath: {
      CertificateArn: string;
      ListenerArn: string;
      ListenerRuleArn: string;
      LoadBalancerArn: string;
      LoadBalancerSecurityGroups: string[];
      TargetGroupArns: string[];
    };
    LogGroups: string[];
    MetricAlarms: string[];
    ServiceSecurityGroups: string[];
  };
  Endpoint: string;
  ServiceArn: string;
  Status: {
    StatusCode: ExpressGatewayServiceStatusCode;
  };
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.AccessType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-accesstype.html}
 */
export type AccessType = "PUBLIC" | "PRIVATE";
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayContainer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewaycontainer.html}
 */
export type ExpressGatewayContainer = {
  AwsLogsConfiguration?: ExpressGatewayServiceAwsLogsConfiguration;
  Command?: string[];
  ContainerPort?: number;
  Environment?: KeyValuePair[];
  Image: string;
  RepositoryCredentials?: ExpressGatewayRepositoryCredentials;
  Secrets?: Secret[];
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayRepositoryCredentials`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayrepositorycredentials.html}
 */
export type ExpressGatewayRepositoryCredentials = {
  CredentialsParameter: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayScalingTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayscalingtarget.html}
 */
export type ExpressGatewayScalingTarget = {
  AutoScalingMetric?: ExpressGatewayServiceScalingMetric;
  AutoScalingTargetValue?: number;
  MaxTaskCount?: number;
  MinTaskCount?: number;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceAwsLogsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayserviceawslogsconfiguration.html}
 */
export type ExpressGatewayServiceAwsLogsConfiguration = {
  LogGroup: string;
  LogStreamPrefix: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayserviceconfiguration.html}
 */
export type ExpressGatewayServiceConfiguration = {
  Cpu?: string;
  CreatedAt?: string;
  ExecutionRoleArn?: string;
  HealthCheckPath?: string;
  IngressPaths?: IngressPathSummary[];
  Memory?: string;
  NetworkConfiguration?: ExpressGatewayServiceNetworkConfiguration;
  PrimaryContainer?: ExpressGatewayContainer;
  ScalingTarget?: ExpressGatewayScalingTarget;
  ServiceRevisionArn?: string;
  TaskRoleArn?: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceNetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayservicenetworkconfiguration.html}
 */
export type ExpressGatewayServiceNetworkConfiguration = {
  SecurityGroups?: string[];
  Subnets?: string[];
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceScalingMetric`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayservicescalingmetric.html}
 */
export type ExpressGatewayServiceScalingMetric =
  | "AVERAGE_CPU"
  | "AVERAGE_MEMORY"
  | "REQUEST_COUNT_PER_TARGET";
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayservicestatus.html}
 */
export type ExpressGatewayServiceStatus = {
  StatusCode?: ExpressGatewayServiceStatusCode;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.ExpressGatewayServiceStatusCode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-expressgatewayservicestatuscode.html}
 */
export type ExpressGatewayServiceStatusCode =
  | "ACTIVE"
  | "DRAINING"
  | "INACTIVE";
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.IngressPathSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-ingresspathsummary.html}
 */
export type IngressPathSummary = {
  AccessType?: AccessType;
  Endpoint?: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.KeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-keyvaluepair.html}
 */
export type KeyValuePair = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-secret.html}
 */
export type Secret = {
  Name: string;
  ValueFrom: string;
};
/**
 * Type definition for `AWS::ECS::ExpressGatewayService.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-expressgatewayservice-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::ECS::ExpressGatewayService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-expressgatewayservice.html}
 */
export class ECSExpressGatewayService extends $Resource<
  "AWS::ECS::ExpressGatewayService",
  ECSExpressGatewayServiceProperties,
  ECSExpressGatewayServiceAttributes
> {
  public static readonly Type = "AWS::ECS::ExpressGatewayService";
  constructor(
    logicalId: string,
    properties: ECSExpressGatewayServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECSExpressGatewayService.Type, properties, options);
  }
}
