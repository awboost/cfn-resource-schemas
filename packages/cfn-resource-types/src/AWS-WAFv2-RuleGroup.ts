import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::WAFv2::RuleGroup`.
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a RuleGroup, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a RuleGroup, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the RuleGroup with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a RuleGroup, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html}
 */
export type WAFv2RuleGroupProperties = {
  /**
   * @min `0`
   */
  Capacity: number;
  /**
   * Custom response key and body map.
   */
  CustomResponseBodies?: CustomResponseBodies;
  /**
   * Description of the entity.
   * @pattern `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
   */
  Description?: string;
  /**
   * Name of the RuleGroup.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name?: string;
  /**
   * Collection of Rules.
   */
  Rules?: Rule[];
  /**
   * Use CLOUDFRONT for CloudFront RuleGroup, use REGIONAL for Application Load Balancer and API Gateway.
   */
  Scope: Scope;
  /**
   * @minLength `1`
   */
  Tags?: Tag[];
  /**
   * Visibility Metric of the RuleGroup.
   */
  VisibilityConfig: VisibilityConfig;
};
/**
 * Attribute type definition for `AWS::WAFv2::RuleGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#aws-resource-wafv2-rulegroup-return-values}
 */
export type WAFv2RuleGroupAttributes = {
  /**
   * ARN of the WAF entity.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * Collection of Available Labels.
   */
  AvailableLabels: {
    /**
     * Name of the Label.
     * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
     */
    Name: string;
  }[];
  /**
   * Collection of Consumed Labels.
   */
  ConsumedLabels: {
    /**
     * Name of the Label.
     * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
     */
    Name: string;
  }[];
  /**
   * Id of the RuleGroup
   * @pattern `^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$`
   */
  Id: string;
  /**
   * Name of the Label.
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  LabelNamespace: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.AllowAction`.
 * Allow traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-allowaction.html}
 */
export type AllowAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.AndStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-andstatement.html}
 */
export type AndStatement = {
  Statements: Statement[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.BlockAction`.
 * Block traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-blockaction.html}
 */
export type BlockAction = {
  /**
   * Custom response.
   */
  CustomResponse?: CustomResponse;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Body`.
 * The body of a web request. This immediately follows the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-body.html}
 */
export type Body = {
  /**
   * Handling of requests containing oversize fields
   */
  OversizeHandling?: OversizeHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.BodyParsingFallbackBehavior`.
 * The inspection behavior to fall back to if the JSON in the request body is invalid.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bodyparsingfallbackbehavior.html}
 */
export type BodyParsingFallbackBehavior =
  | "MATCH"
  | "NO_MATCH"
  | "EVALUATE_AS_STRING";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ByteMatchStatement`.
 * Byte Match statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html}
 */
export type ByteMatchStatement = {
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  /**
   * Position of the evaluation in the FieldToMatch of request.
   */
  PositionalConstraint: PositionalConstraint;
  /**
   * String that is searched to find a match.
   */
  SearchString?: string;
  /**
   * Base64 encoded string that is searched to find a match.
   */
  SearchStringBase64?: string;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CaptchaAction`.
 * Checks valid token exists with request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaaction.html}
 */
export type CaptchaAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CaptchaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaconfig.html}
 */
export type CaptchaConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ChallengeAction`.
 * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeaction.html}
 */
export type ChallengeAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ChallengeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeconfig.html}
 */
export type ChallengeConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CookieMatchPattern`.
 * The pattern to look for in the request cookies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html}
 */
export type CookieMatchPattern = {
  /**
   * Inspect all parts of the web request cookies.
   */
  All?: Record<string, any>;
  /**
   * @minLength `1`
   * @maxLength `199`
   */
  ExcludedCookies?: string[];
  /**
   * @minLength `1`
   * @maxLength `199`
   */
  IncludedCookies?: string[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Cookies`.
 * Includes headers of a web request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html}
 */
