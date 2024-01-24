import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSM::ResourceDataSync
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html}
 */
export type SSMResourceDataSyncProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  BucketName?: string;
  /**
   * @minLength `0`
   * @maxLength `64`
   */
  BucketPrefix?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  BucketRegion?: string;
  /**
   * @minLength `0`
   * @maxLength `512`
   */
  KMSKeyArn?: string;
  S3Destination?: S3Destination;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  SyncFormat?: string;
  SyncSource?: SyncSource;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  SyncType?: string;
};
/**
 * Attribute type definition for `AWS::SSM::ResourceDataSync`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html#aws-resource-ssm-resourcedatasync-return-values}
 */
export type SSMResourceDataSyncAttributes = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  SyncName: string;
};
/**
 * Type definition for `AWS::SSM::ResourceDataSync.AwsOrganizationsSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-awsorganizationssource.html}
 */
export type AwsOrganizationsSource = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  OrganizationSourceType: string;
  OrganizationalUnits?: string[];
};
/**
 * Type definition for `AWS::SSM::ResourceDataSync.S3Destination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-s3destination.html}
 */
export type S3Destination = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  BucketName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  BucketPrefix?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  BucketRegion: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  KMSKeyArn?: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  SyncFormat: string;
};
/**
 * Type definition for `AWS::SSM::ResourceDataSync.SyncSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-resourcedatasync-syncsource.html}
 */
export type SyncSource = {
  AwsOrganizationsSource?: AwsOrganizationsSource;
  IncludeFutureRegions?: boolean;
  SourceRegions: string[];
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  SourceType: string;
};
/**
 * Resource Type definition for AWS::SSM::ResourceDataSync
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcedatasync.html}
 */
export class SSMResourceDataSync extends $Resource<
  "AWS::SSM::ResourceDataSync",
  SSMResourceDataSyncProperties,
  SSMResourceDataSyncAttributes
> {
  public static readonly Type = "AWS::SSM::ResourceDataSync";
  constructor(
    logicalId: string,
    properties: SSMResourceDataSyncProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMResourceDataSync.Type, properties, options);
  }
}
