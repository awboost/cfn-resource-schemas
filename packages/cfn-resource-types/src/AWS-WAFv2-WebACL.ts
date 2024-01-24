import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::WAFv2::WebACL`.
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a WebACL, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a WebACL, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the WebACL with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a WebACL, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html}
 */
export type WAFv2WebACLProperties = {
  /**
   * AssociationConfig for body inspection
   */
  AssociationConfig?: AssociationConfig;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  /**
   * Custom response key and body map.
   */
  CustomResponseBodies?: CustomResponseBodies;
  /**
   * Default Action WebACL will take against ingress traffic when there is no matching Rule.
   */
  DefaultAction: DefaultAction;
  /**
   * Description of the entity.
   * @pattern `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
   */
  Description?: string;
  /**
   * Name of the WebACL.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name?: string;
  /**
   * Collection of Rules.
   */
  Rules?: Rule[];
  /**
   * Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway.
   */
  Scope: Scope;
  /**
   * @minLength `1`
   */
  Tags?: Tag[];
  /**
   * List of domains to accept in web request tokens, in addition to the domain of the protected resource.
   */
  TokenDomains?: string[];
  /**
   * Visibility Metric of the WebACL.
   */
  VisibilityConfig: VisibilityConfig;
};
/**
 * Attribute type definition for `AWS::WAFv2::WebACL`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#aws-resource-wafv2-webacl-return-values}
 */
export type WAFv2WebACLAttributes = {
  /**
   * ARN of the WAF entity.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * @min `0`
   */
  Capacity: number;
  /**
   * Id of the WebACL
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
 * Type definition for `AWS::WAFv2::WebACL.AddressField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-addressfield.html}
 */
export type AddressField = FieldIdentifier;
/**
 * Type definition for `AWS::WAFv2::WebACL.AllowAction`.
 * Allow traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html}
 */
export type AllowAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.AndStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-andstatement.html}
 */
export type AndStatement = {
  Statements: Statement[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.AssociationConfig`.
 * AssociationConfig for body inspection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-associationconfig.html}
 */
export type AssociationConfig = {
  /**
   * Map of AssociatedResourceType and RequestBodyAssociatedResourceTypeConfig
   */
  RequestBody?: RequestBody;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.AWSManagedRulesACFPRuleSet`.
 * Configures how to use the Account creation fraud prevention managed rule group in the web ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html}
 */
export type AWSManagedRulesACFPRuleSet = {
  CreationPath: string;
  EnableRegexInPath?: boolean;
  RegistrationPagePath: string;
  /**
   * Configures the inspection of sign-up requests
   */
  RequestInspection: RequestInspectionACFP;
  /**
   * Configures the inspection of login responses
   */
  ResponseInspection?: ResponseInspection;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.AWSManagedRulesATPRuleSet`.
 * Configures how to use the Account Takeover Prevention managed rule group in the web ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html}
 */
export type AWSManagedRulesATPRuleSet = {
  EnableRegexInPath?: boolean;
  LoginPath: string;
  /**
   * Configures the inspection of login requests
   */
  RequestInspection?: RequestInspection;
  /**
   * Configures the inspection of login responses
   */
  ResponseInspection?: ResponseInspection;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.AWSManagedRulesBotControlRuleSet`.
 * Configures how to use the Bot Control managed rule group in the web ACL
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html}
 */
export type AWSManagedRulesBotControlRuleSet = {
  EnableMachineLearning?: boolean;
  InspectionLevel: "COMMON" | "TARGETED";
};
/**
 * Type definition for `AWS::WAFv2::WebACL.BlockAction`.
 * Block traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html}
 */
export type BlockAction = {
  /**
   * Custom response.
   */
  CustomResponse?: CustomResponse;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.Body`.
 * The body of a web request. This immediately follows the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-body.html}
 */
export type Body = {
  /**
   * Handling of requests containing oversize fields
   */
  OversizeHandling?: OversizeHandling;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.BodyParsingFallbackBehavior`.
 * The inspection behavior to fall back to if the JSON in the request body is invalid.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bodyparsingfallbackbehavior.html}
 */
export type BodyParsingFallbackBehavior =
  | "MATCH"
  | "NO_MATCH"
  | "EVALUATE_AS_STRING";
/**
 * Type definition for `AWS::WAFv2::WebACL.ByteMatchStatement`.
 * Byte Match statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.CaptchaAction`.
 * Checks valid token exists with request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaaction.html}
 */
export type CaptchaAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.CaptchaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaconfig.html}
 */
