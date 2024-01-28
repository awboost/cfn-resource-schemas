import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::RDS::Integration`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html}
 */
export type RDSIntegrationProperties = {
  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
   */
  AdditionalEncryptionContext?: EncryptionContextMap;
  /**
   * The name of the integration.
   * @minLength `1`
   * @maxLength `64`
   */
  IntegrationName?: string;
  /**
   * An optional AWS Key Management System (AWS KMS) key ARN for the key used to to encrypt the integration. The resource accepts the key ID and the key ARN forms. The key ID form can be used if the KMS key is owned by te same account. If the KMS key belongs to a different account than the calling account, the full key ARN must be specified. Do not use the key alias or the key alias ARN as this will cause a false drift of the resource.
   */
  KMSKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the Aurora DB cluster to use as the source for replication.
   */
  SourceArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ARN of the Redshift data warehouse to use as the target for replication.
   */
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::RDS::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#aws-resource-rds-integration-return-values}
 */
export type RDSIntegrationAttributes = {
  CreateTime: string;
  /**
   * The ARN of the integration.
   */
  IntegrationArn: string;
};
/**
 * Type definition for `AWS::RDS::Integration.EncryptionContextMap`.
 * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-integration-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::RDS::Integration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-integration-tag.html}
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
  Value?: string;
};
/**
 * Resource type definition for `AWS::RDS::Integration`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html}
 */
export class RDSIntegration extends $Resource<
  "AWS::RDS::Integration",
  RDSIntegrationProperties,
  RDSIntegrationAttributes
> {
  public static readonly Type = "AWS::RDS::Integration";
  constructor(
    logicalId: string,
    properties: RDSIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSIntegration.Type, properties, options);
  }
}
