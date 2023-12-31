import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::LicenseManager::License
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html}
 */
export type LicenseManagerLicenseProperties = {
  /**
   * Beneficiary of the license.
   */
  Beneficiary?: string;
  ConsumptionConfiguration: ConsumptionConfiguration;
  Entitlements: Entitlement[];
  /**
   * Home region for the created license.
   */
  HomeRegion: string;
  Issuer: IssuerData;
  LicenseMetadata?: Metadata[];
  /**
   * Name for the created license.
   */
  LicenseName: string;
  /**
   * Product name for the created license.
   */
  ProductName: string;
  /**
   * ProductSKU of the license.
   * @minLength `1`
   * @maxLength `1024`
   */
  ProductSKU?: string;
  Status?: string;
  Validity: ValidityDateFormat;
};
/**
 * Attribute type definition for `AWS::LicenseManager::License`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html#aws-resource-licensemanager-license-return-values}
 */
export type LicenseManagerLicenseAttributes = {
  /**
   * Amazon Resource Name is a unique name for each resource.
   * @maxLength `2048`
   */
  LicenseArn: string;
  /**
   * The version of the license.
   */
  Version: string;
};
/**
 * Type definition for `AWS::LicenseManager::License.BorrowConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-borrowconfiguration.html}
 */
export type BorrowConfiguration = {
  AllowEarlyCheckIn: boolean;
  MaxTimeToLiveInMinutes: number;
};
/**
 * Type definition for `AWS::LicenseManager::License.ConsumptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-consumptionconfiguration.html}
 */
export type ConsumptionConfiguration = {
  BorrowConfiguration?: BorrowConfiguration;
  ProvisionalConfiguration?: ProvisionalConfiguration;
  RenewType?: string;
};
/**
 * Type definition for `AWS::LicenseManager::License.Entitlement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-entitlement.html}
 */
export type Entitlement = {
  AllowCheckIn?: boolean;
  MaxCount?: number;
  Name: string;
  Overage?: boolean;
  Unit: string;
  Value?: string;
};
/**
 * Type definition for `AWS::LicenseManager::License.IssuerData`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-issuerdata.html}
 */
export type IssuerData = {
  Name: string;
  SignKey?: string;
};
/**
 * Type definition for `AWS::LicenseManager::License.Metadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-metadata.html}
 */
export type Metadata = {
  Name: string;
  Value: string;
};
/**
 * Type definition for `AWS::LicenseManager::License.ProvisionalConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-provisionalconfiguration.html}
 */
export type ProvisionalConfiguration = {
  MaxTimeToLiveInMinutes: number;
};
/**
 * Type definition for `AWS::LicenseManager::License.ValidityDateFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-license-validitydateformat.html}
 */
export type ValidityDateFormat = {
  /**
   * Validity begin date for the license.
   */
  Begin: string;
  /**
   * Validity begin date for the license.
   */
  End: string;
};
/**
 * Resource Type definition for AWS::LicenseManager::License
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-license.html}
 */
export class LicenseManagerLicense extends $Resource<
  "AWS::LicenseManager::License",
  LicenseManagerLicenseProperties,
  LicenseManagerLicenseAttributes
> {
  public static readonly Type = "AWS::LicenseManager::License";
  constructor(
    logicalId: string,
    properties: LicenseManagerLicenseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LicenseManagerLicense.Type, properties, options);
  }
}
