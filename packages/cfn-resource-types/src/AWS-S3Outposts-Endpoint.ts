import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html}
 */
export type S3OutpostsEndpointProperties = {
  /**
   * The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.
   */
  AccessType?: "CustomerOwnedIp" | "Private";
  /**
   * The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.
   * @pattern `^ipv4pool-coip-([0-9a-f]{17})$`
   */
  CustomerOwnedIpv4Pool?: string;
  /**
   * The failure reason, if any, for a create or delete endpoint operation.
   */
  FailedReason?: FailedReason;
  /**
   * The id of the customer outpost on which the bucket resides.
   * @pattern `^(op-[a-f0-9]{17}|\d{12}|ec2)$`
   */
  OutpostId: string;
  /**
   * The ID of the security group to use with the endpoint.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^sg-([0-9a-f]{8}|[0-9a-f]{17})$`
   */
  SecurityGroupId: string;
  /**
   * The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^subnet-([0-9a-f]{8}|[0-9a-f]{17})$`
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::S3Outposts::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#aws-resource-s3outposts-endpoint-return-values}
 */
export type S3OutpostsEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   * @minLength `5`
   * @maxLength `500`
   * @pattern `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/endpoint/[a-zA-Z0-9]{19}$`
   */
  Arn: string;
  /**
   * The VPC CIDR committed by this endpoint.
   * @minLength `1`
   * @maxLength `20`
   */
  CidrBlock: string;
  /**
   * The time the endpoint was created.
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreationTime: string;
  /**
   * The ID of the endpoint.
   * @minLength `5`
   * @maxLength `500`
   * @pattern `^[a-zA-Z0-9]{19}$`
   */
  Id: string;
  /**
   * The network interfaces of the endpoint.
   */
  NetworkInterfaces: NetworkInterface[];
  Status:
    | "Available"
    | "Pending"
    | "Deleting"
    | "Create_Failed"
    | "Delete_Failed";
};
/**
 * Type definition for `AWS::S3Outposts::Endpoint.FailedReason`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-failedreason.html}
 */
export type FailedReason = {
  /**
   * The failure code, if any, for a create or delete endpoint operation.
   */
  ErrorCode?: string;
  /**
   * Additional error details describing the endpoint failure and recommended action.
   */
  Message?: string;
};
/**
 * Type definition for `AWS::S3Outposts::Endpoint.NetworkInterface`.
 * The container for the network interface.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  NetworkInterfaceId: string;
};
/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html}
 */
export class S3OutpostsEndpoint extends $Resource<
  "AWS::S3Outposts::Endpoint",
  S3OutpostsEndpointProperties,
  S3OutpostsEndpointAttributes
> {
  public static readonly Type = "AWS::S3Outposts::Endpoint";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CidrBlock" as const,
    "CreationTime" as const,
    "Id" as const,
    "NetworkInterfaces" as const,
    "Status" as const,
  ];
  constructor(
    logicalId: string,
    properties: S3OutpostsEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3OutpostsEndpoint.Type,
      properties,
      S3OutpostsEndpoint.AttributeNames,
      options,
    );
  }
}
