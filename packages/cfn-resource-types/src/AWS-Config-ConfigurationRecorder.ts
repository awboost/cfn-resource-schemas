import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export type ConfigConfigurationRecorderProperties = {
  Name?: string;
  RecordingGroup?: RecordingGroup;
  RecordingMode?: RecordingMode;
  RoleARN: string;
};
/**
 * Attribute type definition for `AWS::Config::ConfigurationRecorder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#aws-resource-config-configurationrecorder-return-values}
 */
export type ConfigConfigurationRecorderAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Config::ConfigurationRecorder.ExclusionByResourceTypes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-exclusionbyresourcetypes.html}
 */
export type ExclusionByResourceTypes = {
  ResourceTypes: string[];
};
/**
 * Type definition for `AWS::Config::ConfigurationRecorder.RecordingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html}
 */
export type RecordingGroup = {
  AllSupported?: boolean;
  ExclusionByResourceTypes?: ExclusionByResourceTypes;
  IncludeGlobalResourceTypes?: boolean;
  RecordingStrategy?: RecordingStrategy;
  ResourceTypes?: string[];
};
/**
 * Type definition for `AWS::Config::ConfigurationRecorder.RecordingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmode.html}
 */
export type RecordingMode = {
  RecordingFrequency: string;
  RecordingModeOverrides?: RecordingModeOverride[];
};
/**
 * Type definition for `AWS::Config::ConfigurationRecorder.RecordingModeOverride`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingmodeoverride.html}
 */
export type RecordingModeOverride = {
  Description?: string;
  RecordingFrequency: string;
  ResourceTypes: string[];
};
/**
 * Type definition for `AWS::Config::ConfigurationRecorder.RecordingStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html}
 */
export type RecordingStrategy = {
  UseOnly: string;
};
/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export class ConfigConfigurationRecorder extends $Resource<
  "AWS::Config::ConfigurationRecorder",
  ConfigConfigurationRecorderProperties,
  ConfigConfigurationRecorderAttributes
> {
  public static readonly Type = "AWS::Config::ConfigurationRecorder";
  constructor(
    logicalId: string,
    properties: ConfigConfigurationRecorderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConfigConfigurationRecorder.Type, properties, options);
  }
}
