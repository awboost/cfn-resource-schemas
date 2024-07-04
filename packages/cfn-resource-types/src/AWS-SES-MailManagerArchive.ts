import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerArchive Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html}
 */
export type SESMailManagerArchiveProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]$`
   */
  ArchiveName?: string;
  /**
   * @pattern `^arn:aws(|-cn|-us-gov):kms:[a-z0-9-]{1,20}:[0-9]{12}:(key|alias)/.+$`
   */
  KmsKeyArn?: string;
  Retention?: ArchiveRetention;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerArchive`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#aws-resource-ses-mailmanagerarchive-return-values}
 */
export type SESMailManagerArchiveAttributes = {
  ArchiveArn: string;
  /**
   * @minLength `1`
   * @maxLength `66`
   */
  ArchiveId: string;
  ArchiveState: ArchiveState;
};
/**
 * Type definition for `AWS::SES::MailManagerArchive.ArchiveRetention`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-archiveretention.html}
 */
export type ArchiveRetention = {
  RetentionPeriod: RetentionPeriod;
};
/**
 * Type definition for `AWS::SES::MailManagerArchive.ArchiveState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-archivestate.html}
 */
export type ArchiveState = "ACTIVE" | "PENDING_DELETION";
/**
 * Type definition for `AWS::SES::MailManagerArchive.RetentionPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-retentionperiod.html}
 */
export type RetentionPeriod =
  | "THREE_MONTHS"
  | "SIX_MONTHS"
  | "NINE_MONTHS"
  | "ONE_YEAR"
  | "EIGHTEEN_MONTHS"
  | "TWO_YEARS"
  | "THIRTY_MONTHS"
  | "THREE_YEARS"
  | "FOUR_YEARS"
  | "FIVE_YEARS"
  | "SIX_YEARS"
  | "SEVEN_YEARS"
  | "EIGHT_YEARS"
  | "NINE_YEARS"
  | "TEN_YEARS"
  | "PERMANENT";
/**
 * Type definition for `AWS::SES::MailManagerArchive.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::SES::MailManagerArchive Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html}
 */
export class SESMailManagerArchive extends $Resource<
  "AWS::SES::MailManagerArchive",
  SESMailManagerArchiveProperties,
  SESMailManagerArchiveAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerArchive";
  constructor(
    logicalId: string,
    properties: SESMailManagerArchiveProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerArchive.Type, properties, options);
  }
}
