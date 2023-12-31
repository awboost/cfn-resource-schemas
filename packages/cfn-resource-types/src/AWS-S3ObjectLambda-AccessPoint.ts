import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon S3ObjectLambda resource type that you can use to add computation to S3 actions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html}
 */
export type S3ObjectLambdaAccessPointProperties = {
  /**
   * The name you want to assign to this Object lambda Access Point.
   * @minLength `3`
   * @maxLength `45`
   * @pattern `^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$`
   */
  Name?: string;
  /**
   * The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions
   */
  ObjectLambdaConfiguration: ObjectLambdaConfiguration;
};
/**
 * Attribute type definition for `AWS::S3ObjectLambda::AccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#aws-resource-s3objectlambda-accesspoint-return-values}
 */
export type S3ObjectLambdaAccessPointAttributes = {
  Alias: Alias;
  /**
   * @pattern `arn:[^:]+:s3-object-lambda:[^:]*:\d{12}:accesspoint/.*`
   */
  Arn: string;
  /**
   * The date and time when the Object lambda Access Point was created.
   */
  CreationDate: string;
  PolicyStatus: PolicyStatus;
  /**
   * The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration;
};
/**
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.Alias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html}
 */
export type Alias = {
  /**
   * The status of the Object Lambda alias.
   * @pattern `^[A-Z]*$`
   */
  Status?: string;
  /**
   * The value of the Object Lambda alias.
   * @pattern `^[a-z0-9\-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.AwsLambda`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html}
 */
export type AwsLambda = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  FunctionArn: string;
  FunctionPayload?: string;
};
/**
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.ObjectLambdaConfiguration`.
 * Configuration to be applied to this Object lambda Access Point. It specifies Supporting Access Point, Transformation Configurations. Customers can also set if they like to enable Cloudwatch metrics for accesses to this Object lambda Access Point. Default setting for Cloudwatch metrics is disable.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html}
 */
export type ObjectLambdaConfiguration = {
  AllowedFeatures?: string[];
  CloudWatchMetricsEnabled?: boolean;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  SupportingAccessPoint: string;
  TransformationConfigurations: TransformationConfiguration[];
};
/**
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.PolicyStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-policystatus.html}
 */
export type PolicyStatus = {
  /**
   * Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default.
   */
  IsPublic?: boolean;
};
/**
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.PublicAccessBlockConfiguration`.
 * The Public Access Block Configuration is used to block policies that would allow public access to this Object lambda Access Point. All public access to Object lambda Access Points are blocked by default, and any policy that would give public access to them will be also blocked. This behavior cannot be changed for Object lambda Access Points.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html}
 */
export type PublicAccessBlockConfiguration = {
  /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) to this object lambda access point. Setting this element to TRUE causes the following behavior:
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
 * Type definition for `AWS::S3ObjectLambda::AccessPoint.TransformationConfiguration`.
 * Configuration to define what content transformation will be applied on which S3 Action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html}
 */
export type TransformationConfiguration = {
  Actions: string[];
  ContentTransformation: {
    AwsLambda: AwsLambda;
  };
};
/**
 * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon S3ObjectLambda resource type that you can use to add computation to S3 actions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html}
 */
export class S3ObjectLambdaAccessPoint extends $Resource<
  "AWS::S3ObjectLambda::AccessPoint",
  S3ObjectLambdaAccessPointProperties,
  S3ObjectLambdaAccessPointAttributes
> {
  public static readonly Type = "AWS::S3ObjectLambda::AccessPoint";
  public static readonly AttributeNames = [
    "Alias" as const,
    "Arn" as const,
    "CreationDate" as const,
    "PolicyStatus" as const,
    "PublicAccessBlockConfiguration" as const,
  ];
  constructor(
    logicalId: string,
    properties: S3ObjectLambdaAccessPointProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3ObjectLambdaAccessPoint.Type,
      properties,
      S3ObjectLambdaAccessPoint.AttributeNames,
      options,
    );
  }
}
