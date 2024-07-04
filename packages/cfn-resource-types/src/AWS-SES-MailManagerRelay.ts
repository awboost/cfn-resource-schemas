import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerRelay Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html}
 */
export type SESMailManagerRelayProperties = {
  Authentication: RelayAuthentication;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9-_]+$`
   */
  RelayName?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9-\.]+$`
   */
  ServerName: string;
  /**
   * @min `1`
   * @max `65535`
   */
  ServerPort: number;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerRelay`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#aws-resource-ses-mailmanagerrelay-return-values}
 */
export type SESMailManagerRelayAttributes = {
  RelayArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  RelayId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRelay.NoAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-noauthentication.html}
 */
export type NoAuthentication = Record<string, any>;
/**
 * Type definition for `AWS::SES::MailManagerRelay.RelayAuthentication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-relayauthentication.html}
 */
export type RelayAuthentication =
  | {
      /**
       * @pattern `^arn:(aws|aws-cn|aws-us-gov):secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=,.@-]+$`
       */
      SecretArn: string;
    }
  | {
      NoAuthentication: NoAuthentication;
    };
/**
 * Type definition for `AWS::SES::MailManagerRelay.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-tag.html}
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
 * Definition of AWS::SES::MailManagerRelay Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html}
 */
export class SESMailManagerRelay extends $Resource<
  "AWS::SES::MailManagerRelay",
  SESMailManagerRelayProperties,
  SESMailManagerRelayAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerRelay";
  constructor(
    logicalId: string,
    properties: SESMailManagerRelayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerRelay.Type, properties, options);
  }
}