export type Cookies = {
  /**
   * The pattern to look for in the request cookies.
   */
  MatchPattern: CookieMatchPattern;
  /**
   * The parts of the request to match against using the MatchPattern.
   */
  MatchScope: MapMatchScope;
  /**
   * Handling of requests containing oversize fields
   */
  OversizeHandling: OversizeHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CountAction`.
 * Count traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-countaction.html}
 */
export type CountAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CustomHTTPHeader`.
 * HTTP header.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html}
 */
export type CustomHTTPHeader = {
  /**
   * HTTP header name.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * HTTP header value.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CustomRequestHandling`.
 * Custom request handling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customrequesthandling.html}
 */
export type CustomRequestHandling = {
  /**
   * Collection of HTTP headers.
   * @minLength `1`
   */
  InsertHeaders: CustomHTTPHeader[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CustomResponse`.
 * Custom response.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html}
 */
export type CustomResponse = {
  /**
   * Custom response body key.
   * @pattern `^[\w\-]+$`
   */
  CustomResponseBodyKey?: string;
  /**
   * Custom response code.
   * @min `200`
   * @max `599`
   */
  ResponseCode: number;
  /**
   * Collection of HTTP headers.
   * @minLength `1`
   */
  ResponseHeaders?: CustomHTTPHeader[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CustomResponseBodies`.
 * Custom response key and body map.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebodies.html}
 */
export type CustomResponseBodies = Record<string, CustomResponseBody>;
/**
 * Type definition for `AWS::WAFv2::RuleGroup.CustomResponseBody`.
 * Custom response body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html}
 */
export type CustomResponseBody = {
  /**
   * Response content.
   * @minLength `1`
   * @maxLength `10240`
   */
  Content: string;
  /**
   * Valid values are TEXT_PLAIN, TEXT_HTML, and APPLICATION_JSON.
   */
  ContentType: ResponseContentType;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.FieldToMatch`.
 * Field of the request to match.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html}
 */
export type FieldToMatch = {
  /**
   * All query arguments of a web request.
   */
  AllQueryArguments?: Record<string, any>;
  /**
   * The body of a web request. This immediately follows the request headers.
   */
  Body?: Body;
  /**
   * Includes headers of a web request.
   */
  Cookies?: Cookies;
  /**
   * Includes headers of a web request.
   */
  Headers?: Headers;
  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers.
   */
  JsonBody?: JsonBody;
  /**
   * The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
   */
  Method?: Record<string, any>;
  /**
   * The query string of a web request. This is the part of a URL that appears after a ? character, if any.
   */
  QueryString?: Record<string, any>;
  SingleHeader?: {
    Name: string;
  };
  /**
   * One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
   */
  SingleQueryArgument?: {
    Name: string;
  };
  /**
   * The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.
   */
  UriPath?: Record<string, any>;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ForwardedIPConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html}
 */
export type ForwardedIPConfiguration = {
  FallbackBehavior: "MATCH" | "NO_MATCH";
  /**
   * @pattern `^[a-zA-Z0-9-]+{1,255}$`
   */
  HeaderName: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.GeoMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html}
 */
export type GeoMatchStatement = {
  CountryCodes?: string[];
  ForwardedIPConfig?: ForwardedIPConfiguration;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.HeaderMatchPattern`.
 * The pattern to look for in the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html}
 */
export type HeaderMatchPattern = {
  /**
   * Inspect all parts of the web request headers.
   */
  All?: Record<string, any>;
  /**
   * @minLength `1`
   * @maxLength `199`
   */
  ExcludedHeaders?: string[];
  /**
   * @minLength `1`
   * @maxLength `199`
   */
  IncludedHeaders?: string[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Headers`.
 * Includes headers of a web request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html}
 */
export type Headers = {
  /**
   * The pattern to look for in the request headers.
   */
  MatchPattern: HeaderMatchPattern;
  /**
   * The parts of the request to match against using the MatchPattern.
   */
  MatchScope: MapMatchScope;
  /**
   * Handling of requests containing oversize fields
   */
  OversizeHandling: OversizeHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ImmunityTimeProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-immunitytimeproperty.html}
 */
export type ImmunityTimeProperty = {
  /**
   * @min `60`
   * @max `259200`
   */
  ImmunityTime: number;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.IPSetForwardedIPConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html}
 */
export type IPSetForwardedIPConfiguration = {
  FallbackBehavior: "MATCH" | "NO_MATCH";
  /**
   * @pattern `^[a-zA-Z0-9-]+{1,255}$`
   */
  HeaderName: string;
  Position: "FIRST" | "LAST" | "ANY";
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.IPSetReferenceStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html}
 */
export type IPSetReferenceStatement = {
  /**
   * ARN of the WAF entity.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.JsonBody`.
 * Inspect the request body as JSON. The request body immediately follows the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html}
 */
export type JsonBody = {
  /**
   * The inspection behavior to fall back to if the JSON in the request body is invalid.
   */
  InvalidFallbackBehavior?: BodyParsingFallbackBehavior;
  /**
   * The pattern to look for in the JSON body.
   */
  MatchPattern: JsonMatchPattern;
  /**
   * The parts of the JSON to match against using the MatchPattern.
   */
  MatchScope: JsonMatchScope;
  /**
   * Handling of requests containing oversize fields
   */
  OversizeHandling?: OversizeHandling;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.JsonMatchPattern`.
 * The pattern to look for in the JSON body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html}
 */
export type JsonMatchPattern = {
  /**
   * Inspect all parts of the web request's JSON body.
   */
  All?: Record<string, any>;
  IncludedPaths?: string[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.JsonMatchScope`.
 * The parts of the JSON to match against using the MatchPattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchscope.html}
 */
export type JsonMatchScope = "ALL" | "KEY" | "VALUE";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Label`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-label.html}
 */
export type Label = {
  /**
   * Name of the Label.
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.LabelMatchScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchscope.html}
 */
export type LabelMatchScope = "LABEL" | "NAMESPACE";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.LabelMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html}
 */
export type LabelMatchStatement = {
  /**
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Key: string;
  Scope: LabelMatchScope;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.MapMatchScope`.
 * The parts of the request to match against using the MatchPattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-mapmatchscope.html}
 */
export type MapMatchScope = "ALL" | "KEY" | "VALUE";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.NotStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-notstatement.html}
 */
export type NotStatement = {
  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  Statement: Statement;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.OrStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-orstatement.html}
 */
export type OrStatement = {
  Statements: Statement[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.OversizeHandling`.
 * Handling of requests containing oversize fields
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-oversizehandling.html}
 */
export type OversizeHandling = "CONTINUE" | "MATCH" | "NO_MATCH";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.PositionalConstraint`.
 * Position of the evaluation in the FieldToMatch of request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-positionalconstraint.html}
 */
export type PositionalConstraint =
  | "EXACTLY"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CONTAINS_WORD";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateBasedStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html}
 */
export type RateBasedStatement = {
  AggregateKeyType: "CONSTANT" | "IP" | "FORWARDED_IP" | "CUSTOM_KEYS";
  /**
   * Specifies the aggregate keys to use in a rate-base rule.
   * @maxLength `5`
   */
  CustomKeys?: RateBasedStatementCustomKey[];
  ForwardedIPConfig?: ForwardedIPConfiguration;
  /**
   * @min `100`
   * @max `2000000000`
   */
  Limit: number;
  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  ScopeDownStatement?: Statement;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateBasedStatementCustomKey`.
 * Specifies a single custom aggregate key for a rate-base rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html}
 */
export type RateBasedStatementCustomKey = {
  /**
   * Specifies a cookie as an aggregate key for a rate-based rule.
   */
  Cookie?: RateLimitCookie;
  /**
   * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule.
   */
  ForwardedIP?: RateLimitForwardedIP;
  /**
   * Specifies the request's HTTP method as an aggregate key for a rate-based rule.
   */
  HTTPMethod?: RateLimitHTTPMethod;
  /**
   * Specifies a header as an aggregate key for a rate-based rule.
   */
  Header?: RateLimitHeader;
  /**
   * Specifies the IP address in the web request as an aggregate key for a rate-based rule.
   */
  IP?: RateLimitIP;
  /**
   * Specifies a label namespace to use as an aggregate key for a rate-based rule.
   */
  LabelNamespace?: RateLimitLabelNamespace;
  /**
   * Specifies a query argument in the request as an aggregate key for a rate-based rule.
   */
  QueryArgument?: RateLimitQueryArgument;
  /**
   * Specifies the request's query string as an aggregate key for a rate-based rule.
   */
  QueryString?: RateLimitQueryString;
  /**
   * Specifies the request's URI Path as an aggregate key for a rate-based rule.
   */
  UriPath?: RateLimitUriPath;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitCookie`.
 * Specifies a cookie as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitcookie.html}
 */
export type RateLimitCookie = {
  /**
   * The name of the cookie to use.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `.*\S.*`
   */
  Name: string;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitForwardedIP`.
 * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitforwardedip.html}
 */
export type RateLimitForwardedIP = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitHeader`.
 * Specifies a header as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitheader.html}
 */
export type RateLimitHeader = {
  /**
   * The name of the header to use.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `.*\S.*`
   */
  Name: string;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitHTTPMethod`.
 * Specifies the request's HTTP method as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimithttpmethod.html}
 */
export type RateLimitHTTPMethod = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitIP`.
 * Specifies the IP address in the web request as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitip.html}
 */
export type RateLimitIP = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitLabelNamespace`.
 * Specifies a label namespace to use as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitlabelnamespace.html}
 */
export type RateLimitLabelNamespace = {
  /**
   * The namespace to use for aggregation.
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitQueryArgument`.
 * Specifies a query argument in the request as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitqueryargument.html}
 */
export type RateLimitQueryArgument = {
  /**
   * The name of the query argument to use.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `.*\S.*`
   */
  Name: string;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitQueryString`.
 * Specifies the request's query string as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitquerystring.html}
 */
export type RateLimitQueryString = {
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RateLimitUriPath`.
 * Specifies the request's URI Path as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimituripath.html}
 */
export type RateLimitUriPath = {
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RegexMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html}
 */
export type RegexMatchStatement = {
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  RegexString: string;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RegexPatternSetReferenceStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html}
 */
export type RegexPatternSetReferenceStatement = {
  /**
   * ARN of the WAF entity.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.ResponseContentType`.
 * Valid values are TEXT_PLAIN, TEXT_HTML, and APPLICATION_JSON.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-responsecontenttype.html}
 */
export type ResponseContentType =
  | "TEXT_PLAIN"
  | "TEXT_HTML"
  | "APPLICATION_JSON";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Rule`.
 * Rule of RuleGroup that contains condition and action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html}
 */
export type Rule = {
  /**
   * Action taken when Rule matches its condition.
   */
  Action?: RuleAction;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  /**
   * Name of the RuleGroup.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name: string;
  /**
   * Priority of the Rule, Rules get evaluated from lower to higher priority.
   * @min `0`
   */
  Priority: number;
  /**
   * Collection of Rule Labels.
   */
  RuleLabels?: Label[];
  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  Statement: Statement;
  /**
   * Visibility Metric of the RuleGroup.
   */
  VisibilityConfig: VisibilityConfig;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.RuleAction`.
 * Action taken when Rule matches its condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html}
 */
export type RuleAction = {
  /**
   * Allow traffic towards application.
   */
  Allow?: AllowAction;
  /**
   * Block traffic towards application.
   */
  Block?: BlockAction;
  /**
   * Checks valid token exists with request.
   */
  Captcha?: CaptchaAction;
  /**
   * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
   */
  Challenge?: ChallengeAction;
  /**
   * Count traffic towards application.
   */
  Count?: CountAction;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Scope`.
 * Use CLOUDFRONT for CloudFront RuleGroup, use REGIONAL for Application Load Balancer and API Gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-scope.html}
 */
export type Scope = "CLOUDFRONT" | "REGIONAL";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.SensitivityLevel`.
 * Sensitivity Level current only used for sqli match statements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sensitivitylevel.html}
 */
export type SensitivityLevel = "LOW" | "HIGH";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.SizeConstraintStatement`.
 * Size Constraint statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html}
 */
export type SizeConstraintStatement = {
  ComparisonOperator: "EQ" | "NE" | "LE" | "LT" | "GE" | "GT";
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  /**
   * @min `0`
   * @max `21474836480`
   */
  Size: number;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.SqliMatchStatement`.
 * Sqli Match Statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html}
 */
export type SqliMatchStatement = {
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  /**
   * Sensitivity Level current only used for sqli match statements.
   */
  SensitivityLevel?: SensitivityLevel;
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Statement`.
 * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html}
 */
export type Statement = {
  AndStatement?: AndStatement;
  /**
   * Byte Match statement.
   */
  ByteMatchStatement?: ByteMatchStatement;
  GeoMatchStatement?: GeoMatchStatement;
  IPSetReferenceStatement?: IPSetReferenceStatement;
  LabelMatchStatement?: LabelMatchStatement;
  NotStatement?: NotStatement;
  OrStatement?: OrStatement;
  RateBasedStatement?: RateBasedStatement;
  RegexMatchStatement?: RegexMatchStatement;
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
  /**
   * Size Constraint statement.
   */
  SizeConstraintStatement?: SizeConstraintStatement;
  /**
   * Sqli Match Statement.
   */
  SqliMatchStatement?: SqliMatchStatement;
  /**
   * Xss Match Statement.
   */
  XssMatchStatement?: XssMatchStatement;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.TextTransformation`.
 * Text Transformation on the Search String before match.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html}
 */
export type TextTransformation = {
  /**
   * Priority of Rule being evaluated.
   * @min `0`
   */
  Priority: number;
  /**
   * Type of text transformation.
   */
  Type: TextTransformationType;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.TextTransformationType`.
 * Type of text transformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformationtype.html}
 */
export type TextTransformationType =
  | "NONE"
  | "COMPRESS_WHITE_SPACE"
  | "HTML_ENTITY_DECODE"
  | "LOWERCASE"
  | "CMD_LINE"
  | "URL_DECODE"
  | "BASE64_DECODE"
  | "HEX_DECODE"
  | "MD5"
  | "REPLACE_COMMENTS"
  | "ESCAPE_SEQ_DECODE"
  | "SQL_HEX_DECODE"
  | "CSS_DECODE"
  | "JS_DECODE"
  | "NORMALIZE_PATH"
  | "NORMALIZE_PATH_WIN"
  | "REMOVE_NULLS"
  | "REPLACE_NULLS"
  | "BASE64_DECODE_EXT"
  | "URL_DECODE_UNI"
  | "UTF8_TO_UNICODE";
/**
 * Type definition for `AWS::WAFv2::RuleGroup.VisibilityConfig`.
 * Visibility Metric of the RuleGroup.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html}
 */
export type VisibilityConfig = {
  CloudWatchMetricsEnabled: boolean;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  MetricName: string;
  SampledRequestsEnabled: boolean;
};
/**
 * Type definition for `AWS::WAFv2::RuleGroup.XssMatchStatement`.
 * Xss Match Statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html}
 */
export type XssMatchStatement = {
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
};
/**
 * Resource type definition for `AWS::WAFv2::RuleGroup`.
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a RuleGroup, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a RuleGroup, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the RuleGroup with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a RuleGroup, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html}
 */
export class WAFv2RuleGroup extends $Resource<
  "AWS::WAFv2::RuleGroup",
  WAFv2RuleGroupProperties,
  WAFv2RuleGroupAttributes
> {
  public static readonly Type = "AWS::WAFv2::RuleGroup";
  constructor(
    logicalId: string,
    properties: WAFv2RuleGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFv2RuleGroup.Type, properties, options);
  }
}
