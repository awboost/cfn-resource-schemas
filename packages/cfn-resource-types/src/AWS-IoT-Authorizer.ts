import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::Authorizer`.
 * Creates an authorizer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html}
 */
export type IoTAuthorizerProperties = {
  AuthorizerFunctionArn: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w=,@-]+`
   */
  AuthorizerName?: string;
  EnableCachingForHttp?: boolean;
  SigningDisabled?: boolean;
  Status?: "ACTIVE" | "INACTIVE";
  Tags?: Tag[];
  TokenKeyName?: string;
  TokenSigningPublicKeys?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::IoT::Authorizer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html#aws-resource-iot-authorizer-return-values}
 */
export type IoTAuthorizerAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::IoT::Authorizer.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-authorizer-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::Authorizer`.
 * Creates an authorizer.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-authorizer.html}
 */
export class IoTAuthorizer extends $Resource<
  "AWS::IoT::Authorizer",
  IoTAuthorizerProperties,
  IoTAuthorizerAttributes
> {
  public static readonly Type = "AWS::IoT::Authorizer";
  constructor(
    logicalId: string,
    properties: IoTAuthorizerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTAuthorizer.Type, properties, options);
  }
}
