import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::Distribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html}
 */
export type LightsailDistributionProperties = {
  /**
   * The bundle ID to use for the distribution.
   */
  BundleId: string;
  /**
   * An object that describes the cache behavior settings for the distribution.
   */
  CacheBehaviorSettings?: CacheSettings;
  /**
   * An array of objects that describe the per-path cache behavior for the distribution.
   */
  CacheBehaviors?: CacheBehaviorPerPath[];
  /**
   * The certificate attached to the Distribution.
   */
  CertificateName?: string;
  /**
   * An object that describes the default cache behavior for the distribution.
   */
  DefaultCacheBehavior: CacheBehavior;
  /**
   * The name for the distribution.
   * @pattern `\w[\w\-]*\w`
   */
  DistributionName: string;
  /**
   * The IP address type for the distribution.
   */
  IpAddressType?: string;
  /**
   * Indicates whether the distribution is enabled.
   */
  IsEnabled?: boolean;
  /**
   * An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.
   */
  Origin: InputOrigin;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Distribution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html#aws-resource-lightsail-distribution-return-values}
 */
export type LightsailDistributionAttributes = {
  /**
   * Indicates whether the bundle that is currently applied to your distribution, specified using the distributionName parameter, can be changed to another bundle.
   */
  AbleToUpdateBundle: boolean;
  DistributionArn: string;
  /**
   * The status of the distribution.
   */
  Status: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.CacheBehavior`.
 * Describes the default cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehavior.html}
 */
export type CacheBehavior = {
  /**
   * The cache behavior of the distribution.
   */
  Behavior?: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.CacheBehaviorPerPath`.
 * Describes the per-path cache behavior of an Amazon Lightsail content delivery network (CDN) distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachebehaviorperpath.html}
 */
export type CacheBehaviorPerPath = {
  /**
   * The cache behavior for the specified path.
   */
  Behavior?: string;
  /**
   * The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.
   */
  Path?: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.CacheSettings`.
 * Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cachesettings.html}
 */
export type CacheSettings = {
  /**
   * The HTTP methods that are processed and forwarded to the distribution's origin.
   */
  AllowedHTTPMethods?: string;
  /**
   * The HTTP method responses that are cached by your distribution.
   */
  CachedHTTPMethods?: string;
  /**
   * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
   */
  DefaultTTL?: number;
  /**
   * An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded.
   */
  ForwardedCookies?: CookieObject;
  /**
   * An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded.
   */
  ForwardedHeaders?: HeaderObject;
  /**
   * An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded.
   */
  ForwardedQueryStrings?: QueryStringObject;
  /**
   * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   */
  MaximumTTL?: number;
  /**
   * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
   */
  MinimumTTL?: number;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.CookieObject`.
 * Describes whether an Amazon Lightsail content delivery network (CDN) distribution forwards cookies to the origin and, if so, which ones.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-cookieobject.html}
 */
export type CookieObject = {
  /**
   * The specific cookies to forward to your distribution's origin.
   */
  CookiesAllowList?: string[];
  /**
   * Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.
   */
  Option?: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.HeaderObject`.
 * Describes the request headers that a Lightsail distribution bases caching on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-headerobject.html}
 */
export type HeaderObject = {
  /**
   * The specific headers to forward to your distribution's origin.
   */
  HeadersAllowList?: string[];
  /**
   * The headers that you want your distribution to forward to your origin and base caching on.
   */
  Option?: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.InputOrigin`.
 * Describes the origin resource of an Amazon Lightsail content delivery network (CDN) distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-inputorigin.html}
 */
export type InputOrigin = {
  /**
   * The name of the origin resource.
   */
  Name?: string;
  /**
   * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
   */
  ProtocolPolicy?: string;
  /**
   * The AWS Region name of the origin resource.
   */
  RegionName?: string;
};
/**
 * Type definition for `AWS::Lightsail::Distribution.QueryStringObject`.
 * Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-querystringobject.html}
 */
export type QueryStringObject = {
  /**
   * Indicates whether the distribution forwards and caches based on query strings.
   */
  Option?: boolean;
  /**
   * The specific query strings that the distribution forwards to the origin.
   */
  QueryStringsAllowList?: string[];
};
/**
 * Type definition for `AWS::Lightsail::Distribution.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-distribution-tag.html}
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
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Distribution
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-distribution.html}
 */
export class LightsailDistribution extends $Resource<
  "AWS::Lightsail::Distribution",
  LightsailDistributionProperties,
  LightsailDistributionAttributes
> {
  public static readonly Type = "AWS::Lightsail::Distribution";
  constructor(
    logicalId: string,
    properties: LightsailDistributionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailDistribution.Type, properties, options);
  }
}
