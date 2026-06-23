import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::NetworkConnector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-networkconnector.html}
 */
export type LambdaNetworkConnectorProperties = {
  /**
   * The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC.
   */
  Configuration: Config;
  /**
   * A unique name for the network connector within your account and Region. Must be 1 to 64 alphanumeric characters, hyphens, or underscores.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^(arn:aws[a-zA-Z-]*:lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:network-connector:[a-zA-Z0-9-_]+(:[1-9]|[1-9][0-9]+)?)|[a-zA-Z0-9_-]{1,64}$`
   */
  Name?: string;
  /**
   * The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. This role must have permissions for ec2:CreateNetworkInterface and related describe operations.
   * @minLength `0`
   * @maxLength `10000`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  OperatorRole?: string;
  /**
   * A list of tags to apply to the network connector. Use tags to categorize network connectors for cost allocation, access control, or operational management.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lambda::NetworkConnector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-networkconnector.html#aws-resource-lambda-networkconnector-return-values}
 */
export type LambdaNetworkConnectorAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the network connector.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^(arn:aws[a-zA-Z-]*:lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:network-connector:[a-zA-Z0-9-_]+(:[1-9]|[1-9][0-9]+)?)$`
   */
  Arn: string;
  /**
   * The current state of the network connector.
   */
  State: State;
};
/**
 * Type definition for `AWS::Lambda::NetworkConnector.Config`.
 * The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-networkconnector-config.html}
 */
export type Config = {
  /**
   * The VPC egress configuration for the network connector. Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.
   */
  VpcEgressConfiguration: VpcEgressConfiguration;
};
/**
 * Type definition for `AWS::Lambda::NetworkConnector.State`.
 * The current state of the network connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-networkconnector-state.html}
 */
export type State =
  | "PENDING"
  | "ACTIVE"
  | "INACTIVE"
  | "FAILED"
  | "DELETING"
  | "DELETE_FAILED";
/**
 * Type definition for `AWS::Lambda::NetworkConnector.Tag`.
 * A key-value pair that provides metadata for the network connector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-networkconnector-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Lambda::NetworkConnector.VpcEgressConfiguration`.
 * The VPC egress configuration for the network connector. Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-networkconnector-vpcegressconfiguration.html}
 */
export type VpcEgressConfiguration = {
  /**
   * The types of Lambda compute resources that can use this connector. Currently, only MicroVm is supported.
   * @minLength `1`
   * @maxLength `1`
   */
  AssociatedComputeResourceTypes: "MicroVm"[];
  /**
   * The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6.
   */
  NetworkProtocol?: "IPv4" | "DualStack";
  /**
   * The IDs of the VPC security groups to attach to the ENIs. Specify 0 to 5 security groups. All security groups must be in the same VPC as the subnets.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). Specify 1 to 16 subnets. All subnets must be in the same VPC.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
};
/**
 * Resource Type definition for AWS::Lambda::NetworkConnector
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-networkconnector.html}
 */
export class LambdaNetworkConnector extends $Resource<
  "AWS::Lambda::NetworkConnector",
  LambdaNetworkConnectorProperties,
  LambdaNetworkConnectorAttributes
> {
  public static readonly Type = "AWS::Lambda::NetworkConnector";
  constructor(
    logicalId: string,
    properties: LambdaNetworkConnectorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaNetworkConnector.Type, properties, options);
  }
}
