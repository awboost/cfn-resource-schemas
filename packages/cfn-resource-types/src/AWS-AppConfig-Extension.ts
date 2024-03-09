import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::Extension
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html}
 */
export type AppConfigExtensionProperties = {
  Actions: Record<string, Action[]>;
  /**
   * Description of the extension.
   */
  Description?: string;
  LatestVersionNumber?: number;
  /**
   * Name of the extension.
   */
  Name: string;
  Parameters?: Record<string, Parameter>;
  /**
   * An array of key-value tags to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppConfig::Extension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html#aws-resource-appconfig-extension-return-values}
 */
export type AppConfigExtensionAttributes = {
  Arn: string;
  Id: string;
  VersionNumber: number;
};
/**
 * Type definition for `AWS::AppConfig::Extension.Action`.
 * An action for an extension to take at a specific action point.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-action.html}
 */
export type Action = {
  /**
   * The description of the extension Action.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The name of the extension action.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The ARN of the role for invoking the extension action.
   * @minLength `20`
   * @maxLength `2048`
   */
  RoleArn?: string;
  /**
   * The URI of the extension action.
   * @minLength `1`
   * @maxLength `2048`
   */
  Uri: string;
};
/**
 * Type definition for `AWS::AppConfig::Extension.Parameter`.
 * A parameter for the extension to send to a specific action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-parameter.html}
 */
export type Parameter = {
  /**
   * The description of the extension Parameter.
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  Dynamic?: boolean;
  Required: boolean;
};
/**
 * Type definition for `AWS::AppConfig::Extension.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extension-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::AppConfig::Extension
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extension.html}
 */
export class AppConfigExtension extends $Resource<
  "AWS::AppConfig::Extension",
  AppConfigExtensionProperties,
  AppConfigExtensionAttributes
> {
  public static readonly Type = "AWS::AppConfig::Extension";
  constructor(
    logicalId: string,
    properties: AppConfigExtensionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigExtension.Type, properties, options);
  }
}
