import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityLake::Subscriber
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html}
 */
export type SecurityLakeSubscriberProperties = {
  /**
   * The Amazon S3 or AWS Lake Formation access type.
   * @minLength `1`
   */
  AccessTypes: ("LAKEFORMATION" | "S3")[];
  /**
   * The ARN for the data lake.
   * @minLength `1`
   * @maxLength `256`
   */
  DataLakeArn: string;
  /**
   * The supported AWS services from which logs and events are collected.
   */
  Sources: Source[];
  /**
   * The description for your subscriber account in Security Lake.
   */
  SubscriberDescription?: string;
  /**
   * The AWS identity used to access your data.
   */
  SubscriberIdentity: {
    /**
     * The external ID used to establish trust relationship with the AWS identity.
     * @minLength `2`
     * @maxLength `1224`
     * @pattern `^[\w+=,.@:/-]*$`
     */
    ExternalId: string;
    /**
     * The AWS identity principal.
     * @pattern `^([0-9]{12}|[a-z0-9\.\-]*\.(amazonaws|amazon)\.com)$`
     */
    Principal: string;
  };
  /**
   * The name of your Security Lake subscriber account.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\\\w\s\-_:/,.@=+]*$`
   */
  SubscriberName: string;
  /**
   * An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SecurityLake::Subscriber`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html#aws-resource-securitylake-subscriber-return-values}
 */
export type SecurityLakeSubscriberAttributes = {
  ResourceShareArn: string;
  ResourceShareName: string;
  S3BucketArn: string;
  SubscriberArn: string;
  SubscriberRoleArn: string;
};
/**
 * Type definition for `AWS::SecurityLake::Subscriber.AwsLogSource`.
 * Amazon Security Lake supports log and event collection for natively supported AWS services.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-awslogsource.html}
 */
export type AwsLogSource = {
  /**
   * The name for a AWS source. This must be a Regionally unique value.
   */
  SourceName?: string;
  /**
   * The version for a AWS source. This must be a Regionally unique value.
   * @pattern `^(latest|[0-9]\.[0-9])$`
   */
  SourceVersion?: string;
};
/**
 * Type definition for `AWS::SecurityLake::Subscriber.CustomLogSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-customlogsource.html}
 */
export type CustomLogSource = {
  /**
   * The name for a third-party custom source. This must be a Regionally unique value.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\\\w\-_:/.]*$`
   */
  SourceName?: string;
  /**
   * The version for a third-party custom source. This must be a Regionally unique value.
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[A-Za-z0-9\-\.\_]*$`
   */
  SourceVersion?: string;
};
/**
 * Type definition for `AWS::SecurityLake::Subscriber.Source`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-source.html}
 */
export type Source = {
  /**
   * Amazon Security Lake supports log and event collection for natively supported AWS services.
   */
  AwsLogSource?: AwsLogSource;
  CustomLogSource?: CustomLogSource;
};
/**
 * Type definition for `AWS::SecurityLake::Subscriber.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securitylake-subscriber-tag.html}
 */
export type Tag = {
  /**
   * The name of the tag. This is a general label that acts as a category for a more specific tag value (value).
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value that is associated with the specified tag key (key). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SecurityLake::Subscriber
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscriber.html}
 */
export class SecurityLakeSubscriber extends $Resource<
  "AWS::SecurityLake::Subscriber",
  SecurityLakeSubscriberProperties,
  SecurityLakeSubscriberAttributes
> {
  public static readonly Type = "AWS::SecurityLake::Subscriber";
  constructor(
    logicalId: string,
    properties: SecurityLakeSubscriberProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityLakeSubscriber.Type, properties, options);
  }
}
