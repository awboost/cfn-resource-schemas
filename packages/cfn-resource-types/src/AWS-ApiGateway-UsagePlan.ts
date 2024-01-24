import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::UsagePlan`` resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see [Creating and Using API Usage Plans in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the *API Gateway Developer Guide*.
 In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html}
 */
export type ApiGatewayUsagePlanProperties = {
  /**
   * The associated API stages of a usage plan.
   */
  ApiStages?: ApiStage[];
  /**
   * The description of a usage plan.
   */
  Description?: string;
  /**
   * The target maximum number of permitted requests per a given unit time interval.
   */
  Quota?: QuotaSettings;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   */
  Tags?: Tag[];
  /**
   * A map containing method level throttling information for API stage in a usage plan.
   */
  Throttle?: ThrottleSettings;
  /**
   * The name of a usage plan.
   */
  UsagePlanName?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::UsagePlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#aws-resource-apigateway-usageplan-return-values}
 */
export type ApiGatewayUsagePlanAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::ApiGateway::UsagePlan.ApiStage`.
 * API stage name of the associated API stage in a usage plan.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html}
 */
export type ApiStage = {
  /**
   * API Id of the associated API stage in a usage plan.
   */
  ApiId?: string;
  /**
   * API stage name of the associated API stage in a usage plan.
   */
  Stage?: string;
  /**
   * Map containing method level throttling information for API stage in a usage plan.
   */
  Throttle?: Record<string, ThrottleSettings>;
};
/**
 * Type definition for `AWS::ApiGateway::UsagePlan.QuotaSettings`.
 * ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.
 In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html}
 */
export type QuotaSettings = {
  /**
   * The target maximum number of requests that can be made in a given time period.
   * @min `0`
   */
  Limit?: number;
  /**
   * The number of requests subtracted from the given limit in the initial time period.
   * @min `0`
   */
  Offset?: number;
  /**
   * The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".
   */
  Period?: string;
};
/**
 * Type definition for `AWS::ApiGateway::UsagePlan.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-tag.html}
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
  Value: string;
};
/**
 * Type definition for `AWS::ApiGateway::UsagePlan.ThrottleSettings`.
 * ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html}
 */
export type ThrottleSettings = {
  /**
   * The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.
   * @min `0`
   */
  BurstLimit?: number;
  /**
   * The API target request rate limit.
   * @min `0`
   */
  RateLimit?: number;
};
/**
 * The ``AWS::ApiGateway::UsagePlan`` resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see [Creating and Using API Usage Plans in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the *API Gateway Developer Guide*.
 In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html}
 */
export class ApiGatewayUsagePlan extends $Resource<
  "AWS::ApiGateway::UsagePlan",
  ApiGatewayUsagePlanProperties,
  ApiGatewayUsagePlanAttributes
> {
  public static readonly Type = "AWS::ApiGateway::UsagePlan";
  constructor(
    logicalId: string,
    properties: ApiGatewayUsagePlanProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayUsagePlan.Type, properties, options);
  }
}
