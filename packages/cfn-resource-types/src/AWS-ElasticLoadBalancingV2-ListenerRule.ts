import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ElasticLoadBalancingV2::ListenerRule`.
 * Specifies a listener rule. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions.
 For more information, see [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html) in the *User Guide for Application Load Balancers*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html}
 */
export type ElasticLoadBalancingV2ListenerRuleProperties = {
  /**
     * The actions.
     The rule must include exactly one of the following types of actions: ``forward``, ``fixed-response``, or ``redirect``, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
     */
  Actions: Action[];
  /**
     * The conditions.
     The rule can optionally include up to one of each of the following conditions: ``http-request-method``, ``host-header``, ``path-pattern``, and ``source-ip``. A rule can also optionally include one or more of each of the following conditions: ``http-header`` and ``query-string``.
     */
  Conditions: RuleCondition[];
  /**
   * The Amazon Resource Name (ARN) of the listener.
   */
  ListenerArn?: string;
  /**
     * The rule priority. A listener can't have multiple rules with the same priority.
     If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
     */
  Priority: number;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::ListenerRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html#aws-resource-elasticloadbalancingv2-listenerrule-return-values}
 */
export type ElasticLoadBalancingV2ListenerRuleAttributes = {
  IsDefault: boolean;
  RuleArn: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.Action`.
 * Specifies an action for a listener rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html}
 */
export type Action = {
  /**
   * [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
   */
  AuthenticateCognitoConfig?: AuthenticateCognitoConfig;
  /**
   * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
   */
  AuthenticateOidcConfig?: AuthenticateOidcConfig;
  /**
   * [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
   */
  FixedResponseConfig?: FixedResponseConfig;
  /**
   * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when ``Type`` is ``forward``. If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
   */
  ForwardConfig?: ForwardConfig;
  /**
   * The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
   */
  Order?: number;
  /**
   * [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
   */
  RedirectConfig?: RedirectConfig;
  /**
   * The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to one or more target groups, use ``ForwardConfig`` instead.
   */
  TargetGroupArn?: string;
  /**
   * The type of action.
   */
  Type: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateCognitoConfig`.
 * Specifies information required when integrating with Amazon Cognito to authenticate users.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html}
 */
export type AuthenticateCognitoConfig = {
  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   */
  AuthenticationRequestExtraParams?: Record<string, string>;
  /**
     * The behavior if the user is not authenticated. The following are possible values:
      +  deny```` - Return an HTTP 401 Unauthorized error.
      +  allow```` - Allow the request to be forwarded to the target.
      +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
     */
  OnUnauthenticatedRequest?: string;
  /**
     * The set of user claims to be requested from the IdP. The default is ``openid``.
     To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
     */
  Scope?: string;
  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   */
  SessionCookieName?: string;
  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   */
  SessionTimeout?: number;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
   */
  UserPoolArn: string;
  /**
   * The ID of the Amazon Cognito user pool client.
   */
  UserPoolClientId: string;
  /**
   * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
   */
  UserPoolDomain: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateOidcConfig`.
 * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html}
 */
export type AuthenticateOidcConfig = {
  /**
   * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
   */
  AuthenticationRequestExtraParams?: Record<string, string>;
  /**
   * The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   */
  AuthorizationEndpoint: string;
  /**
   * The OAuth 2.0 client identifier.
   */
  ClientId: string;
  /**
   * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
   */
  ClientSecret?: string;
  /**
   * The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   */
  Issuer: string;
  /**
     * The behavior if the user is not authenticated. The following are possible values:
      +  deny```` - Return an HTTP 401 Unauthorized error.
      +  allow```` - Allow the request to be forwarded to the target.
      +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
     */
  OnUnauthenticatedRequest?: string;
  /**
     * The set of user claims to be requested from the IdP. The default is ``openid``.
     To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
     */
  Scope?: string;
  /**
   * The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
   */
  SessionCookieName?: string;
  /**
   * The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
   */
  SessionTimeout?: number;
  /**
   * The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   */
  TokenEndpoint: string;
  /**
   * Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
   */
  UseExistingClientSecret?: boolean;
  /**
   * The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
   */
  UserInfoEndpoint: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.FixedResponseConfig`.
 * Specifies information required when returning a custom HTTP response.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html}
 */
export type FixedResponseConfig = {
  /**
     * The content type.
     Valid Values: text/plain | text/css | text/html | application/javascript | application/json
     */
  ContentType?: string;
  /**
   * The message.
   */
  MessageBody?: string;
  /**
   * The HTTP response code (2XX, 4XX, or 5XX).
   */
  StatusCode: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.ForwardConfig`.
 * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when ``Type`` is ``forward``. If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html}
 */
