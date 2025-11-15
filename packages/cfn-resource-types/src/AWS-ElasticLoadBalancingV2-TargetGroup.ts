import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TargetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html}
 */
export type ElasticLoadBalancingV2TargetGroupProperties = {
  /**
   * Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.
   */
  HealthCheckEnabled?: boolean;
  /**
   * The approximate amount of time, in seconds, between health checks of an individual target.
   */
  HealthCheckIntervalSeconds?: number;
  /**
   * [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.
   */
  HealthCheckPath?: string;
  /**
   * The port the load balancer uses when performing health checks on targets.
   */
  HealthCheckPort?: string;
  /**
   * The protocol the load balancer uses when performing health checks on targets.
   */
  HealthCheckProtocol?: string;
  /**
   * The amount of time, in seconds, during which no response from a target means a failed health check.
   */
  HealthCheckTimeoutSeconds?: number;
  /**
   * The number of consecutive health checks successes required before considering an unhealthy target healthy.
   */
  HealthyThresholdCount?: number;
  /**
   * The type of IP address used for this target group. The possible values are ipv4 and ipv6.
   */
  IpAddressType?: string;
  /**
   * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
   */
  Matcher?: Matcher;
  /**
   * The name of the target group.
   */
  Name?: string;
  /**
   * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
   */
  Port?: number;
  /**
   * The protocol to use for routing traffic to the targets.
   */
  Protocol?: string;
  /**
   * [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.
   */
  ProtocolVersion?: string;
  /**
   * The tags.
   */
  Tags?: Tag[];
  /**
   * The attributes.
   */
  TargetGroupAttributes?: TargetGroupAttribute[];
  /**
   * The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.
   */
  TargetType?: string;
  /**
   * The targets.
   */
  Targets?: TargetDescription[];
  /**
   * The number of consecutive health check failures required before considering a target unhealthy.
   */
  UnhealthyThresholdCount?: number;
  /**
   * The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply.
   */
  VpcId?: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::TargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#aws-resource-elasticloadbalancingv2-targetgroup-return-values}
 */
export type ElasticLoadBalancingV2TargetGroupAttributes = {
  /**
   * The Amazon Resource Names (ARNs) of the load balancers that route traffic to this target group.
   */
  LoadBalancerArns: string[];
  /**
   * The ARN of the Target Group
   */
  TargetGroupArn: string;
  /**
   * The full name of the target group.
   */
  TargetGroupFullName: string;
  /**
   * The name of the target group.
   */
  TargetGroupName: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TargetGroup.Matcher`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-matcher.html}
 */
export type Matcher = {
  /**
   * You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12.
   */
  GrpcCode?: string;
  /**
   * For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values.
   */
  HttpCode?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TargetGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-tag.html}
 */
export type Tag = {
  /**
   * The value for the tag.
   */
  Key: string;
  /**
   * The key name of the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TargetGroup.TargetDescription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html}
 */
export type TargetDescription = {
  /**
   * An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
   */
  AvailabilityZone?: string;
  /**
   * The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target.
   */
  Id: string;
  /**
   * The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.
   */
  Port?: number;
  /**
   * The Server ID used by targets when using QUIC or TCP_QUIC protocols.
   */
  QuicServerId?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::TargetGroup.TargetGroupAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattribute.html}
 */
export type TargetGroupAttribute = {
  /**
   * The value of the attribute.
   */
  Key?: string;
  /**
   * The name of the attribute.
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TargetGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html}
 */
export class ElasticLoadBalancingV2TargetGroup extends $Resource<
  "AWS::ElasticLoadBalancingV2::TargetGroup",
  ElasticLoadBalancingV2TargetGroupProperties,
  ElasticLoadBalancingV2TargetGroupAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::TargetGroup";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2TargetGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2TargetGroup.Type,
      properties,
      options,
    );
  }
}
