import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
    NetworkInterfaces: {
      /**
       * The Availability Zone.
       */
      AvailabilityZone: string;
      /**
       * The network interface identifier.
       */
      NetworkInterfaceId: string;
      /**
       * The IPv4 address of the network interface within the subnet.
       */
      PrivateIpAddress: string;
      /**
       * The subnet identifier.
       */
      SubnetId: string;
    }[];
    /**
     * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
     */
    VpcEndpointId: string;
    /**
     * The VPC identifier that the endpoint is associated.
     */
    VpcId: string;
  };
  /**
   * A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.
   */
  VpcSecurityGroups: {
    /**
     * The status of the VPC security group.
     */
    Status: string;
    /**
     * The identifier of the VPC security group.
     */
    VpcSecurityGroupId: string;
  }[];
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
  constructor(
    logicalId: string,
    properties: RedshiftEndpointAccessProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftEndpointAccess.Type, properties, options);
  }
}
