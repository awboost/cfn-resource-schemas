import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudFront::Distribution`.
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html}
 */
export type CloudFrontDistributionProperties = {
  /**
   * The distribution's configuration.
   */
  DistributionConfig: DistributionConfig;
  /**
   * A complex type that contains zero or more ``Tag`` elements.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudFront::Distribution`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html#aws-resource-cloudfront-distribution-return-values}
 */
export type CloudFrontDistributionAttributes = {
  DomainName: string;
  Id: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CacheBehavior`.
 * A complex type that describes how CloudFront processes requests.
 You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.
 For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) in the *Amazon CloudFront Developer Guide*.
 If you don't want to specify any cache behaviors, include only an empty ``CacheBehaviors`` element. Don't specify an empty individual ``CacheBehavior`` element, because this is invalid. For more information, see [CacheBehaviors](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CacheBehaviors.html).
 To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty ``CacheBehaviors`` element.
 To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.
  If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the ``Cache-Control: no-cache``, ``no-store``, or ``private`` directives are present in the origin headers.
  For more information about cache behaviors, see [Cache Behavior Settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cachebehavior.html}
 */
export type CacheBehavior = {
  /**
     * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
      +  CloudFront forwards only ``GET`` and ``HEAD`` requests.
      +  CloudFront forwards only ``GET``, ``HEAD``, and ``OPTIONS`` requests.
      +  CloudFront forwards ``GET, HEAD, OPTIONS, PUT, PATCH, POST``, and ``DELETE`` requests.
      
     If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
     */
  AllowedMethods?: string[];
  /**
     * The unique identifier of the cache policy that is attached to this cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     A ``CacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
     */
  CachePolicyId?: string;
  /**
     * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
      +  CloudFront caches responses to ``GET`` and ``HEAD`` requests.
      +  CloudFront caches responses to ``GET``, ``HEAD``, and ``OPTIONS`` requests.
      
     If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
     */
  CachedMethods?: string[];
  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
   */
  Compress?: boolean;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``DefaultTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  DefaultTTL?: number;
  /**
   * The value of ``ID`` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.
   */
  FieldLevelEncryptionId?: string;
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
     If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
     A ``CacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
     A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
     */
  ForwardedValues?: ForwardedValues;
  /**
   * A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the ``LIVE`` stage to associate them with a cache behavior.
   */
  FunctionAssociations?: FunctionAssociation[];
  /**
   * The gRPC configuration for your cache behavior.
   */
  GrpcConfig?: GrpcConfig;
  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociation[];
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``MaxTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  MaxTTL?: number;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``MinTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     You must specify ``0`` for ``MinTTL`` if you configure CloudFront to forward all headers to your origin (under ``Headers``, if you specify ``1`` for ``Quantity`` and ``*`` for ``Name``).
     */
  MinTTL?: number;
  /**
   * The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   */
  OriginRequestPolicyId?: string;
  /**
     * The pattern (for example, ``images/*.jpg``) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.
      You can optionally include a slash (``/``) at the beginning of the path pattern. For example, ``/images/*.jpg``. CloudFront behavior is the same with or without the leading ``/``.
      The path pattern for the default cache behavior is ``*`` and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.
     For more information, see [Path Pattern](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern) in the *Amazon CloudFront Developer Guide*.
     */
  PathPattern: string;
  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
   */
  RealtimeLogConfigArn?: string;
  /**
   * The identifier for a response headers policy.
   */
  ResponseHeadersPolicyId?: string;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify ``true``; if not, specify ``false``. If you specify ``true`` for ``SmoothStreaming``, you can still distribute other content using this cache behavior if the content matches the value of ``PathPattern``.
     */
  SmoothStreaming?: boolean;
  /**
   * The value of ``ID`` for the origin that you want CloudFront to route requests to when they match this cache behavior.
   */
  TargetOriginId: string;
  /**
     * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
     When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
     */
  TrustedKeyGroups?: string[];
  /**
     * We recommend using ``TrustedKeyGroups`` instead of ``TrustedSigners``.
       This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
     When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
     */
  TrustedSigners?: string[];
  /**
     * The protocol that viewers can use to access the files in the origin specified by ``TargetOriginId`` when a request matches the path pattern in ``PathPattern``. You can specify the following options:
      +  ``allow-all``: Viewers can use HTTP or HTTPS.
      +  ``redirect-to-https``: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
      +  ``https-only``: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
      
     For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
      The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  ViewerProtocolPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ConnectionMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-connectionmode.html}
 */
export type ConnectionMode = "direct" | "tenant-only";
/**
 * Type definition for `AWS::CloudFront::Distribution.Cookies`.
 * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-cookies.html}
 */
export type Cookies = {
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the ``WhitelistedNames`` complex type.
     Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the ``Forward`` element.
     */
  Forward: string;
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     Required if you specify ``whitelist`` for the value of ``Forward``. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.
     If you specify ``all`` or ``none`` for the value of ``Forward``, omit ``WhitelistedNames``. If you change the value of ``Forward`` from ``whitelist`` to ``all`` or ``none`` and you don't delete the ``WhitelistedNames`` element and its child elements, CloudFront deletes them automatically.
     For the current limit on the number of cookie names that you can whitelist for each cache behavior, see [CloudFront Limits](https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront) in the *General Reference*.
     */
  WhitelistedNames?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CustomErrorResponse`.
 * A complex type that controls:
  +  Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
  +  How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
  
 For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customerrorresponse.html}
 */
