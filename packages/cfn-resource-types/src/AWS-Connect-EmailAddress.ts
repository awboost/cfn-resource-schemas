import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::EmailAddress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html}
 */
export type ConnectEmailAddressProperties = {
  /**
   * List of alias configurations for the email address
   * @maxLength `1`
   */
  AliasConfigurations?: AliasConfiguration[];
  /**
   * A description for the email address.
   * @minLength `1`
   * @maxLength `250`
   * @pattern `(^[\S].*[\S]$)|(^[\S]$)`
   */
  Description?: string;
  /**
   * The display name for the email address.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `(^[\S].*[\S]$)|(^[\S]$)`
   */
  DisplayName?: string;
  /**
   * Email address to be created for this instance
   * @minLength `1`
   * @maxLength `255`
   * @pattern `([^\s@]+@[^\s@]+\.[^\s@]+)`
   */
  EmailAddress: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @minLength `1`
   * @maxLength `250`
   * @pattern `^arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  InstanceArn: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::EmailAddress`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html#aws-resource-connect-emailaddress-return-values}
 */
export type ConnectEmailAddressAttributes = {
  /**
   * The identifier of the email address.
   * @pattern `^arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/email-address/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  EmailAddressArn: string;
};
/**
 * Type definition for `AWS::Connect::EmailAddress.AliasConfiguration`.
 * Configuration for an email address alias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-emailaddress-aliasconfiguration.html}
 */
export type AliasConfiguration = {
  /**
   * The identifier of the email address alias
   * @pattern `^arn:(aws|aws-us-gov):connect:[a-z]{2}-[a-z]+-[0-9]{1}:[0-9]{1,20}:instance/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/email-address/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  EmailAddressArn: string;
};
/**
 * Type definition for `AWS::Connect::EmailAddress.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-emailaddress-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::EmailAddress
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-emailaddress.html}
 */
export class ConnectEmailAddress extends $Resource<
  "AWS::Connect::EmailAddress",
  ConnectEmailAddressProperties,
  ConnectEmailAddressAttributes
> {
  public static readonly Type = "AWS::Connect::EmailAddress";
  constructor(
    logicalId: string,
    properties: ConnectEmailAddressProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectEmailAddress.Type, properties, options);
  }
}
