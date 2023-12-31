import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAMResourceDiscovery Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html}
 */
export type EC2IPAMResourceDiscoveryProperties = {
  Description?: string;
  /**
   * The regions Resource Discovery is enabled for. Allows resource discoveries to be created in these regions, as well as enabling monitoring
   */
  OperatingRegions?: IpamOperatingRegion[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::IPAMResourceDiscovery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#aws-resource-ec2-ipamresourcediscovery-return-values}
 */
export type EC2IPAMResourceDiscoveryAttributes = {
  /**
   * Amazon Resource Name (Arn) for the Resource Discovery.
   */
  IpamResourceDiscoveryArn: string;
  /**
   * Id of the IPAM Pool.
   */
  IpamResourceDiscoveryId: string;
  /**
   * The region the resource discovery is setup in.
   */
  IpamResourceDiscoveryRegion: string;
  /**
   * Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.
   */
  IsDefault: boolean;
  /**
   * Owner Account ID of the Resource Discovery
   */
  OwnerId: string;
  /**
   * The state of this Resource Discovery.
   */
  State: string;
};
/**
 * Type definition for `AWS::EC2::IPAMResourceDiscovery.IpamOperatingRegion`.
 * The regions IPAM Resource Discovery is enabled for. Allows for monitoring.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamresourcediscovery-ipamoperatingregion.html}
 */
export type IpamOperatingRegion = {
  /**
   * The name of the region.
   */
  RegionName: string;
};
/**
 * Type definition for `AWS::EC2::IPAMResourceDiscovery.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamresourcediscovery-tag.html}
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
 * Resource Schema of AWS::EC2::IPAMResourceDiscovery Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html}
 */
export class EC2IPAMResourceDiscovery extends $Resource<
  "AWS::EC2::IPAMResourceDiscovery",
  EC2IPAMResourceDiscoveryProperties,
  EC2IPAMResourceDiscoveryAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMResourceDiscovery";
  constructor(
    logicalId: string,
    properties: EC2IPAMResourceDiscoveryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMResourceDiscovery.Type, properties, options);
  }
}