export type CustomErrorResponse = {
  /**
     * The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in ``ErrorCode``. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.
     For more information, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
     */
  ErrorCachingMinTTL?: number;
  /**
   * The HTTP status code for which you want to specify a custom error page and/or a caching duration.
   */
  ErrorCode: number;
  /**
     * The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:
      +  Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute ``200``, the response typically won't be intercepted.
      +  If you don't care about distinguishing among different client errors or server errors, you can specify ``400`` or ``500`` as the ``ResponseCode`` for all 4xx or 5xx errors.
      +  You might want to return a ``200`` status code (OK) and static website so your customers don't know that your website is down.
      
     If you specify a value for ``ResponseCode``, you must also specify a value for ``ResponsePagePath``.
     */
  ResponseCode?: number;
  /**
     * The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by ``ErrorCode``, for example, ``/4xx-errors/403-forbidden.html``. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:
      +  The value of ``PathPattern`` matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named ``/4xx-errors``. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, ``/4xx-errors/*``.
      +  The value of ``TargetOriginId`` specifies the value of the ``ID`` element for the origin that contains your custom error pages.
      
     If you specify a value for ``ResponsePagePath``, you must also specify a value for ``ResponseCode``.
     We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.
     */
  ResponsePagePath?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.CustomOriginConfig`.
 * A custom origin. A custom origin is any origin that is *not* an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is [configured with static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)*is* a custom origin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-customoriginconfig.html}
 */
export type CustomOriginConfig = {
  /**
   * The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.
   */
  HTTPPort?: number;
  /**
   * The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.
   */
  HTTPSPort?: number;
  IpAddressType?: "ipv4" | "ipv6" | "dualstack";
  /**
     * Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.
     For more information, see [Keep-alive timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
     */
  OriginKeepaliveTimeout?: number;
  /**
     * Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:
      +  ``http-only`` – CloudFront always uses HTTP to connect to the origin.
      +  ``match-viewer`` – CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.
      +  ``https-only`` – CloudFront always uses HTTPS to connect to the origin.
     */
  OriginProtocolPolicy: string;
  /**
     * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
     For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
     */
  OriginReadTimeout?: number;
  /**
     * Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include ``SSLv3``, ``TLSv1``, ``TLSv1.1``, and ``TLSv1.2``.
     For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.
     */
  OriginSSLProtocols?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.DefaultCacheBehavior`.
 * A complex type that describes the default cache behavior if you don't specify a ``CacheBehavior`` element or if request URLs don't match any of the values of ``PathPattern`` in ``CacheBehavior`` elements. You must create exactly one default cache behavior.
  If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the ``Cache-Control: no-cache``, ``no-store``, or ``private`` directives are present in the origin headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-defaultcachebehavior.html}
 */
