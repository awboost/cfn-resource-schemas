import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GroundStation::DataflowEndpointGroupV2`.
 * Resource Type definition for AWS Ground Station DataflowEndpointGroupV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroupv2.html}
 */
export type GroundStationDataflowEndpointGroupV2Properties = {
  /**
   * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
   * @min `30`
   * @max `480`
   */
  ContactPostPassDurationSeconds?: number;
  /**
   * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
   * @min `30`
   * @max `480`
   */
  ContactPrePassDurationSeconds?: number;
  /**
   * @minLength `1`
   */
  Endpoints?: CreateEndpointDetails[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GroundStation::DataflowEndpointGroupV2`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroupv2.html#aws-resource-groundstation-dataflowendpointgroupv2-return-values}
 */
export type GroundStationDataflowEndpointGroupV2Attributes = {
  /**
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  Arn: string;
  /**
   * @minLength `1`
   */
  EndpointDetails: {
    /**
     * Information about DownlinkAwsGroundStationAgentEndpoint
     */
    DownlinkAwsGroundStationAgentEndpoint: {
      /**
       * The status of AgentEndpoint.
       */
      AgentStatus: AgentStatus;
      /**
       * The results of the audit.
       */
      AuditResults: AuditResults;
      /**
       * Dataflow details for downlink
       */
      DataflowDetails: {
        /**
         * Connection details for downlink, from ground station to agent, and customer to agent
         */
        AgentConnectionDetails: {
          /**
           * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
           */
          AgentIpAndPortAddress: {
            /**
             * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
             * @min `1400`
             * @max `1500`
             */
            Mtu: number;
            /**
             * A socket address with a port range.
             */
            SocketAddress: {
              /**
               * IPv4 socket address.
               * @pattern `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$`
               */
              Name: string;
              /**
               * Port range of a socket address.
               */
              PortRange: {
                /**
                 * A maximum value.
                 */
                Maximum: number;
                /**
                 * A minimum value.
                 */
                Minimum: number;
              };
            };
          };
          /**
           * Socket address of an uplink or downlink agent endpoint with an optional mtu.
           */
          EgressAddressAndPort: {
            /**
             * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
             * @min `1400`
             * @max `1500`
             */
            Mtu: number;
            SocketAddress: {
              /**
               * IPv4 socket address.
               */
              Name: string;
              /**
               * Port of a socket address.
               */
              Port: number;
            };
          };
        };
      };
      /**
       * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
       */
      Name: string;
    };
    /**
     * Information about UplinkAwsGroundStationAgentEndpoint
     */
    UplinkAwsGroundStationAgentEndpoint: {
      /**
       * The status of AgentEndpoint.
       */
      AgentStatus: AgentStatus;
      /**
       * The results of the audit.
       */
      AuditResults: AuditResults;
      /**
       * Dataflow details for uplink
       */
      DataflowDetails: {
        /**
         * Connection details for uplink, from ground station to agent, and customer to agent
         */
        AgentConnectionDetails: {
          /**
           * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
           */
          AgentIpAndPortAddress: {
            /**
             * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
             * @min `1400`
             * @max `1500`
             */
            Mtu: number;
            /**
             * A socket address with a port range.
             */
            SocketAddress: {
              /**
               * IPv4 socket address.
               * @pattern `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$`
               */
              Name: string;
              /**
               * Port range of a socket address.
               */
              PortRange: {
                /**
                 * A maximum value.
                 */
                Maximum: number;
                /**
                 * A minimum value.
                 */
                Minimum: number;
              };
            };
          };
          /**
           * Socket address of an uplink or downlink agent endpoint with an optional mtu.
           */
          IngressAddressAndPort: {
            /**
             * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
             * @min `1400`
             * @max `1500`
             */
            Mtu: number;
            SocketAddress: {
              /**
               * IPv4 socket address.
               */
              Name: string;
              /**
               * Port of a socket address.
               */
              Port: number;
            };
          };
        };
      };
      /**
       * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
       */
      Name: string;
    };
  }[];
  Id: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.AgentStatus`.
 * The status of AgentEndpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-agentstatus.html}
 */
export type AgentStatus = "SUCCESS" | "FAILED" | "ACTIVE" | "INACTIVE";
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.AuditResults`.
 * The results of the audit.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-auditresults.html}
 */
export type AuditResults = "HEALTHY" | "UNHEALTHY";
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.ConnectionDetails`.
 * Socket address of an uplink or downlink agent endpoint with an optional mtu.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-connectiondetails.html}
 */
export type ConnectionDetails = {
  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   * @min `1400`
   * @max `1500`
   */
  Mtu?: number;
  SocketAddress: SocketAddress;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.CreateEndpointDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-createendpointdetails.html}
 */
export type CreateEndpointDetails = {
  /**
   * Information about DownlinkAwsGroundStationAgentEndpoint used for create
   */
  DownlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpoint;
  /**
   * Information about UplinkAwsGroundStationAgentEndpoint used for create
   */
  UplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpoint;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.DownlinkAwsGroundStationAgentEndpoint`.
 * Information about DownlinkAwsGroundStationAgentEndpoint used for create
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-downlinkawsgroundstationagentendpoint.html}
 */
