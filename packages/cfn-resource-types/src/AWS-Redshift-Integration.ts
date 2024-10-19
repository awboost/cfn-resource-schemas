import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Redshift::Integration`.
 * Integration from a source AWS service to a Redshift cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html}
 */
export type RedshiftIntegrationProperties = {
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
   * An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used.
   */
  KMSKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the database to use as the source for replication, for example, arn:aws:dynamodb:us-east-2:123412341234:table/dynamotable
   */
  SourceArn: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication, for example, arn:aws:redshift:us-east-2:123412341234:namespace:e43aab3e-10a3-4ec4-83d4-f227ff9bfbcf
   */
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::Redshift::Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#aws-resource-redshift-integration-return-values}
 */
export type RedshiftIntegrationAttributes = {
  /**
   * The time (UTC) when the integration was created.
   */
  CreateTime: string;
  /**
   * The Amazon Resource Name (ARN) of the integration.
   */
  IntegrationArn: string;
};
/**
 * Type definition for `AWS::Redshift::Integration.EncryptionContextMap`.
 * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-integration-encryptioncontextmap.html}
 */
export type EncryptionContextMap = Record<string, string>;
/**
 * Type definition for `AWS::Redshift::Integration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-integration-tag.html}
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
 * Resource type definition for `AWS::Redshift::Integration`.
 * Integration from a source AWS service to a Redshift cluster
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html}
 */
export class RedshiftIntegration extends $Resource<
  "AWS::Redshift::Integration",
  RedshiftIntegrationProperties,
  RedshiftIntegrationAttributes
> {
  public static readonly Type = "AWS::Redshift::Integration";
  constructor(
    logicalId: string,
    properties: RedshiftIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftIntegration.Type, properties, options);
  }
}
