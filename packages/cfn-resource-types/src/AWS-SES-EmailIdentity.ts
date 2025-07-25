import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::EmailIdentity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html}
 */
export type SESEmailIdentityProperties = {
  /**
   * Used to associate a configuration set with an email identity.
   */
  ConfigurationSetAttributes?: ConfigurationSetAttributes;
  /**
   * Used to enable or disable DKIM authentication for an email identity.
   */
  DkimAttributes?: DkimAttributes;
  /**
   * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.
   */
  DkimSigningAttributes?: DkimSigningAttributes;
  /**
   * The email address or domain to verify.
   */
  EmailIdentity: string;
  /**
   * Used to enable or disable feedback forwarding for an identity.
   */
  FeedbackAttributes?: FeedbackAttributes;
  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity.
   */
  MailFromAttributes?: MailFromAttributes;
  /**
   * The tags (keys and values) associated with the email identity.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::EmailIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#aws-resource-ses-emailidentity-return-values}
 */
export type SESEmailIdentityAttributes = {
  DkimDNSTokenName1: string;
  DkimDNSTokenName2: string;
  DkimDNSTokenName3: string;
  DkimDNSTokenValue1: string;
  DkimDNSTokenValue2: string;
  DkimDNSTokenValue3: string;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.ConfigurationSetAttributes`.
 * Used to associate a configuration set with an email identity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html}
 */
export type ConfigurationSetAttributes = {
  /**
   * The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
   */
  ConfigurationSetName?: string;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.DkimAttributes`.
 * Used to enable or disable DKIM authentication for an email identity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html}
 */
export type DkimAttributes = {
  /**
   * Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.
   */
  SigningEnabled?: boolean;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.DkimSigningAttributes`.
 * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html}
 */
export type DkimSigningAttributes = {
  /**
   * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
   */
  DomainSigningPrivateKey?: string;
  /**
   * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
   */
  DomainSigningSelector?: string;
  /**
   * [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
   * @pattern `RSA_1024_BIT|RSA_2048_BIT`
   */
  NextSigningKeyLength?: string;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.FeedbackAttributes`.
 * Used to enable or disable feedback forwarding for an identity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html}
 */
export type FeedbackAttributes = {
  /**
   * If the value is true, you receive email notifications when bounce or complaint events occur
   */
  EmailForwardingEnabled?: boolean;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.MailFromAttributes`.
 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html}
 */
export type MailFromAttributes = {
  /**
   * The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.
   * @pattern `USE_DEFAULT_VALUE|REJECT_MESSAGE`
   */
  BehaviorOnMxFailure?: string;
  /**
   * The custom MAIL FROM domain that you want the verified identity to use
   */
  MailFromDomain?: string;
};
/**
 * Type definition for `AWS::SES::EmailIdentity.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-tag.html}
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
 * Resource Type definition for AWS::SES::EmailIdentity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html}
 */
export class SESEmailIdentity extends $Resource<
  "AWS::SES::EmailIdentity",
  SESEmailIdentityProperties,
  SESEmailIdentityAttributes
> {
  public static readonly Type = "AWS::SES::EmailIdentity";
  constructor(
    logicalId: string,
    properties: SESEmailIdentityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESEmailIdentity.Type, properties, options);
  }
}
