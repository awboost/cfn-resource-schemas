import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::Model`` resource defines the structure of a request or response payload for an API method.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 */
export type ApiGatewayModelProperties = {
  ContentType?: string;
  Description?: string;
  /**
     * A name for the model. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the model name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
      If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     */
  Name?: string;
  RestApiId: string;
  Schema?: Record<string, any> | string;
};
/**
 * The ``AWS::ApiGateway::Model`` resource defines the structure of a request or response payload for an API method.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html}
 */
export class ApiGatewayModel extends $Resource<
  "AWS::ApiGateway::Model",
  ApiGatewayModelProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ApiGateway::Model";
  constructor(
    logicalId: string,
    properties: ApiGatewayModelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayModel.Type, properties, options);
  }
}
