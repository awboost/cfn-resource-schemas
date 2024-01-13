import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Signer::SigningProfile`.
 * A signing profile is a signing template that can be used to carry out a pre-defined signing job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html}
 */
export type SignerSigningProfileProperties = {
  /**
   * The ID of the target signing platform.
   */
  PlatformId: PlatformId;
  /**
   * Signature validity period of the profile.
   */
  SignatureValidityPeriod?: SignatureValidityPeriod;
  /**
   * A list of tags associated with the signing profile.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Signer::SigningProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#aws-resource-signer-signingprofile-return-values}
 */
export type SignerSigningProfileAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified signing profile.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  Arn: string;
  /**
   * A name for the signing profile. AWS CloudFormation generates a unique physical ID and uses that ID for the signing profile name.
   */
  ProfileName: string;
  /**
   * A version for the signing profile. AWS Signer generates a unique version for each profile of the same profile name.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  ProfileVersion: string;
  /**
   * The Amazon Resource Name (ARN) of the specified signing profile version.
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  ProfileVersionArn: string;
};
/**
 * Type definition for `AWS::Signer::SigningProfile.PlatformId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-platformid.html}
 */
export type PlatformId = "AWSLambda-SHA384-ECDSA" | "Notation-OCI-SHA384-ECDSA";
/**
 * Type definition for `AWS::Signer::SigningProfile.SignatureValidityPeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-signaturevalidityperiod.html}
 */
export type SignatureValidityPeriod = {
  Type?: "DAYS" | "MONTHS" | "YEARS";
  Value?: number;
};
/**
 * Type definition for `AWS::Signer::SigningProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-signer-signingprofile-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::Signer::SigningProfile`.
 * A signing profile is a signing template that can be used to carry out a pre-defined signing job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html}
 */
export class SignerSigningProfile extends $Resource<
  "AWS::Signer::SigningProfile",
  SignerSigningProfileProperties,
  SignerSigningProfileAttributes
> {
  public static readonly Type = "AWS::Signer::SigningProfile";
  constructor(
    logicalId: string,
    properties: SignerSigningProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SignerSigningProfile.Type, properties, options);
  }
}
