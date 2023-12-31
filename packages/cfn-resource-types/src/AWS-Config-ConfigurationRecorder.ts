import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export type ConfigConfigurationRecorderProperties = {
  Name?: string;
  RecordingGroup?: RecordingGroup;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: ConfigConfigurationRecorderProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConfigConfigurationRecorder.Type,
      properties,
      ConfigConfigurationRecorder.AttributeNames,
      options,
    );
  }
}
