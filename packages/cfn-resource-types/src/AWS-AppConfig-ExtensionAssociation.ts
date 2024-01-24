import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AppConfig::ExtensionAssociation`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html}
 */
export type AppConfigExtensionAssociationProperties = {
  ExtensionIdentifier?: string;
  ExtensionVersionNumber?: number;
  Parameters?: Record<string, string>;
  ResourceIdentifier?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppConfig::ExtensionAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html#aws-resource-appconfig-extensionassociation-return-values}
 */
export type AppConfigExtensionAssociationAttributes = {
  Arn: string;
  ExtensionArn: string;
  Id: string;
  ResourceArn: string;
};
/**
 * Type definition for `AWS::AppConfig::ExtensionAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-extensionassociation-tag.html}
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
 * Resource type definition for `AWS::AppConfig::ExtensionAssociation`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-extensionassociation.html}
 */
export class AppConfigExtensionAssociation extends $Resource<
  "AWS::AppConfig::ExtensionAssociation",
  AppConfigExtensionAssociationProperties,
  AppConfigExtensionAssociationAttributes
> {
  public static readonly Type = "AWS::AppConfig::ExtensionAssociation";
  constructor(
    logicalId: string,
    properties: AppConfigExtensionAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigExtensionAssociation.Type, properties, options);
  }
}
