import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::LocalGatewayVirtualInterfaceGroup`.
 * Resource Type definition for LocalGatewayVirtualInterfaceGroup which describes a group of LocalGateway VirtualInterfaces
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterfacegroup.html}
 */
export type EC2LocalGatewayVirtualInterfaceGroupProperties = {
  /**
   * The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP)
   */
  LocalBgpAsn?: number;
  /**
   * The extended 32-bit ASN for the local BGP configuration
   */
  LocalBgpAsnExtended?: number;
  /**
   * The ID of the local gateway
   */
  LocalGatewayId: string;
  /**
   * The tags assigned to the virtual interface group
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::LocalGatewayVirtualInterfaceGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterfacegroup.html#aws-resource-ec2-localgatewayvirtualinterfacegroup-return-values}
 */
export type EC2LocalGatewayVirtualInterfaceGroupAttributes = {
  /**
   * The current state of the local gateway virtual interface group
   */
  ConfigurationState: string;
  /**
   * The Amazon Resource Number (ARN) of the local gateway virtual interface group
   */
  LocalGatewayVirtualInterfaceGroupArn: string;
  /**
   * The ID of the virtual interface group
   */
  LocalGatewayVirtualInterfaceGroupId: string;
  /**
   * The IDs of the virtual interfaces
   */
  LocalGatewayVirtualInterfaceIds: string[];
  /**
   * The ID of the Amazon Web Services account that owns the local gateway virtual interface group
   */
  OwnerId: string;
};
/**
 * Type definition for `AWS::EC2::LocalGatewayVirtualInterfaceGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-localgatewayvirtualinterfacegroup-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:.*)`
   */
  Key?: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!aws:.*)`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::EC2::LocalGatewayVirtualInterfaceGroup`.
 * Resource Type definition for LocalGatewayVirtualInterfaceGroup which describes a group of LocalGateway VirtualInterfaces
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayvirtualinterfacegroup.html}
 */
export class EC2LocalGatewayVirtualInterfaceGroup extends $Resource<
  "AWS::EC2::LocalGatewayVirtualInterfaceGroup",
  EC2LocalGatewayVirtualInterfaceGroupProperties,
  EC2LocalGatewayVirtualInterfaceGroupAttributes
> {
  public static readonly Type = "AWS::EC2::LocalGatewayVirtualInterfaceGroup";
  constructor(
    logicalId: string,
    properties: EC2LocalGatewayVirtualInterfaceGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2LocalGatewayVirtualInterfaceGroup.Type,
      properties,
      options,
    );
  }
}
