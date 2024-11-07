import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NimbleStudio::StudioComponent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html}
 */
export type NimbleStudioStudioComponentProperties = {
  Configuration?: StudioComponentConfiguration;
  Description?: string;
  Ec2SecurityGroupIds?: string[];
  InitializationScripts?: StudioComponentInitializationScript[];
  Name: string;
  ScriptParameters?: ScriptParameterKeyValue[];
  StudioId: string;
  Subtype?: string;
  Tags?: Record<string, string>;
  Type: string;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::StudioComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#aws-resource-nimblestudio-studiocomponent-return-values}
 */
export type NimbleStudioStudioComponentAttributes = {
  StudioComponentId: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ActiveDirectoryComputerAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html}
 */
export type ActiveDirectoryComputerAttribute = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ActiveDirectoryConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html}
 */
export type ActiveDirectoryConfiguration = {
  ComputerAttributes?: ActiveDirectoryComputerAttribute[];
  DirectoryId?: string;
  OrganizationalUnitDistinguishedName?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ComputeFarmConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html}
 */
export type ComputeFarmConfiguration = {
  ActiveDirectoryUser?: string;
  Endpoint?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.LicenseServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html}
 */
export type LicenseServiceConfiguration = {
  Endpoint?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ScriptParameterKeyValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html}
 */
export type ScriptParameterKeyValue = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.SharedFileSystemConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html}
 */
export type SharedFileSystemConfiguration = {
  Endpoint?: string;
  FileSystemId?: string;
  LinuxMountPoint?: string;
  ShareName?: string;
  WindowsMountDrive?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html}
 */
export type StudioComponentConfiguration = {
  ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration;
  ComputeFarmConfiguration?: ComputeFarmConfiguration;
  LicenseServiceConfiguration?: LicenseServiceConfiguration;
  SharedFileSystemConfiguration?: SharedFileSystemConfiguration;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentInitializationScript`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html}
 */
export type StudioComponentInitializationScript = {
  LaunchProfileProtocolVersion?: string;
  Platform?: string;
  RunContext?: string;
  Script?: string;
};
/**
 * Resource Type definition for AWS::NimbleStudio::StudioComponent
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html}
 */
export class NimbleStudioStudioComponent extends $Resource<
  "AWS::NimbleStudio::StudioComponent",
  NimbleStudioStudioComponentProperties,
  NimbleStudioStudioComponentAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::StudioComponent";
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioComponentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NimbleStudioStudioComponent.Type, properties, options);
  }
}
