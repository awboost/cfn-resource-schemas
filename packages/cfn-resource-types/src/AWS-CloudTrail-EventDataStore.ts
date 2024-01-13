import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudTrail::EventDataStore`.
 * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 7 to 2557 or 3653 days (about seven or ten years) depending on the selected BillingMode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html}
 */
export type CloudTrailEventDataStoreProperties = {
  /**
   * The advanced event selectors that were used to select events for the data store.
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
  /**
   * The mode that the event data store will use to charge for event storage.
   */
  BillingMode?: string;
  /**
   * Indicates whether federation is enabled on an event data store.
   */
  FederationEnabled?: boolean;
  /**
   * The ARN of the role used for event data store federation.
   */
  FederationRoleArn?: string;
  /**
   * Indicates whether the event data store is ingesting events.
   */
  IngestionEnabled?: boolean;
  /**
   * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing event data store. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store.
   */
  InsightSelectors?: InsightSelector[];
  /**
   * Specifies the ARN of the event data store that will collect Insights events. Both InsightSelectors and InsightsDestination need to have a value in order to enable Insights events on an event data store
   */
  InsightsDestination?: string;
  /**
   * Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   */
  KmsKeyId?: string;
  /**
   * Indicates whether the event data store includes events from all regions, or only from the region in which it was created.
   */
  MultiRegionEnabled?: boolean;
  /**
   * The name of the event data store.
   */
  Name?: string;
  /**
   * Indicates that an event data store is collecting logged events for an organization.
   */
  OrganizationEnabled?: boolean;
  /**
   * The retention period, in days.
   */
  RetentionPeriod?: number;
  Tags?: Tag[];
  /**
   * Indicates whether the event data store is protected from termination.
   */
  TerminationProtectionEnabled?: boolean;
};
/**
 * Attribute type definition for `AWS::CloudTrail::EventDataStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#aws-resource-cloudtrail-eventdatastore-return-values}
 */
export type CloudTrailEventDataStoreAttributes = {
  /**
   * The timestamp of the event data store's creation.
   */
  CreatedTimestamp: string;
  /**
   * The ARN of the event data store.
   */
  EventDataStoreArn: string;
  /**
   * The status of an event data store. Values are STARTING_INGESTION, ENABLED, STOPPING_INGESTION, STOPPED_INGESTION and PENDING_DELETION.
   */
  Status: string;
  /**
   * The timestamp showing when an event data store was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.
   */
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::CloudTrail::EventDataStore.AdvancedEventSelector`.
 * Advanced event selectors let you create fine-grained selectors for the following AWS CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html}
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
 * Type definition for `AWS::CloudTrail::EventDataStore.AdvancedFieldSelector`.
 * A single selector statement in an advanced event selector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html}
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
 * Type definition for `AWS::CloudTrail::EventDataStore.InsightSelector`.
 * A string that contains Insights types that are logged on an event data store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-insightselector.html}
 */
export type InsightSelector = {
  /**
   * The type of Insights to log on an event data store.
   */
  InsightType?: string;
};
/**
 * Type definition for `AWS::CloudTrail::EventDataStore.Tag`.
 * An arbitrary set of tags (key-value pairs) for this event data store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-tag.html}
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
 * Resource type definition for `AWS::CloudTrail::EventDataStore`.
 * A storage lake of event data against which you can run complex SQL-based queries. An event data store can include events that you have logged on your account from the last 7 to 2557 or 3653 days (about seven or ten years) depending on the selected BillingMode.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html}
 */
export class CloudTrailEventDataStore extends $Resource<
  "AWS::CloudTrail::EventDataStore",
  CloudTrailEventDataStoreProperties,
  CloudTrailEventDataStoreAttributes
> {
  public static readonly Type = "AWS::CloudTrail::EventDataStore";
  constructor(
    logicalId: string,
    properties: CloudTrailEventDataStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudTrailEventDataStore.Type, properties, options);
  }
}
