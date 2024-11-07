import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NimbleStudio::LaunchProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html}
 */
export type NimbleStudioLaunchProfileProperties = {
  Description?: string;
  Ec2SubnetIds: string[];
  LaunchProfileProtocolVersions: string[];
  Name: string;
  StreamConfiguration: StreamConfiguration;
  StudioComponentIds: string[];
  StudioId: string;
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::LaunchProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#aws-resource-nimblestudio-launchprofile-return-values}
 */
export type NimbleStudioLaunchProfileAttributes = {
  LaunchProfileId: string;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html}
 */
export type StreamConfiguration = {
  AutomaticTerminationMode?: string;
  ClipboardMode: string;
  Ec2InstanceTypes: string[];
  MaxSessionLengthInMinutes?: number;
  MaxStoppedSessionLengthInMinutes?: number;
  SessionBackup?: StreamConfigurationSessionBackup;
  SessionPersistenceMode?: string;
  SessionStorage?: StreamConfigurationSessionStorage;
  StreamingImageIds: string[];
  VolumeConfiguration?: VolumeConfiguration;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionBackup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html}
 */
export type StreamConfigurationSessionBackup = {
  MaxBackupsToRetain?: number;
  Mode?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionStorage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html}
 */
export type StreamConfigurationSessionStorage = {
  Mode: string[];
  Root?: StreamingSessionStorageRoot;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamingSessionStorageRoot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html}
 */
export type StreamingSessionStorageRoot = {
  Linux?: string;
  Windows?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.VolumeConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html}
 */
export type VolumeConfiguration = {
  Iops?: number;
  Size?: number;
  Throughput?: number;
};
/**
 * Resource Type definition for AWS::NimbleStudio::LaunchProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html}
 */
export class NimbleStudioLaunchProfile extends $Resource<
  "AWS::NimbleStudio::LaunchProfile",
  NimbleStudioLaunchProfileProperties,
  NimbleStudioLaunchProfileAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::LaunchProfile";
  constructor(
    logicalId: string,
    properties: NimbleStudioLaunchProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NimbleStudioLaunchProfile.Type, properties, options);
  }
}
