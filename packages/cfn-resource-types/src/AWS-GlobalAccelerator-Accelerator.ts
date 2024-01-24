import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GlobalAccelerator::Accelerator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html}
 */
export type GlobalAcceleratorAcceleratorProperties = {
  /**
   * Indicates whether an accelerator is enabled. The value is true or false.
   */
  Enabled?: boolean;
  /**
   * IP Address type.
   */
  IpAddressType?: "IPV4" | "DUAL_STACK";
  /**
   * The IP addresses from BYOIP Prefix pool.
   */
  IpAddresses?: string[];
  /**
   * Name of accelerator.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]{0,64}$`
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::GlobalAccelerator::Accelerator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#aws-resource-globalaccelerator-accelerator-return-values}
 */
export type GlobalAcceleratorAcceleratorAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the accelerator.
   */
  AcceleratorArn: string;
  /**
   * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses.
   */
  DnsName: string;
  /**
   * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses.
   */
  DualStackDnsName: string;
  /**
   * The IPv4 addresses assigned to the accelerator.
   */
  Ipv4Addresses: string[];
  /**
   * The IPv6 addresses assigned if the accelerator is dualstack
   */
  Ipv6Addresses: string[];
};
/**
 * Type definition for `AWS::GlobalAccelerator::Accelerator.Tag`.
 * Tag is a key-value pair associated with accelerator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-accelerator-tag.html}
 */
export type Tag = {
  /**
   * Key of the tag. Value can be 1 to 127 characters.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * Value for the tag. Value can be 1 to 255 characters.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::GlobalAccelerator::Accelerator
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html}
 */
export class GlobalAcceleratorAccelerator extends $Resource<
  "AWS::GlobalAccelerator::Accelerator",
  GlobalAcceleratorAcceleratorProperties,
  GlobalAcceleratorAcceleratorAttributes
> {
  public static readonly Type = "AWS::GlobalAccelerator::Accelerator";
  constructor(
    logicalId: string,
    properties: GlobalAcceleratorAcceleratorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlobalAcceleratorAccelerator.Type, properties, options);
  }
}
