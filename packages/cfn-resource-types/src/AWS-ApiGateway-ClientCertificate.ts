import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::ClientCertificate`` resource creates a client certificate that API Gateway uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html}
 */
export type ApiGatewayClientCertificateProperties = {
  Description?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::ClientCertificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html#aws-resource-apigateway-clientcertificate-return-values}
 */
export type ApiGatewayClientCertificateAttributes = {
  ClientCertificateId: string;
};
/**
 * Type definition for `AWS::ApiGateway::ClientCertificate.Tag`.
 * An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-clientcertificate-tag.html}
 */
export type Tag = {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   */
  Key: string;
  /**
   * The value for the specified tag key.
   */
  Value: string;
};
/**
 * The ``AWS::ApiGateway::ClientCertificate`` resource creates a client certificate that API Gateway uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html}
 */
export class ApiGatewayClientCertificate extends $Resource<
  "AWS::ApiGateway::ClientCertificate",
  ApiGatewayClientCertificateProperties,
  ApiGatewayClientCertificateAttributes
> {
  public static readonly Type = "AWS::ApiGateway::ClientCertificate";
  constructor(
    logicalId: string,
    properties: ApiGatewayClientCertificateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayClientCertificate.Type, properties, options);
  }
}