export type CaptchaConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ChallengeAction`.
 * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeaction.html}
 */
export type ChallengeAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ChallengeConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeconfig.html}
 */
export type ChallengeConfig = {
  ImmunityTimeProperty?: ImmunityTimeProperty;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.CookieMatchPattern`.
 * The pattern to look for in the request cookies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html}
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
 * Type definition for `AWS::WAFv2::WebACL.Cookies`.
 * Includes headers of a web request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html}
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
 * Type definition for `AWS::WAFv2::WebACL.CountAction`.
 * Allow traffic towards application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html}
 */
export type CountAction = {
  /**
   * Custom request handling.
   */
  CustomRequestHandling?: CustomRequestHandling;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.CustomHTTPHeader`.
 * HTTP header.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html}
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
 * Type definition for `AWS::WAFv2::WebACL.CustomRequestHandling`.
 * Custom request handling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customrequesthandling.html}
 */
export type CustomRequestHandling = {
  /**
   * Collection of HTTP headers.
   * @minLength `1`
   */
  InsertHeaders: CustomHTTPHeader[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.CustomResponse`.
 * Custom response.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html}
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
 * Type definition for `AWS::WAFv2::WebACL.CustomResponseBodies`.
 * Custom response key and body map.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebodies.html}
 */
export type CustomResponseBodies = Record<string, CustomResponseBody>;
/**
 * Type definition for `AWS::WAFv2::WebACL.CustomResponseBody`.
 * Custom response body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html}
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
 * Type definition for `AWS::WAFv2::WebACL.DefaultAction`.
 * Default Action WebACL will take against ingress traffic when there is no matching Rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html}
 */
export type DefaultAction = {
  /**
   * Allow traffic towards application.
   */
  Allow?: AllowAction;
  /**
   * Block traffic towards application.
   */
  Block?: BlockAction;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ExcludedRule`.
 * Excluded Rule in the RuleGroup or ManagedRuleGroup will not be evaluated.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-excludedrule.html}
 */
export type ExcludedRule = {
  /**
   * Name of the WebACL.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.FieldIdentifier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldidentifier.html}
 */
export type FieldIdentifier = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `.*\S.*`
   */
  Identifier: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.FieldToMatch`.
 * Field of the request to match.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html}
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
 * Type definition for `AWS::WAFv2::WebACL.ForwardedIPConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html}
 */
export type ForwardedIPConfiguration = {
  FallbackBehavior: "MATCH" | "NO_MATCH";
  /**
   * @pattern `^[a-zA-Z0-9-]+{1,255}$`
   */
  HeaderName: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.GeoMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html}
 */
export type GeoMatchStatement = {
  CountryCodes?: string[];
  ForwardedIPConfig?: ForwardedIPConfiguration;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.HeaderMatchPattern`.
 * The pattern to look for in the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html}
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
 * Type definition for `AWS::WAFv2::WebACL.Headers`.
 * Includes headers of a web request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html}
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
 * Type definition for `AWS::WAFv2::WebACL.ImmunityTimeProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-immunitytimeproperty.html}
 */
export type ImmunityTimeProperty = {
  /**
   * @min `60`
   * @max `259200`
   */
  ImmunityTime: number;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.IPSetForwardedIPConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html}
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
 * Type definition for `AWS::WAFv2::WebACL.IPSetReferenceStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.JsonBody`.
 * Inspect the request body as JSON. The request body immediately follows the request headers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html}
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
 * Type definition for `AWS::WAFv2::WebACL.JsonMatchPattern`.
 * The pattern to look for in the JSON body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html}
 */
export type JsonMatchPattern = {
  /**
   * Inspect all parts of the web request's JSON body.
   */
  All?: Record<string, any>;
  IncludedPaths?: string[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.JsonMatchScope`.
 * The parts of the JSON to match against using the MatchPattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchscope.html}
 */
