import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html}
 */
export type AppStreamStackProperties = {
  AccessEndpoints?: AccessEndpoint[];
  ApplicationSettings?: ApplicationSettings;
  AttributesToDelete?: string[];
  DeleteStorageConnectors?: boolean;
  Description?: string;
  DisplayName?: string;
  EmbedHostDomains?: string[];
  FeedbackURL?: string;
  Name?: string;
  RedirectURL?: string;
  StorageConnectors?: StorageConnector[];
  StreamingExperienceSettings?: StreamingExperienceSettings;
  Tags?: Tag[];
  UserSettings?: UserSetting[];
};
/**
 * Attribute type definition for `AWS::AppStream::Stack`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#aws-resource-appstream-stack-return-values}
 */
export type AppStreamStackAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.AccessEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-accessendpoint.html}
 */
export type AccessEndpoint = {
  EndpointType: string;
  VpceId: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.ApplicationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-applicationsettings.html}
 */
export type ApplicationSettings = {
  Enabled: boolean;
  SettingsGroup?: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.StorageConnector`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-storageconnector.html}
 */
export type StorageConnector = {
  ConnectorType: string;
  Domains?: string[];
  ResourceIdentifier?: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.StreamingExperienceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-streamingexperiencesettings.html}
 */
export type StreamingExperienceSettings = {
  PreferredProtocol?: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::AppStream::Stack.UserSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-stack-usersetting.html}
 */
export type UserSetting = {
  Action: string;
  MaximumLength?: number;
  Permission: string;
};
/**
 * Resource Type definition for AWS::AppStream::Stack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html}
 */
export class AppStreamStack extends $Resource<
  "AWS::AppStream::Stack",
  AppStreamStackProperties,
  AppStreamStackAttributes
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
