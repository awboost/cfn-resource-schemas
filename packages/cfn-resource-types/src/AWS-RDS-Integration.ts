import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::RDS::Integration`.
 * A zero-ETL integration with Amazon Redshift.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html}
 */
export type RDSIntegrationProperties = {
  /**
     * An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *Key Management Service Developer Guide*.
     You can only include this parameter if you specify the ``KMSKeyId`` parameter.
     */
  AdditionalEncryptionContext?: EncryptionContextMap;
  /**
   * Data filters for the integration. These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse.
   * @minLength `1`
   * @maxLength `25600`
   * @pattern `[a-zA-Z0-9_ "\\\-$,*.:?+\/]*`
   */
  DataFilter?: string;
  /**
   * A description of the integration.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the integration.
   * @minLength `1`
   * @maxLength `64`
   */
  IntegrationName?: string;
  /**
   * The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key.
   */
  KMSKeyId?: string;
  /**
   * The Amazon Resource Name (ARN) of the database to use as the source for replication.
   */
  SourceArn: string;
  /**
   * A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.
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
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-integration-tag.html}
 */
export type Tag = {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::RDS::Integration`.
 * A zero-ETL integration with Amazon Redshift.
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
