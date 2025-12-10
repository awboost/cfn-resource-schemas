import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::AnycastIpList`.
 * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html}
 */
export type CloudFrontAnycastIpListProperties = {
  IpAddressType?: IpAddressType;
  /**
   * The number of IP addresses in the Anycast static IP list.
   */
  IpCount: number;
  IpamCidrConfigs?: IpamCidrConfig[];
  /**
   * The name of the Anycast static IP list.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]{1,64}$`
   */
  Name: string;
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::CloudFront::AnycastIpList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html#aws-resource-cloudfront-anycastiplist-return-values}
 */
export type CloudFrontAnycastIpListAttributes = {
  /**
   * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
   */
  AnycastIpList: {
    /**
     * The static IP addresses that are allocated to the Anycast static IP list.
     */
    AnycastIps: string[];
    /**
     * The Amazon Resource Name (ARN) of the Anycast static IP list.
     */
    Arn: string;
    /**
     * The ID of the Anycast static IP list.
     */
    Id: string;
    IpAddressType: IpAddressType;
    /**
     * The number of IP addresses in the Anycast static IP list.
     */
    IpCount: number;
    IpamCidrConfigResults: {
      AnycastIp: string;
      Cidr: string;
      IpamPoolArn: string;
      Status: string;
    }[];
    /**
     * The last time the Anycast static IP list was modified.
     */
    LastModifiedTime: string;
    /**
     * The name of the Anycast static IP list.
     * @minLength `1`
     * @maxLength `64`
     * @pattern `^[a-zA-Z0-9-_]{1,64}$`
     */
    Name: string;
    /**
     * The status of the Anycast static IP list. Valid values: ``Deployed``, ``Deploying``, or ``Failed``.
     */
    Status: string;
  };
  ETag: string;
  Id: string;
  IpamCidrConfigResults: {
    AnycastIp: string;
    Cidr: string;
    IpamPoolArn: string;
    Status: string;
  }[];
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.AnycastIpList`.
 * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-anycastiplist.html}
 */
export type AnycastIpList = {
  /**
   * The static IP addresses that are allocated to the Anycast static IP list.
   */
  AnycastIps: string[];
  /**
   * The Amazon Resource Name (ARN) of the Anycast static IP list.
   */
  Arn: string;
  /**
   * The ID of the Anycast static IP list.
   */
  Id: string;
  IpAddressType?: IpAddressType;
  /**
   * The number of IP addresses in the Anycast static IP list.
   */
  IpCount: number;
  IpamCidrConfigResults?: IpamCidrConfigResult[];
  /**
   * The last time the Anycast static IP list was modified.
   */
  LastModifiedTime: string;
  /**
   * The name of the Anycast static IP list.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]{1,64}$`
   */
  Name: string;
  /**
   * The status of the Anycast static IP list. Valid values: ``Deployed``, ``Deploying``, or ``Failed``.
   */
  Status: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.IpAddressType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-ipaddresstype.html}
 */
export type IpAddressType = "ipv4" | "dualstack";
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.IpamCidrConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-ipamcidrconfig.html}
 */
export type IpamCidrConfig = {
  Cidr: string;
  IpamPoolArn: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.IpamCidrConfigResult`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-ipamcidrconfigresult.html}
 */
export type IpamCidrConfigResult = {
  AnycastIp?: string;
  Cidr?: string;
  IpamPoolArn?: string;
  Status?: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     * @minLength `0`
     * @maxLength `256`
     * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     */
  Value?: string;
};
/**
 * Type definition for `AWS::CloudFront::AnycastIpList.Tags`.
 * A complex type that contains zero or more ``Tag`` elements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-anycastiplist-tags.html}
 */
export type Tags = {
  /**
   * A complex type that contains ``Tag`` elements.
   */
  Items?: Tag[];
};
/**
 * Resource type definition for `AWS::CloudFront::AnycastIpList`.
 * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-anycastiplist.html}
 */
export class CloudFrontAnycastIpList extends $Resource<
  "AWS::CloudFront::AnycastIpList",
  CloudFrontAnycastIpListProperties,
  CloudFrontAnycastIpListAttributes
> {
  public static readonly Type = "AWS::CloudFront::AnycastIpList";
  constructor(
    logicalId: string,
    properties: CloudFrontAnycastIpListProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontAnycastIpList.Type, properties, options);
  }
}
