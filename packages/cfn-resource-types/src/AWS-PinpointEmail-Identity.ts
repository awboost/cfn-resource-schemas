import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::PinpointEmail::Identity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html}
 */
export type PinpointEmailIdentityProperties = {
  DkimSigningEnabled?: boolean;
  FeedbackForwardingEnabled?: boolean;
  MailFromAttributes?: MailFromAttributes;
  Name: string;
  Tags?: Tags[];
};
/**
 * Attribute type definition for `AWS::PinpointEmail::Identity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#aws-resource-pinpointemail-identity-return-values}
 */
export type PinpointEmailIdentityAttributes = {
  Id: string;
  IdentityDNSRecordName1: string;
  IdentityDNSRecordName2: string;
  IdentityDNSRecordName3: string;
  IdentityDNSRecordValue1: string;
  IdentityDNSRecordValue2: string;
  IdentityDNSRecordValue3: string;
};
/**
 * Type definition for `AWS::PinpointEmail::Identity.MailFromAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html}
 */
export type MailFromAttributes = {
  BehaviorOnMxFailure?: string;
  MailFromDomain?: string;
};
/**
 * Type definition for `AWS::PinpointEmail::Identity.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Resource Type definition for AWS::PinpointEmail::Identity
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html}
 */
export class PinpointEmailIdentity extends $Resource<
  "AWS::PinpointEmail::Identity",
  PinpointEmailIdentityProperties,
  PinpointEmailIdentityAttributes
> {
  public static readonly Type = "AWS::PinpointEmail::Identity";
  public static readonly AttributeNames = [
    "Id" as const,
    "IdentityDNSRecordName1" as const,
    "IdentityDNSRecordName2" as const,
    "IdentityDNSRecordName3" as const,
    "IdentityDNSRecordValue1" as const,
    "IdentityDNSRecordValue2" as const,
    "IdentityDNSRecordValue3" as const,
  ];
  constructor(
    logicalId: string,
    properties: PinpointEmailIdentityProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointEmailIdentity.Type,
      properties,
      PinpointEmailIdentity.AttributeNames,
      options,
    );
  }
}
