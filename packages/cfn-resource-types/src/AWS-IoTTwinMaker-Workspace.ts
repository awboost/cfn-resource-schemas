import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::IoTTwinMaker::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html}
 */
export type IoTTwinMakerWorkspaceProperties = {
  /**
   * The description of the workspace.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * The ARN of the execution role associated with the workspace.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*`
   */
  Role: string;
  /**
   * The ARN of the S3 bucket where resources associated with the workspace are stored.
   */
  S3Location: string;
  /**
   * A map of key-value pairs to associate with a resource.
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
 * Attribute type definition for `AWS::IoTTwinMaker::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html#aws-resource-iottwinmaker-workspace-return-values}
 */
export type IoTTwinMakerWorkspaceAttributes = {
  /**
   * The ARN of the workspace.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+`
   */
  Arn: string;
  /**
   * The date and time when the workspace was created.
   */
  CreationDateTime: string;
  /**
   * The date and time of the current update.
   */
  UpdateDateTime: string;
};
/**
 * Resource schema for AWS::IoTTwinMaker::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-workspace.html}
 */
export class IoTTwinMakerWorkspace extends $Resource<
  "AWS::IoTTwinMaker::Workspace",
  IoTTwinMakerWorkspaceProperties,
  IoTTwinMakerWorkspaceAttributes
> {
  public static readonly Type = "AWS::IoTTwinMaker::Workspace";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationDateTime" as const,
    "UpdateDateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTTwinMakerWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTTwinMakerWorkspace.Type,
      properties,
      IoTTwinMakerWorkspace.AttributeNames,
      options,
    );
  }
}
