import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteServerEndpoint`.
 * VPC Route Server Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverendpoint.html}
 */
export type EC2RouteServerEndpointProperties = {
  /**
   * Route Server ID
   */
  RouteServerId: string;
  /**
   * Subnet ID
   */
  SubnetId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::RouteServerEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverendpoint.html#aws-resource-ec2-routeserverendpoint-return-values}
 */
export type EC2RouteServerEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Route Server Endpoint.
   */
  Arn: string;
  /**
   * Elastic Network Interface IP address owned by the Route Server Endpoint
   */
  EniAddress: string;
  /**
   * Elastic Network Interface ID owned by the Route Server Endpoint
   */
  EniId: string;
  /**
   * The ID of the Route Server Endpoint.
   */
  Id: string;
  /**
   * VPC ID
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::EC2::RouteServerEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routeserverendpoint-tag.html}
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
 * Resource type definition for `AWS::EC2::RouteServerEndpoint`.
 * VPC Route Server Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverendpoint.html}
 */
export class EC2RouteServerEndpoint extends $Resource<
  "AWS::EC2::RouteServerEndpoint",
  EC2RouteServerEndpointProperties,
  EC2RouteServerEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::RouteServerEndpoint";
  constructor(
    logicalId: string,
    properties: EC2RouteServerEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteServerEndpoint.Type, properties, options);
  }
}