export type ForwardConfig = {
  /**
   * Information about the target group stickiness for a rule.
   */
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
  /**
   * Information about how traffic will be distributed between multiple target groups in a forward rule.
   */
  TargetGroups?: TargetGroupTuple[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HostHeaderConfig`.
 * Information about a host header condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html}
 */
export type HostHeaderConfig = {
  /**
     * The host names. The maximum size of each name is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
     If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HttpHeaderConfig`.
 * Information about an HTTP header condition.
 There is a set of standard HTTP header fields. You can also define custom HTTP header fields.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html}
 */
export type HttpHeaderConfig = {
  /**
   * The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
   */
  HttpHeaderName?: string;
  /**
     * The strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
     If the same header appears multiple times in the request, we search them in order until a match is found.
     If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HttpRequestMethodConfig`.
 * Information about an HTTP method condition.
 HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the [HTTP Method Registry](https://docs.aws.amazon.com/https://www.iana.org/assignments/http-methods/http-methods.xhtml). You can also define custom HTTP methods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html}
 */
export type HttpRequestMethodConfig = {
  /**
     * The name of the request method. The maximum size is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
     If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.PathPatternConfig`.
 * Information about a path pattern condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html}
 */
export type PathPatternConfig = {
  /**
     * The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
     If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringConfig`.
 * Information about a query string condition.
 The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html}
 */
export type QueryStringConfig = {
  /**
     * The key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in ``Values`` using a '\' character.
     If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
     */
  Values?: QueryStringKeyValue[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringKeyValue`.
 * Information about a key/value pair.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html}
 */
export type QueryStringKeyValue = {
  /**
   * The key. You can omit the key.
   */
  Key?: string;
  /**
   * The value.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.RedirectConfig`.
 * Information about a redirect action.
 A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
 You can reuse URI components using the following reserved keywords:
  +  #{protocol}
  +  #{host}
  +  #{port}
  +  #{path} (the leading "/" is removed)
  +  #{query}
  
 For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html}
 */
export type RedirectConfig = {
  /**
   * The hostname. This component is not percent-encoded. The hostname can contain #{host}.
   */
  Host?: string;
  /**
   * The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
   */
  Path?: string;
  /**
   * The port. You can specify a value from 1 to 65535 or #{port}.
   */
  Port?: string;
  /**
   * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.
   */
  Protocol?: string;
  /**
   * The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
   */
  Query?: string;
  /**
   * The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
   */
  StatusCode: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.RuleCondition`.
 * Specifies a condition for a listener rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html}
 */
export type RuleCondition = {
  /**
     * The field in the HTTP request. The following are the possible values:
      +   ``http-header``
      +   ``http-request-method``
      +   ``host-header``
      +   ``path-pattern``
      +   ``query-string``
      +   ``source-ip``
     */
  Field?: string;
  /**
   * Information for a host header condition. Specify only when ``Field`` is ``host-header``.
   */
  HostHeaderConfig?: HostHeaderConfig;
  /**
   * Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.
   */
  HttpHeaderConfig?: HttpHeaderConfig;
  /**
   * Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.
   */
  HttpRequestMethodConfig?: HttpRequestMethodConfig;
  /**
   * Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.
   */
  PathPatternConfig?: PathPatternConfig;
  /**
   * Information for a query string condition. Specify only when ``Field`` is ``query-string``.
   */
  QueryStringConfig?: QueryStringConfig;
  /**
   * Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.
   */
  SourceIpConfig?: SourceIpConfig;
  /**
     * The condition value. Specify only when ``Field`` is ``host-header`` or ``path-pattern``. Alternatively, to specify multiple host names or multiple path patterns, use ``HostHeaderConfig`` or ``PathPatternConfig``.
     If ``Field`` is ``host-header`` and you're not using ``HostHeaderConfig``, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
      +  A-Z, a-z, 0-9
      +  - .
      +  * (matches 0 or more characters)
      +  ? (matches exactly 1 character)
      
     If ``Field`` is ``path-pattern`` and you're not using ``PathPatternConfig``, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
      +  A-Z, a-z, 0-9
      +  _ - . $ / ~ " ' @ : +
      +  & (using &amp;)
      +  * (matches 0 or more characters)
      +  ? (matches exactly 1 character)
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.SourceIpConfig`.
 * Information about a source IP condition.
 You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html}
 */
export type SourceIpConfig = {
  /**
     * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
     If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.
     */
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupStickinessConfig`.
 * Information about the target group stickiness for a rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html}
 */
export type TargetGroupStickinessConfig = {
  /**
   * The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
   */
  DurationSeconds?: number;
  /**
   * Indicates whether target group stickiness is enabled.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupTuple`.
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html}
 */
export type TargetGroupTuple = {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   */
  TargetGroupArn?: string;
  /**
   * The weight. The range is 0 to 999.
   */
  Weight?: number;
};
/**
 * Resource type definition for `AWS::ElasticLoadBalancingV2::ListenerRule`.
 * Specifies a listener rule. The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions.
 For more information, see [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html) in the *User Guide for Application Load Balancers*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html}
 */
export class ElasticLoadBalancingV2ListenerRule extends $Resource<
  "AWS::ElasticLoadBalancingV2::ListenerRule",
  ElasticLoadBalancingV2ListenerRuleProperties,
  ElasticLoadBalancingV2ListenerRuleAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::ListenerRule";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ElasticLoadBalancingV2ListenerRule.Type,
      properties,
      options,
    );
  }
}
