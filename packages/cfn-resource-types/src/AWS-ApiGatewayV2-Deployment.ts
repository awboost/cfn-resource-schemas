import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["DeploymentId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2DeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2Deployment.Type,
      properties,
      ApiGatewayV2Deployment.AttributeNames,
      options,
    );
  }
}
