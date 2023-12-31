import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema of AWS::EC2::PrefixList Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html}
 */
export type EC2PrefixListProperties = {
  /**
   * Ip Version of Prefix List.
   */
  AddressFamily: "IPv4" | "IPv6";
  /**
   * Entries of Prefix List.
   */
  Entries?: Entry[];
  /**
   * Max Entries of Prefix List.
   * @min `1`
   */
  MaxEntries: number;
  /**
   * Name of Prefix List.
   * @minLength `1`
   * @maxLength `255`
   */
  PrefixListName: string;
  /**
   * Tags for Prefix List
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::PrefixList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#aws-resource-ec2-prefixlist-return-values}
 */
export type EC2PrefixListAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Prefix List.
   */
  Arn: string;
  /**
   * Owner Id of Prefix List.
   */
  OwnerId: string;
  /**
   * Id of Prefix List.
   */
  PrefixListId: string;
  /**
   * Version of Prefix List.
   */
  Version: number;
};
/**
 * Type definition for `AWS::EC2::PrefixList.Entry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html}
 */
export type Entry = {
  /**
   * @minLength `1`
   * @maxLength `46`
   */
  Cidr: string;
  /**
   * @maxLength `255`
   */
  Description?: string;
};
/**
 * Type definition for `AWS::EC2::PrefixList.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource schema of AWS::EC2::PrefixList Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html}
 */
export class EC2PrefixList extends $Resource<
  "AWS::EC2::PrefixList",
  EC2PrefixListProperties,
  EC2PrefixListAttributes
> {
  public static readonly Type = "AWS::EC2::PrefixList";
  public static readonly AttributeNames = [
    "Arn" as const,
    "OwnerId" as const,
    "PrefixListId" as const,
    "Version" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2PrefixListProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2PrefixList.Type,
      properties,
      EC2PrefixList.AttributeNames,
      options,
    );
  }
}
