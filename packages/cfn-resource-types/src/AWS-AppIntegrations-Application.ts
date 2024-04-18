import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AppIntegrations::Application`.
 * Resource Type definition for AWS:AppIntegrations::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html}
 */
export type AppIntegrationsApplicationProperties = {
  /**
   * Application source config
   */
  ApplicationSourceConfig: {
    ExternalUrlConfig: ExternalUrlConfig;
  };
  /**
   * The application description.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description: string;
  /**
   * The name of the application.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Name: string;
  /**
   * The namespace of the application.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Namespace?: string;
  /**
   * The configuration of events or requests that the application has access to.
   * @minLength `0`
   * @maxLength `150`
   */
  Permissions?: string[];
  /**
   * The tags (keys and values) associated with the application.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppIntegrations::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html#aws-resource-appintegrations-application-return-values}
 */
export type AppIntegrationsApplicationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the application.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:app-integrations:[-a-z0-9]*:[0-9]{12}:application/[-a-zA-Z0-9]*`
   */
  ApplicationArn: string;
  /**
   * The id of the application.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::AppIntegrations::Application.ExternalUrlConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-externalurlconfig.html}
 */
export type ExternalUrlConfig = {
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^\w+\:\/\/.*$`
   */
  AccessUrl: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  ApprovedOrigins: string[];
};
/**
 * Type definition for `AWS::AppIntegrations::Application.Tag`.
 * A label for tagging Application resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-application-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::AppIntegrations::Application`.
 * Resource Type definition for AWS:AppIntegrations::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-application.html}
 */
export class AppIntegrationsApplication extends $Resource<
  "AWS::AppIntegrations::Application",
  AppIntegrationsApplicationProperties,
  AppIntegrationsApplicationAttributes
> {
  public static readonly Type = "AWS::AppIntegrations::Application";
  constructor(
    logicalId: string,
    properties: AppIntegrationsApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppIntegrationsApplication.Type, properties, options);
  }
}
