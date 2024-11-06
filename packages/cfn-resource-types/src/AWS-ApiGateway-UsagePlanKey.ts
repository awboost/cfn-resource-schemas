import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::UsagePlanKey`` resource associates an API key with a usage plan. This association determines which users the usage plan is applied to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html}
 */
export type ApiGatewayUsagePlanKeyProperties = {
  /**
   * The Id of the UsagePlanKey resource.
   */
  KeyId: string;
  KeyType: "API_KEY";
  /**
   * The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.
   */
  UsagePlanId: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::UsagePlanKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#aws-resource-apigateway-usageplankey-return-values}
 */
export type ApiGatewayUsagePlanKeyAttributes = {
  Id: string;
};
/**
 * The ``AWS::ApiGateway::UsagePlanKey`` resource associates an API key with a usage plan. This association determines which users the usage plan is applied to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html}
 */
export class ApiGatewayUsagePlanKey extends $Resource<
  "AWS::ApiGateway::UsagePlanKey",
  ApiGatewayUsagePlanKeyProperties,
  ApiGatewayUsagePlanKeyAttributes
> {
  public static readonly Type = "AWS::ApiGateway::UsagePlanKey";
  constructor(
    logicalId: string,
    properties: ApiGatewayUsagePlanKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayUsagePlanKey.Type, properties, options);
  }
}
