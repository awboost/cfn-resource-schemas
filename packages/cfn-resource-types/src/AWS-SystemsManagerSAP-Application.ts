import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SystemsManagerSAP::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html}
 */
export type SystemsManagerSAPApplicationProperties = {
  /**
   * @pattern `[\w\d]{1,50}`
   */
  ApplicationId: string;
  ApplicationType: "HANA";
  /**
   * @minLength `1`
   */
  Credentials?: Credential[];
  /**
   * @minLength `1`
   */
  Instances?: string[];
  /**
   * @pattern `[0-9]{2}`
   */
  SapInstanceNumber?: string;
  /**
   * @pattern `[A-Z][A-Z0-9]{2}`
   */
  Sid?: string;
  /**
   * The tags of a SystemsManagerSAP application.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SystemsManagerSAP::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#aws-resource-systemsmanagersap-application-return-values}
 */
export type SystemsManagerSAPApplicationAttributes = {
  /**
   * The ARN of the Helix application
   * @pattern `^arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SystemsManagerSAP::Application.Credential`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-systemsmanagersap-application-credential.html}
 */
export type Credential = {
  CredentialType?: "ADMIN";
  /**
   * @pattern `^(?=.{1,100}$).*`
   */
  DatabaseName?: string;
  /**
   * @pattern `^(?=.{1,100}$).*`
   */
  SecretId?: string;
};
/**
 * Type definition for `AWS::SystemsManagerSAP::Application.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-systemsmanagersap-application-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::SystemsManagerSAP::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html}
 */
export class SystemsManagerSAPApplication extends $Resource<
  "AWS::SystemsManagerSAP::Application",
  SystemsManagerSAPApplicationProperties,
  SystemsManagerSAPApplicationAttributes
> {
  public static readonly Type = "AWS::SystemsManagerSAP::Application";
  constructor(
    logicalId: string,
    properties: SystemsManagerSAPApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SystemsManagerSAPApplication.Type, properties, options);
  }
}
