import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html}
 */
export type ElasticLoadBalancingV2ListenerRuleProperties = {
  Actions: Action[];
  Conditions: RuleCondition[];
  ListenerArn?: string;
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html}
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
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateCognitoConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html}
 */
export type AuthenticateCognitoConfig = {
  AuthenticationRequestExtraParams?: Record<string, string>;
  OnUnauthenticatedRequest?: string;
  Scope?: string;
  SessionCookieName?: string;
  SessionTimeout?: number;
  UserPoolArn: string;
  UserPoolClientId: string;
  UserPoolDomain: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.AuthenticateOidcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html}
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
  SessionTimeout?: number;
  TokenEndpoint: string;
  UseExistingClientSecret?: boolean;
  UserInfoEndpoint: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.FixedResponseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html}
 */
export type FixedResponseConfig = {
  ContentType?: string;
  MessageBody?: string;
  StatusCode: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.ForwardConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html}
 */
export type ForwardConfig = {
  TargetGroupStickinessConfig?: TargetGroupStickinessConfig;
  TargetGroups?: TargetGroupTuple[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HostHeaderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html}
 */
export type HostHeaderConfig = {
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HttpHeaderConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html}
 */
export type HttpHeaderConfig = {
  HttpHeaderName?: string;
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.HttpRequestMethodConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html}
 */
export type HttpRequestMethodConfig = {
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.PathPatternConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html}
 */
export type PathPatternConfig = {
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html}
 */
export type QueryStringConfig = {
  Values?: QueryStringKeyValue[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.QueryStringKeyValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html}
 */
export type QueryStringKeyValue = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.RedirectConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html}
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
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.RuleCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html}
 */
export type RuleCondition = {
  Field?: string;
  HostHeaderConfig?: HostHeaderConfig;
  HttpHeaderConfig?: HttpHeaderConfig;
  HttpRequestMethodConfig?: HttpRequestMethodConfig;
  PathPatternConfig?: PathPatternConfig;
  QueryStringConfig?: QueryStringConfig;
  SourceIpConfig?: SourceIpConfig;
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.SourceIpConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html}
 */
export type SourceIpConfig = {
  Values?: string[];
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupStickinessConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html}
 */
export type TargetGroupStickinessConfig = {
  DurationSeconds?: number;
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::ElasticLoadBalancingV2::ListenerRule.TargetGroupTuple`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html}
 */
export type TargetGroupTuple = {
  TargetGroupArn?: string;
  Weight?: number;
};
/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerRule
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
