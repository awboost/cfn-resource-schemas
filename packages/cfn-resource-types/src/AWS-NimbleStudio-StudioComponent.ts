import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::NimbleStudio::StudioComponent`.
 * Represents a studio component that connects a non-Nimble Studio resource in your account to your studio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html}
 */
export type NimbleStudioStudioComponentProperties = {
  /**
   * <p>The configuration of the studio component, based on component type.</p>
   */
  Configuration?:
    | {
        /**
         * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio
                    resource.</p>
         */
        ActiveDirectoryConfiguration: ActiveDirectoryConfiguration;
      }
    | {
        /**
         * <p>The configuration for a render farm that is associated with a studio resource.</p>
         */
        ComputeFarmConfiguration: ComputeFarmConfiguration;
      }
    | {
        /**
         * <p>The configuration for a license service that is associated with a studio
                    resource.</p>
         */
        LicenseServiceConfiguration: LicenseServiceConfiguration;
      }
    | {
        /**
         * <p>The configuration for a shared file storage system that is associated with a studio
                    resource.</p>
         */
        SharedFileSystemConfiguration: SharedFileSystemConfiguration;
      };
  /**
   * <p>The description.</p>
   * @maxLength `256`
   */
  Description?: string;
  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   * @maxLength `30`
   */
  Ec2SecurityGroupIds?: string[];
  /**
   * <p>Initialization scripts for studio components.</p>
   */
  InitializationScripts?: StudioComponentInitializationScript[];
  /**
   * <p>The name for the studio component.</p>
   * @maxLength `64`
   */
  Name: string;
  /**
   * @maxLength `2048`
   */
  RuntimeRoleArn?: string;
  /**
   * <p>Parameters for the studio component scripts.</p>
   * @maxLength `30`
   */
  ScriptParameters?: ScriptParameterKeyValue[];
  /**
   * @maxLength `2048`
   */
  SecureInitializationRoleArn?: string;
  /**
   * <p>The studio ID. </p>
   */
  StudioId: string;
  Subtype?: StudioComponentSubtype;
  Tags?: Tags;
  Type: StudioComponentType;
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
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value
            pair.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html}
 */
export type ActiveDirectoryComputerAttribute = {
  /**
   * <p>The name for the LDAP attribute.</p>
   * @minLength `1`
   * @maxLength `40`
   */
  Name?: string;
  /**
   * <p>The value for the LDAP attribute.</p>
   * @minLength `1`
   * @maxLength `64`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ActiveDirectoryConfiguration`.
 * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html}
 */
export type ActiveDirectoryConfiguration = {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   * @maxLength `50`
   */
  ComputerAttributes?: ActiveDirectoryComputerAttribute[];
  /**
     * <p>The directory ID of the Directory Service for Microsoft Active Directory to access
                using this studio component.</p>
     */
  DirectoryId?: string;
  /**
     * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory
                computer.</p>
     * @minLength `1`
     * @maxLength `2000`
     */
  OrganizationalUnitDistinguishedName?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ComputeFarmConfiguration`.
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html}
 */
export type ComputeFarmConfiguration = {
  /**
     * <p>The name of an Active Directory user that is used on ComputeFarm worker
                instances.</p>
     */
  ActiveDirectoryUser?: string;
  /**
     * <p>The endpoint of the ComputeFarm that is accessed by the studio component
                resource.</p>
     */
  Endpoint?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.LaunchProfilePlatform`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-launchprofileplatform.html}
 */
export type LaunchProfilePlatform = "LINUX" | "WINDOWS";
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.LicenseServiceConfiguration`.
 * <p>The configuration for a license service that is associated with a studio
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html}
 */
export type LicenseServiceConfiguration = {
  /**
     * <p>The endpoint of the license service that is accessed by the studio component
                resource.</p>
     */
  Endpoint?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.ScriptParameterKeyValue`.
 * <p>A parameter for a studio component script, in the form of a key:value pair.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html}
 */
export type ScriptParameterKeyValue = {
  /**
   * <p>A script parameter key.</p>
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z_][a-zA-Z0-9_]+$`
   */
  Key?: string;
  /**
   * <p>A script parameter value.</p>
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.SharedFileSystemConfiguration`.
 * <p>The configuration for a shared file storage system that is associated with a studio
            resource.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html}
 */
export type SharedFileSystemConfiguration = {
  /**
     * <p>The endpoint of the shared file system that is accessed by the studio component
                resource.</p>
     */
  Endpoint?: string;
  /**
   * <p>The unique identifier for a file system.</p>
   */
  FileSystemId?: string;
  /**
   * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
   * @maxLength `128`
   * @pattern `^(/?|(\$HOME)?(/[^/\n\s\\]+)*)$`
   */
  LinuxMountPoint?: string;
  /**
   * <p>The name of the file share.</p>
   */
  ShareName?: string;
  /**
   * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
   * @pattern `^[A-Z]$`
   */
  WindowsMountDrive?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentInitializationScript`.
 * <p>Initialization scripts for studio components.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html}
 */
export type StudioComponentInitializationScript = {
  /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid
                version is "2021-03-31".</p>
     * @maxLength `10`
     * @pattern `^2021\-03\-31$`
     */
  LaunchProfileProtocolVersion?: string;
  Platform?: LaunchProfilePlatform;
  RunContext?: StudioComponentInitializationScriptRunContext;
  /**
   * <p>The initialization script.</p>
   * @minLength `1`
   * @maxLength `5120`
   */
  Script?: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentInitializationScriptRunContext`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscriptruncontext.html}
 */
export type StudioComponentInitializationScriptRunContext =
  | "SYSTEM_INITIALIZATION"
  | "USER_INITIALIZATION";
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentSubtype`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentsubtype.html}
 */
export type StudioComponentSubtype =
  | "AWS_MANAGED_MICROSOFT_AD"
  | "AMAZON_FSX_FOR_WINDOWS"
  | "AMAZON_FSX_FOR_LUSTRE"
  | "CUSTOM";
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.StudioComponentType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponenttype.html}
 */
export type StudioComponentType =
  | "ACTIVE_DIRECTORY"
  | "SHARED_FILE_SYSTEM"
  | "COMPUTE_FARM"
  | "LICENSE_SERVICE"
  | "CUSTOM";
/**
 * Type definition for `AWS::NimbleStudio::StudioComponent.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::NimbleStudio::StudioComponent`.
 * Represents a studio component that connects a non-Nimble Studio resource in your account to your studio
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html}
 */
export class NimbleStudioStudioComponent extends $Resource<
  "AWS::NimbleStudio::StudioComponent",
  NimbleStudioStudioComponentProperties,
  NimbleStudioStudioComponentAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::StudioComponent";
  public static readonly AttributeNames = ["StudioComponentId" as const];
  constructor(
    logicalId: string,
    properties: NimbleStudioStudioComponentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NimbleStudioStudioComponent.Type,
      properties,
      NimbleStudioStudioComponent.AttributeNames,
      options,
    );
  }
}
