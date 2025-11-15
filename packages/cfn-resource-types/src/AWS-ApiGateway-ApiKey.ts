import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::ApiKey`` resource creates a unique key that you can distribute to clients who are executing API Gateway ``Method`` resources that require an API key. To specify which API key clients must use, map the API key with the ``RestApi`` and ``Stage`` resources that include the methods that require a key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html}
 */
export type ApiGatewayApiKeyProperties = {
  CustomerId?: string;
  Description?: string;
  Enabled?: boolean;
  GenerateDistinctId?: boolean;
  /**
     * A name for the API key. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the API key name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
      If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     */
  Name?: string;
  StageKeys?: StageKey[];
  Tags?: Tag[];
  Value?: string;
};
/**
 * Attribute type definition for `AWS::ApiGateway::ApiKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#aws-resource-apigateway-apikey-return-values}
 */
export type ApiGatewayApiKeyAttributes = {
  APIKeyId: string;
};
/**
 * Type definition for `AWS::ApiGateway::ApiKey.StageKey`.
 * ``StageKey`` is a property of the [AWS::ApiGateway::ApiKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html) resource that specifies the stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-stagekey.html}
 */
export type StageKey = {
  RestApiId?: string;
  StageName?: string;
};
/**
 * Type definition for `AWS::ApiGateway::ApiKey.Tag`.
 * An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-tag.html}
 */
export type Tag = {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the specified tag key.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The ``AWS::ApiGateway::ApiKey`` resource creates a unique key that you can distribute to clients who are executing API Gateway ``Method`` resources that require an API key. To specify which API key clients must use, map the API key with the ``RestApi`` and ``Stage`` resources that include the methods that require a key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html}
 */
export class ApiGatewayApiKey extends $Resource<
  "AWS::ApiGateway::ApiKey",
  ApiGatewayApiKeyProperties,
  ApiGatewayApiKeyAttributes
> {
  public static readonly Type = "AWS::ApiGateway::ApiKey";
  constructor(
    logicalId: string,
    properties: ApiGatewayApiKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayApiKey.Type, properties, options);
  }
}
