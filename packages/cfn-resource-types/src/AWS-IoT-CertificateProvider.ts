import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Use the AWS::IoT::CertificateProvider resource to declare an AWS IoT Certificate Provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html}
 */
export type IoTCertificateProviderProperties = {
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  AccountDefaultForOperations: CertificateProviderOperation[];
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w=,@-]+`
   */
  CertificateProviderName?: string;
  /**
   * @minLength `1`
   * @maxLength `170`
   */
  LambdaFunctionArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::CertificateProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html#aws-resource-iot-certificateprovider-return-values}
 */
export type IoTCertificateProviderAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::IoT::CertificateProvider.CertificateProviderOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-certificateprovider-certificateprovideroperation.html}
 */
export type CertificateProviderOperation = "CreateCertificateFromCsr";
/**
 * Type definition for `AWS::IoT::CertificateProvider.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-certificateprovider-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Use the AWS::IoT::CertificateProvider resource to declare an AWS IoT Certificate Provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificateprovider.html}
 */
export class IoTCertificateProvider extends $Resource<
  "AWS::IoT::CertificateProvider",
  IoTCertificateProviderProperties,
  IoTCertificateProviderAttributes
> {
  public static readonly Type = "AWS::IoT::CertificateProvider";
  constructor(
    logicalId: string,
    properties: IoTCertificateProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTCertificateProvider.Type, properties, options);
  }
}
