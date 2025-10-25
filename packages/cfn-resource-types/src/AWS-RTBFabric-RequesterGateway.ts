import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RTBFabric::RequesterGateway Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-requestergateway.html}
 */
export type RTBFabricRequesterGatewayProperties = {
  /**
   * @pattern `^[A-Za-z0-9 ]+$`
   */
  Description?: string;
  /**
   * The ID of one or more security groups in order to create a requester gateway.
   * @minLength `1`
   */
  SecurityGroupIds: string[];
  /**
   * The ID of one or more subnets in order to create a requester gateway.
   * @minLength `1`
   */
  SubnetIds: string[];
  /**
   * Tags to assign to the Requester Gateway.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `5`
   * @maxLength `50`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::RTBFabric::RequesterGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-requestergateway.html#aws-resource-rtbfabric-requestergateway-return-values}
 */
export type RTBFabricRequesterGatewayAttributes = {
  ActiveLinksCount: number;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws:(rtbfabric|rtbfabric):[a-zA-Z0-9_-]+:[0-9]{12}:gateway/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  CreatedTimestamp: string;
  /**
   * @pattern `^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)(?:\.(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?))+$`
   */
  DomainName: string;
  /**
   * @pattern `^(rtbapp-[a-z0-9-]{1,25}|rtb-gw-[a-z0-9-]{1,25})$`
   */
  GatewayId: string;
  RequesterGatewayStatus: RequesterGatewayStatus;
  TotalLinksCount: number;
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::RTBFabric::RequesterGateway.RequesterGatewayStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-requestergateway-requestergatewaystatus.html}
 */
export type RequesterGatewayStatus =
  | "PENDING_CREATION"
  | "ACTIVE"
  | "PENDING_DELETION"
  | "DELETED"
  | "ERROR"
  | "PENDING_UPDATE"
  | "ISOLATED"
  | "PENDING_ISOLATION"
  | "PENDING_RESTORATION";
/**
 * Type definition for `AWS::RTBFabric::RequesterGateway.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-requestergateway-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(resourceArn|internalId|(?!aws:)[a-zA-Z0-9+\-=._:/@]+)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `1600`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::RTBFabric::RequesterGateway Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-requestergateway.html}
 */
export class RTBFabricRequesterGateway extends $Resource<
  "AWS::RTBFabric::RequesterGateway",
  RTBFabricRequesterGatewayProperties,
  RTBFabricRequesterGatewayAttributes
> {
  public static readonly Type = "AWS::RTBFabric::RequesterGateway";
  constructor(
    logicalId: string,
    properties: RTBFabricRequesterGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RTBFabricRequesterGateway.Type, properties, options);
  }
}
