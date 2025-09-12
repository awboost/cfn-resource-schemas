import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::SenderId
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-senderid.html}
 */
export type SMSVOICESenderIdProperties = {
  /**
   * When set to true the sender ID can't be deleted. By default this is set to false.
   */
  DeletionProtectionEnabled?: boolean;
  /**
   * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
   * @pattern `^[A-Z]{2}$`
   */
  IsoCountryCode: string;
  /**
   * The sender ID string to request.
   * @pattern `^[A-Z0-9_-]+$`
   */
  SenderId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SMSVOICE::SenderId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-senderid.html#aws-resource-smsvoice-senderid-return-values}
 */
export type SMSVOICESenderIdAttributes = {
  /**
   * The Amazon Resource Name (ARN) associated with the SenderId.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::SenderId.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-senderid-tag.html}
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
 * Resource Type definition for AWS::SMSVOICE::SenderId
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-senderid.html}
 */
export class SMSVOICESenderId extends $Resource<
  "AWS::SMSVOICE::SenderId",
  SMSVOICESenderIdProperties,
  SMSVOICESenderIdAttributes
> {
  public static readonly Type = "AWS::SMSVOICE::SenderId";
  constructor(
    logicalId: string,
    properties: SMSVOICESenderIdProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICESenderId.Type, properties, options);
  }
}
