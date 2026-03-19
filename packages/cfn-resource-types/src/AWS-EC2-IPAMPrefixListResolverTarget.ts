import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::IPAMPrefixListResolverTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolvertarget.html}
 */
export type EC2IPAMPrefixListResolverTargetProperties = {
  /**
   * The desired version of the Prefix List Resolver that this Target should synchronize with.
   */
  DesiredVersion?: number;
  /**
   * The Id of the IPAM Prefix List Resolver associated with this Target.
   */
  IpamPrefixListResolverId: string;
  /**
   * The Id of the Managed Prefix List.
   */
  PrefixListId: string;
  /**
   * The region that the Managed Prefix List is located in.
   */
  PrefixListRegion: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.
   */
  TrackLatestVersion: boolean;
};
/**
 * Attribute type definition for `AWS::EC2::IPAMPrefixListResolverTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolvertarget.html#aws-resource-ec2-ipamprefixlistresolvertarget-return-values}
 */
export type EC2IPAMPrefixListResolverTargetAttributes = {
  /**
   * Id of the IPAM Prefix List Resolver Target.
   */
  IpamPrefixListResolverTargetArn: string;
  /**
   * Id of the IPAM Prefix List Resolver Target.
   */
  IpamPrefixListResolverTargetId: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPrefixListResolverTarget.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamprefixlistresolvertarget-tag.html}
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
 * Resource Type definition for AWS::EC2::IPAMPrefixListResolverTarget
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamprefixlistresolvertarget.html}
 */
export class EC2IPAMPrefixListResolverTarget extends $Resource<
  "AWS::EC2::IPAMPrefixListResolverTarget",
  EC2IPAMPrefixListResolverTargetProperties,
  EC2IPAMPrefixListResolverTargetAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMPrefixListResolverTarget";
  constructor(
    logicalId: string,
    properties: EC2IPAMPrefixListResolverTargetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMPrefixListResolverTarget.Type, properties, options);
  }
}
