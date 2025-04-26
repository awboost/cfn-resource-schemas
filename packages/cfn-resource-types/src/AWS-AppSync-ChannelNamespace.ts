import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AppSync::ChannelNamespace`.
 * Resource schema for AppSync ChannelNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html}
 */
export type AppSyncChannelNamespaceProperties = {
  /**
   * AppSync Api Id that this Channel Namespace belongs to.
   */
  ApiId: string;
  /**
   * String of APPSYNC_JS code to be used by the handlers.
   * @minLength `1`
   * @maxLength `32768`
   */
  CodeHandlers?: string;
  /**
   * The Amazon S3 endpoint where the code is located.
   */
  CodeS3Location?: string;
  HandlerConfigs?: HandlerConfigs;
  /**
   * Namespace indentifier.
   * @minLength `1`
   * @maxLength `50`
   * @pattern `([A-Za-z0-9](?:[A-Za-z0-9\-]{0,48}[A-Za-z0-9])?)`
   */
  Name: string;
  /**
   * List of AuthModes supported for Publish operations.
   */
  PublishAuthModes?: AuthMode[];
  /**
   * List of AuthModes supported for Subscribe operations.
   */
  SubscribeAuthModes?: AuthMode[];
  /**
   * An arbitrary set of tags (key-value pairs) for this AppSync API.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppSync::ChannelNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#aws-resource-appsync-channelnamespace-return-values}
 */
export type AppSyncChannelNamespaceAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the Channel Namespace.
   */
  ChannelNamespaceArn: string;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.AuthenticationType`.
 * Security configuration for your AppSync API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-authenticationtype.html}
 */
export type AuthenticationType =
  | "AMAZON_COGNITO_USER_POOLS"
  | "AWS_IAM"
  | "API_KEY"
  | "OPENID_CONNECT"
  | "AWS_LAMBDA";
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.AuthMode`.
 * An auth mode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-authmode.html}
 */
export type AuthMode = {
  /**
   * Security configuration for your AppSync API.
   */
  AuthType?: AuthenticationType;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.HandlerBehavior`.
 * Integration behavior for a handler configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-handlerbehavior.html}
 */
export type HandlerBehavior = "CODE" | "DIRECT";
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.HandlerConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-handlerconfig.html}
 */
export type HandlerConfig = {
  /**
   * Integration behavior for a handler configuration.
   */
  Behavior: HandlerBehavior;
  Integration: Integration;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.HandlerConfigs`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-handlerconfigs.html}
 */
export type HandlerConfigs = {
  OnPublish?: HandlerConfig;
  OnSubscribe?: HandlerConfig;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-integration.html}
 */
export type Integration = {
  /**
   * Data source to invoke for this integration.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `([_A-Za-z][_0-9A-Za-z]{0,511})?`
   */
  DataSourceName: string;
  LambdaConfig?: LambdaConfig;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.InvokeType`.
 * Invocation type for direct lambda integrations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-invoketype.html}
 */
export type InvokeType = "REQUEST_RESPONSE" | "EVENT";
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.LambdaConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-lambdaconfig.html}
 */
export type LambdaConfig = {
  /**
   * Invocation type for direct lambda integrations.
   */
  InvokeType: InvokeType;
};
/**
 * Type definition for `AWS::AppSync::ChannelNamespace.Tag`.
 * An arbitrary set of tags (key-value pairs) for this AppSync API.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[ a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\s\w+-=\.:/@]*$`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::AppSync::ChannelNamespace`.
 * Resource schema for AppSync ChannelNamespace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html}
 */
export class AppSyncChannelNamespace extends $Resource<
  "AWS::AppSync::ChannelNamespace",
  AppSyncChannelNamespaceProperties,
  AppSyncChannelNamespaceAttributes
> {
  public static readonly Type = "AWS::AppSync::ChannelNamespace";
  constructor(
    logicalId: string,
    properties: AppSyncChannelNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppSyncChannelNamespace.Type, properties, options);
  }
}
