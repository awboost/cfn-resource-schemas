import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::RolesAnywhere::TrustAnchor Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html}
 */
export type RolesAnywhereTrustAnchorProperties = {
  Enabled?: boolean;
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  NotificationSettings?: NotificationSetting[];
  Source: Source;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RolesAnywhere::TrustAnchor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html#aws-resource-rolesanywhere-trustanchor-return-values}
 */
export type RolesAnywhereTrustAnchorAttributes = {
  /**
   * @pattern `[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}`
   */
  TrustAnchorArn: string;
  /**
   * @pattern `[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}`
   */
  TrustAnchorId: string;
};
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.NotificationChannel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationchannel.html}
 */
export type NotificationChannel = "ALL";
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.NotificationEvent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationevent.html}
 */
export type NotificationEvent =
  | "CA_CERTIFICATE_EXPIRY"
  | "END_ENTITY_CERTIFICATE_EXPIRY";
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.NotificationSetting`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-notificationsetting.html}
 */
export type NotificationSetting = {
  Channel?: NotificationChannel;
  Enabled: boolean;
  Event: NotificationEvent;
  /**
   * @min `1`
   * @max `360`
   */
  Threshold?: number;
};
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.Source`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html}
 */
export type Source = {
  SourceData?: SourceData;
  SourceType?: TrustAnchorType;
};
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.SourceData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html}
 */
export type SourceData =
  | {
      X509CertificateData: string;
    }
  | {
      AcmPcaArn: string;
    };
/**
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-tag.html}
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
 * Type definition for `AWS::RolesAnywhere::TrustAnchor.TrustAnchorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-trustanchortype.html}
 */
export type TrustAnchorType =
  | "AWS_ACM_PCA"
  | "CERTIFICATE_BUNDLE"
  | "SELF_SIGNED_REPOSITORY";
/**
 * Definition of AWS::RolesAnywhere::TrustAnchor Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html}
 */
export class RolesAnywhereTrustAnchor extends $Resource<
  "AWS::RolesAnywhere::TrustAnchor",
  RolesAnywhereTrustAnchorProperties,
  RolesAnywhereTrustAnchorAttributes
> {
  public static readonly Type = "AWS::RolesAnywhere::TrustAnchor";
  constructor(
    logicalId: string,
    properties: RolesAnywhereTrustAnchorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RolesAnywhereTrustAnchor.Type, properties, options);
  }
}
