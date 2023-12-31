import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::NimbleStudio::LaunchProfile`.
 * Represents a launch profile which delegates access to a collection of studio components to studio users
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html}
 */
export type NimbleStudioLaunchProfileProperties = {
  /**
   * <p>The description.</p>
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
     * <p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
                These subnets must support the specified instance types. </p>
     * @minLength `0`
     * @maxLength `6`
     */
  Ec2SubnetIds: string[];
  /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid
                version is "2021-03-31".</p>
     */
  LaunchProfileProtocolVersions: string[];
  /**
   * <p>The name for the launch profile.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * <p>A configuration for a streaming session.</p>
   */
  StreamConfiguration: StreamConfiguration;
  /**
     * <p>Unique identifiers for a collection of studio components that can be used with this
                launch profile.</p>
     * @minLength `1`
     * @maxLength `100`
     */
  StudioComponentIds: string[];
  /**
   * <p>The studio ID. </p>
   */
  StudioId: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::LaunchProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#aws-resource-nimblestudio-launchprofile-return-values}
 */
export type NimbleStudioLaunchProfileAttributes = {
  LaunchProfileId: string;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.AutomaticTerminationMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-automaticterminationmode.html}
 */
export type AutomaticTerminationMode = "DEACTIVATED" | "ACTIVATED";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.SessionBackupMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-sessionbackupmode.html}
 */
export type SessionBackupMode = "AUTOMATIC" | "DEACTIVATED";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.SessionPersistenceMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-sessionpersistencemode.html}
 */
export type SessionPersistenceMode = "DEACTIVATED" | "ACTIVATED";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfiguration`.
 * <p>A configuration for a streaming session.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfiguration.html}
 */
export type StreamConfiguration = {
  AutomaticTerminationMode?: AutomaticTerminationMode;
  ClipboardMode: StreamingClipboardMode;
  /**
     * <p>The EC2 instance types that users can select from when launching a streaming session
                with this launch profile.</p>
     * @minLength `1`
     * @maxLength `30`
     */
  Ec2InstanceTypes: StreamingInstanceType[];
  /**
     * <p>The length of time, in minutes, that a streaming session can be active before it is
                stopped or terminated. After this point, Nimble Studio automatically terminates or
                stops the session. The default length of time is 690 minutes, and the maximum length of
                time is 30 days.</p>
     * @min `1`
     * @max `43200`
     */
  MaxSessionLengthInMinutes?: number;
  /**
     * <p>Integer that determines if you can start and stop your sessions and how long a session
                can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is
                5760.</p>
             <p>This field is allowed only when <code>sessionPersistenceMode</code> is
                    <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is
                    <code>ACTIVATED</code>.</p>
             <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then
                call <code>StopStreamingSession</code>, the session fails. If the time that a session
                stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code>
                value, the session will automatically be terminated (instead of
                <code>STOPPED</code>).</p>
             <p>If the value is set to a positive number, the session can be stopped. You can call
                    <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state.
                If the time that a session stays in the <code>READY</code> state exceeds the
                    <code>maxSessionLengthInMinutes</code> value, the session will automatically be
                stopped (instead of terminated).</p>
     * @min `0`
     * @max `5760`
     */
  MaxStoppedSessionLengthInMinutes?: number;
  /**
     * <p>Configures how streaming sessions are backed up when launched from this launch
                profile.</p>
     */
  SessionBackup?: StreamConfigurationSessionBackup;
  SessionPersistenceMode?: SessionPersistenceMode;
  /**
   * <p>The configuration for a streaming session’s upload storage.</p>
   */
  SessionStorage?: StreamConfigurationSessionStorage;
  /**
     * <p>The streaming images that users can select from when launching a streaming session
                with this launch profile.</p>
     * @minLength `1`
     * @maxLength `20`
     */
  StreamingImageIds: string[];
  /**
     * <p>Custom volume configuration for the root volumes that are attached to streaming
                sessions.</p>
             <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
                    <code>ACTIVATED</code>.</p>
     */
  VolumeConfiguration?: VolumeConfiguration;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionBackup`.
 * <p>Configures how streaming sessions are backed up when launched from this launch
            profile.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html}
 */
export type StreamConfigurationSessionBackup = {
  /**
     * <p>The maximum number of backups that each streaming session created from this launch
                profile can have.</p>
     * @min `0`
     * @max `10`
     */
  MaxBackupsToRetain?: number;
  Mode?: SessionBackupMode;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamConfigurationSessionStorage`.
 * <p>The configuration for a streaming session’s upload storage.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html}
 */
export type StreamConfigurationSessionStorage = {
  /**
     * <p>Allows artists to upload files to their workstations. The only valid option is
                    <code>UPLOAD</code>.</p>
     * @minLength `1`
     */
  Mode: StreamingSessionStorageMode[];
  /**
     * <p>The upload storage root location (folder) on streaming workstations where files are
                uploaded.</p>
     */
  Root?: StreamingSessionStorageRoot;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamingClipboardMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingclipboardmode.html}
 */
export type StreamingClipboardMode = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamingInstanceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streaminginstancetype.html}
 */
export type StreamingInstanceType =
  | "g4dn.xlarge"
  | "g4dn.2xlarge"
  | "g4dn.4xlarge"
  | "g4dn.8xlarge"
  | "g4dn.12xlarge"
  | "g4dn.16xlarge"
  | "g3.4xlarge"
  | "g3s.xlarge"
  | "g5.xlarge"
  | "g5.2xlarge"
  | "g5.4xlarge"
  | "g5.8xlarge"
  | "g5.16xlarge";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamingSessionStorageMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstoragemode.html}
 */
export type StreamingSessionStorageMode = "UPLOAD";
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.StreamingSessionStorageRoot`.
 * <p>The upload storage root location (folder) on streaming workstations where files are
            uploaded.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html}
 */
export type StreamingSessionStorageRoot = {
  /**
   * <p>The folder path in Linux workstations where files are uploaded.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(\$HOME|/)[/]?([A-Za-z0-9-_]+/)*([A-Za-z0-9_-]+)$`
   */
  Linux?: string;
  /**
   * <p>The folder path in Windows workstations where files are uploaded.</p>
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^((\%HOMEPATH\%)|[a-zA-Z]:)[\\/](?:[a-zA-Z0-9_-]+[\\/])*[a-zA-Z0-9_-]+$`
   */
  Windows?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Type definition for `AWS::NimbleStudio::LaunchProfile.VolumeConfiguration`.
 * <p>Custom volume configuration for the root volumes that are attached to streaming
            sessions.</p>
         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
                <code>ACTIVATED</code>.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-launchprofile-volumeconfiguration.html}
 */
export type VolumeConfiguration = {
  /**
     * <p>The number of I/O operations per second for the root volume that is attached to
                streaming session.</p>
     * @min `3000`
     * @max `16000`
     */
  Iops?: number;
  /**
     * <p>The size of the root volume that is attached to the streaming session. The root volume
                size is measured in GiBs.</p>
     * @min `100`
     * @max `16000`
     */
  Size?: number;
  /**
     * <p>The throughput to provision for the root volume that is attached to the streaming
                session. The throughput is measured in MiB/s.</p>
     * @min `125`
     * @max `1000`
     */
  Throughput?: number;
};
/**
 * Resource type definition for `AWS::NimbleStudio::LaunchProfile`.
 * Represents a launch profile which delegates access to a collection of studio components to studio users
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
