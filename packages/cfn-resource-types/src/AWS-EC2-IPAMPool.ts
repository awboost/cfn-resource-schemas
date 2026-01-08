import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAMPool Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html}
 */
export type EC2IPAMPoolProperties = {
  /**
   * The address family of the address space in this pool. Either IPv4 or IPv6.
   */
  AddressFamily: string;
  /**
   * The default netmask length for allocations made from this pool. This value is used when the netmask length of an allocation isn't specified.
   */
  AllocationDefaultNetmaskLength?: number;
  /**
   * The maximum allowed netmask length for allocations made from this pool.
   */
  AllocationMaxNetmaskLength?: number;
  /**
   * The minimum allowed netmask length for allocations made from this pool.
   */
  AllocationMinNetmaskLength?: number;
  /**
   * When specified, an allocation will not be allowed unless a resource has a matching set of tags.
   */
  AllocationResourceTags?: Tag[];
  /**
   * Determines what to do if IPAM discovers resources that haven't been assigned an allocation. If set to true, an allocation will be made automatically.
   */
  AutoImport?: boolean;
  /**
   * Limits which service in Amazon Web Services that the pool can be used in.
   */
  AwsService?: "ec2" | "global-services";
  Description?: string;
  /**
   * The Id of the scope this pool is a part of.
   */
  IpamScopeId: string;
  /**
   * The region of this pool. If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.
   */
  Locale?: string;
  /**
   * A list of cidrs representing the address space available for allocation in this pool.
   */
  ProvisionedCidrs?: ProvisionedCidr[];
  /**
   * The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.
   */
  PublicIpSource?: "byoip" | "amazon";
  /**
   * Determines whether or not address space from this pool is publicly advertised. Must be set if and only if the pool is IPv6.
   */
  PubliclyAdvertisable?: boolean;
  /**
   * The Id of this pool's source. If set, all space provisioned in this pool must be free space provisioned in the parent pool.
   */
  SourceIpamPoolId?: string;
  /**
   * The resource associated with this pool's space. Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations
   */
  SourceResource?: SourceResource;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::IPAMPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html#aws-resource-ec2-ipampool-return-values}
 */
export type EC2IPAMPoolAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the IPAM Pool.
   */
  Arn: string;
  /**
   * The Amazon Resource Name (ARN) of the IPAM this pool is a part of.
   */
  IpamArn: string;
  /**
   * Id of the IPAM Pool.
   */
  IpamPoolId: string;
  /**
   * The Amazon Resource Name (ARN) of the scope this pool is a part of.
   */
  IpamScopeArn: string;
  /**
   * Determines whether this scope contains publicly routable space or space for a private network
   */
  IpamScopeType: "public" | "private";
  /**
   * The depth of this pool in the source pool hierarchy.
   */
  PoolDepth: number;
  /**
   * The state of this pool. This can be one of the following values: "create-in-progress", "create-complete", "modify-in-progress", "modify-complete", "delete-in-progress", or "delete-complete"
   */
  State:
    | "create-in-progress"
    | "create-complete"
    | "modify-in-progress"
    | "modify-complete"
    | "delete-in-progress"
    | "delete-complete";
  /**
   * An explanation of how the pool arrived at it current state.
   */
  StateMessage: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPool.ProvisionedCidr`.
 * An address space to be inserted into this pool. All allocations must be made from this address space.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipampool-provisionedcidr.html}
 */
export type ProvisionedCidr = {
  /**
   * Represents a single IPv4 or IPv6 CIDR
   */
  Cidr: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPool.SourceResource`.
 * The resource associated with this pool's space. Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipampool-sourceresource.html}
 */
export type SourceResource = {
  ResourceId: string;
  ResourceOwner: string;
  ResourceRegion: string;
  ResourceType: string;
};
/**
 * Type definition for `AWS::EC2::IPAMPool.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipampool-tag.html}
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
 * Resource Schema of AWS::EC2::IPAMPool Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampool.html}
 */
export class EC2IPAMPool extends $Resource<
  "AWS::EC2::IPAMPool",
  EC2IPAMPoolProperties,
  EC2IPAMPoolAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMPool";
  constructor(
    logicalId: string,
    properties: EC2IPAMPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMPool.Type, properties, options);
  }
}
