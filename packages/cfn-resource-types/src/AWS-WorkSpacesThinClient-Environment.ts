import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for AWS::WorkSpacesThinClient::Environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html}
 */
export type WorkSpacesThinClientEnvironmentProperties = {
  /**
   * The ID of the software set to apply.
   * @pattern `^[0-9]{1,9}$`
   */
  DesiredSoftwareSetId?: string;
  /**
   * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[0-9]{0,12}:[a-zA-Z0-9\-\/\._]+$`
   */
  DesktopArn: string;
  /**
   * The URL for the identity provider login (only for environments that use AppStream 2.0).
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^(https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,32}(:[0-9]{1,5})?(\/.*)?$`
   */
  DesktopEndpoint?: string;
  /**
   * An array of key-value pairs to apply to the newly created devices for this environment.
   * @maxLength `50`
   */
  DeviceCreationTags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[0-9]{0,12}:key\/[a-zA-Z0-9-]+$`
   */
  KmsKeyArn?: string;
  /**
   * A specification for a time window to apply software updates.
   */
  MaintenanceWindow?: MaintenanceWindow;
  /**
   * The name of the environment.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^.+$`
   */
  Name?: string;
  /**
   * An option to define which software updates to apply.
   */
  SoftwareSetUpdateMode?: "USE_LATEST" | "USE_DESIRED";
  /**
   * An option to define if software updates should be applied within a maintenance window.
   */
  SoftwareSetUpdateSchedule?: "USE_MAINTENANCE_WINDOW" | "APPLY_IMMEDIATELY";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WorkSpacesThinClient::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html#aws-resource-workspacesthinclient-environment-return-values}
 */
export type WorkSpacesThinClientEnvironmentAttributes = {
  /**
   * Activation code for devices associated with environment.
   * @pattern `^[a-z]{2}[a-z0-9]{6}$`
   */
  ActivationCode: string;
  /**
   * The environment ARN.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[0-9]{0,12}:[a-zA-Z0-9\-\/\._]+$`
   */
  Arn: string;
  /**
   * The timestamp in unix epoch format when environment was created.
   */
  CreatedAt: string;
  /**
   * The type of VDI.
   */
  DesktopType: "workspaces" | "appstream" | "workspaces-web";
  /**
   * Unique identifier of the environment.
   * @pattern `^[a-z0-9]{9}$`
   */
  Id: string;
  /**
   * The ID of the software set that is pending to be installed.
   * @pattern `^[0-9]{1,9}$`
   */
  PendingSoftwareSetId: string;
  /**
   * The version of the software set that is pending to be installed.
   */
  PendingSoftwareSetVersion: string;
  /**
   * Number of devices registered to the environment.
   * @min `0`
   */
  RegisteredDevicesCount: number;
  /**
   * Describes if the software currently installed on all devices in the environment is a supported version.
   */
  SoftwareSetComplianceStatus:
    | "COMPLIANT"
    | "NOT_COMPLIANT"
    | "NO_REGISTERED_DEVICES";
  /**
   * The timestamp in unix epoch format when environment was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::WorkSpacesThinClient::Environment.DayOfWeek`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-dayofweek.html}
 */
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
/**
 * Type definition for `AWS::WorkSpacesThinClient::Environment.MaintenanceWindow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-maintenancewindow.html}
 */
export type MaintenanceWindow = {
  /**
   * The desired time zone maintenance window.
   */
  ApplyTimeOf?: "UTC" | "DEVICE";
  /**
   * The date of maintenance window.
   * @minLength `1`
   * @maxLength `7`
   */
  DaysOfTheWeek?: DayOfWeek[];
  /**
   * The hour end time of maintenance window.
   * @min `0`
   * @max `23`
   */
  EndTimeHour?: number;
  /**
   * The minute end time of maintenance window.
   * @min `0`
   * @max `59`
   */
  EndTimeMinute?: number;
  /**
   * The hour start time of maintenance window.
   * @min `0`
   * @max `23`
   */
  StartTimeHour?: number;
  /**
   * The minute start time of maintenance window.
   * @min `0`
   * @max `59`
   */
  StartTimeMinute?: number;
  /**
   * The type of maintenance window.
   */
  Type: "SYSTEM" | "CUSTOM";
};
/**
 * Type definition for `AWS::WorkSpacesThinClient::Environment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspacesthinclient-environment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for AWS::WorkSpacesThinClient::Environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesthinclient-environment.html}
 */
export class WorkSpacesThinClientEnvironment extends $Resource<
  "AWS::WorkSpacesThinClient::Environment",
  WorkSpacesThinClientEnvironmentProperties,
  WorkSpacesThinClientEnvironmentAttributes
> {
  public static readonly Type = "AWS::WorkSpacesThinClient::Environment";
  constructor(
    logicalId: string,
    properties: WorkSpacesThinClientEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesThinClientEnvironment.Type, properties, options);
  }
}
