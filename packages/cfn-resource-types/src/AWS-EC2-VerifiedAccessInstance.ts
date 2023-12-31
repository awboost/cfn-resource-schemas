import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::EC2::VerifiedAccessInstance resource creates an AWS EC2 Verified Access Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html}
 */
export type EC2VerifiedAccessInstanceProperties = {
  /**
   * A description for the AWS Verified Access instance.
   */
  Description?: string;
  /**
   * Indicates whether FIPS is enabled
   */
  FipsEnabled?: boolean;
  /**
   * The configuration options for AWS Verified Access instances.
   */
  LoggingConfigurations?: VerifiedAccessLogs;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The IDs of the AWS Verified Access trust providers.
   */
  VerifiedAccessTrustProviderIds?: string[];
  /**
   * AWS Verified Access trust providers.
   */
  VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[];
};
/**
 * Attribute type definition for `AWS::EC2::VerifiedAccessInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#aws-resource-ec2-verifiedaccessinstance-return-values}
 */
export type EC2VerifiedAccessInstanceAttributes = {
  /**
   * Time this Verified Access Instance was created.
   */
  CreationTime: string;
  /**
   * Time this Verified Access Instance was last updated.
   */
  LastUpdatedTime: string;
  /**
   * The ID of the AWS Verified Access instance.
   */
  VerifiedAccessInstanceId: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessInstance.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessInstance.VerifiedAccessLogs`.
 * The configuration options for AWS Verified Access instances.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-verifiedaccesslogs.html}
 */
export type VerifiedAccessLogs = {
  /**
   * Sends Verified Access logs to CloudWatch Logs.
   */
  CloudWatchLogs?: {
    /**
     * Indicates whether logging is enabled.
     */
    Enabled?: boolean;
    /**
     * The ID of the CloudWatch Logs log group.
     */
    LogGroup?: string;
  };
  /**
   * Include claims from trust providers in Verified Access logs.
   */
  IncludeTrustContext?: boolean;
  /**
   * Sends Verified Access logs to Kinesis.
   */
  KinesisDataFirehose?: {
    /**
     * The ID of the delivery stream.
     */
    DeliveryStream?: string;
    /**
     * Indicates whether logging is enabled.
     */
    Enabled?: boolean;
  };
  /**
   * Select log version for Verified Access logs.
   */
  LogVersion?: string;
  /**
   * Sends Verified Access logs to Amazon S3.
   */
  S3?: {
    /**
     * The bucket name.
     */
    BucketName?: string;
    /**
     * The ID of the AWS account that owns the Amazon S3 bucket.
     */
    BucketOwner?: string;
    /**
     * Indicates whether logging is enabled.
     */
    Enabled?: boolean;
    /**
     * The bucket prefix.
     */
    Prefix?: string;
  };
};
/**
 * Type definition for `AWS::EC2::VerifiedAccessInstance.VerifiedAccessTrustProvider`.
 * A Verified Access Trust Provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-verifiedaccessinstance-verifiedaccesstrustprovider.html}
 */
export type VerifiedAccessTrustProvider = {
  /**
   * The description of trust provider.
   */
  Description?: string;
  /**
   * The type of device-based trust provider.
   */
  DeviceTrustProviderType?: string;
  /**
   * The type of trust provider (user- or device-based).
   */
  TrustProviderType?: string;
  /**
   * The type of user-based trust provider.
   */
  UserTrustProviderType?: string;
  /**
   * The ID of the trust provider.
   */
  VerifiedAccessTrustProviderId?: string;
};
/**
 * The AWS::EC2::VerifiedAccessInstance resource creates an AWS EC2 Verified Access Instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html}
 */
export class EC2VerifiedAccessInstance extends $Resource<
  "AWS::EC2::VerifiedAccessInstance",
  EC2VerifiedAccessInstanceProperties,
  EC2VerifiedAccessInstanceAttributes
> {
  public static readonly Type = "AWS::EC2::VerifiedAccessInstance";
  public static readonly AttributeNames = [
    "CreationTime" as const,
    "LastUpdatedTime" as const,
    "VerifiedAccessInstanceId" as const,
  ];
  constructor(
    logicalId: string,
    properties: EC2VerifiedAccessInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VerifiedAccessInstance.Type,
      properties,
      EC2VerifiedAccessInstance.AttributeNames,
      options,
    );
  }
}
