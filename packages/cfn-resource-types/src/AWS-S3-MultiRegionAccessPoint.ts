import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that dynamically routes S3 requests to easily satisfy geographic compliance requirements based on customer-defined routing policies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html}
 */
export type S3MultiRegionAccessPointProperties = {
  /**
   * The name you want to assign to this Multi Region Access Point.
   * @minLength `3`
   * @maxLength `50`
   * @pattern `^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$`
   */
  Name?: string;
  /**
   * The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  /**
   * The list of buckets that you want to associate this Multi Region Access Point with.
   * @minLength `1`
   */
  Regions: Region[];
};
/**
 * Attribute type definition for `AWS::S3::MultiRegionAccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#aws-resource-s3-multiregionaccesspoint-return-values}
 */
export type S3MultiRegionAccessPointAttributes = {
  /**
   * The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point
   */
  Alias: string;
  /**
   * The timestamp of the when the Multi Region Access Point is created
   */
  CreatedAt: string;
};
/**
 * Type definition for `AWS::S3::MultiRegionAccessPoint.PublicAccessBlockConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html}
 */
export type PublicAccessBlockConfiguration = {
  /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
    - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
     - PUT Object calls fail if the request includes a public ACL.
    . - PUT Bucket calls fail if the request includes a public ACL.
    Enabling this setting doesn't affect existing policies or ACLs.
     */
  BlockPublicAcls?: boolean;
  /**
   * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
   */
  BlockPublicPolicy?: boolean;
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   */
  IgnorePublicAcls?: boolean;
  /**
     * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
    Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
  RestrictPublicBuckets?: boolean;
};
/**
 * Type definition for `AWS::S3::MultiRegionAccessPoint.Region`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html}
 */
export type Region = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  BucketAccountId?: string;
};
/**
 * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that dynamically routes S3 requests to easily satisfy geographic compliance requirements based on customer-defined routing policies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html}
 */
export class S3MultiRegionAccessPoint extends $Resource<
  "AWS::S3::MultiRegionAccessPoint",
  S3MultiRegionAccessPointProperties,
  S3MultiRegionAccessPointAttributes
> {
  public static readonly Type = "AWS::S3::MultiRegionAccessPoint";
  public static readonly AttributeNames = [
    "Alias" as const,
    "CreatedAt" as const,
  ];
  constructor(
    logicalId: string,
    properties: S3MultiRegionAccessPointProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3MultiRegionAccessPoint.Type,
      properties,
      S3MultiRegionAccessPoint.AttributeNames,
      options,
    );
  }
}