export type DownlinkAwsGroundStationAgentEndpoint = {
  /**
   * Dataflow details for downlink
   */
  DataflowDetails: DownlinkDataflowDetails;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.DownlinkAwsGroundStationAgentEndpointDetails`.
 * Information about DownlinkAwsGroundStationAgentEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-downlinkawsgroundstationagentendpointdetails.html}
 */
export type DownlinkAwsGroundStationAgentEndpointDetails = {
  /**
   * The status of AgentEndpoint.
   */
  AgentStatus?: AgentStatus;
  /**
   * The results of the audit.
   */
  AuditResults?: AuditResults;
  /**
   * Dataflow details for downlink
   */
  DataflowDetails: DownlinkDataflowDetails;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.DownlinkConnectionDetails`.
 * Connection details for downlink, from ground station to agent, and customer to agent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-downlinkconnectiondetails.html}
 */
export type DownlinkConnectionDetails = {
  /**
   * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
   */
  AgentIpAndPortAddress: RangedConnectionDetails;
  /**
   * Socket address of an uplink or downlink agent endpoint with an optional mtu.
   */
  EgressAddressAndPort: ConnectionDetails;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.DownlinkDataflowDetails`.
 * Dataflow details for downlink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-downlinkdataflowdetails.html}
 */
export type DownlinkDataflowDetails = {
  /**
   * Connection details for downlink, from ground station to agent, and customer to agent
   */
  AgentConnectionDetails?: DownlinkConnectionDetails;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.EndpointDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-endpointdetails.html}
 */
export type EndpointDetails = {
  /**
   * Information about DownlinkAwsGroundStationAgentEndpoint
   */
  DownlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpointDetails;
  /**
   * Information about UplinkAwsGroundStationAgentEndpoint
   */
  UplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpointDetails;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.IntegerRange`.
 * An integer range that has a minimum and maximum value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-integerrange.html}
 */
export type IntegerRange = {
  /**
   * A maximum value.
   */
  Maximum: number;
  /**
   * A minimum value.
   */
  Minimum: number;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.RangedConnectionDetails`.
 * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-rangedconnectiondetails.html}
 */
export type RangedConnectionDetails = {
  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   * @min `1400`
   * @max `1500`
   */
  Mtu?: number;
  /**
   * A socket address with a port range.
   */
  SocketAddress: RangedSocketAddress;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.RangedSocketAddress`.
 * A socket address with a port range.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-rangedsocketaddress.html}
 */
export type RangedSocketAddress = {
  /**
   * IPv4 socket address.
   * @pattern `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$`
   */
  Name: string;
  /**
   * Port range of a socket address.
   */
  PortRange: IntegerRange;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.SocketAddress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-socketaddress.html}
 */
export type SocketAddress = {
  /**
   * IPv4 socket address.
   */
  Name: string;
  /**
   * Port of a socket address.
   */
  Port: number;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-tag.html}
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
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.UplinkAwsGroundStationAgentEndpoint`.
 * Information about UplinkAwsGroundStationAgentEndpoint used for create
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-uplinkawsgroundstationagentendpoint.html}
 */
export type UplinkAwsGroundStationAgentEndpoint = {
  /**
   * Dataflow details for uplink
   */
  DataflowDetails: UplinkDataflowDetails;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.UplinkAwsGroundStationAgentEndpointDetails`.
 * Information about UplinkAwsGroundStationAgentEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-uplinkawsgroundstationagentendpointdetails.html}
 */
export type UplinkAwsGroundStationAgentEndpointDetails = {
  /**
   * The status of AgentEndpoint.
   */
  AgentStatus?: AgentStatus;
  /**
   * The results of the audit.
   */
  AuditResults?: AuditResults;
  /**
   * Dataflow details for uplink
   */
  DataflowDetails: UplinkDataflowDetails;
  /**
   * @pattern `^[ a-zA-Z0-9_:-]{1,256}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.UplinkConnectionDetails`.
 * Connection details for uplink, from ground station to agent, and customer to agent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-uplinkconnectiondetails.html}
 */
export type UplinkConnectionDetails = {
  /**
   * Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.
   */
  AgentIpAndPortAddress: RangedConnectionDetails;
  /**
   * Socket address of an uplink or downlink agent endpoint with an optional mtu.
   */
  IngressAddressAndPort: ConnectionDetails;
};
/**
 * Type definition for `AWS::GroundStation::DataflowEndpointGroupV2.UplinkDataflowDetails`.
 * Dataflow details for uplink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroupv2-uplinkdataflowdetails.html}
 */
export type UplinkDataflowDetails = {
  /**
   * Connection details for uplink, from ground station to agent, and customer to agent
   */
  AgentConnectionDetails?: UplinkConnectionDetails;
};
/**
 * Resource type definition for `AWS::GroundStation::DataflowEndpointGroupV2`.
 * Resource Type definition for AWS Ground Station DataflowEndpointGroupV2
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroupv2.html}
 */
export class GroundStationDataflowEndpointGroupV2 extends $Resource<
  "AWS::GroundStation::DataflowEndpointGroupV2",
  GroundStationDataflowEndpointGroupV2Properties,
  GroundStationDataflowEndpointGroupV2Attributes
> {
  public static readonly Type = "AWS::GroundStation::DataflowEndpointGroupV2";
  constructor(
    logicalId: string,
    properties: GroundStationDataflowEndpointGroupV2Properties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GroundStationDataflowEndpointGroupV2.Type,
      properties,
      options,
    );
  }
}
