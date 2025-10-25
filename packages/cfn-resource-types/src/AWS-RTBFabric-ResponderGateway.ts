import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RTBFabric::ResponderGateway Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-respondergateway.html}
 */
export type RTBFabricResponderGatewayProperties = {
  /**
   * @pattern `^[A-Za-z0-9 ]+$`
   */
  Description?: string;
  /**
   * @pattern `^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)(?:\.(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?))+$`
   */
  DomainName?: string;
  ManagedEndpointConfiguration?: ManagedEndpointConfiguration;
  /**
   * @min `1`
   * @max `65535`
   */
  Port: number;
  Protocol: Protocol;
  /**
   * The ID of one or more security groups in order to create a gateway.
   * @minLength `1`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of one or more subnets in order to create a gateway.
   * @minLength `1`
   */
  SubnetIds: string[];
  /**
   * Tags to assign to the Responder Gateway.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  TrustStoreConfiguration?: TrustStoreConfiguration;
  /**
   * @minLength `5`
   * @maxLength `50`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::RTBFabric::ResponderGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-respondergateway.html#aws-resource-rtbfabric-respondergateway-return-values}
 */
export type RTBFabricResponderGatewayAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws:(rtbfabric|rtbfabric):[a-zA-Z0-9_-]+:[0-9]{12}:gateway/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  CreatedTimestamp: string;
  /**
   * @pattern `^(rtbapp-[a-z0-9-]{1,25}|rtb-gw-[a-z0-9-]{1,25})$`
   */
  GatewayId: string;
  ResponderGatewayStatus: ResponderGatewayStatus;
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.AutoScalingGroupsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-autoscalinggroupsconfiguration.html}
 */
export type AutoScalingGroupsConfiguration = {
  AutoScalingGroupNameList: string[];
  RoleArn: string;
};
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.EksEndpointsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-eksendpointsconfiguration.html}
 */
export type EksEndpointsConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2097152`
   */
  ClusterApiServerCaCertificateChain: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^(https|http)://(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)(?:\.(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?))+$`
   */
  ClusterApiServerEndpointUri: string;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9]$`
   */
  ClusterName: string;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9]$`
   */
  EndpointsResourceName: string;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9]$`
   */
  EndpointsResourceNamespace: string;
  RoleArn: string;
};
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.ManagedEndpointConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-managedendpointconfiguration.html}
 */
export type ManagedEndpointConfiguration =
  | {
      AutoScalingGroupsConfiguration: AutoScalingGroupsConfiguration;
    }
  | {
      EksEndpointsConfiguration: EksEndpointsConfiguration;
    };
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.Protocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-protocol.html}
 */
export type Protocol = "HTTP" | "HTTPS";
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.ResponderGatewayStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-respondergatewaystatus.html}
 */
export type ResponderGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION";
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::RTBFabric::ResponderGateway.TrustStoreConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-respondergateway-truststoreconfiguration.html}
 */
export type TrustStoreConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1`
   */
  CertificateAuthorityCertificates: string[];
};
/**
 * Resource Type definition for AWS::RTBFabric::ResponderGateway Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-respondergateway.html}
 */
export class RTBFabricResponderGateway extends $Resource<
  "AWS::RTBFabric::ResponderGateway",
  RTBFabricResponderGatewayProperties,
  RTBFabricResponderGatewayAttributes
> {
  public static readonly Type = "AWS::RTBFabric::ResponderGateway";
  constructor(
    logicalId: string,
    properties: RTBFabricResponderGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RTBFabricResponderGateway.Type, properties, options);
  }
}
