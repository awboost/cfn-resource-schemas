import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Transfer::Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html}
 */
export type TransferProfileProperties = {
  /**
   * AS2 identifier agreed with a trading partner.
   * @minLength `1`
   * @maxLength `128`
   */
  As2Id: string;
  /**
   * List of the certificate IDs associated with this profile to be used for encryption and signing of AS2 messages.
   */
  CertificateIds?: string[];
  /**
   * Enum specifying whether the profile is local or associated with a trading partner.
   */
  ProfileType: "LOCAL" | "PARTNER";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Transfer::Profile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html#aws-resource-transfer-profile-return-values}
 */
export type TransferProfileAttributes = {
  /**
   * Specifies the unique Amazon Resource Name (ARN) for the profile.
   * @minLength `20`
   * @maxLength `1600`
   * @pattern `arn:.*`
   */
  Arn: string;
  /**
   * A unique identifier for the profile
   * @minLength `19`
   * @maxLength `19`
   * @pattern `^p-([0-9a-f]{17})$`
   */
  ProfileId: string;
};
/**
 * Type definition for `AWS::Transfer::Profile.Tag`.
 * Creates a key-value pair for a specific resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-profile-tag.html}
 */
export type Tag = {
  /**
   * The name assigned to the tag that you create.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Contains one or more values that you assigned to the key name you create.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Transfer::Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-profile.html}
 */
export class TransferProfile extends $Resource<
  "AWS::Transfer::Profile",
  TransferProfileProperties,
  TransferProfileAttributes
> {
  public static readonly Type = "AWS::Transfer::Profile";
  constructor(
    logicalId: string,
    properties: TransferProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, TransferProfile.Type, properties, options);
  }
}
