import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::ResponseHeadersPolicy`.
 * A response headers policy.
 A response headers policy contains information about a set of HTTP response headers.
 After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 For more information, see [Adding or removing HTTP headers in CloudFront responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export type CloudFrontResponseHeadersPolicyProperties = {
  /**
   * A response headers policy configuration.
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
};
/**
 * Attribute type definition for `AWS::CloudFront::ResponseHeadersPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html#aws-resource-cloudfront-responseheaderspolicy-return-values}
 */
export type CloudFrontResponseHeadersPolicyAttributes = {
  Id: string;
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowHeaders`.
 * A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.
 For more information about the ``Access-Control-Allow-Headers`` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html}
 */
export type AccessControlAllowHeaders = {
  /**
   * The list of HTTP header names. You can specify ``*`` to allow all headers.
   */
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowMethods`.
 * A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.
 For more information about the ``Access-Control-Allow-Methods`` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html}
 */
export type AccessControlAllowMethods = {
  /**
     * The list of HTTP methods. Valid values are:
      +   ``GET``
      +   ``DELETE``
      +   ``HEAD``
      +   ``OPTIONS``
      +   ``PATCH``
      +   ``POST``
      +   ``PUT``
      +   ``ALL``
      
     ``ALL`` is a special value that includes all of the listed HTTP methods.
     */
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlAllowOrigins`.
 * A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.
 For more information about the ``Access-Control-Allow-Origin`` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html}
 */
export type AccessControlAllowOrigins = {
  /**
   * The list of origins (domain names). You can specify ``*`` to allow all origins.
   */
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.AccessControlExposeHeaders`.
 * A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.
 For more information about the ``Access-Control-Expose-Headers`` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html}
 */