export type DefaultCacheBehavior = {
  /**
     * A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
      +  CloudFront forwards only ``GET`` and ``HEAD`` requests.
      +  CloudFront forwards only ``GET``, ``HEAD``, and ``OPTIONS`` requests.
      +  CloudFront forwards ``GET, HEAD, OPTIONS, PUT, PATCH, POST``, and ``DELETE`` requests.
      
     If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
     */
  AllowedMethods?: string[];
  /**
     * The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     A ``DefaultCacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
     */
  CachePolicyId?: string;
  /**
     * A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
      +  CloudFront caches responses to ``GET`` and ``HEAD`` requests.
      +  CloudFront caches responses to ``GET``, ``HEAD``, and ``OPTIONS`` requests.
      
     If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
     */
  CachedMethods?: string[];
  /**
   * Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify ``true``; if not, specify ``false``. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
   */
  Compress?: boolean;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``DefaultTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  DefaultTTL?: number;
  /**
   * The value of ``ID`` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.
   */
  FieldLevelEncryptionId?: string;
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
     If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
     A ``DefaultCacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
     A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
     */
  ForwardedValues?: ForwardedValues;
  /**
   * A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the ``LIVE`` stage to associate them with a cache behavior.
   */
  FunctionAssociations?: FunctionAssociation[];
  /**
   * The gRPC configuration for your cache behavior.
   */
  GrpcConfig?: GrpcConfig;
  /**
   * A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociation[];
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``MaxTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  MaxTTL?: number;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      This field is deprecated. We recommend that you use the ``MinTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
     The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     You must specify ``0`` for ``MinTTL`` if you configure CloudFront to forward all headers to your origin (under ``Headers``, if you specify ``1`` for ``Quantity`` and ``*`` for ``Name``).
     */
  MinTTL?: number;
  /**
   * The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
   */
  OriginRequestPolicyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
   */
  RealtimeLogConfigArn?: string;
  /**
   * The identifier for a response headers policy.
   */
  ResponseHeadersPolicyId?: string;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify ``true``; if not, specify ``false``. If you specify ``true`` for ``SmoothStreaming``, you can still distribute other content using this cache behavior if the content matches the value of ``PathPattern``.
     */
  SmoothStreaming?: boolean;
  /**
   * The value of ``ID`` for the origin that you want CloudFront to route requests to when they use the default cache behavior.
   */
  TargetOriginId: string;
  /**
     * A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
     When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
     */
  TrustedKeyGroups?: string[];
  /**
     * We recommend using ``TrustedKeyGroups`` instead of ``TrustedSigners``.
       This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
     When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
     */
  TrustedSigners?: string[];
  /**
     * The protocol that viewers can use to access the files in the origin specified by ``TargetOriginId`` when a request matches the path pattern in ``PathPattern``. You can specify the following options:
      +  ``allow-all``: Viewers can use HTTP or HTTPS.
      +  ``redirect-to-https``: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
      +  ``https-only``: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
      
     For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
      The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
     */
  ViewerProtocolPolicy: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.DistributionConfig`.
 * A distribution configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html}
 */
export type DistributionConfig = {
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
     */
  Aliases?: string[];
  /**
     * To use this field for a multi-tenant distribution, use a connection group instead. For more information, see [ConnectionGroup](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html).
      ID of the Anycast static IP list that is associated with the distribution.
     */
  AnycastIpListId?: string;
  /**
     * An alias for the CF distribution's domain name.
      This property is legacy. We recommend that you use [Aliases](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-aliases) instead.
     */
  CNAMEs?: string[];
  /**
   * A complex type that contains zero or more ``CacheBehavior`` elements.
   */
  CacheBehaviors?: CacheBehavior[];
  /**
   * A comment to describe the distribution. The comment cannot be longer than 128 characters.
   */
  Comment?: string;
  /**
   * This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).
   */
  ConnectionMode?: ConnectionMode;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      The identifier of a continuous deployment policy. For more information, see ``CreateContinuousDeploymentPolicy``.
     */
  ContinuousDeploymentPolicyId?: string;
  /**
     * A complex type that controls the following:
      +  Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
      +  How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
      
     For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
     */
  CustomErrorResponses?: CustomErrorResponse[];
  /**
     * The user-defined HTTP server that serves as the origin for content that CF distributes.
      This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
     */
  CustomOrigin?: LegacyCustomOrigin;
  /**
   * A complex type that describes the default cache behavior if you don't specify a ``CacheBehavior`` element or if files don't match any of the values of ``PathPattern`` in ``CacheBehavior`` elements. You must create exactly one default cache behavior.
   */
  DefaultCacheBehavior: DefaultCacheBehavior;
  /**
     * When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is ``https://www.example.com``, you can specify CloudFront to return the ``index.html`` file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, ``https://www.example.com/product-description.html``). A default root object avoids exposing the contents of your distribution.
     You can specify the object name or a path to the object name (for example, ``index.html`` or ``exampleFolderName/index.html``). Your string can't begin with a forward slash (``/``). Only specify the object name or the path to the object.
     If you don't want to specify a default root object when you create a distribution, include an empty ``DefaultRootObject`` element.
     To delete the default root object from an existing distribution, update the distribution configuration and include an empty ``DefaultRootObject`` element.
     To replace the default root object, update the distribution configuration and specify the new object.
     For more information about the default root object, see [Specify a default root object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the *Amazon CloudFront Developer Guide*.
     */
  DefaultRootObject?: string;
  /**
   * From this field, you can enable or disable the selected distribution.
   */
  Enabled: boolean;
  /**
     * (Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CF. The default value for new distributions is ``http1.1``.
     For viewers and CF to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).
     For viewers and CF to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CF supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see [Connection Migration](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration) at RFC 9000. For more information about supported TLSv1.3 ciphers, see [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
     */
  HttpVersion?: string;
  /**
     * To use this field for a multi-tenant distribution, use a connection group instead. For more information, see [ConnectionGroup](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ConnectionGroup.html).
      If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify ``true``. If you specify ``false``, CloudFront responds to IPv6 DNS requests with the DNS response code ``NOERROR`` and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.
     In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the ``IpAddress`` parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see [Creating a Signed URL Using a Custom Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html) in the *Amazon CloudFront Developer Guide*.
     If you're using an R53AWSIntlong alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:
      +  You enable IPv6 for the distribution
      +  You're using alternate domain names in the URLs for your objects
      
     For more information, see [Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html) in the *Developer Guide*.
     If you created a CNAME resource record set, either with R53AWSIntlong or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.
     */
  IPV6Enabled?: boolean;
  /**
     * A complex type that controls whether access logs are written for the distribution.
     For more information about logging, see [Access Logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the *Amazon CloudFront Developer Guide*.
     */
  Logging?: Logging;
  /**
     * A complex type that contains information about origin groups for this distribution.
     Specify a value for either the ``Origins`` or ``OriginGroups`` property.
     */
  OriginGroups?: OriginGroups;
  /**
     * A complex type that contains information about origins for this distribution.
     Specify a value for either the ``Origins`` or ``OriginGroups`` property.
     */
  Origins?: Origin[];
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify ``PriceClass_All``, CloudFront responds to requests for your objects from all CloudFront edge locations.
     If you specify a price class other than ``PriceClass_All``, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.
     For more information about price classes, see [Choosing the Price Class for a CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the *Amazon CloudFront Developer Guide*. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see [Amazon CloudFront Pricing](https://docs.aws.amazon.com/cloudfront/pricing/).
     */
  PriceClass?: string;
  /**
   * A complex type that identifies ways in which you want to restrict distribution of your content.
   */
  Restrictions?: Restrictions;
  /**
     * The origin as an S3 bucket.
      This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
     */
  S3Origin?: LegacyS3Origin;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      A Boolean that indicates whether this is a staging distribution. When this value is ``true``, this is a staging distribution. When this value is ``false``, this is not a staging distribution.
     */
  Staging?: boolean;
  /**
     * This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
      A distribution tenant configuration.
     */
  TenantConfig?: {
    ParameterDefinitions?: ParameterDefinition[];
  };
  /**
   * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
   */
  ViewerCertificate?: ViewerCertificate;
  /**
     * Multi-tenant distributions only support WAF V2 web ACLs.
      A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example ``arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111``. To specify a web ACL created using WAF Classic, use the ACL ID, for example ``a1b2c3d4-5678-90ab-cdef-EXAMPLE11111``.
     WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the [Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).
     */
  WebACLId?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ForwardedValues`.
 * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
  This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-forwardedvalues.html}
 */
