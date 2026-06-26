import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Chime::AppInstanceUser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstanceuser.html}
 */
export type ChimeAppInstanceUserProperties = {
  /**
   * @minLength `5`
   * @maxLength `1600`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  AppInstanceArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9]([A-Za-z0-9\:\-\_\.\@]{0,62}[A-Za-z0-9])?$`
   */
  AppInstanceUserId: string;
  ExpirationSettings?: ExpirationSettings;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `.*`
   */
  Metadata?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*$`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Chime::AppInstanceUser`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstanceuser.html#aws-resource-chime-appinstanceuser-return-values}
 */
export type ChimeAppInstanceUserAttributes = {
  /**
   * @minLength `5`
   * @maxLength `1600`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  AppInstanceUserArn: string;
};
/**
 * Type definition for `AWS::Chime::AppInstanceUser.ExpirationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstanceuser-expirationsettings.html}
 */
export type ExpirationSettings = {
  ExpirationCriterion: "CREATED_TIMESTAMP";
  /**
   * @min `1`
   * @max `5475`
   */
  ExpirationDays: number;
};
/**
 * Type definition for `AWS::Chime::AppInstanceUser.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chime-appinstanceuser-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Chime::AppInstanceUser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chime-appinstanceuser.html}
 */
export class ChimeAppInstanceUser extends $Resource<
  "AWS::Chime::AppInstanceUser",
  ChimeAppInstanceUserProperties,
  ChimeAppInstanceUserAttributes
> {
  public static readonly Type = "AWS::Chime::AppInstanceUser";
  constructor(
    logicalId: string,
    properties: ChimeAppInstanceUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ChimeAppInstanceUser.Type, properties, options);
  }
}
