import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteServerPeer`.
 * VPC Route Server Peer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html}
 */
export type EC2RouteServerPeerProperties = {
  /**
   * BGP Options
   */
  BgpOptions: BgpOptions;
  /**
   * IP address of the Route Server Peer
   */
  PeerAddress: string;
  /**
   * Route Server Endpoint ID
   */
  RouteServerEndpointId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::RouteServerPeer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#aws-resource-ec2-routeserverpeer-return-values}
 */
export type EC2RouteServerPeerAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Route Server Peer.
   */
  Arn: string;
  /**
   * Elastic Network Interface IP address owned by the Route Server Endpoint
   */
  EndpointEniAddress: string;
  /**
   * Elastic Network Interface ID owned by the Route Server Endpoint
   */
  EndpointEniId: string;
  /**
   * The ID of the Route Server Peer.
   */
  Id: string;
  /**
   * Route Server ID
   */
  RouteServerId: string;
  /**
   * Subnet ID
   */
  SubnetId: string;
  /**
   * VPC ID
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::EC2::RouteServerPeer.BgpOptions`.
 * BGP Options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routeserverpeer-bgpoptions.html}
 */
export type BgpOptions = {
  /**
   * BGP ASN of the Route Server Peer
   * @min `1`
   * @max `4294967294`
   */
  PeerAsn?: number;
  /**
   * BGP Liveness Detection
   */
  PeerLivenessDetection?: "bfd" | "bgp-keepalive";
};
/**
 * Type definition for `AWS::EC2::RouteServerPeer.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routeserverpeer-tag.html}
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
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::RouteServerPeer`.
 * VPC Route Server Peer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html}
 */
export class EC2RouteServerPeer extends $Resource<
  "AWS::EC2::RouteServerPeer",
  EC2RouteServerPeerProperties,
  EC2RouteServerPeerAttributes
> {
  public static readonly Type = "AWS::EC2::RouteServerPeer";
  constructor(
    logicalId: string,
    properties: EC2RouteServerPeerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteServerPeer.Type, properties, options);
  }
}
