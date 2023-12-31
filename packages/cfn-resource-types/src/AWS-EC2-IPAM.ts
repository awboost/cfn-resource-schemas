import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAM Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html}
 */
export type EC2IPAMProperties = {
  Description?: string;
  /**
   * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
   */
  OperatingRegions?: IpamOperatingRegion[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The tier of the IPAM.
   */
  Tier?: "free" | "advanced";
};
/**
 * Attribute type definition for `AWS::EC2::IPAM`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html#aws-resource-ec2-ipam-return-values}
 */
export type EC2IPAMAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the IPAM.
   */
  Arn: string;
  /**
   * The Id of the default association to the default resource discovery, created with this IPAM.
   */
  DefaultResourceDiscoveryAssociationId: string;
  /**
   * The Id of the default resource discovery, created with this IPAM.
   */
  DefaultResourceDiscoveryId: string;
  /**
   * Id of the IPAM.
   */
  IpamId: string;
  /**
   * The Id of the default scope for publicly routable IP space, created with this IPAM.
   */
  PrivateDefaultScopeId: string;
  /**
   * The Id of the default scope for publicly routable IP space, created with this IPAM.
   * @maxLength `255`
   */
  PublicDefaultScopeId: string;
  /**
   * The count of resource discoveries associated with this IPAM.
   */
  ResourceDiscoveryAssociationCount: number;
  /**
   * The number of scopes that currently exist in this IPAM.
   */
  ScopeCount: number;
};
/**
 * Type definition for `AWS::EC2::IPAM.IpamOperatingRegion`.
 * The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipam-ipamoperatingregion.html}
 */
export type IpamOperatingRegion = {
  /**
   * The name of the region.
   */
  RegionName: string;
};
/**
 * Type definition for `AWS::EC2::IPAM.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipam-tag.html}
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
 * Resource Schema of AWS::EC2::IPAM Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipam.html}
 */
export class EC2IPAM extends $Resource<
  "AWS::EC2::IPAM",
  EC2IPAMProperties,
  EC2IPAMAttributes
> {
  public static readonly Type = "AWS::EC2::IPAM";
  constructor(
    logicalId: string,
    properties: EC2IPAMProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAM.Type, properties, options);
  }
}
