import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::VoiceID::Domain resource specifies an Amazon VoiceID Domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html}
 */
export type VoiceIDDomainProperties = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  Name: string;
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VoiceID::Domain`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#aws-resource-voiceid-domain-return-values}
 */
export type VoiceIDDomainAttributes = {
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^[a-zA-Z0-9]{22}$`
   */
  DomainId: string;
};
/**
 * Type definition for `AWS::VoiceID::Domain.ServerSideEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-voiceid-domain-serversideencryptionconfiguration.html}
 */
export type ServerSideEncryptionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId: string;
};
/**
 * Type definition for `AWS::VoiceID::Domain.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-voiceid-domain-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * The AWS::VoiceID::Domain resource specifies an Amazon VoiceID Domain.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html}
 */
export class VoiceIDDomain extends $Resource<
  "AWS::VoiceID::Domain",
  VoiceIDDomainProperties,
  VoiceIDDomainAttributes
> {
  public static readonly Type = "AWS::VoiceID::Domain";
  constructor(
    logicalId: string,
    properties: VoiceIDDomainProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VoiceIDDomain.Type, properties, options);
  }
}
