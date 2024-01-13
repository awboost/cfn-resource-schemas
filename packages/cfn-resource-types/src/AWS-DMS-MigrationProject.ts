import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DMS::MigrationProject
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html}
 */
export type DMSMigrationProjectProperties = {
  /**
   * The optional description of the migration project.
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The property describes an instance profile arn for the migration project. For read
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileArn?: string;
  /**
   * The property describes an instance profile identifier for the migration project. For create
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileIdentifier?: string;
  /**
   * The property describes an instance profile name for the migration project. For read
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileName?: string;
  /**
   * The property describes a creating time of the migration project.
   * @minLength `1`
   * @maxLength `40`
   */
  MigrationProjectCreationTime?: string;
  /**
   * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
   * @minLength `1`
   * @maxLength `255`
   */
  MigrationProjectIdentifier?: string;
  /**
   * The property describes a name to identify the migration project.
   * @minLength `1`
   * @maxLength `255`
   */
  MigrationProjectName?: string;
  /**
   * The property describes schema conversion application attributes for the migration project.
   */
  SchemaConversionApplicationAttributes?: {
    S3BucketPath?: string;
    S3BucketRoleArn?: string;
  };
  /**
   * The property describes source data provider descriptors for the migration project.
   */
  SourceDataProviderDescriptors?: DataProviderDescriptor[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The property describes target data provider descriptors for the migration project.
   */
  TargetDataProviderDescriptors?: DataProviderDescriptor[];
  /**
   * The property describes transformation rules for the migration project.
   */
  TransformationRules?: string;
};
/**
 * Attribute type definition for `AWS::DMS::MigrationProject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html#aws-resource-dms-migrationproject-return-values}
 */
export type DMSMigrationProjectAttributes = {
  /**
   * The property describes an ARN of the migration project.
   * @minLength `1`
   * @maxLength `255`
   */
  MigrationProjectArn: string;
};
/**
 * Type definition for `AWS::DMS::MigrationProject.DataProviderDescriptor`.
 * It is an object that describes Source and Target DataProviders and credentials for connecting to databases that are used in MigrationProject
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-dataproviderdescriptor.html}
 */
export type DataProviderDescriptor = {
  DataProviderArn?: string;
  DataProviderIdentifier?: string;
  DataProviderName?: string;
  SecretsManagerAccessRoleArn?: string;
  SecretsManagerSecretId?: string;
};
/**
 * Type definition for `AWS::DMS::MigrationProject.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-migrationproject-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DMS::MigrationProject
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-migrationproject.html}
 */
export class DMSMigrationProject extends $Resource<
  "AWS::DMS::MigrationProject",
  DMSMigrationProjectProperties,
  DMSMigrationProjectAttributes
> {
  public static readonly Type = "AWS::DMS::MigrationProject";
  constructor(
    logicalId: string,
    properties: DMSMigrationProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSMigrationProject.Type, properties, options);
  }
}
