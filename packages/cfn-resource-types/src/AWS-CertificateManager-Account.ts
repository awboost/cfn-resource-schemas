import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::CertificateManager::Account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html}
 */
export type CertificateManagerAccountProperties = {
  ExpiryEventsConfiguration: ExpiryEventsConfiguration;
};
/**
 * Attribute type definition for `AWS::CertificateManager::Account`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html#aws-resource-certificatemanager-account-return-values}
 */
export type CertificateManagerAccountAttributes = {
  AccountId: string;
};
/**
 * Type definition for `AWS::CertificateManager::Account.ExpiryEventsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-account-expiryeventsconfiguration.html}
 */
export type ExpiryEventsConfiguration = {
  /**
   * @min `1`
   * @max `45`
   */
  DaysBeforeExpiry?: number;
};
/**
 * Resource schema for AWS::CertificateManager::Account.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-account.html}
 */
export class CertificateManagerAccount extends $Resource<
  "AWS::CertificateManager::Account",
  CertificateManagerAccountProperties,
  CertificateManagerAccountAttributes
> {
  public static readonly Type = "AWS::CertificateManager::Account";
  constructor(
    logicalId: string,
    properties: CertificateManagerAccountProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CertificateManagerAccount.Type, properties, options);
  }
}
