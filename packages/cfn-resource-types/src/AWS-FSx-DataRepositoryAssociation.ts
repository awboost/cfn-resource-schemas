import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::FSx::DataRepositoryAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html}
 */
export type FSxDataRepositoryAssociationProperties = {
  /**
   * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to true.
   */
  BatchImportMetaDataOnCreate?: boolean;
  /**
   * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/ . This path specifies where in the S3 data repository files will be imported from or exported to.
   */
  DataRepositoryPath: string;
  /**
   * The globally unique ID of the file system, assigned by Amazon FSx.
   */
  FileSystemId: string;
  /**
   * This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
   */
  FileSystemPath: string;
  /**
   * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   */
  ImportedFileChunkSize?: number;
  /**
   * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
   */
  S3?: S3;
  /**
   * A list of Tag values, with a maximum of 50 elements.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FSx::DataRepositoryAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html#aws-resource-fsx-datarepositoryassociation-return-values}
 */
export type FSxDataRepositoryAssociationAttributes = {
  /**
   * The system-generated, unique ID of the data repository association.
   */
  AssociationId: string;
  /**
   * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
   */
  ResourceARN: string;
};
/**
 * Type definition for `AWS::FSx::DataRepositoryAssociation.AutoExportPolicy`.
 * Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoexportpolicy.html}
 */
export type AutoExportPolicy = {
  /**
   * @maxLength `3`
   */
  Events: EventType[];
};
/**
 * Type definition for `AWS::FSx::DataRepositoryAssociation.AutoImportPolicy`.
 * Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-autoimportpolicy.html}
 */
export type AutoImportPolicy = {
  /**
   * @maxLength `3`
   */
  Events: EventType[];
};
/**
 * Type definition for `AWS::FSx::DataRepositoryAssociation.EventType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-eventtype.html}
 */
export type EventType = "NEW" | "CHANGED" | "DELETED";
/**
 * Type definition for `AWS::FSx::DataRepositoryAssociation.S3`.
 * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-s3.html}
 */
export type S3 = {
  /**
   * Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.
   */
  AutoExportPolicy?: AutoExportPolicy;
  /**
   * Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.
   */
  AutoImportPolicy?: AutoImportPolicy;
};
/**
 * Type definition for `AWS::FSx::DataRepositoryAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-datarepositoryassociation-tag.html}
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
 * Resource Type definition for AWS::FSx::DataRepositoryAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-datarepositoryassociation.html}
 */
export class FSxDataRepositoryAssociation extends $Resource<
  "AWS::FSx::DataRepositoryAssociation",
  FSxDataRepositoryAssociationProperties,
  FSxDataRepositoryAssociationAttributes
> {
  public static readonly Type = "AWS::FSx::DataRepositoryAssociation";
  constructor(
    logicalId: string,
    properties: FSxDataRepositoryAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FSxDataRepositoryAssociation.Type, properties, options);
  }
}
