import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::EncryptionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-encryptionconfiguration.html}
 */
export type IoTEncryptionConfigurationProperties = {
  EncryptionType: "CUSTOMER_MANAGED_KMS_KEY" | "AWS_OWNED_KMS_KEY";
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  KmsAccessRoleArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  KmsKeyArn?: string;
};
/**
 * Attribute type definition for `AWS::IoT::EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-encryptionconfiguration.html#aws-resource-iot-encryptionconfiguration-return-values}
 */
export type IoTEncryptionConfigurationAttributes = {
  AccountId: string;
  ConfigurationDetails: {
    ConfigurationStatus: "HEALTHY" | "UNHEALTHY";
    ErrorCode: string;
    ErrorMessage: string;
  };
  LastModifiedDate: string;
};
/**
 * Resource Type definition for AWS::IoT::EncryptionConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-encryptionconfiguration.html}
 */
export class IoTEncryptionConfiguration extends $Resource<
  "AWS::IoT::EncryptionConfiguration",
  IoTEncryptionConfigurationProperties,
  IoTEncryptionConfigurationAttributes
> {
  public static readonly Type = "AWS::IoT::EncryptionConfiguration";
  constructor(
    logicalId: string,
    properties: IoTEncryptionConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTEncryptionConfiguration.Type, properties, options);
  }
}
