import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::EC2::NetworkInterface resource creates network interface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html}
 */
export type EC2NetworkInterfaceProperties = {
  /**
   * A description for the network interface.
   */
  Description?: string;
  /**
   * A list of security group IDs associated with this network interface.
   */
  GroupSet?: string[];
  /**
   * Indicates the type of network interface.
   */
  InterfaceType?: string;
  /**
   * The number of IPv4 prefixes to assign to a network interface. When you specify a number of IPv4 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /28 prefixes. You can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
   */
  Ipv4PrefixCount?: number;
  /**
   * Assigns a list of IPv4 prefixes to the network interface. If you want EC2 to automatically assign IPv4 prefixes, use the Ipv4PrefixCount property and do not specify this property. Presently, only /28 prefixes are supported. You can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
   */
  Ipv4Prefixes?: Ipv4PrefixSpecification[];
  /**
   * The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the Ipv6Addresses property and don't specify this property.
   */
  Ipv6AddressCount?: number;
  /**
   * One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet to associate with the network interface. If you're specifying a number of IPv6 addresses, use the Ipv6AddressCount property and don't specify this property.
   */
  Ipv6Addresses?: InstanceIpv6Address[];
  /**
   * The number of IPv6 prefixes to assign to a network interface. When you specify a number of IPv6 prefixes, Amazon EC2 selects these prefixes from your existing subnet CIDR reservations, if available, or from free spaces in the subnet. By default, these will be /80 prefixes. You can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
   */
  Ipv6PrefixCount?: number;
  /**
   * Assigns a list of IPv6 prefixes to the network interface. If you want EC2 to automatically assign IPv6 prefixes, use the Ipv6PrefixCount property and do not specify this property. Presently, only /80 prefixes are supported. You can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
   */
  Ipv6Prefixes?: Ipv6PrefixSpecification[];
  /**
   * Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.
   */
  PrivateIpAddress?: string;
  /**
   * Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.
   */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /**
   * The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using privateIpAddresses
   */
  SecondaryPrivateIpAddressCount?: number;
  /**
   * Indicates whether traffic to or from the instance is validated.
   */
  SourceDestCheck?: boolean;
  /**
   * The ID of the subnet to associate with the network interface.
   */
  SubnetId: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this network interface.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#aws-resource-ec2-networkinterface-return-values}
 */
export type EC2NetworkInterfaceAttributes = {
  /**
   * Network interface id.
   */
  Id: string;
  /**
   * Returns the primary private IP address of the network interface.
   */
  PrimaryPrivateIpAddress: string;
  /**
   * Returns the secondary private IP addresses of the network interface.
   */
  SecondaryPrivateIpAddresses: string[];
};
/**
 * Type definition for `AWS::EC2::NetworkInterface.InstanceIpv6Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-instanceipv6address.html}
 */
export type InstanceIpv6Address = {
  Ipv6Address: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterface.Ipv4PrefixSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-ipv4prefixspecification.html}
 */
export type Ipv4PrefixSpecification = {
  Ipv4Prefix: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterface.Ipv6PrefixSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-ipv6prefixspecification.html}
 */
export type Ipv6PrefixSpecification = {
  Ipv6Prefix: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterface.PrivateIpAddressSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-privateipaddressspecification.html}
 */
export type PrivateIpAddressSpecification = {
  Primary: boolean;
  PrivateIpAddress: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInterface.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinterface-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::EC2::NetworkInterface resource creates network interface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html}
 */
export class EC2NetworkInterface extends $Resource<
  "AWS::EC2::NetworkInterface",
  EC2NetworkInterfaceProperties,
  EC2NetworkInterfaceAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInterface";
  public static readonly AttributeNames = [
    "Id" as const,
    "PrimaryPrivateIpAddress" as const,
    "SecondaryPrivateIpAddresses" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2NetworkInterfaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2NetworkInterface.Type,
      properties,
      EC2NetworkInterface.AttributeNames,
      options,
    );
  }
}
