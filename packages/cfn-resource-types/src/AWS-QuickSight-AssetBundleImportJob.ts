import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::QuickSight::AssetBundleImportJob`.
 * Represents a QuickSight asset bundle import job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleimportjob.html}
 */
export type QuickSightAssetBundleImportJobProperties = {
  /**
   * The ID of the import job.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  AssetBundleImportJobId: string;
  /**
   * The source of the asset bundle zip file.
   */
  AssetBundleImportSource?: AssetBundleImportSourceDescription;
  /**
   * The ID of the Amazon Web Services account to import assets into.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
   * The failure action for the import job.
   */
  FailureAction?: "DO_NOTHING" | "ROLLBACK";
  /**
   * An optional validation strategy override for all analyses and dashboards.
   */
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy;
};
/**
 * Attribute type definition for `AWS::QuickSight::AssetBundleImportJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleimportjob.html#aws-resource-quicksight-assetbundleimportjob-return-values}
 */
export type QuickSightAssetBundleImportJobAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the import job.
   */
  Arn: string;
  /**
   * The time that the import job was created.
   */
  CreatedTime: string;
  /**
   * Indicates the status of the import job.
   */
  JobStatus:
    | "QUEUED_FOR_IMMEDIATE_EXECUTION"
    | "IN_PROGRESS"
    | "SUCCESSFUL"
    | "FAILED"
    | "FAILED_ROLLBACK_IN_PROGRESS"
    | "FAILED_ROLLBACK_COMPLETED"
    | "FAILED_ROLLBACK_ERROR";
};
/**
 * Type definition for `AWS::QuickSight::AssetBundleImportJob.AssetBundleImportJobOverrideValidationStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-assetbundleimportjob-assetbundleimportjoboverridevalidationstrategy.html}
 */
export type AssetBundleImportJobOverrideValidationStrategy = {
  /**
   * A Boolean value that indicates whether to import all analyses and dashboards under strict or lenient mode.
   */
  StrictModeForAllResources?: boolean;
};
/**
 * Type definition for `AWS::QuickSight::AssetBundleImportJob.AssetBundleImportSourceDescription`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-assetbundleimportjob-assetbundleimportsourcedescription.html}
 */
export type AssetBundleImportSourceDescription = {
  /**
   * The Amazon S3 URI for the asset bundle import file.
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3Uri?: string;
};
/**
 * Resource type definition for `AWS::QuickSight::AssetBundleImportJob`.
 * Represents a QuickSight asset bundle import job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleimportjob.html}
 */
export class QuickSightAssetBundleImportJob extends $Resource<
  "AWS::QuickSight::AssetBundleImportJob",
  QuickSightAssetBundleImportJobProperties,
  QuickSightAssetBundleImportJobAttributes
> {
  public static readonly Type = "AWS::QuickSight::AssetBundleImportJob";
  constructor(
    logicalId: string,
    properties: QuickSightAssetBundleImportJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightAssetBundleImportJob.Type, properties, options);
  }
}
