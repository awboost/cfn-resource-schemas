import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::RDS::CustomDBEngineVersion resource creates an Amazon RDS custom DB engine version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html}
 */
export type RDSCustomDBEngineVersionProperties = {
  /**
   * The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is `my-custom-installation-files`.
   * @minLength `3`
   * @maxLength `63`
   */
  DatabaseInstallationFilesS3BucketName: string;
  /**
   * The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseInstallationFilesS3Prefix?: string;
  /**
   * An optional description of your CEV.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The database engine to use for your custom engine version (CEV). The only supported value is `custom-oracle-ee`.
   * @minLength `1`
   * @maxLength `35`
   */
  Engine: string;
  /**
   * The name of your CEV. The name format is 19.customized_string . For example, a valid name is 19.my_cev1. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Region.
   * @minLength `1`
   * @maxLength `60`
   */
  EngineVersion: string;
  /**
   * The AWS KMS key identifier for an encrypted CEV. A symmetric KMS key is required for RDS Custom, but optional for Amazon RDS.
   * @minLength `1`
   * @maxLength `2048`
   */
  KMSKeyId?: string;
  /**
   * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
   * @minLength `1`
   * @maxLength `51000`
   */
  Manifest?: string;
  /**
   * The availability status to be assigned to the CEV.
   */
  Status?: "available" | "inactive" | "inactive-except-restore";
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RDS::CustomDBEngineVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#aws-resource-rds-customdbengineversion-return-values}
 */
export type RDSCustomDBEngineVersionAttributes = {
  /**
   * The ARN of the custom engine version.
   */
  DBEngineVersionArn: string;
};
/**
 * Type definition for `AWS::RDS::CustomDBEngineVersion.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-customdbengineversion-tag.html}
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
 * The AWS::RDS::CustomDBEngineVersion resource creates an Amazon RDS custom DB engine version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html}
 */
export class RDSCustomDBEngineVersion extends $Resource<
  "AWS::RDS::CustomDBEngineVersion",
  RDSCustomDBEngineVersionProperties,
  RDSCustomDBEngineVersionAttributes
> {
  public static readonly Type = "AWS::RDS::CustomDBEngineVersion";
  constructor(
    logicalId: string,
    properties: RDSCustomDBEngineVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RDSCustomDBEngineVersion.Type, properties, options);
  }
}
