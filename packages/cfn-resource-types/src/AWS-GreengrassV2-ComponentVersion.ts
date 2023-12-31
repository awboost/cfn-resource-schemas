import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GreengrassV2::ComponentVersion`.
 * Resource for Greengrass component version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html}
 */
export type GreengrassV2ComponentVersionProperties = {
  InlineRecipe?: string;
  LambdaFunction?: LambdaFunctionRecipeSource;
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::GreengrassV2::ComponentVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#aws-resource-greengrassv2-componentversion-return-values}
 */
export type GreengrassV2ComponentVersionAttributes = {
  Arn: string;
  ComponentName: string;
  ComponentVersion: string;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.ComponentDependencyRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentdependencyrequirement.html}
 */
export type ComponentDependencyRequirement = {
  DependencyType?: "SOFT" | "HARD";
  VersionRequirement?: string;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.ComponentPlatform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-componentplatform.html}
 */
export type ComponentPlatform = {
  Attributes?: Record<string, string>;
  Name?: string;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaContainerParams`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdacontainerparams.html}
 */
export type LambdaContainerParams = {
  Devices?: LambdaDeviceMount[];
  MemorySizeInKB?: number;
  MountROSysfs?: boolean;
  Volumes?: LambdaVolumeMount[];
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaDeviceMount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdadevicemount.html}
 */
export type LambdaDeviceMount = {
  AddGroupOwner?: boolean;
  Path?: string;
  Permission?: LambdaFilesystemPermission;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaEventSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaeventsource.html}
 */
export type LambdaEventSource = {
  Topic?: string;
  Type?: "PUB_SUB" | "IOT_CORE";
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaExecutionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdaexecutionparameters.html}
 */
export type LambdaExecutionParameters = {
  EnvironmentVariables?: Record<string, string>;
  EventSources?: LambdaEventSource[];
  ExecArgs?: string[];
  InputPayloadEncodingType?: "json" | "binary";
  LinuxProcessParams?: LambdaLinuxProcessParams;
  MaxIdleTimeInSeconds?: number;
  MaxInstancesCount?: number;
  MaxQueueSize?: number;
  Pinned?: boolean;
  StatusTimeoutInSeconds?: number;
  TimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaFilesystemPermission`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdafilesystempermission.html}
 */
export type LambdaFilesystemPermission = "ro" | "rw";
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaFunctionRecipeSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdafunctionrecipesource.html}
 */
export type LambdaFunctionRecipeSource = {
  ComponentDependencies?: Record<string, ComponentDependencyRequirement>;
  ComponentLambdaParameters?: LambdaExecutionParameters;
  ComponentName?: string;
  ComponentPlatforms?: ComponentPlatform[];
  ComponentVersion?: string;
  /**
   * @pattern `^arn:[^:]*:lambda:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  LambdaArn?: string;
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaLinuxProcessParams`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdalinuxprocessparams.html}
 */
export type LambdaLinuxProcessParams = {
  ContainerParams?: LambdaContainerParams;
  IsolationMode?: "GreengrassContainer" | "NoContainer";
};
/**
 * Type definition for `AWS::GreengrassV2::ComponentVersion.LambdaVolumeMount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-componentversion-lambdavolumemount.html}
 */
export type LambdaVolumeMount = {
  AddGroupOwner?: boolean;
  DestinationPath?: string;
  Permission?: LambdaFilesystemPermission;
  SourcePath?: string;
};
/**
 * Resource type definition for `AWS::GreengrassV2::ComponentVersion`.
 * Resource for Greengrass component version.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html}
 */
export class GreengrassV2ComponentVersion extends $Resource<
  "AWS::GreengrassV2::ComponentVersion",
  GreengrassV2ComponentVersionProperties,
  GreengrassV2ComponentVersionAttributes
> {
  public static readonly Type = "AWS::GreengrassV2::ComponentVersion";
  constructor(
    logicalId: string,
    properties: GreengrassV2ComponentVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassV2ComponentVersion.Type, properties, options);
  }
}
