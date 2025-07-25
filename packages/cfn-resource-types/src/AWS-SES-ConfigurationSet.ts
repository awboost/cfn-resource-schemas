import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::SES::ConfigurationSet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html}
 */
export type SESConfigurationSetProperties = {
  /**
   * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
   */
  DeliveryOptions?: DeliveryOptions;
  /**
   * The name of the configuration set.
   * @pattern `^[a-zA-Z0-9_-]{1,64}$`
   */
  Name?: string;
  /**
   * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
   */
  ReputationOptions?: ReputationOptions;
  /**
   * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
   */
  SendingOptions?: SendingOptions;
  /**
   * An object that contains information about the suppression list preferences for your account.
   */
  SuppressionOptions?: SuppressionOptions;
  /**
   * The tags (keys and values) associated with the contact list.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * An object that defines the open and click tracking options for emails that you send using the configuration set.
   */
  TrackingOptions?: TrackingOptions;
  /**
   * An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.
   */
  VdmOptions?: VdmOptions;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.DashboardOptions`.
 * Preferences regarding the Dashboard feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html}
 */
export type DashboardOptions = {
  /**
   * Whether emails sent with this configuration set have engagement tracking enabled.
   * @pattern `ENABLED|DISABLED`
   */
  EngagementMetrics: string;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.DeliveryOptions`.
 * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html}
 */
export type DeliveryOptions = {
  /**
   * Specifies the maximum time until which SES will retry sending emails
   * @min `300`
   * @max `50400`
   */
  MaxDeliverySeconds?: number;
  /**
   * The name of the dedicated IP pool to associate with the configuration set.
   */
  SendingPoolName?: string;
  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.
   * @pattern `REQUIRE|OPTIONAL`
   */
  TlsPolicy?: string;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.GuardianOptions`.
 * Preferences regarding the Guardian feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html}
 */
export type GuardianOptions = {
  /**
   * Whether emails sent with this configuration set have optimized delivery algorithm enabled.
   * @pattern `ENABLED|DISABLED`
   */
  OptimizedSharedDelivery: string;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.ReputationOptions`.
 * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html}
 */
export type ReputationOptions = {
  /**
   * If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.
   */
  ReputationMetricsEnabled?: boolean;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.SendingOptions`.
 * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html}
 */
export type SendingOptions = {
  SendingEnabled?: boolean;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.SuppressionOptions`.
 * An object that contains information about the suppression list preferences for your account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html}
 */
export type SuppressionOptions = {
  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
   */
  SuppressedReasons?: string[];
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-tag.html}
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
 * Type definition for `AWS::SES::ConfigurationSet.TrackingOptions`.
 * An object that defines the open and click tracking options for emails that you send using the configuration set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html}
 */
export type TrackingOptions = {
  /**
   * The domain to use for tracking open and click events.
   */
  CustomRedirectDomain?: string;
  /**
   * The https policy to use for tracking open and click events.
   * @pattern `REQUIRE|REQUIRE_OPEN_ONLY|OPTIONAL`
   */
  HttpsPolicy?: string;
};
/**
 * Type definition for `AWS::SES::ConfigurationSet.VdmOptions`.
 * An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html}
 */
export type VdmOptions = {
  /**
   * Preferences regarding the Dashboard feature.
   */
  DashboardOptions?: DashboardOptions;
  /**
   * Preferences regarding the Guardian feature.
   */
  GuardianOptions?: GuardianOptions;
};
/**
 * Resource schema for AWS::SES::ConfigurationSet.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html}
 */
export class SESConfigurationSet extends $Resource<
  "AWS::SES::ConfigurationSet",
  SESConfigurationSetProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SES::ConfigurationSet";
  constructor(
    logicalId: string,
    properties: SESConfigurationSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESConfigurationSet.Type, properties, options);
  }
}
