import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTTwinMaker::SyncJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html}
 */
export type IoTTwinMakerSyncJobProperties = {
  /**
   * The IAM Role that execute SyncJob.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*`
   */
  SyncRole: string;
  /**
   * The source of the SyncJob.
   * @minLength `1`
   * @maxLength `128`
   */
  SyncSource: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * The ID of the workspace.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
   */
  WorkspaceId: string;
};
/**
 * Attribute type definition for `AWS::IoTTwinMaker::SyncJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#aws-resource-iottwinmaker-syncjob-return-values}
 */
export type IoTTwinMakerSyncJobAttributes = {
  /**
   * The ARN of the SyncJob.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+`
   */
  Arn: string;
  /**
   * The date and time when the sync job was created.
   */
  CreationDateTime: string;
  /**
   * The state of SyncJob.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z_\-0-9]+`
   */
  State: string;
  /**
   * The date and time when the sync job was updated.
   */
  UpdateDateTime: string;
};
/**
 * Resource schema for AWS::IoTTwinMaker::SyncJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html}
 */
export class IoTTwinMakerSyncJob extends $Resource<
  "AWS::IoTTwinMaker::SyncJob",
  IoTTwinMakerSyncJobProperties,
  IoTTwinMakerSyncJobAttributes
> {
  public static readonly Type = "AWS::IoTTwinMaker::SyncJob";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationDateTime" as const,
    "State" as const,
    "UpdateDateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerSyncJobProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTTwinMakerSyncJob.Type,
      properties,
      IoTTwinMakerSyncJob.AttributeNames,
      options,
    );
  }
}
