import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::IoTFleetHub::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html}
 */
export type IoTFleetHubApplicationProperties = {
  /**
   * Application Description, should be between 1 and 2048 characters.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[ -~]*$`
   */
  ApplicationDescription?: string;
  /**
   * Application Name, should be between 1 and 256 characters.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[ -~]*$`
   */
  ApplicationName: string;
  /**
   * The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:[!-~]+$`
   */
  RoleArn: string;
  /**
   * A list of key-value pairs that contain metadata for the application.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetHub::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#aws-resource-iotfleethub-application-return-values}
 */
export type IoTFleetHubApplicationAttributes = {
  /**
   * The ARN of the application.
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:[!-~]+$`
   */
  ApplicationArn: string;
  /**
   * When the Application was created
   */
  ApplicationCreationDate: number;
  /**
   * The ID of the application.
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  ApplicationId: string;
  /**
   * When the Application was last updated
   */
  ApplicationLastUpdateDate: number;
  /**
   * The current state of the application.
   */
  ApplicationState: string;
  /**
   * The URL of the application.
   */
  ApplicationUrl: string;
  /**
   * A message indicating why Create or Delete Application failed.
   */
  ErrorMessage: string;
  /**
   * The AWS SSO application generated client ID (used with AWS SSO APIs).
   */
  SsoClientId: string;
};
/**
 * Type definition for `AWS::IoTFleetHub::Application.Tag`.
 * To add or update tag, provide both key and value. To delete tag, provide only tag key to be deleted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleethub-application-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::IoTFleetHub::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html}
 */
export class IoTFleetHubApplication extends $Resource<
  "AWS::IoTFleetHub::Application",
  IoTFleetHubApplicationProperties,
  IoTFleetHubApplicationAttributes
> {
  public static readonly Type = "AWS::IoTFleetHub::Application";
  constructor(
    logicalId: string,
    properties: IoTFleetHubApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetHubApplication.Type, properties, options);
  }
}
