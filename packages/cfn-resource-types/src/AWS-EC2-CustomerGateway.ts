import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::CustomerGateway`.
 * Specifies a customer gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html}
 */
export type EC2CustomerGatewayProperties = {
  /**
     * For customer gateway devices that support BGP, specify the device's ASN. You must specify either ``BgpAsn`` or ``BgpAsnExtended`` when creating the customer gateway. If the ASN is larger than ``2,147,483,647``, you must use ``BgpAsnExtended``.
     Default: 65000
     Valid values: ``1`` to ``2,147,483,647``
     */
  BgpAsn?: number;
  /**
     * For customer gateway devices that support BGP, specify the device's ASN. You must specify either ``BgpAsn`` or ``BgpAsnExtended`` when creating the customer gateway. If the ASN is larger than ``2,147,483,647``, you must use ``BgpAsnExtended``.
     Valid values: ``2,147,483,648`` to ``4,294,967,295``
     * @min `2147483648`
     * @max `4294967294`
     */
  BgpAsnExtended?: number;
  /**
   * The Amazon Resource Name (ARN) for the customer gateway certificate.
   * @pattern `^arn:(aws[a-zA-Z-]*)?:acm:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:certificate\/[a-zA-Z0-9-_]+$`
   */
  CertificateArn?: string;
  /**
   * The name of customer gateway device.
   */
  DeviceName?: string;
  /**
   * IPv4 address for the customer gateway device's outside interface. The address must be static. If ``OutsideIpAddressType`` in your VPN connection options is set to ``PrivateIpv4``, you can use an RFC6598 or RFC1918 private IPv4 address. If ``OutsideIpAddressType`` is set to ``PublicIpv4``, you can use a public IPv4 address.
   */
  IpAddress: string;
  /**
   * One or more tags for the customer gateway.
   */
  Tags?: Tag[];
  /**
   * The type of VPN connection that this customer gateway supports (``ipsec.1``).
   */
  Type: string;
};
/**
 * Attribute type definition for `AWS::EC2::CustomerGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#aws-resource-ec2-customergateway-return-values}
 */
export type EC2CustomerGatewayAttributes = {
  CustomerGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::CustomerGateway.Tag`.
 * Specifies a tag. For more information, see [Add tags to a resource](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#cloudformation-add-tag-specifications).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-customergateway-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   */
  Key: string;
  /**
   * The tag value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::CustomerGateway`.
 * Specifies a customer gateway.
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
