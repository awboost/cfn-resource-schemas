import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::EventTrigger`.
 * An event trigger resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html}
 */
export type CustomerProfilesEventTriggerProperties = {
  /**
   * The description of the event trigger.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * A list of conditions that determine when an event should trigger the destination.
   * @minLength `1`
   * @maxLength `5`
   */
  EventTriggerConditions: EventTriggerCondition[];
  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   */
  EventTriggerLimits?: EventTriggerLimits;
  /**
   * The unique name of the event trigger.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  EventTriggerName: string;
  /**
   * The unique name of the object type.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  ObjectTypeName: string;
  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  SegmentFilter?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::EventTrigger`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#aws-resource-customerprofiles-eventtrigger-return-values}
 */
export type CustomerProfilesEventTriggerAttributes = {
  /**
   * The timestamp of when the event trigger was created.
   */
  CreatedAt: string;
  /**
   * The timestamp of when the event trigger was most recently updated.
   */
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.EventTriggerCondition`.
 * Specifies the circumstances under which the event should trigger the destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggercondition.html}
 */
export type EventTriggerCondition = {
  /**
   * A list of dimensions to be evaluated for the event.
   * @minLength `1`
   * @maxLength `10`
   */
  EventTriggerDimensions: EventTriggerDimension[];
  /**
   * The operator used to combine multiple dimensions.
   */
  LogicalOperator: EventTriggerLogicalOperator;
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.EventTriggerDimension`.
 * A specific event dimension to be assessed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerdimension.html}
 */
export type EventTriggerDimension = {
  /**
   * A list of object attributes to be evaluated.
   * @minLength `1`
   * @maxLength `10`
   */
  ObjectAttributes: ObjectAttribute[];
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.EventTriggerLimits`.
 * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerlimits.html}
 */
export type EventTriggerLimits = {
  /**
   * Specifies that an event will only trigger the destination if it is processed within a certain latency period.
   */
  EventExpiration?: number;
  /**
   * A list of time periods during which the limits apply.
   * @minLength `1`
   * @maxLength `4`
   */
  Periods?: Period[];
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.EventTriggerLogicalOperator`.
 * The operator used to combine multiple dimensions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-eventtriggerlogicaloperator.html}
 */
export type EventTriggerLogicalOperator = "ANY" | "ALL" | "NONE";
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.ObjectAttribute`.
 * The criteria that a specific object attribute must meet to trigger the destination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-objectattribute.html}
 */
export type ObjectAttribute = {
  /**
   * The operator used to compare an attribute against a list of values.
   */
  ComparisonOperator:
    | "INCLUSIVE"
    | "EXCLUSIVE"
    | "CONTAINS"
    | "BEGINS_WITH"
    | "ENDS_WITH"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LESS_THAN_OR_EQUAL"
    | "EQUAL"
    | "BEFORE"
    | "AFTER"
    | "ON"
    | "BETWEEN"
    | "NOT_BETWEEN";
  /**
   * A field defined within an object type.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  FieldName?: string;
  /**
   * An attribute contained within a source object.
   * @minLength `1`
   * @maxLength `1000`
   */
  Source?: string;
  /**
   * A list of attribute values used for comparison.
   * @minLength `1`
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.Period`.
 * Defines a limit and the time period during which it is enforced.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-period.html}
 */
export type Period = {
  /**
   * The maximum allowed number of destination invocations per profile.
   * @min `1`
   * @max `1000`
   */
  MaxInvocationsPerProfile?: number;
  /**
   * The unit of time.
   */
  Unit: "HOURS" | "DAYS" | "WEEKS" | "MONTHS";
  /**
   * If set to true, there is no limit on the number of destination invocations per profile. The default is false.
   */
  Unlimited?: boolean;
  /**
   * The amount of time of the specified unit.
   * @min `1`
   * @max `24`
   */
  Value: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::EventTrigger.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventtrigger-tag.html}
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
  Value: string;
};
/**
 * Resource type definition for `AWS::CustomerProfiles::EventTrigger`.
 * An event trigger resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html}
 */
export class CustomerProfilesEventTrigger extends $Resource<
  "AWS::CustomerProfiles::EventTrigger",
  CustomerProfilesEventTriggerProperties,
  CustomerProfilesEventTriggerAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::EventTrigger";
  constructor(
    logicalId: string,
    properties: CustomerProfilesEventTriggerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CustomerProfilesEventTrigger.Type, properties, options);
  }
}
