import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ElasticLoadBalancingV2::Listener`.
 * Specifies a listener for an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html}
 */
export type ElasticLoadBalancingV2ListenerProperties = {
  /**
   * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
   */
  AlpnPolicy?: string[];
  /**
     * The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
     For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
     To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).
     */
  Certificates?: Certificate[];
  /**
     * The actions for the default rule. You cannot define a condition for a default rule.
     To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).
     */
  DefaultActions: Action[];
  /**
   * The listener attributes. Attributes that you do not modify retain their current values.
   */
  ListenerAttributes?: ListenerAttribute[];
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   */
  LoadBalancerArn: string;
  /**
   * The mutual authentication configuration information.
   */
  MutualAuthentication?: MutualAuthentication;
  /**
   * The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.
   */
  Port?: number;
  /**
   * The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
   */
  Protocol?: string;
  /**
     * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
     [HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.
     */
  SslPolicy?: string;
};
/**
 * Attribute type definition for `AWS::ElasticLoadBalancingV2::Listener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#aws-resource-elasticloadbalancingv2-listener-return-values}
 */
export type ElasticLoadBalancingV2ListenerAttributes = {
  ListenerArn: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.Action`.
 * Specifies an action for a listener rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html}
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.AuthenticateCognitoConfig`.
 * Specifies information required when integrating with Amazon Cognito to authenticate users.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html}
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
  SessionTimeout?: string;
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.AuthenticateOidcConfig`.
 * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html}
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
  SessionTimeout?: string;
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.Certificate`.
 * Specifies an SSL server certificate to use as the default certificate for a secure listener.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html}
 */
export type Certificate = {
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   */
  CertificateArn?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.FixedResponseConfig`.
 * Specifies information required when returning a custom HTTP response.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html}
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.ForwardConfig`.
 * Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when ``Type`` is ``forward``. If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html}
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.ListenerAttribute`.
 * Information about a listener attribute.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-listenerattribute.html}
 */
export type ListenerAttribute = {
  /**
     * The name of the attribute.
     The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.
      +  ``tcp.idle_timeout.seconds`` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.
      
     The following attributes are only supported by Application Load Balancers.
      +  ``routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
      +  ``routing.http.request.x_amzn_mtls_clientcert_issuer.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
      +  ``routing.http.request.x_amzn_mtls_clientcert_subject.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
      +  ``routing.http.request.x_amzn_mtls_clientcert_validity.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
      +  ``routing.http.request.x_amzn_mtls_clientcert_leaf.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
      +  ``routing.http.request.x_amzn_mtls_clientcert.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
      +  ``routing.http.request.x_amzn_tls_version.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
      +  ``routing.http.request.x_amzn_tls_cipher_suite.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
      +  ``routing.http.response.server.enabled`` - Enables you to allow or remove the HTTP response server header.
      +  ``routing.http.response.strict_transport_security.header_value`` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
      +  ``routing.http.response.access_control_allow_origin.header_value`` - Specifies which origins are allowed to access the server.
      +  ``routing.http.response.access_control_allow_methods.header_value`` - Returns which HTTP methods are allowed when accessing the server from a different origin.
      +  ``routing.http.response.access_control_allow_headers.header_value`` - Specifies which headers can be used during the request.
      +  ``routing.http.response.access_control_allow_credentials.header_value`` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
      +  ``routing.http.response.access_control_expose_headers.header_value`` - Returns which headers the browser can expose to the requesting client.
      +  ``routing.http.response.access_control_max_age.header_value`` - Specifies how long the results of a preflight request can be cached, in seconds.
      +  ``routing.http.response.content_security_policy.header_value`` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
      +  ``routing.http.response.x_content_type_options.header_value`` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
      +  ``routing.http.response.x_frame_options.header_value`` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.
     */
  Key?: string;
  /**
   * The value of the attribute.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.MutualAuthentication`.
 * The mutual authentication configuration information.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html}
 */
export type MutualAuthentication = {
  /**
   * Indicates whether trust store CA certificate names are advertised.
   */
  AdvertiseTrustStoreCaNames?: string;
  /**
   * Indicates whether expired client certificates are ignored.
   */
  IgnoreClientCertificateExpiry?: boolean;
  /**
   * The client certificate handling method. Options are ``off``, ``passthrough`` or ``verify``. The default value is ``off``.
   */
  Mode?: string;
  /**
   * The Amazon Resource Name (ARN) of the trust store.
   */
  TrustStoreArn?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.RedirectConfig`.
 * Information about a redirect action.
 A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
 You can reuse URI components using the following reserved keywords:
  +  #{protocol}
  +  #{host}
  +  #{port}
  +  #{path} (the leading "/" is removed)
  +  #{query}
  
 For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html}
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
   * The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
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
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.TargetGroupStickinessConfig`.
 * Information about the target group stickiness for a rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html}
 */
export type TargetGroupStickinessConfig = {
  /**
   * The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.
   */
  DurationSeconds?: number;
  /**
   * Indicates whether target group stickiness is enabled.
   */
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.TargetGroupTuple`.
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html}
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
 * Resource type definition for `AWS::ElasticLoadBalancingV2::Listener`.
 * Specifies a listener for an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html}
 */
export class ElasticLoadBalancingV2Listener extends $Resource<
  "AWS::ElasticLoadBalancingV2::Listener",
  ElasticLoadBalancingV2ListenerProperties,
  ElasticLoadBalancingV2ListenerAttributes
> {
  public static readonly Type = "AWS::ElasticLoadBalancingV2::Listener";
  constructor(
    logicalId: string,
    properties: ElasticLoadBalancingV2ListenerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ElasticLoadBalancingV2Listener.Type, properties, options);
  }
}
