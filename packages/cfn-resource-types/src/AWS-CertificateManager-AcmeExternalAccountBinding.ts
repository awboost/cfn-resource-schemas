import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CertificateManager::AcmeExternalAccountBinding
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeexternalaccountbinding.html}
 */
export type CertificateManagerAcmeExternalAccountBindingProperties = {
  /**
   * The ARN of the ACME endpoint this binding is associated with.
   */
  AcmeEndpointArn: string;
  /**
   * The expiration configuration for the external account binding.
   */
  Expiration?: Expiration;
  /**
   * The IAM role ARN for cross-account access.
   */
  RoleArn: string;
  /**
   * Tags associated with the external account binding.
   * @maxLength `50`
   */
  Tags?: {
    /**
     * The key name of the tag.
     * @minLength `1`
     * @maxLength `128`
     */
    Key: string;
    /**
     * The value for the tag.
     * @minLength `0`
     * @maxLength `256`
     */
    Value: string;
  }[];
};
/**
 * Attribute type definition for `AWS::CertificateManager::AcmeExternalAccountBinding`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeexternalaccountbinding.html#aws-resource-certificatemanager-acmeexternalaccountbinding-return-values}
 */
export type CertificateManagerAcmeExternalAccountBindingAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the external account binding.
   */
  AcmeExternalAccountBindingArn: string;
};
/**
 * Type definition for `AWS::CertificateManager::AcmeExternalAccountBinding.Expiration`.
 * The expiration configuration for the external account binding.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-acmeexternalaccountbinding-expiration.html}
 */
export type Expiration = {
  /**
   * The time unit for the expiration value.
   */
  Type: string;
  /**
   * The expiration value.
   */
  Value: number;
};
/**
 * Resource Type definition for AWS::CertificateManager::AcmeExternalAccountBinding
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-acmeexternalaccountbinding.html}
 */
export class CertificateManagerAcmeExternalAccountBinding extends $Resource<
  "AWS::CertificateManager::AcmeExternalAccountBinding",
  CertificateManagerAcmeExternalAccountBindingProperties,
  CertificateManagerAcmeExternalAccountBindingAttributes
> {
  public static readonly Type =
    "AWS::CertificateManager::AcmeExternalAccountBinding";
  constructor(
    logicalId: string,
    properties: CertificateManagerAcmeExternalAccountBindingProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CertificateManagerAcmeExternalAccountBinding.Type,
      properties,
      options,
    );
  }
}
