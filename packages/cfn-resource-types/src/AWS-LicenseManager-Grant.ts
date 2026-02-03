import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
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
  /**
   * A list of tags to attach.
   */
  Tags?: Tag[];
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
 * Type definition for `AWS::LicenseManager::Grant.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-licensemanager-grant-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   */
  Key: string;
  /**
   * The value for the tag.
   */
  Value: string;
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
