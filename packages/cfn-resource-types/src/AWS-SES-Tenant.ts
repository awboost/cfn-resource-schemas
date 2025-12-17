import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::Tenant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-tenant.html}
 */
export type SESTenantProperties = {
  /**
   * The list of resources to associate with the tenant.
   * @minLength `0`
   */
  ResourceAssociations?: ResourceAssociation[];
  /**
   * The tags (keys and values) associated with the tenant.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The name of the tenant.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w\-_]+$`
   */
  TenantName: string;
};
/**
 * Attribute type definition for `AWS::SES::Tenant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-tenant.html#aws-resource-ses-tenant-return-values}
 */
export type SESTenantAttributes = {
  /**
   * Amazon Resource Name (ARN) of the tenant.
   * @minLength `1`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SES::Tenant.ResourceAssociation`.
 * The resource to associate with the tenant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-tenant-resourceassociation.html}
 */
export type ResourceAssociation = {
  /**
   * The ARN of the resource to associate with the tenant
   * @minLength `1`
   */
  ResourceArn: string;
};
/**
 * Type definition for `AWS::SES::Tenant.Tag`.
 * An object that defines the tags (keys and values) that you want to associate with the tenant.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-tenant-tag.html}
 */
export type Tag = {
  /**
   * The key of the key-value tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value of the key-value tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SES::Tenant
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-tenant.html}
 */
export class SESTenant extends $Resource<
  "AWS::SES::Tenant",
  SESTenantProperties,
  SESTenantAttributes
> {
  public static readonly Type = "AWS::SES::Tenant";
  constructor(
    logicalId: string,
    properties: SESTenantProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESTenant.Type, properties, options);
  }
}
