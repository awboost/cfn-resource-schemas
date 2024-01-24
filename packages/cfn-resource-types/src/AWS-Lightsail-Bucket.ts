import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html}
 */
export type LightsailBucketProperties = {
  /**
   * An object that sets the public accessibility of objects in the specified bucket.
   */
  AccessRules?: AccessRules;
  /**
   * The name for the bucket.
   * @minLength `3`
   * @maxLength `54`
   * @pattern `^[a-z0-9][a-z0-9-]{1,52}[a-z0-9]$`
   */
  BucketName: string;
  /**
   * The ID of the bundle to use for the bucket.
   */
  BundleId: string;
  /**
   * Specifies whether to enable or disable versioning of objects in the bucket.
   */
  ObjectVersioning?: boolean;
  /**
   * An array of strings to specify the AWS account IDs that can access the bucket.
   */
  ReadOnlyAccessAccounts?: string[];
  /**
   * The names of the Lightsail resources for which to set bucket access.
   */
  ResourcesReceivingAccess?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Bucket`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html#aws-resource-lightsail-bucket-return-values}
 */
export type LightsailBucketAttributes = {
  /**
   * Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle.
   */
  AbleToUpdateBundle: boolean;
  BucketArn: string;
  /**
   * The URL of the bucket.
   */
  Url: string;
};
/**
 * Type definition for `AWS::Lightsail::Bucket.AccessRules`.
 * An object that sets the public accessibility of objects in the specified bucket.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html}
 */
export type AccessRules = {
  /**
   * A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.
   */
  AllowPublicOverrides?: boolean;
  /**
   * Specifies the anonymous access to all objects in a bucket.
   */
  GetObject?: string;
};
/**
 * Type definition for `AWS::Lightsail::Bucket.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Bucket
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html}
 */
export class LightsailBucket extends $Resource<
  "AWS::Lightsail::Bucket",
  LightsailBucketProperties,
  LightsailBucketAttributes
> {
  public static readonly Type = "AWS::Lightsail::Bucket";
  constructor(
    logicalId: string,
    properties: LightsailBucketProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailBucket.Type, properties, options);
  }
}
