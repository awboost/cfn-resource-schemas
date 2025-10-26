import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::CapacityManagerDataExport
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacitymanagerdataexport.html}
 */
export type EC2CapacityManagerDataExportProperties = {
  /**
   * The format of the exported capacity manager data. Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.
   */
  OutputFormat: "csv" | "parquet";
  /**
   * The name of the Amazon S3 bucket where the capacity manager data export will be stored. The bucket must exist and be accessible by EC2 Capacity Manager service.
   */
  S3BucketName: string;
  /**
   * The prefix for the S3 bucket location where exported files will be placed. If not specified, files will be placed in the root of the bucket.
   */
  S3BucketPrefix?: string;
  /**
   * The schedule for the capacity manager data export. Currently supports hourly exports that provide periodic snapshots of capacity manager data.
   */
  Schedule: "hourly";
  /**
   * An array of key-value pairs to apply to the capacity manager data export.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::CapacityManagerDataExport`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacitymanagerdataexport.html#aws-resource-ec2-capacitymanagerdataexport-return-values}
 */
export type EC2CapacityManagerDataExportAttributes = {
  /**
   * The unique identifier of the capacity manager data export.
   */
  CapacityManagerDataExportId: string;
};
/**
 * Type definition for `AWS::EC2::CapacityManagerDataExport.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacitymanagerdataexport-tag.html}
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
 * Resource Type definition for AWS::EC2::CapacityManagerDataExport
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacitymanagerdataexport.html}
 */
export class EC2CapacityManagerDataExport extends $Resource<
  "AWS::EC2::CapacityManagerDataExport",
  EC2CapacityManagerDataExportProperties,
  EC2CapacityManagerDataExportAttributes
> {
  public static readonly Type = "AWS::EC2::CapacityManagerDataExport";
  constructor(
    logicalId: string,
    properties: EC2CapacityManagerDataExportProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2CapacityManagerDataExport.Type, properties, options);
  }
}
