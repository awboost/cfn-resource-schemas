import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html}
 */
export type AppStreamStackProperties = {
  /**
   * The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
   */
  AccessEndpoints?: AccessEndpoint[];
  /**
   * The persistent application settings for users of the stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
   */
  ApplicationSettings?: ApplicationSettings;
  /**
   * The stack attributes to delete.
   */
  AttributesToDelete?: string[];
  /**
   * This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.
   */
  DeleteStorageConnectors?: boolean;
  /**
   * The description to display.
   */
  Description?: string;
  /**
   * The stack name to display.
   */
  DisplayName?: string;
  /**
   * The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
   */
  EmbedHostDomains?: string[];
  /**
   * The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
   */
  FeedbackURL?: string;
  /**
   * The name of the stack.
   */
  Name?: string;
  /**
   * The URL that users are redirected to after their streaming session ends.
   */
  RedirectURL?: string;
  /**
   * The storage connectors to enable.
   */
  StorageConnectors?: StorageConnector[];
  /**
   * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
   */
  StreamingExperienceSettings?: StreamingExperienceSettings;
  /**
   * An array of key-value pairs.
   */
  Tags?: Tag[];
  /**
   * The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
   */
  UserSettings?: UserSetting[];
};
/**
 * Type definition for `AWS::AppStream::Stack.AccessEndpoint`.
 * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html}
 */
export type AccessEndpoint = {
  /**
   * The type of interface endpoint.
   */
  EndpointType: string;
  /**
   * The identifier (ID) of the VPC in which the interface endpoint is used.
   */
  VpceId: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.ApplicationSettings`.
 * The persistent application settings for users of a stack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html}
 */
export type ApplicationSettings = {
  /**
   * Enables or disables persistent application settings for users during their streaming sessions.
   */
  Enabled: boolean;
  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
   */
  SettingsGroup?: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.StorageConnector`.
 * A connector that enables persistent storage for users.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html}
 */
export type StorageConnector = {
  /**
   * The type of storage connector.
   */
  ConnectorType: string;
  /**
   * The names of the domains for the account.
   */
  Domains?: string[];
};
/**
 * Type definition for `AWS::AppStream::Stack.StreamingExperienceSettings`.
 * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html}
 */
export type StreamingExperienceSettings = {
  /**
   * The preferred protocol that you want to use while streaming your application.
   */
  PreferredProtocol?: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.Tag`.
 * The tag of the stack.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag.
   */
  Key: string;
  /**
   * The value of the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.UserSetting`.
 * Specifies an action and whether the action is enabled or disabled for users during their streaming sessions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html}
 */
export type UserSetting = {
  /**
   * The action that is enabled or disabled.
   */
  Action: string;
  /**
   * Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).
   */
  MaximumLength?: number;
  /**
   * Indicates whether the action is enabled or disabled.
   */
  Permission: string;
};
/**
 * Resource Type definition for AWS::AppStream::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html}
 */
export class AppStreamStack extends $Resource<
  "AWS::AppStream::Stack",
  AppStreamStackProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::Stack";
  constructor(
    logicalId: string,
    properties: AppStreamStackProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamStack.Type, properties, options);
  }
}
