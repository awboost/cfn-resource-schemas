import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteServer`.
 * VPC Route Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserver.html}
 */
export type EC2RouteServerProperties = {
  /**
   * The Amazon-side ASN of the Route Server.
   * @min `1`
   * @max `4294967294`
   */
  AmazonSideAsn: number;
  /**
   * Whether to enable persistent routes
   */
  PersistRoutes?: "enable" | "disable";
  /**
   * The duration of persistent routes in minutes
   * @min `0`
   * @max `5`
   */
  PersistRoutesDuration?: number;
  /**
   * Whether to enable SNS notifications
   */
  SnsNotificationsEnabled?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::RouteServer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserver.html#aws-resource-ec2-routeserver-return-values}
 */
export type EC2RouteServerAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Route Server.
   */
  Arn: string;
  /**
   * The ID of the Route Server.
   */
  Id: string;
};
/**
 * Type definition for `AWS::EC2::RouteServer.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-routeserver-tag.html}
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
 * Resource type definition for `AWS::EC2::RouteServer`.
 * VPC Route Server
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserver.html}
 */
export class EC2RouteServer extends $Resource<
  "AWS::EC2::RouteServer",
  EC2RouteServerProperties,
  EC2RouteServerAttributes
> {
  public static readonly Type = "AWS::EC2::RouteServer";
  constructor(
    logicalId: string,
    properties: EC2RouteServerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteServer.Type, properties, options);
  }
}