export type JsonMatchScope = "ALL" | "KEY" | "VALUE";
/**
 * Type definition for `AWS::WAFv2::WebACL.Label`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-label.html}
 */
export type Label = {
  /**
   * Name of the Label.
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.LabelMatchScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchscope.html}
 */
export type LabelMatchScope = "LABEL" | "NAMESPACE";
/**
 * Type definition for `AWS::WAFv2::WebACL.LabelMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html}
 */
export type LabelMatchStatement = {
  /**
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Key: string;
  Scope: LabelMatchScope;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ManagedRuleGroupConfig`.
 * ManagedRuleGroupConfig.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html}
 */
export type ManagedRuleGroupConfig = {
  /**
   * Configures how to use the Account creation fraud prevention managed rule group in the web ACL
   */
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet;
  /**
   * Configures how to use the Account Takeover Prevention managed rule group in the web ACL
   */
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet;
  /**
   * Configures how to use the Bot Control managed rule group in the web ACL
   */
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*\S.*`
   */
  LoginPath?: string;
  PasswordField?: FieldIdentifier;
  PayloadType?: "JSON" | "FORM_ENCODED";
  UsernameField?: FieldIdentifier;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ManagedRuleGroupStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html}
 */
export type ManagedRuleGroupStatement = {
  ExcludedRules?: ExcludedRule[];
  /**
   * Collection of ManagedRuleGroupConfig.
   */
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[];
  /**
   * Name of the WebACL.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name: string;
  /**
   * Action overrides for rules in the rule group.
   * @maxLength `100`
   */
  RuleActionOverrides?: RuleActionOverride[];
  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  ScopeDownStatement?: Statement;
  VendorName: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w#:\.\-/]+$`
   */
  Version?: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.MapMatchScope`.
 * The parts of the request to match against using the MatchPattern.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-mapmatchscope.html}
 */
export type MapMatchScope = "ALL" | "KEY" | "VALUE";
/**
 * Type definition for `AWS::WAFv2::WebACL.NotStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html}
 */
export type NotStatement = {
  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  Statement: Statement;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.OrStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-orstatement.html}
 */
export type OrStatement = {
  Statements: Statement[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.OverrideAction`.
 * Override a RuleGroup or ManagedRuleGroup behavior. This can only be applied to Rule that has RuleGroupReferenceStatement or ManagedRuleGroupReferenceStatement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html}
 */
export type OverrideAction = {
  /**
   * Count traffic towards application.
   */
  Count?: Record<string, any>;
  /**
   * Keep the RuleGroup or ManagedRuleGroup behavior as is.
   */
  None?: Record<string, any>;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.OversizeHandling`.
 * Handling of requests containing oversize fields
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-oversizehandling.html}
 */
export type OversizeHandling = "CONTINUE" | "MATCH" | "NO_MATCH";
/**
 * Type definition for `AWS::WAFv2::WebACL.PhoneNumberField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-phonenumberfield.html}
 */
export type PhoneNumberField = FieldIdentifier;
/**
 * Type definition for `AWS::WAFv2::WebACL.PositionalConstraint`.
 * Position of the evaluation in the FieldToMatch of request.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-positionalconstraint.html}
 */
export type PositionalConstraint =
  | "EXACTLY"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | "CONTAINS_WORD";
/**
 * Type definition for `AWS::WAFv2::WebACL.RateBasedStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RateBasedStatementCustomKey`.
 * Specifies a single custom aggregate key for a rate-base rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RateLimitCookie`.
 * Specifies a cookie as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitcookie.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RateLimitForwardedIP`.
 * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitforwardedip.html}
 */
export type RateLimitForwardedIP = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::WebACL.RateLimitHeader`.
 * Specifies a header as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitheader.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RateLimitHTTPMethod`.
 * Specifies the request's HTTP method as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimithttpmethod.html}
 */
export type RateLimitHTTPMethod = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::WebACL.RateLimitIP`.
 * Specifies the IP address in the web request as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitip.html}
 */
export type RateLimitIP = Record<string, any>;
/**
 * Type definition for `AWS::WAFv2::WebACL.RateLimitLabelNamespace`.
 * Specifies a label namespace to use as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitlabelnamespace.html}
 */
export type RateLimitLabelNamespace = {
  /**
   * The namespace to use for aggregation.
   * @pattern `^[0-9A-Za-z_:-]{1,1024}$`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RateLimitQueryArgument`.
 * Specifies a query argument in the request as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitqueryargument.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RateLimitQueryString`.
 * Specifies the request's query string as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitquerystring.html}
 */
export type RateLimitQueryString = {
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RateLimitUriPath`.
 * Specifies the request's URI Path as an aggregate key for a rate-based rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimituripath.html}
 */
export type RateLimitUriPath = {
  TextTransformations: TextTransformation[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RegexMatchStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RegexPatternSetReferenceStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.RequestBody`.
 * Map of AssociatedResourceType and RequestBodyAssociatedResourceTypeConfig
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestbody.html}
 */
export type RequestBody = Record<
  string,
  RequestBodyAssociatedResourceTypeConfig
>;
/**
 * Type definition for `AWS::WAFv2::WebACL.RequestBodyAssociatedResourceTypeConfig`.
 * Configures the inspection size in the request body.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestbodyassociatedresourcetypeconfig.html}
 */
export type RequestBodyAssociatedResourceTypeConfig = {
  DefaultSizeInspectionLimit: SizeInspectionLimit;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RequestInspection`.
 * Configures the inspection of login requests
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html}
 */
export type RequestInspection = {
  PasswordField: FieldIdentifier;
  PayloadType: "JSON" | "FORM_ENCODED";
  UsernameField: FieldIdentifier;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RequestInspectionACFP`.
 * Configures the inspection of sign-up requests
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html}
 */
export type RequestInspectionACFP = {
  AddressFields?: AddressField[];
  EmailField?: FieldIdentifier;
  PasswordField?: FieldIdentifier;
  PayloadType: "JSON" | "FORM_ENCODED";
  PhoneNumberFields?: PhoneNumberField[];
  UsernameField?: FieldIdentifier;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseContentType`.
 * Valid values are TEXT_PLAIN, TEXT_HTML, and APPLICATION_JSON.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responsecontenttype.html}
 */
export type ResponseContentType =
  | "TEXT_PLAIN"
  | "TEXT_HTML"
  | "APPLICATION_JSON";
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseInspection`.
 * Configures the inspection of login responses
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html}
 */
export type ResponseInspection = {
  /**
   * Response body contents that indicate success or failure of a login request
   */
  BodyContains?: ResponseInspectionBodyContains;
  /**
   * Response headers that indicate success or failure of a login request
   */
  Header?: ResponseInspectionHeader;
  /**
   * Response JSON that indicate success or failure of a login request
   */
  Json?: ResponseInspectionJson;
  /**
   * Response status codes that indicate success or failure of a login request
   */
  StatusCode?: ResponseInspectionStatusCode;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseInspectionBodyContains`.
 * Response body contents that indicate success or failure of a login request
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html}
 */
export type ResponseInspectionBodyContains = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  FailureStrings: string[];
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SuccessStrings: string[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseInspectionHeader`.
 * Response headers that indicate success or failure of a login request
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html}
 */
export type ResponseInspectionHeader = {
  /**
   * @minLength `1`
   * @maxLength `3`
   */
  FailureValues: string[];
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `3`
   */
  SuccessValues: string[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseInspectionJson`.
 * Response JSON that indicate success or failure of a login request
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html}
 */
export type ResponseInspectionJson = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  FailureValues: string[];
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `.*\S.*`
   */
  Identifier: string;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SuccessValues: string[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.ResponseInspectionStatusCode`.
 * Response status codes that indicate success or failure of a login request
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html}
 */
export type ResponseInspectionStatusCode = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  FailureCodes: number[];
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  SuccessCodes: number[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.Rule`.
 * Rule of WebACL that contains condition and action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html}
 */
export type Rule = {
  /**
   * Action taken when Rule matches its condition.
   */
  Action?: RuleAction;
  CaptchaConfig?: CaptchaConfig;
  ChallengeConfig?: ChallengeConfig;
  /**
   * Name of the WebACL.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name: string;
  /**
   * Override a RuleGroup or ManagedRuleGroup behavior. This can only be applied to Rule that has RuleGroupReferenceStatement or ManagedRuleGroupReferenceStatement.
   */
  OverrideAction?: OverrideAction;
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
   * Visibility Metric of the WebACL.
   */
  VisibilityConfig: VisibilityConfig;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RuleAction`.
 * Action taken when Rule matches its condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html}
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
   * Allow traffic towards application.
   */
  Count?: CountAction;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RuleActionOverride`.
 * Action override for rules in the rule group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html}
 */
export type RuleActionOverride = {
  /**
   * Action taken when Rule matches its condition.
   */
  ActionToUse: RuleAction;
  /**
   * Name of the WebACL.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::WAFv2::WebACL.RuleGroupReferenceStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html}
 */
export type RuleGroupReferenceStatement = {
  /**
   * ARN of the WAF entity.
   * @minLength `20`
   * @maxLength `2048`
   */
  Arn: string;
  ExcludedRules?: ExcludedRule[];
  /**
   * Action overrides for rules in the rule group.
   * @maxLength `100`
   */
  RuleActionOverrides?: RuleActionOverride[];
};
/**
 * Type definition for `AWS::WAFv2::WebACL.Scope`.
 * Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-scope.html}
 */
export type Scope = "CLOUDFRONT" | "REGIONAL";
/**
 * Type definition for `AWS::WAFv2::WebACL.SensitivityLevel`.
 * Sensitivity Level current only used for sqli match statements.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sensitivitylevel.html}
 */
export type SensitivityLevel = "LOW" | "HIGH";
/**
 * Type definition for `AWS::WAFv2::WebACL.SizeConstraintStatement`.
 * Size Constraint statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.SizeInspectionLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeinspectionlimit.html}
 */
export type SizeInspectionLimit = "KB_16" | "KB_32" | "KB_48" | "KB_64";
/**
 * Type definition for `AWS::WAFv2::WebACL.SqliMatchStatement`.
 * Sqli Match Statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html}
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
 * Type definition for `AWS::WAFv2::WebACL.Statement`.
 * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html}
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
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
  NotStatement?: NotStatement;
  OrStatement?: OrStatement;
  RateBasedStatement?: RateBasedStatement;
  RegexMatchStatement?: RegexMatchStatement;
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
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
 * Type definition for `AWS::WAFv2::WebACL.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-tag.html}
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
 * Type definition for `AWS::WAFv2::WebACL.TextTransformation`.
 * Text Transformation on the Search String before match.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html}
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
 * Type definition for `AWS::WAFv2::WebACL.TextTransformationType`.
 * Type of text transformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformationtype.html}
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
 * Type definition for `AWS::WAFv2::WebACL.VisibilityConfig`.
 * Visibility Metric of the WebACL.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html}
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
 * Type definition for `AWS::WAFv2::WebACL.XssMatchStatement`.
 * Xss Match Statement.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html}
 */
export type XssMatchStatement = {
  /**
   * Field of the request to match.
   */
  FieldToMatch: FieldToMatch;
  TextTransformations: TextTransformation[];
};
/**
 * Resource type definition for `AWS::WAFv2::WebACL`.
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a WebACL, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a WebACL, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the WebACL with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a WebACL, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html}
 */
export class WAFv2WebACL extends $Resource<
  "AWS::WAFv2::WebACL",
  WAFv2WebACLProperties,
  WAFv2WebACLAttributes
> {
  public static readonly Type = "AWS::WAFv2::WebACL";
  constructor(
    logicalId: string,
    properties: WAFv2WebACLProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WAFv2WebACL.Type, properties, options);
  }
}
