import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ObservabilityAdmin::S3TableIntegration`.
 * Resource Type definition for a CloudWatch Observability Admin S3 Table Integration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-s3tableintegration.html}
 */
export type ObservabilityAdminS3TableIntegrationProperties = {
  /**
   * Encryption configuration for the S3 Table Integration
   */
  Encryption: EncryptionConfig;
  /**
   * The CloudWatch Logs data sources to associate with the S3 Table Integration
   */
  LogSources?: LogSource[];
  /**
   * The ARN of the role used to access the S3 Table Integration
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  RoleArn: string;
  /**
   * An array of key-value pairs to apply to this resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ObservabilityAdmin::S3TableIntegration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-s3tableintegration.html#aws-resource-observabilityadmin-s3tableintegration-return-values}
 */
export type ObservabilityAdminS3TableIntegrationAttributes = {
  /**
   * The ARN of the S3 Table Integration
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  Arn: string;
  /**
   * The CloudWatch Logs data sources to associate with the S3 Table Integration
   */
  LogSources: {
    /**
     * The ID of the CloudWatch Logs data source association
     * @minLength `1`
     * @maxLength `256`
     */
    Identifier: string;
  }[];
};
/**
 * Type definition for `AWS::ObservabilityAdmin::S3TableIntegration.EncryptionConfig`.
 * Encryption configuration for the S3 Table Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-s3tableintegration-encryptionconfig.html}
 */
export type EncryptionConfig = {
  /**
   * The ARN of the KMS key used to encrypt the S3 Table Integration
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws([a-z0-9\-]+)?:([a-zA-Z0-9\-]+):([a-z0-9\-]+)?:([0-9]{12})?:(.+)$`
   */
  KmsKeyArn?: string;
  /**
   * The server-side encryption algorithm used to encrypt the S3 Table(s) data
   */
  SseAlgorithm: "AES256" | "aws:kms";
};
/**
 * Type definition for `AWS::ObservabilityAdmin::S3TableIntegration.LogSource`.
 * CloudWatch Logs data source to associate with the S3 Table Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-s3tableintegration-logsource.html}
 */
export type LogSource = {
  /**
   * The name of the CloudWatch Logs data source
   * @minLength `1`
   * @maxLength `256`
   */
  Name: string;
  /**
   * The type of the CloudWatch Logs data source
   * @minLength `1`
   * @maxLength `256`
   */
  Type: string;
};
/**
 * Type definition for `AWS::ObservabilityAdmin::S3TableIntegration.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-observabilityadmin-s3tableintegration-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ObservabilityAdmin::S3TableIntegration`.
 * Resource Type definition for a CloudWatch Observability Admin S3 Table Integration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-observabilityadmin-s3tableintegration.html}
 */
export class ObservabilityAdminS3TableIntegration extends $Resource<
  "AWS::ObservabilityAdmin::S3TableIntegration",
  ObservabilityAdminS3TableIntegrationProperties,
  ObservabilityAdminS3TableIntegrationAttributes
> {
  public static readonly Type = "AWS::ObservabilityAdmin::S3TableIntegration";
  constructor(
    logicalId: string,
    properties: ObservabilityAdminS3TableIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ObservabilityAdminS3TableIntegration.Type,
      properties,
      options,
    );
  }
}
