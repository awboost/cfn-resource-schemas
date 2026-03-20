import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html}
 */
export type EC2InstanceConnectEndpointProperties = {
  /**
   * The client token of the instance connect endpoint.
   */
  ClientToken?: string;
  /**
   * Indicates whether your client's IP address is preserved as the source when you connect to a resource.
   */
  PreserveClientIp?: boolean;
  /**
   * The security groups associated with the endpoint.
   */
  SecurityGroupIds?: string[];
  /**
   * The ID of the subnet in which the EC2 Instance Connect Endpoint was created.
   */
  SubnetId: string;
  /**
   * The tags assigned to the EC2 Instance Connect Endpoint.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::InstanceConnectEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html#aws-resource-ec2-instanceconnectendpoint-return-values}
 */
export type EC2InstanceConnectEndpointAttributes = {
  /**
   * The Availability Zone of the EC2 Instance Connect Endpoint
   */
  AvailabilityZone: string;
  /**
   * The ID of the Availability Zone of the EC2 Instance Connect Endpoint
   */
  AvailabilityZoneId: string;
  /**
   * The date and time that the EC2 Instance Connect Endpoint was created
   */
  CreatedAt: string;
  /**
   * The ID of the EC2 Instance Connect Endpoint.
   */
  Id: string;
  /**
   * The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint
   */
  InstanceConnectEndpointArn: string;
  /**
   * The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2 Instance Connect Endpoint
   */
  NetworkInterfaceIds: string[];
  /**
   * The ID of the AWS account that created the EC2 Instance Connect Endpoint
   */
  OwnerId: string;
  /**
   * The public DNS names of the endpoint
   */
  PublicDnsNames: {
    /**
     * The dualstack DNS name of the EC2 Instance Connect Endpoint. A dualstack DNS name supports connections from both IPv4 and IPv6 clients.
     */
    Dualstack: {
      /**
       * The DNS name of the EC2 Instance Connect Endpoint.
       */
      DnsName: string;
      /**
       * The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.
       */
      FipsDnsName: string;
    };
    /**
     * The IPv4-only DNS name of the EC2 Instance Connect Endpoint.
     */
    Ipv4: {
      /**
       * The DNS name of the EC2 Instance Connect Endpoint.
       */
      DnsName: string;
      /**
       * The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.
       */
      FipsDnsName: string;
    };
  };
  /**
   * The current state of the EC2 Instance Connect Endpoint
   */
  State:
    | "create-in-progress"
    | "create-complete"
    | "create-failed"
    | "delete-in-progress"
    | "delete-complete"
    | "delete-failed"
    | "update-in-progress"
    | "update-complete"
    | "update-failed";
  /**
   * The message for the current state of the EC2 Instance Connect Endpoint. Can include a failure message
   */
  StateMessage: string;
  /**
   * The ID of the VPC in which the EC2 Instance Connect Endpoint was created
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::EC2::InstanceConnectEndpoint.InstanceConnectEndpointDnsNames`.
 * The DNS names of the endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instanceconnectendpoint-instanceconnectendpointdnsnames.html}
 */
export type InstanceConnectEndpointDnsNames = {
  /**
   * The DNS name of the EC2 Instance Connect Endpoint.
   */
  DnsName?: string;
  /**
   * The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.
   */
  FipsDnsName?: string;
};
/**
 * Type definition for `AWS::EC2::InstanceConnectEndpoint.InstanceConnectEndpointPublicDnsNames`.
 * The public DNS names of the endpoint, including IPv4-only and dualstack DNS names.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instanceconnectendpoint-instanceconnectendpointpublicdnsnames.html}
 */
export type InstanceConnectEndpointPublicDnsNames = {
  /**
   * The dualstack DNS name of the EC2 Instance Connect Endpoint. A dualstack DNS name supports connections from both IPv4 and IPv6 clients.
   */
  Dualstack?: InstanceConnectEndpointDnsNames;
  /**
   * The IPv4-only DNS name of the EC2 Instance Connect Endpoint.
   */
  Ipv4?: InstanceConnectEndpointDnsNames;
};
/**
 * Type definition for `AWS::EC2::InstanceConnectEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instanceconnectendpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html}
 */
export class EC2InstanceConnectEndpoint extends $Resource<
  "AWS::EC2::InstanceConnectEndpoint",
  EC2InstanceConnectEndpointProperties,
  EC2InstanceConnectEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::InstanceConnectEndpoint";
  constructor(
    logicalId: string,
    properties: EC2InstanceConnectEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2InstanceConnectEndpoint.Type, properties, options);
  }
}
