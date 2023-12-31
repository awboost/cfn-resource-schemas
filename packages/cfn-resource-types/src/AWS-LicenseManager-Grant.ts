import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::LicenseManager::Grant`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html}
 */
export type LicenseManagerGrantProperties = {
  AllowedOperations?: string[];
  /**
   * Name for the created Grant.
   */
  GrantName?: string;
  /**
   * Home region for the created grant.
   */
  HomeRegion?: string;
  /**
   * License Arn for the grant.
   * @maxLength `2048`
   */
  LicenseArn?: string;
  Principals?: string[];
  Status?: string;
};
/**
 * Attribute type definition for `AWS::LicenseManager::Grant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#aws-resource-licensemanager-grant-return-values}
 */
export type LicenseManagerGrantAttributes = {
  /**
   * Arn of the grant.
   * @maxLength `2048`
   */
  GrantArn: string;
  /**
   * The version of the grant.
   */
  Version: string;
};
/**
 * Resource type definition for `AWS::LicenseManager::Grant`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html}
 */
export class LicenseManagerGrant extends $Resource<
  "AWS::LicenseManager::Grant",
  LicenseManagerGrantProperties,
  LicenseManagerGrantAttributes
> {
  public static readonly Type = "AWS::LicenseManager::Grant";
  constructor(
    logicalId: string,
    properties: LicenseManagerGrantProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LicenseManagerGrant.Type, properties, options);
  }
}
