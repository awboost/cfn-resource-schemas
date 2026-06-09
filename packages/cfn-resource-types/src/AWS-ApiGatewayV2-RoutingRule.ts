import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ApiGatewayV2::RoutingRule`.
 * Represents a routing rule. When the incoming request to a domain name matches the conditions for a rule, API Gateway invokes a stage of a target API. Supported only for REST APIs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routingrule.html}
 */
export type ApiGatewayV2RoutingRuleProperties = {
  /**
   * The resulting action based on matching a routing rules condition. Only InvokeApi is supported.
   */
  Actions: Action[];
  /**
   * The conditions of the routing rule.
   */
  Conditions: Condition[];
  /**
   * The ARN of the domain name.
   */
  DomainNameArn: string;
  /**
   * The order in which API Gateway evaluates a rule. Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.
   */
  Priority: number;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::RoutingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routingrule.html#aws-resource-apigatewayv2-routingrule-return-values}
 */
export type ApiGatewayV2RoutingRuleAttributes = {
  RoutingRuleArn: string;
  RoutingRuleId: string;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.Action`.
 * Represents a routing rule action. The only supported action is ``invokeApi``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-action.html}
 */
export type Action = {
  /**
   * Represents an InvokeApi action.
   */
  InvokeApi: ActionInvokeApi;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.ActionInvokeApi`.
 * Represents an InvokeApi action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-actioninvokeapi.html}
 */
export type ActionInvokeApi = {
  /**
   * The API identifier of the target API.
   */
  ApiId: string;
  /**
   * The name of the target stage.
   */
  Stage: string;
  /**
   * The strip base path setting. When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.
   */
  StripBasePath?: boolean;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.Condition`.
 * Represents a condition. Conditions can contain up to two ``matchHeaders`` conditions and one ``matchBasePaths`` conditions. API Gateway evaluates header conditions and base path conditions together. You can only use AND between header and base path conditions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-condition.html}
 */
export type Condition = {
  /**
   * The base path to be matched.
   */
  MatchBasePaths?: MatchBasePaths;
  /**
   * The headers to be matched.
   */
  MatchHeaders?: MatchHeaders;
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.MatchBasePaths`.
 * Represents a ``MatchBasePaths`` condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-matchbasepaths.html}
 */
export type MatchBasePaths = {
  /**
   * The string of the case sensitive base path to be matched.
   */
  AnyOf: string[];
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.MatchHeaders`.
 * Represents a ``MatchHeaders`` condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-matchheaders.html}
 */
export type MatchHeaders = {
  /**
   * The header name and header value glob to be matched. The matchHeaders condition is matched if any of the header name and header value globs are matched.
   */
  AnyOf: MatchHeaderValue[];
};
/**
 * Type definition for `AWS::ApiGatewayV2::RoutingRule.MatchHeaderValue`.
 * Represents a ``MatchHeaderValue``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routingrule-matchheadervalue.html}
 */
export type MatchHeaderValue = {
  /**
   * The case insensitive header name to be matched. The header name must be less than 40 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~.``.
   */
  Header: string;
  /**
   * The case sensitive header glob value to be matched against entire header value. The header glob value must be less than 128 characters and the only allowed characters are ``a-z``, ``A-Z``, ``0-9``, and the following special characters: ``*?-!#$%&'.^_`|~``. Wildcard matching is supported for header glob values but must be for ``*prefix-match``, ``suffix-match*``, or ``*infix*-match``.
   */
  ValueGlob: string;
};
/**
 * Resource type definition for `AWS::ApiGatewayV2::RoutingRule`.
 * Represents a routing rule. When the incoming request to a domain name matches the conditions for a rule, API Gateway invokes a stage of a target API. Supported only for REST APIs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routingrule.html}
 */
export class ApiGatewayV2RoutingRule extends $Resource<
  "AWS::ApiGatewayV2::RoutingRule",
  ApiGatewayV2RoutingRuleProperties,
  ApiGatewayV2RoutingRuleAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::RoutingRule";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2RoutingRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2RoutingRule.Type, properties, options);
  }
}
