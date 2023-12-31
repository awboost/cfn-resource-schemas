import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Redshift::EndpointAccess`.
 * Resource schema for a Redshift-managed VPC endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export type RedshiftEndpointAccessProperties = {
  /**
   * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
   */
  ClusterIdentifier: string;
  /**
   * The name of the endpoint.
   * @pattern `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,30}$`
   */
  EndpointName: string;
  /**
   * The AWS account ID of the owner of the cluster.
   * @pattern `^\d{12}$`
   */
  ResourceOwner?: string;
  /**
   * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
   * @pattern `^(?=^[a-zA-Z0-9-]+$).{1,255}$`
   */
  SubnetGroupName: string;
  /**
   * A list of vpc security group ids to apply to the created endpoint access.
   */
  VpcSecurityGroupIds: string[];
};
/**
 * Attribute type definition for `AWS::Redshift::EndpointAccess`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#aws-resource-redshift-endpointaccess-return-values}
 */
export type RedshiftEndpointAccessAttributes = {
  /**
   * The DNS address of the endpoint.
   */
  Address: string;
  /**
   * The time (UTC) that the endpoint was created.
   */
  EndpointCreateTime: string;
  /**
   * The status of the endpoint.
   */
  EndpointStatus: string;
  /**
   * The port number on which the cluster accepts incoming connections.
   */
  Port: number;
  /**
   * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
   */
  VpcEndpoint: {
    /**
     * One or more network interfaces of the endpoint. Also known as an interface endpoint.
     */
    NetworkInterfaces?: NetworkInterface[];
    /**
     * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
     */
    VpcEndpointId?: string;
    /**
     * The VPC identifier that the endpoint is associated.
     */
    VpcId?: string;
  };
  /**
   * A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.
   */
  VpcSecurityGroups: VpcSecurityGroup[];
};
/**
 * Type definition for `AWS::Redshift::EndpointAccess.NetworkInterface`.
 * Describes a network interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * The Availability Zone.
   */
  AvailabilityZone?: string;
  /**
   * The network interface identifier.
   */
  NetworkInterfaceId?: string;
  /**
   * The IPv4 address of the network interface within the subnet.
   */
  PrivateIpAddress?: string;
  /**
   * The subnet identifier.
   */
  SubnetId?: string;
};
/**
 * Type definition for `AWS::Redshift::EndpointAccess.VpcSecurityGroup`.
 * Describes the members of a VPC security group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html}
 */
export type VpcSecurityGroup = {
  /**
   * The status of the VPC security group.
   */
  Status?: string;
  /**
   * The identifier of the VPC security group.
   */
  VpcSecurityGroupId?: string;
};
/**
 * Resource type definition for `AWS::Redshift::EndpointAccess`.
 * Resource schema for a Redshift-managed VPC endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export class RedshiftEndpointAccess extends $Resource<
  "AWS::Redshift::EndpointAccess",
  RedshiftEndpointAccessProperties,
  RedshiftEndpointAccessAttributes
> {
  public static readonly Type = "AWS::Redshift::EndpointAccess";
  public static readonly AttributeNames = [
    "Address" as const,
    "EndpointCreateTime" as const,
    "EndpointStatus" as const,
    "Port" as const,
    "VpcEndpoint" as const,
    "VpcSecurityGroups" as const,
  ];
  constructor(
    logicalId: string,
    properties: RedshiftEndpointAccessProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RedshiftEndpointAccess.Type,
      properties,
      RedshiftEndpointAccess.AttributeNames,
      options,
    );
  }
}
