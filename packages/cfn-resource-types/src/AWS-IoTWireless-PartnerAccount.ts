import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::PartnerAccount`.
 * Create and manage partner account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html}
 */
export type IoTWirelessPartnerAccountProperties = {
  /**
   * Whether the partner account is linked to the AWS account.
   */
  AccountLinked?: boolean;
  /**
   * The partner account ID to disassociate from the AWS account
   * @maxLength `256`
   */
  PartnerAccountId?: string;
  /**
   * The partner type
   */
  PartnerType?: "Sidewalk";
  /**
   * The Sidewalk account credentials.
   */
  Sidewalk?: SidewalkAccountInfo;
  /**
   * The Sidewalk account credentials.
   */
  SidewalkResponse?: SidewalkAccountInfoWithFingerprint;
  /**
   * The Sidewalk account credentials.
   */
  SidewalkUpdate?: SidewalkUpdateAccount;
  /**
   * A list of key-value pairs that contain metadata for the destination.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::PartnerAccount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#aws-resource-iotwireless-partneraccount-return-values}
 */
export type IoTWirelessPartnerAccountAttributes = {
  /**
   * PartnerAccount arn. Returned after successful create.
   */
  Arn: string;
  /**
   * The fingerprint of the Sidewalk application server private key.
   */
  Fingerprint: string;
};
/**
 * Type definition for `AWS::IoTWireless::PartnerAccount.SidewalkAccountInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html}
 */
export type SidewalkAccountInfo = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `[a-fA-F0-9]{64}`
   */
  AppServerPrivateKey: string;
};
/**
 * Type definition for `AWS::IoTWireless::PartnerAccount.SidewalkAccountInfoWithFingerprint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html}
 */
export type SidewalkAccountInfoWithFingerprint = {
  /**
   * @maxLength `2048`
   */
  AmazonId?: string;
  Arn?: string;
  /**
   * @minLength `64`
   * @maxLength `64`
   * @pattern `[a-fA-F0-9]{64}`
   */
  Fingerprint?: string;
};
/**
 * Type definition for `AWS::IoTWireless::PartnerAccount.SidewalkUpdateAccount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html}
 */
export type SidewalkUpdateAccount = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `[a-fA-F0-9]{64}`
   */
  AppServerPrivateKey?: string;
};
/**
 * Type definition for `AWS::IoTWireless::PartnerAccount.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-partneraccount-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::PartnerAccount`.
 * Create and manage partner account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html}
 */
export class IoTWirelessPartnerAccount extends $Resource<
  "AWS::IoTWireless::PartnerAccount",
  IoTWirelessPartnerAccountProperties,
  IoTWirelessPartnerAccountAttributes
> {
  public static readonly Type = "AWS::IoTWireless::PartnerAccount";
  constructor(
    logicalId: string,
    properties: IoTWirelessPartnerAccountProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessPartnerAccount.Type, properties, options);
  }
}
