import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WorkspacesInstances::VolumeAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volumeassociation.html}
 */
export type WorkspacesInstancesVolumeAssociationProperties = {
  /**
   * The device name for the volume attachment
   * @maxLength `32`
   */
  Device: string;
  /**
   * Mode to use when disassociating the volume
   */
  DisassociateMode?: "FORCE" | "NO_FORCE";
  /**
   * ID of the volume to attach to the workspace instance
   * @pattern `^vol-[0-9a-zA-Z]{1,63}$`
   */
  VolumeId: string;
  /**
   * ID of the workspace instance to associate with the volume
   * @pattern `^wsinst-[0-9a-zA-Z]{8,63}$`
   */
  WorkspaceInstanceId: string;
};
/**
 * Resource Type definition for AWS::WorkspacesInstances::VolumeAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesinstances-volumeassociation.html}
 */
export class WorkspacesInstancesVolumeAssociation extends $Resource<
  "AWS::WorkspacesInstances::VolumeAssociation",
  WorkspacesInstancesVolumeAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::WorkspacesInstances::VolumeAssociation";
  constructor(
    logicalId: string,
    properties: WorkspacesInstancesVolumeAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WorkspacesInstancesVolumeAssociation.Type,
      properties,
      options,
    );
  }
}
