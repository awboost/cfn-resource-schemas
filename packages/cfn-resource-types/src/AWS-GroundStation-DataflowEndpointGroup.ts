import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GroundStation::DataflowEndpointGroup`.
 * AWS Ground Station DataflowEndpointGroup schema for CloudFormation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html}
 */
export type GroundStationDataflowEndpointGroupProperties = {
  /**
   * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
   */
  ContactPostPassDurationSeconds?: number;
  /**
   * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
   */
  ContactPrePassDurationSeconds?: number;
  /**
   * @minLength `1`
   */
  EndpointDetails: EndpointDetails[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GroundStation::DataflowEndpointGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#aws-resource-groundstation-dataflowendpointgroup-return-values}
 */
export type GroundStationDataflowEndpointGroupAttributes = {
  /**
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.AgentStatus`.
 * The status of AgentEndpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-agentstatus.html}
 */
export type AgentStatus = "SUCCESS" | "FAILED" | "ACTIVE" | "INACTIVE";
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.AuditResults`.
 * The results of the audit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-auditresults.html}
 */
export type AuditResults = "HEALTHY" | "UNHEALTHY";
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.AwsGroundStationAgentEndpoint`.
 * Information about AwsGroundStationAgentEndpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html}
 */
export type AwsGroundStationAgentEndpoint = {
  /**
   * The status of AgentEndpoint.
   */
  AgentStatus?: AgentStatus;
  /**
   * The results of the audit.
   */
  AuditResults?: AuditResults;
  /**
   * Egress address of AgentEndpoint with an optional mtu.
   */
  EgressAddress?: ConnectionDetails;
  /**
   * Ingress address of AgentEndpoint with a port range and an optional mtu.
   */
  IngressAddress?: RangedConnectionDetails;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.ConnectionDetails`.
 * Egress address of AgentEndpoint with an optional mtu.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html}
 */
export type ConnectionDetails = {
  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   */
  Mtu?: number;
  SocketAddress?: SocketAddress;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.DataflowEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html}
 */
export type DataflowEndpoint = {
  Address?: SocketAddress;
  Mtu?: number;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.EndpointDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html}
 */
export type EndpointDetails = {
  /**
   * Information about AwsGroundStationAgentEndpoint.
   */
  AwsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;
  Endpoint?: DataflowEndpoint;
  SecurityDetails?: SecurityDetails;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.IntegerRange`.
 * An integer range that has a minimum and maximum value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html}
 */
export type IntegerRange = {
  /**
   * A maximum value.
   */
  Maximum?: number;
  /**
   * A minimum value.
   */
  Minimum?: number;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.RangedConnectionDetails`.
 * Ingress address of AgentEndpoint with a port range and an optional mtu.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html}
 */
export type RangedConnectionDetails = {
  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   */
  Mtu?: number;
  /**
   * A socket address with a port range.
   */
  SocketAddress?: RangedSocketAddress;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.RangedSocketAddress`.
 * A socket address with a port range.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html}
 */
export type RangedSocketAddress = {
  /**
   * IPv4 socket address.
   */
  Name?: string;
  /**
   * Port range of a socket address.
   */
  PortRange?: IntegerRange;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.SecurityDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html}
 */
export type SecurityDetails = {
  /**
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  RoleArn?: string;
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.SocketAddress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html}
 */
export type SocketAddress = {
  Name?: string;
  Port?: number;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-tag.html}
 */
export type Tag = {
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
   */
  Key: string;
  /**
   * @pattern `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::GroundStation::DataflowEndpointGroup`.
 * AWS Ground Station DataflowEndpointGroup schema for CloudFormation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html}
 */
export class GroundStationDataflowEndpointGroup extends $Resource<
  "AWS::GroundStation::DataflowEndpointGroup",
  GroundStationDataflowEndpointGroupProperties,
  GroundStationDataflowEndpointGroupAttributes
> {
  public static readonly Type = "AWS::GroundStation::DataflowEndpointGroup";
  constructor(
    logicalId: string,
    properties: GroundStationDataflowEndpointGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GroundStationDataflowEndpointGroup.Type,
      properties,
      options,
    );
  }
}
