import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::WorkSpaces::WorkspacesPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html}
 */
export type WorkSpacesWorkspacesPoolProperties = {
  ApplicationSettings?: ApplicationSettings;
  /**
   * @pattern `^wsb-[0-9a-z]{8,63}$`
   */
  BundleId: string;
  Capacity: Capacity;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_./() -]+$`
   */
  Description?: string;
  /**
   * @minLength `10`
   * @maxLength `65`
   * @pattern `^wsd-[0-9a-z]{8,63}$`
   */
  DirectoryId: string;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$`
   */
  PoolName: string;
  RunningMode?: RunningMode;
  Tags?: Tag[];
  TimeoutSettings?: TimeoutSettings;
};
/**
 * Attribute type definition for `AWS::WorkSpaces::WorkspacesPool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#aws-resource-workspaces-workspacespool-return-values}
 */
export type WorkSpacesWorkspacesPoolAttributes = {
  CreatedAt: string;
  /**
   * @pattern `^arn:aws[a-z-]{0,7}:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$`
   */
  PoolArn: string;
  /**
   * @pattern `^wspool-[0-9a-z]{9}$`
   */
  PoolId: string;
};
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.ApplicationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-applicationsettings.html}
 */
export type ApplicationSettings = {
  /**
   * @maxLength `100`
   * @pattern `^[A-Za-z0-9_./()!*'-]+$`
   */
  SettingsGroup?: string;
  Status: ApplicationSettingsStatus;
};
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.ApplicationSettingsStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-applicationsettingsstatus.html}
 */
export type ApplicationSettingsStatus = "DISABLED" | "ENABLED";
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.Capacity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-capacity.html}
 */
export type Capacity = {
  /**
   * @min `0`
   */
  DesiredUserSessions: number;
};
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.RunningMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-runningmode.html}
 */
export type RunningMode = "ALWAYS_ON" | "AUTO_STOP";
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::WorkSpaces::WorkspacesPool.TimeoutSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-workspacespool-timeoutsettings.html}
 */
export type TimeoutSettings = {
  /**
   * @min `60`
   * @max `36000`
   */
  DisconnectTimeoutInSeconds?: number;
  /**
   * @min `0`
   * @max `36000`
   */
  IdleDisconnectTimeoutInSeconds?: number;
  /**
   * @min `600`
   * @max `432000`
   */
  MaxUserDurationInSeconds?: number;
};
/**
 * Resource Type definition for AWS::WorkSpaces::WorkspacesPool
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html}
 */
export class WorkSpacesWorkspacesPool extends $Resource<
  "AWS::WorkSpaces::WorkspacesPool",
  WorkSpacesWorkspacesPoolProperties,
  WorkSpacesWorkspacesPoolAttributes
> {
  public static readonly Type = "AWS::WorkSpaces::WorkspacesPool";
  constructor(
    logicalId: string,
    properties: WorkSpacesWorkspacesPoolProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WorkSpacesWorkspacesPool.Type, properties, options);
  }
}
