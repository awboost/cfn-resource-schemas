import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::Listener
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html}
 */
export type ElasticLoadBalancingV2ListenerProperties = {
  AlpnPolicy?: string[];
  Certificates?: Certificate[];
  DefaultActions: Action[];
  LoadBalancerArn: string;
  MutualAuthentication?: MutualAuthentication;
  Port?: number;
  Protocol?: string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html}
 */
export type Action = {
  AuthenticateCognitoConfig?: AuthenticateCognitoConfig;
  AuthenticateOidcConfig?: AuthenticateOidcConfig;
  FixedResponseConfig?: FixedResponseConfig;
  ForwardConfig?: ForwardConfig;
  Order?: number;
  RedirectConfig?: RedirectConfig;
  TargetGroupArn?: string;
  Type: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.AuthenticateCognitoConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html}
 */
export type AuthenticateCognitoConfig = {
  AuthenticationRequestExtraParams?: Record<string, string>;
  OnUnauthenticatedRequest?: string;
  Scope?: string;
  SessionCookieName?: string;
  SessionTimeout?: string;
  UserPoolArn: string;
  UserPoolClientId: string;
  UserPoolDomain: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.AuthenticateOidcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html}
 */
export type AuthenticateOidcConfig = {
  AuthenticationRequestExtraParams?: Record<string, string>;
  AuthorizationEndpoint: string;
  ClientId: string;
  ClientSecret?: string;
  Issuer: string;
  OnUnauthenticatedRequest?: string;
  Scope?: string;
  SessionCookieName?: string;
  SessionTimeout?: string;
  TokenEndpoint: string;
  UseExistingClientSecret?: boolean;
  UserInfoEndpoint: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html}
 */
export type Certificate = {
  CertificateArn?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.FixedResponseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html}
 */
export type FixedResponseConfig = {
  ContentType?: string;
  MessageBody?: string;
  StatusCode: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.ForwardConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html}
 */
export type ForwardConfig = {
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
  TargetGroups?: TargetGroupTuple[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.MutualAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html}
 */
export type MutualAuthentication = {
  IgnoreClientCertificateExpiry?: boolean;
  Mode?: string;
  TrustStoreArn?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.RedirectConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html}
 */
export type RedirectConfig = {
  Host?: string;
  Path?: string;
  Port?: string;
  Protocol?: string;
  Query?: string;
  StatusCode: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.TargetGroupStickinessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html}
 */
export type TargetGroupStickinessConfig = {
  DurationSeconds?: number;
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::Listener.TargetGroupTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html}
 */
export type TargetGroupTuple = {
  TargetGroupArn?: string;
  Weight?: number;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::Listener
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
