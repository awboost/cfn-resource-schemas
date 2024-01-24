import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::PhoneNumber
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html}
 */
export type ConnectPhoneNumberProperties = {
  /**
   * The phone number country code.
   * @pattern `^[A-Z]{2}`
   */
  CountryCode?: string;
  /**
   * The description of the phone number.
   * @minLength `1`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The phone number prefix.
   * @pattern `^\+[0-9]{1,15}`
   */
  Prefix?: string;
  /**
   * The source phone number arn.
   */
  SourcePhoneNumberArn?: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ARN of the target the phone number is claimed to.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:(instance|traffic-distribution-group)/[-a-zA-Z0-9]*$`
   */
  TargetArn: string;
  /**
   * The phone number type
   * @pattern `TOLL_FREE|DID|UIFN|SHARED|THIRD_PARTY_DID|THIRD_PARTY_TF|SHORT_CODE`
   */
  Type?: string;
};
/**
 * Attribute type definition for `AWS::Connect::PhoneNumber`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html#aws-resource-connect-phonenumber-return-values}
 */
export type ConnectPhoneNumberAttributes = {
  /**
   * The phone number e164 address.
   * @pattern `^\+[0-9]{2,15}`
   */
  Address: string;
  /**
   * The phone number ARN
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:phone-number/[-a-zA-Z0-9]*$`
   */
  PhoneNumberArn: string;
};
/**
 * Type definition for `AWS::Connect::PhoneNumber.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-phonenumber-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::PhoneNumber
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-phonenumber.html}
 */
export class ConnectPhoneNumber extends $Resource<
  "AWS::Connect::PhoneNumber",
  ConnectPhoneNumberProperties,
  ConnectPhoneNumberAttributes
> {
  public static readonly Type = "AWS::Connect::PhoneNumber";
  constructor(
    logicalId: string,
    properties: ConnectPhoneNumberProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectPhoneNumber.Type, properties, options);
  }
}