export type ForwardedValues = {
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the *Amazon CloudFront Developer Guide*.
     */
  Cookies?: Cookies;
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include headers in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     A complex type that specifies the ``Headers``, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.
     For more information, see [Caching Content Based on Request Headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the *Amazon CloudFront Developer Guide*.
     */
  Headers?: string[];
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of ``QueryString`` and on the values that you specify for ``QueryStringCacheKeys``, if any:
     If you specify true for ``QueryString`` and you don't specify any values for ``QueryStringCacheKeys``, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.
     If you specify true for ``QueryString`` and you specify one or more values for ``QueryStringCacheKeys``, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.
     If you specify false for ``QueryString``, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.
     For more information, see [Configuring CloudFront to Cache Based on Query String Parameters](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the *Amazon CloudFront Developer Guide*.
     */
  QueryString: boolean;
  /**
     * This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
     If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
     If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
     A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.
     */
  QueryStringCacheKeys?: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.FunctionAssociation`.
 * A CloudFront function that is associated with a cache behavior in a CloudFront distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-functionassociation.html}
 */
export type FunctionAssociation = {
  /**
   * The event type of the function, either ``viewer-request`` or ``viewer-response``. You cannot use origin-facing event types (``origin-request`` and ``origin-response``) with a CloudFront function.
   */
  EventType?: string;
  /**
   * The Amazon Resource Name (ARN) of the function.
   */
  FunctionARN?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.GeoRestriction`.
 * A complex type that controls the countries in which your content is distributed. CF determines the location of your users using ``MaxMind`` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-georestriction.html}
 */
export type GeoRestriction = {
  /**
     * A complex type that contains a ``Location`` element for each country in which you want CloudFront either to distribute your content (``whitelist``) or not distribute your content (``blacklist``).
     The ``Location`` element is a two-letter, uppercase country code for a country that you want to include in your ``blacklist`` or ``whitelist``. Include one ``Location`` element for each country.
     CloudFront and ``MaxMind`` both use ``ISO 3166`` country codes. For the current list of countries and the corresponding codes, see ``ISO 3166-1-alpha-2`` code on the *International Organization for Standardization* website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.
     */
  Locations?: string[];
  /**
     * The method that you want to use to restrict distribution of your content by country:
      +  ``none``: No geo restriction is enabled, meaning access to content is not restricted by client geo location.
      +  ``blacklist``: The ``Location`` elements specify the countries in which you don't want CloudFront to distribute your content.
      +  ``whitelist``: The ``Location`` elements specify the countries in which you want CloudFront to distribute your content.
     */
  RestrictionType: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.GrpcConfig`.
 * Amazon CloudFront supports gRPC, an open-source remote procedure call (RPC) framework built on HTTP/2. gRPC offers bi-directional streaming and binary protocol that buffers payloads, making it suitable for applications that require low latency communications.
 To enable your distribution to handle gRPC requests, you must include HTTP/2 as one of the supported ``HTTP`` versions and allow ``HTTP`` methods, including ``POST``.
 For more information, see [Using gRPC with CloudFront distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-using-grpc.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-grpcconfig.html}
 */
export type GrpcConfig = {
  /**
   * Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins.
   */
  Enabled: boolean;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LambdaFunctionAssociation`.
 * A complex type that contains a Lambda@Edge function association.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-lambdafunctionassociation.html}
 */
export type LambdaFunctionAssociation = {
  /**
     * Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:
      +  ``viewer-request``: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.
      +  ``origin-request``: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.
      +  ``origin-response``: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.
      +  ``viewer-response``: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.
     If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.
     */
  EventType?: string;
  /**
   * A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see [Accessing the Request Body by Choosing the Include Body Option](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide.
   */
  IncludeBody?: boolean;
  /**
   * The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.
   */
  LambdaFunctionARN?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LegacyCustomOrigin`.
 * A custom origin. A custom origin is any origin that is *not* an S3 bucket, with one exception. An S3 bucket that is [configured with static website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)*is* a custom origin.
  This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacycustomorigin.html}
 */
export type LegacyCustomOrigin = {
  /**
   * The domain name assigned to your CF distribution.
   */
  DNSName: string;
  /**
   * The HTTP port that CF uses to connect to the origin. Specify the HTTP port that the origin listens on.
   */
  HTTPPort?: number;
  /**
   * The HTTPS port that CF uses to connect to the origin. Specify the HTTPS port that the origin listens on.
   */
  HTTPSPort?: number;
  /**
   * Specifies the protocol (HTTP or HTTPS) that CF uses to connect to the origin.
   */
  OriginProtocolPolicy: string;
  /**
     * The minimum SSL/TLS protocol version that CF uses when communicating with your origin server over HTTPs.
     For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the *Developer Guide*.
     */
  OriginSSLProtocols: string[];
};
/**
 * Type definition for `AWS::CloudFront::Distribution.LegacyS3Origin`.
 * The origin as an S3 bucket.
  This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-legacys3origin.html}
 */
export type LegacyS3Origin = {
  /**
   * The domain name assigned to your CF distribution.
   */
  DNSName: string;
  /**
     * The CF origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an S3 through CF.
      This property is legacy. We recommend that you use [OriginAccessControl](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html) instead.
     */
  OriginAccessIdentity?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Logging`.
 * A complex type that specifies whether access logs are written for the distribution.
  If you already enabled standard logging (legacy) and you want to enable standard logging (v2) to send your access logs to Amazon S3, we recommend that you specify a *different* Amazon S3 bucket or use a *separate path* in the same bucket (for example, use a log prefix or partitioning). This helps you keep track of which log files are associated with which logging subscription and prevents log files from overwriting each other. For more information, see [Standard logging (access logs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-logging.html}
 */
export type Logging = {
  /**
   * The Amazon S3 bucket to store the access logs in, for example, ``amzn-s3-demo-bucket.s3.amazonaws.com``.
   */
  Bucket?: string;
  /**
   * Specifies whether you want CloudFront to include cookies in access logs, specify ``true`` for ``IncludeCookies``. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify ``false`` for ``IncludeCookies``.
   */
  IncludeCookies?: boolean;
  /**
   * An optional string that you want CloudFront to prefix to the access log ``filenames`` for this distribution, for example, ``myprefix/``. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty ``Prefix`` element in the ``Logging`` element.
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Origin`.
 * An origin.
 An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:
  +  Use ``S3OriginConfig`` to specify an Amazon S3 bucket that is not configured with static website hosting.
  +  Use ``VpcOriginConfig`` to specify a VPC origin.
  +  Use ``CustomOriginConfig`` to specify all other kinds of origins, including:
  +  An Amazon S3 bucket that is configured with static website hosting
  +  An Elastic Load Balancing load balancer
  +  An EMPlong endpoint
  +  An EMSlong container
  +  Any other HTTP server, running on an Amazon EC2 instance or any other kind of host
  
  
 For the current maximum number of origins that you can specify per distribution, see [General Quotas on Web Distributions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions) in the *Amazon CloudFront Developer Guide* (quotas were formerly referred to as limits).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html}
 */
export type Origin = {
  /**
     * The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.
     For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout).
     For more information, see [Origin Connection Attempts](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts) in the *Amazon CloudFront Developer Guide*.
     */
  ConnectionAttempts?: number;
  /**
     * The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.
     For more information, see [Origin Connection Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout) in the *Amazon CloudFront Developer Guide*.
     */
  ConnectionTimeout?: number;
  /**
   * Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the ``S3OriginConfig`` type instead.
   */
  CustomOriginConfig?: CustomOriginConfig;
  /**
     * The domain name for the origin.
     For more information, see [Origin Domain Name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName) in the *Amazon CloudFront Developer Guide*.
     */
  DomainName: string;
  /**
     * A unique identifier for the origin. This value must be unique within the distribution.
     Use this value to specify the ``TargetOriginId`` in a ``CacheBehavior`` or ``DefaultCacheBehavior``.
     */
  Id: string;
  /**
     * The unique identifier of an origin access control for this origin.
     For more information, see [Restricting access to an Amazon S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
     */
  OriginAccessControlId?: string;
  /**
     * A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.
     For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
     */
  OriginCustomHeaders?: OriginCustomHeader[];
  /**
     * An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.
     For more information, see [Origin Path](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath) in the *Amazon CloudFront Developer Guide*.
     */
  OriginPath?: string;
  /**
     * CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.
     For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the *Amazon CloudFront Developer Guide*.
     */
  OriginShield?: OriginShield;
  /**
     * The time (in seconds) that a request from CloudFront to the origin can stay open and wait for a response. If the complete response isn't received from the origin by this time, CloudFront ends the connection.
     The value for ``ResponseCompletionTimeout`` must be equal to or greater than the value for ``OriginReadTimeout``. If you don't set a value for ``ResponseCompletionTimeout``, CloudFront doesn't enforce a maximum value.
     For more information, see [Response completion timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#response-completion-timeout) in the *Amazon CloudFront Developer Guide*.
     */
  ResponseCompletionTimeout?: number;
  /**
   * Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the ``CustomOriginConfig`` type instead.
   */
  S3OriginConfig?: S3OriginConfig;
  /**
   * The VPC origin configuration.
   */
  VpcOriginConfig?: VpcOriginConfig;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginCustomHeader`.
 * A complex type that contains ``HeaderName`` and ``HeaderValue`` elements, if any, for this distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origincustomheader.html}
 */
export type OriginCustomHeader = {
  /**
   * The name of a header that you want CloudFront to send to your origin. For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
   */
  HeaderName: string;
  /**
   * The value for the header that you specified in the ``HeaderName`` field.
   */
  HeaderValue: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroup`.
 * An origin group includes two origins (a primary origin and a secondary origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specify the origin group instead of a single origin, and CloudFront will failover from the primary origin to the secondary origin under the failover conditions that you've chosen.
 Optionally, you can choose selection criteria for your origin group to specify how your origins are selected when your distribution routes viewer requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroup.html}
 */
export type OriginGroup = {
  /**
   * A complex type that contains information about the failover criteria for an origin group.
   */
  FailoverCriteria: OriginGroupFailoverCriteria;
  /**
   * The origin group's ID.
   */
  Id: string;
  /**
   * A complex type that contains information about the origins in an origin group.
   */
  Members: OriginGroupMembers;
  /**
   * The selection criteria for the origin group. For more information, see [Create an origin group](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating) in the *Amazon CloudFront Developer Guide*.
   */
  SelectionCriteria?: OriginGroupSelectionCriteria;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupFailoverCriteria`.
 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupfailovercriteria.html}
 */
export type OriginGroupFailoverCriteria = {
  /**
   * The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.
   */
  StatusCodes: StatusCodes;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupMember`.
 * An origin in an origin group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmember.html}
 */
export type OriginGroupMember = {
  /**
   * The ID for an origin in an origin group.
   */
  OriginId: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupMembers`.
 * A complex data type for the origins included in an origin group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupmembers.html}
 */
export type OriginGroupMembers = {
  /**
   * Items (origins) in an origin group.
   */
  Items: OriginGroupMember[];
  /**
   * The number of origins in an origin group.
   */
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroups`.
 * A complex data type for the origin groups specified for a distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroups.html}
 */
export type OriginGroups = {
  /**
   * The items (origin groups) in a distribution.
   */
  Items?: OriginGroup[];
  /**
   * The number of origin groups.
   */
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginGroupSelectionCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origingroupselectioncriteria.html}
 */
export type OriginGroupSelectionCriteria = "default" | "media-quality-based";
/**
 * Type definition for `AWS::CloudFront::Distribution.OriginShield`.
 * CloudFront Origin Shield.
 Using Origin Shield can help reduce the load on your origin. For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-originshield.html}
 */
export type OriginShield = {
  /**
     * A flag that specifies whether Origin Shield is enabled.
     When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.
     */
  Enabled?: boolean;
  /**
     * The AWS-Region for Origin Shield.
     Specify the AWS-Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as ``us-east-2``.
     When you enable CloudFront Origin Shield, you must specify the AWS-Region for Origin Shield. For the list of AWS-Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the *Amazon CloudFront Developer Guide*.
     */
  OriginShieldRegion?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ParameterDefinition`.
 * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-parameterdefinition.html}
 */
export type ParameterDefinition = {
  /**
   * The value that you assigned to the parameter.
   */
  Definition: {
    StringSchema?: {
      Comment?: string;
      DefaultValue?: string;
      Required: boolean;
    };
  };
  /**
   * The name of the parameter.
   */
  Name: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Restrictions`.
 * A complex type that identifies ways in which you want to restrict distribution of your content.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-restrictions.html}
 */
export type Restrictions = {
  /**
   * A complex type that controls the countries in which your content is distributed. CF determines the location of your users using ``MaxMind`` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.
   */
  GeoRestriction: GeoRestriction;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.S3OriginConfig`.
 * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the ``CustomOriginConfig`` element instead.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-s3originconfig.html}
 */
export type S3OriginConfig = {
  /**
     * If you're using origin access control (OAC) instead of origin access identity, specify an empty ``OriginAccessIdentity`` element. For more information, see [Restricting access to an](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
      The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can *only* access objects in an Amazon S3 bucket through CloudFront. The format of the value is:
      ``origin-access-identity/cloudfront/ID-of-origin-access-identity``
     The ``ID-of-origin-access-identity`` is the value that CloudFront returned in the ``ID`` element when you created the origin access identity.
     If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty ``OriginAccessIdentity`` element.
     To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty ``OriginAccessIdentity`` element.
     To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
     For more information about the origin access identity, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
     */
  OriginAccessIdentity?: string;
  /**
     * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
     For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
     */
  OriginReadTimeout?: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.StatusCodes`.
 * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-statuscodes.html}
 */
export type StatusCodes = {
  /**
   * The items (status codes) for an origin group.
   */
  Items: number[];
  /**
   * The number of status codes.
   */
  Quantity: number;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.Tag`.
 * A complex type that contains ``Tag`` key and ``Tag`` value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-tag.html}
 */
export type Tag = {
  /**
     * A string that contains ``Tag`` key.
     The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Key: string;
  /**
     * A string that contains an optional ``Tag`` value.
     The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
     */
  Value: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.ViewerCertificate`.
 * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
 If the distribution doesn't use ``Aliases`` (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net``—set ``CloudFrontDefaultCertificate`` to ``true`` and leave all other fields empty.
 If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:
  +  Which viewers the distribution accepts HTTPS connections from: only viewers that support [server name indication (SNI)](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Server_Name_Indication) (recommended), or all viewers including those that don't support SNI.
  +  To accept HTTPS connections from only viewers that support SNI, set ``SSLSupportMethod`` to ``sni-only``. This is recommended. Most browsers and clients support SNI. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
  +  To accept HTTPS connections from all viewers, including those that don't support SNI, set ``SSLSupportMethod`` to ``vip``. This is not recommended, and results in additional monthly charges from CloudFront. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
  
  +  The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for ``MinimumProtocolVersion``. For more information, see [Security Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) in the *Amazon CloudFront Developer Guide*.
  +  The location of the SSL/TLS certificate, [(ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) (recommended) or [(IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html). You specify the location by setting a value in one of the following fields (not both):
  +  ``ACMCertificateArn`` (In CloudFormation, this field name is ``AcmCertificateArn``. Note the different capitalization.)
  +  ``IAMCertificateId`` (In CloudFormation, this field name is ``IamCertificateId``. Note the different capitalization.)
  
  
 All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use ``ViewerProtocolPolicy`` in the ``CacheBehavior`` or ``DefaultCacheBehavior``. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use ``CustomOriginConfig``.
 For more information, see [Using HTTPS with CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html) and [Using Alternate Domain Names and HTTPS](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html) in the *Amazon CloudFront Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-viewercertificate.html}
 */
export type ViewerCertificate = {
  /**
     * In CloudFormation, this field name is ``AcmCertificateArn``. Note the different capitalization.
      If the distribution uses ``Aliases`` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [(ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (``us-east-1``).
     If you specify an ACM certificate ARN, you must also specify values for ``MinimumProtocolVersion`` and ``SSLSupportMethod``. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
     */
  AcmCertificateArn?: string;
  /**
     * If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net``, set this field to ``true``.
     If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), omit this field and specify values for the following fields:
      +  ``AcmCertificateArn`` or ``IamCertificateId`` (specify a value for one, not both)
      +   ``MinimumProtocolVersion``
      +   ``SslSupportMethod``
     */
  CloudFrontDefaultCertificate?: boolean;
  /**
     * This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
       In CloudFormation, this field name is ``IamCertificateId``. Note the different capitalization.
      If the distribution uses ``Aliases`` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [(IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html), provide the ID of the IAM certificate.
     If you specify an IAM certificate ID, you must also specify values for ``MinimumProtocolVersion`` and ``SSLSupportMethod``. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
     */
  IamCertificateId?: string;
  /**
     * If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:
      +  The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.
      +  The ciphers that CloudFront can use to encrypt the content that it returns to viewers.
      
     For more information, see [Security Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) and [Supported Protocols and Ciphers Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers) in the *Amazon CloudFront Developer Guide*.
      On the CloudFront console, this setting is called *Security Policy*.
      When you're using SNI only (you set ``SSLSupportMethod`` to ``sni-only``), you must specify ``TLSv1`` or higher. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
     If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net`` (you set ``CloudFrontDefaultCertificate`` to ``true``), CloudFront automatically sets the security policy to ``TLSv1`` regardless of the value that you set here.
     */
  MinimumProtocolVersion?: string;
  /**
     * In CloudFormation, this field name is ``SslSupportMethod``. Note the different capitalization.
      If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.
      +  ``sni-only`` – The distribution accepts HTTPS connections from only viewers that support [server name indication (SNI)](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Server_Name_Indication). This is recommended. Most browsers and clients support SNI.
      +  ``vip`` – The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.
      +  ``static-ip`` - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the [Center](https://docs.aws.amazon.com/support/home).
      
     If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net``, don't set a value for this field.
     */
  SslSupportMethod?: string;
};
/**
 * Type definition for `AWS::CloudFront::Distribution.VpcOriginConfig`.
 * An Amazon CloudFront VPC origin configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-vpcoriginconfig.html}
 */
export type VpcOriginConfig = {
  /**
     * Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 5 seconds.
     For more information, see [Keep-alive timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
     */
  OriginKeepaliveTimeout?: number;
  /**
     * Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 120 seconds, and the default (if you don't specify otherwise) is 30 seconds.
     For more information, see [Response timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
     */
  OriginReadTimeout?: number;
  /**
   * The VPC origin ID.
   */
  VpcOriginId: string;
};
/**
 * Resource type definition for `AWS::CloudFront::Distribution`.
 * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html}
 */
export class CloudFrontDistribution extends $Resource<
  "AWS::CloudFront::Distribution",
  CloudFrontDistributionProperties,
  CloudFrontDistributionAttributes
> {
  public static readonly Type = "AWS::CloudFront::Distribution";
  constructor(
    logicalId: string,
    properties: CloudFrontDistributionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudFrontDistribution.Type, properties, options);
  }
}
