import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::DHCPOptions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html}
 */
export type EC2DHCPOptionsProperties = {
  /**
   * This value is used to complete unqualified DNS hostnames.
   */
  DomainName?: string;
  /**
   * The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.
   */
  DomainNameServers?: string[];
  /**
   * The IPv4 addresses of up to four NetBIOS name servers.
   */
  NetbiosNameServers?: string[];
  /**
   * The NetBIOS node type (1, 2, 4, or 8).
   */
  NetbiosNodeType?: number;
  /**
   * The IPv4 addresses of up to four Network Time Protocol (NTP) servers.
   */
  NtpServers?: string[];
  /**
   * Any tags assigned to the DHCP options set.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::DHCPOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#aws-resource-ec2-dhcpoptions-return-values}
 */
export type EC2DHCPOptionsAttributes = {
  DhcpOptionsId: string;
};
/**
 * Type definition for `AWS::EC2::DHCPOptions.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-dhcpoptions-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::DHCPOptions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html}
 */
export class EC2DHCPOptions extends $Resource<
  "AWS::EC2::DHCPOptions",
  EC2DHCPOptionsProperties,
  EC2DHCPOptionsAttributes
> {
  public static readonly Type = "AWS::EC2::DHCPOptions";
  constructor(
    logicalId: string,
    properties: EC2DHCPOptionsProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2DHCPOptions.Type, properties, options);
  }
}
