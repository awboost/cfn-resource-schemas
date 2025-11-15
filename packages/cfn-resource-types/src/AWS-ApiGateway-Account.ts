import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Account`` resource specifies the IAM role that Amazon API Gateway uses to write API logs to Amazon CloudWatch Logs. To avoid overwriting other roles, you should only have one ``AWS::ApiGateway::Account`` resource per region per account.
 When you delete a stack containing this resource, API Gateway can still assume the provided IAM role to write API logs to CloudWatch Logs. To deny API Gateway access to write API logs to CloudWatch logs, update the permissions policies or change the IAM role to deny access.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html}
 */
export type ApiGatewayAccountProperties = {
  CloudWatchRoleArn?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::Account`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html#aws-resource-apigateway-account-return-values}
 */
export type ApiGatewayAccountAttributes = {
  Id: string;
};
/**
 * The ``AWS::ApiGateway::Account`` resource specifies the IAM role that Amazon API Gateway uses to write API logs to Amazon CloudWatch Logs. To avoid overwriting other roles, you should only have one ``AWS::ApiGateway::Account`` resource per region per account.
 When you delete a stack containing this resource, API Gateway can still assume the provided IAM role to write API logs to CloudWatch Logs. To deny API Gateway access to write API logs to CloudWatch logs, update the permissions policies or change the IAM role to deny access.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html}
 */
export class ApiGatewayAccount extends $Resource<
  "AWS::ApiGateway::Account",
  ApiGatewayAccountProperties,
  ApiGatewayAccountAttributes
> {
  public static readonly Type = "AWS::ApiGateway::Account";
  constructor(
    logicalId: string,
    properties: ApiGatewayAccountProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayAccount.Type, properties, options);
  }
}