export type AccessControlExposeHeaders = {
  /**
   * The list of HTTP headers. You can specify ``*`` to expose all headers.
   */
  Items: string[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ContentSecurityPolicy`.
 * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
 For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html}
 */
export type ContentSecurityPolicy = {
  /**
     * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
     For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
     */
  ContentSecurityPolicy: string;
  /**
   * A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ContentTypeOptions`.
 * Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.
 For more information about the ``X-Content-Type-Options`` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html}
 */
export type ContentTypeOptions = {
  /**
   * A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CorsConfig`.
 * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.
 For more information about CORS, see [Cross-Origin Resource Sharing (CORS)](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html}
 */
export type CorsConfig = {
  /**
     * A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header.
     For more information about the ``Access-Control-Allow-Credentials`` HTTP response header, see [Access-Control-Allow-Credentials](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
     */
  AccessControlAllowCredentials: boolean;
  /**
     * A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.
     For more information about the ``Access-Control-Allow-Headers`` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
     */
  AccessControlAllowHeaders: AccessControlAllowHeaders;
  /**
     * A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.
     For more information about the ``Access-Control-Allow-Methods`` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
     */
  AccessControlAllowMethods: AccessControlAllowMethods;
  /**
     * A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.
     For more information about the ``Access-Control-Allow-Origin`` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
     */
  AccessControlAllowOrigins: AccessControlAllowOrigins;
  /**
     * A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.
     For more information about the ``Access-Control-Expose-Headers`` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
     */
  AccessControlExposeHeaders?: AccessControlExposeHeaders;
  /**
     * A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header.
     For more information about the ``Access-Control-Max-Age`` HTTP response header, see [Access-Control-Max-Age](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
     */
  AccessControlMaxAgeSec?: number;
  /**
   * A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.
   */
  OriginOverride: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CustomHeader`.
 * An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html}
 */
export type CustomHeader = {
  /**
   * The HTTP response header name.
   */
  Header: string;
  /**
   * A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
   */
  Override: boolean;
  /**
   * The value for the HTTP response header.
   */
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.CustomHeadersConfig`.
 * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html}
 */
export type CustomHeadersConfig = {
  /**
   * The list of HTTP response headers and their values.
   */
  Items: CustomHeader[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.FrameOptions`.
 * Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.
 For more information about the ``X-Frame-Options`` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html}
 */
export type FrameOptions = {
  /**
     * The value of the ``X-Frame-Options`` HTTP response header. Valid values are ``DENY`` and ``SAMEORIGIN``.
     For more information about these values, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
     * @pattern `^(DENY|SAMEORIGIN)$`
     */
  FrameOption: string;
  /**
   * A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ReferrerPolicy`.
 * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
 For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html}
 */
export type ReferrerPolicy = {
  /**
   * A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
  /**
     * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
     For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
     * @pattern `^(no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|strict-origin|strict-origin-when-cross-origin|unsafe-url)$`
     */
  ReferrerPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.RemoveHeader`.
 * The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheader.html}
 */
export type RemoveHeader = {
  /**
   * The HTTP header name.
   */
  Header: string;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.RemoveHeadersConfig`.
 * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-removeheadersconfig.html}
 */
export type RemoveHeadersConfig = {
  /**
   * The list of HTTP header names.
   */
  Items: RemoveHeader[];
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ResponseHeadersPolicyConfig`.
 * A response headers policy configuration.
 A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html}
 */
export type ResponseHeadersPolicyConfig = {
  /**
     * A comment to describe the response headers policy.
     The comment cannot be longer than 128 characters.
     */
  Comment?: string;
  /**
   * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
   */
  CorsConfig?: CorsConfig;
  /**
   * A configuration for a set of custom HTTP response headers.
   */
  CustomHeadersConfig?: CustomHeadersConfig;
  /**
     * A name to identify the response headers policy.
     The name must be unique for response headers policies in this AWS-account.
     */
  Name: string;
  /**
   * A configuration for a set of HTTP headers to remove from the HTTP response.
   */
  RemoveHeadersConfig?: RemoveHeadersConfig;
  /**
   * A configuration for a set of security-related HTTP response headers.
   */
  SecurityHeadersConfig?: SecurityHeadersConfig;
  /**
   * A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.
   */
  ServerTimingHeadersConfig?: ServerTimingHeadersConfig;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.SecurityHeadersConfig`.
 * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html}
 */
export type SecurityHeadersConfig = {
  /**
     * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
     For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
     */
  ContentSecurityPolicy?: ContentSecurityPolicy;
  /**
     * Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.
     For more information about the ``X-Content-Type-Options`` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
     */
  ContentTypeOptions?: ContentTypeOptions;
  /**
     * Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.
     For more information about the ``X-Frame-Options`` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
     */
  FrameOptions?: FrameOptions;
  /**
     * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
     For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
     */
  ReferrerPolicy?: ReferrerPolicy;
  /**
     * Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.
     For more information about the ``Strict-Transport-Security`` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
     */
  StrictTransportSecurity?: StrictTransportSecurity;
  /**
     * Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.
     For more information about the ``X-XSS-Protection`` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
     */
  XSSProtection?: XSSProtection;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.ServerTimingHeadersConfig`.
 * A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-servertimingheadersconfig.html}
 */
export type ServerTimingHeadersConfig = {
  /**
   * A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
   */
  Enabled: boolean;
  /**
   * A number 0–100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0–100 with up to four decimal places.
   * @min `0`
   * @max `100`
   */
  SamplingRate?: number;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.StrictTransportSecurity`.
 * Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.
 For more information about the ``Strict-Transport-Security`` HTTP response header, see [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html}
 */
export type StrictTransportSecurity = {
  /**
   * A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header.
   */
  AccessControlMaxAgeSec: number;
  /**
   * A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header.
   */
  IncludeSubdomains?: boolean;
  /**
   * A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
  /**
   * A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header.
   */
  Preload?: boolean;
};
/**
 * Type definition for `AWS::CloudFront::ResponseHeadersPolicy.XSSProtection`.
 * Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.
 For more information about the ``X-XSS-Protection`` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html}
 */
export type XSSProtection = {
  /**
     * A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header.
     For more information about this directive, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
     */
  ModeBlock?: boolean;
  /**
   * A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy.
   */
  Override: boolean;
  /**
     * A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header. When this setting is ``true``, the value of the ``X-XSS-Protection`` header is ``1``. When this setting is ``false``, the value of the ``X-XSS-Protection`` header is ``0``.
     For more information about these settings, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
     */
  Protection: boolean;
  /**
     * A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header.
     You cannot specify a ``ReportUri`` when ``ModeBlock`` is ``true``.
     For more information about using a reporting URL, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
     */
  ReportUri?: string;
};
/**
 * Resource type definition for `AWS::CloudFront::ResponseHeadersPolicy`.
 * A response headers policy.
 A response headers policy contains information about a set of HTTP response headers.
 After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 For more information, see [Adding or removing HTTP headers in CloudFront responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export class CloudFrontResponseHeadersPolicy extends $Resource<
  "AWS::CloudFront::ResponseHeadersPolicy",
  CloudFrontResponseHeadersPolicyProperties,
  CloudFrontResponseHeadersPolicyAttributes
> {
  public static readonly Type = "AWS::CloudFront::ResponseHeadersPolicy";
  constructor(
    logicalId: string,
    properties: CloudFrontResponseHeadersPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontResponseHeadersPolicy.Type, properties, options);
  }
}
