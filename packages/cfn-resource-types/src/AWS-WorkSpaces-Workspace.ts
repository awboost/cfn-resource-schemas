import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::WorkSpaces::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html}
 */
export type WorkSpacesWorkspaceProperties = {
  BundleId: string;
  DirectoryId: string;
  RootVolumeEncryptionEnabled?: boolean;
  Tags?: Tag[];
  UserName: string;
  UserVolumeEncryptionEnabled?: boolean;
  VolumeEncryptionKey?: string;
  WorkspaceProperties?: WorkspaceProperties;
};
/**
 * Attribute type definition for `AWS::WorkSpaces::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#aws-resource-workspaces-workspace-return-values}
 */
export type WorkSpacesWorkspaceAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::WorkSpaces::Workspace.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::WorkSpaces::Workspace.WorkspaceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspace-workspaceproperties.html}
 */
export type WorkspaceProperties = {
  ComputeTypeName?: string;
  RootVolumeSizeGib?: number;
  RunningMode?: string;
  RunningModeAutoStopTimeoutInMinutes?: number;
  UserVolumeSizeGib?: number;
};
/**
 * Resource Type definition for AWS::WorkSpaces::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html}
 */
export class WorkSpacesWorkspace extends $Resource<
  "AWS::WorkSpaces::Workspace",
  WorkSpacesWorkspaceProperties,
  WorkSpacesWorkspaceAttributes
> {
  public static readonly Type = "AWS::WorkSpaces::Workspace";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: WorkSpacesWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkSpacesWorkspace.Type,
      properties,
      WorkSpacesWorkspace.AttributeNames,
      options,
    );
  }
}
