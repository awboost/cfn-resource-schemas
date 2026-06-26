import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::QuickSight::AssetBundleExportJob`.
 * Represents a QuickSight asset bundle export job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleexportjob.html}
 */
export type QuickSightAssetBundleExportJobProperties = {
  /**
   * The ID of the export job.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^[\w\-]+$`
   */
  AssetBundleExportJobId: string;
  /**
   * The ID of the Amazon Web Services account to export assets from.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
   * The export data format.
   */
  ExportFormat: "CLOUDFORMATION_JSON" | "QUICKSIGHT_JSON";
  /**
   * A Boolean that determines whether all dependencies of each resource ARN are recursively exported with the job.
   */
  IncludeAllDependencies?: boolean;
  /**
   * A setting that indicates whether you want to include folder assets.
   */
  IncludeFolderMembers?: "RECURSE" | "ONE_LEVEL" | "NONE";
  /**
   * A Boolean that determines if the exported asset carries over information about the folders that the asset is a member of.
   */
  IncludeFolderMemberships?: boolean;
  /**
   * A Boolean that determines whether all permissions for each resource ARN are exported with the job.
   */
  IncludePermissions?: boolean;
  /**
   * A Boolean that determines whether all tags for each resource ARN are exported with the job.
   */
  IncludeTags?: boolean;
  /**
   * An array of resource ARNs to export.
   * @minLength `1`
   * @maxLength `100`
   */
  ResourceArns: string[];
};
/**
 * Attribute type definition for `AWS::QuickSight::AssetBundleExportJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleexportjob.html#aws-resource-quicksight-assetbundleexportjob-return-values}
 */
export type QuickSightAssetBundleExportJobAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the export job.
   */
  Arn: string;
  /**
   * The time that the export job was created.
   */
  CreatedTime: string;
  /**
   * Indicates the status of a job through its queuing and execution.
   */
  JobStatus:
    | "QUEUED_FOR_IMMEDIATE_EXECUTION"
    | "IN_PROGRESS"
    | "SUCCESSFUL"
    | "FAILED";
};
/**
 * Resource type definition for `AWS::QuickSight::AssetBundleExportJob`.
 * Represents a QuickSight asset bundle export job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-assetbundleexportjob.html}
 */
export class QuickSightAssetBundleExportJob extends $Resource<
  "AWS::QuickSight::AssetBundleExportJob",
  QuickSightAssetBundleExportJobProperties,
  QuickSightAssetBundleExportJobAttributes
> {
  public static readonly Type = "AWS::QuickSight::AssetBundleExportJob";
  constructor(
    logicalId: string,
    properties: QuickSightAssetBundleExportJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightAssetBundleExportJob.Type, properties, options);
  }
}
