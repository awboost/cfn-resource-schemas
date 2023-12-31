import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::CustomerGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html}
 */
export type EC2CustomerGatewayProperties = {
  /**
   * For devices that support BGP, the customer gateway's BGP ASN.
   */
  BgpAsn: number;
  /**
   * A name for the customer gateway device.
   */
  DeviceName?: string;
  /**
   * The internet-routable IP address for the customer gateway's outside interface. The address must be static.
   */
  IpAddress: string;
  /**
   * One or more tags for the customer gateway.
   */
  Tags?: Tag[];
  /**
   * The type of VPN connection that this customer gateway supports.
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EC2::CustomerGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#aws-resource-ec2-customergateway-return-values}
 */
export type EC2CustomerGatewayAttributes = {
  /**
   * CustomerGateway ID generated after customer gateway is created. Each customer gateway has a unique ID.
   */
  CustomerGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::CustomerGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-customergateway-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::CustomerGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html}
 */
export class EC2CustomerGateway extends $Resource<
  "AWS::EC2::CustomerGateway",
  EC2CustomerGatewayProperties,
  EC2CustomerGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::CustomerGateway";
  constructor(
    logicalId: string,
    properties: EC2CustomerGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2CustomerGateway.Type, properties, options);
  }
}
