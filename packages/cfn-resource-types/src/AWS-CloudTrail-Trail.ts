import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudTrail::Trail`.
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html}
 */
export type CloudTrailTrailProperties = {
  /**
   * The advanced event selectors that were used to select events for the data store.
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
  /**
   * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.
   */
  CloudWatchLogsLogGroupArn?: string;
  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
   */
  CloudWatchLogsRoleArn?: string;
  /**
   * Specifies whether log file validation is enabled. The default is false.
   */
  EnableLogFileValidation?: boolean;
  /**
   * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.
   * @maxLength `5`
   */
  EventSelectors?: EventSelector[];
  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files.
   */
  IncludeGlobalServiceEvents?: boolean;
  /**
   * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.
   */
  InsightSelectors?: InsightSelector[];
  /**
   * Whether the CloudTrail is currently logging AWS API calls.
   */
  IsLogging: boolean;
  /**
   * Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.
   */
  IsMultiRegionTrail?: boolean;
  /**
   * Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.
   */
  IsOrganizationTrail?: boolean;
  /**
   * Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   */
  KMSKeyId?: string;
  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.
   */
  S3BucketName: string;
  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.
   * @maxLength `200`
   */
  S3KeyPrefix?: string;
  /**
   * Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
   * @maxLength `256`
   */
  SnsTopicName?: string;
  Tags?: Tag[];
  /**
   * @minLength `3`
   * @maxLength `128`
   * @pattern `(^[a-zA-Z0-9]$)|(^[a-zA-Z0-9]([a-zA-Z0-9\._-])*[a-zA-Z0-9]$)`
   */
  TrailName?: string;
};
/**
 * Attribute type definition for `AWS::CloudTrail::Trail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#aws-resource-cloudtrail-trail-return-values}
 */
export type CloudTrailTrailAttributes = {
  Arn: string;
  SnsTopicArn: string;
};
/**
 * Type definition for `AWS::CloudTrail::Trail.AdvancedEventSelector`.
 * Advanced event selectors let you create fine-grained selectors for the following AWS CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedeventselector.html}
 */
export type AdvancedEventSelector = {
  /**
   * Contains all selector statements in an advanced event selector.
   * @minLength `1`
   */
  FieldSelectors: AdvancedFieldSelector[];
  /**
   * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
   * @minLength `1`
   * @maxLength `1000`
   */
  Name?: string;
};
/**
 * Type definition for `AWS::CloudTrail::Trail.AdvancedFieldSelector`.
 * A single selector statement in an advanced event selector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-advancedfieldselector.html}
 */
export type AdvancedFieldSelector = {
  /**
   * An operator that includes events that match the last few characters of the event record field specified as the value of Field.
   * @minLength `1`
   */
  EndsWith?: string[];
  /**
   * An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.
   * @minLength `1`
   */
  Equals?: string[];
  /**
   * A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `([\w|\d|\.|_]+)`
   */
  Field: string;
  /**
   * An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
   * @minLength `1`
   */
  NotEndsWith?: string[];
  /**
   * An operator that excludes events that match the exact value of the event record field specified as the value of Field.
   * @minLength `1`
   */
  NotEquals?: string[];
  /**
   * An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
   * @minLength `1`
   */
  NotStartsWith?: string[];
  /**
   * An operator that includes events that match the first few characters of the event record field specified as the value of Field.
   * @minLength `1`
   */
  StartsWith?: string[];
};
/**
 * Type definition for `AWS::CloudTrail::Trail.DataResource`.
 * CloudTrail supports data event logging for Amazon S3 objects and AWS Lambda functions. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html}
 */
export type DataResource = {
  /**
   * The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.
   */
  Type: string;
  /**
   * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.
   */
  Values?: string[];
};
/**
 * Type definition for `AWS::CloudTrail::Trail.EventSelector`.
 * The type of email sending events to publish to the event destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html}
 */
export type EventSelector = {
  DataResources?: DataResource[];
  /**
   * An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.
   */
  ExcludeManagementEventSources?: string[];
  /**
   * Specify if you want your event selector to include management events for your trail.
   */
  IncludeManagementEvents?: boolean;
  /**
   * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.
   */
  ReadWriteType?: "All" | "ReadOnly" | "WriteOnly";
};
/**
 * Type definition for `AWS::CloudTrail::Trail.InsightSelector`.
 * A string that contains insight types that are logged on a trail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html}
 */
export type InsightSelector = {
  /**
   * The type of insight to log on a trail.
   */
  InsightType?: string;
};
/**
 * Type definition for `AWS::CloudTrail::Trail.Tag`.
 * An arbitrary set of tags (key-value pairs) for this trail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CloudTrail::Trail`.
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html}
 */
export class CloudTrailTrail extends $Resource<
  "AWS::CloudTrail::Trail",
  CloudTrailTrailProperties,
  CloudTrailTrailAttributes
> {
  public static readonly Type = "AWS::CloudTrail::Trail";
  constructor(
    logicalId: string,
    properties: CloudTrailTrailProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudTrailTrail.Type, properties, options);
  }
}
