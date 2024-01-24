import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGatewayV2::Deployment`` resource creates a deployment for an API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html}
 */
export type ApiGatewayV2DeploymentProperties = {
  /**
   * The API identifier.
   */
  ApiId: string;
  /**
   * The description for the deployment resource.
   */
  Description?: string;
  /**
   * The name of an existing stage to associate with the deployment.
   */
  StageName?: string;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#aws-resource-apigatewayv2-deployment-return-values}
 */
export type ApiGatewayV2DeploymentAttributes = {
  DeploymentId: string;
};
/**
 * The ``AWS::ApiGatewayV2::Deployment`` resource creates a deployment for an API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html}
 */
export class ApiGatewayV2Deployment extends $Resource<
  "AWS::ApiGatewayV2::Deployment",
  ApiGatewayV2DeploymentProperties,
  ApiGatewayV2DeploymentAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::Deployment";
  constructor(
    logicalId: string,
    properties: ApiGatewayV2DeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayV2Deployment.Type, properties, options);
  }
}
