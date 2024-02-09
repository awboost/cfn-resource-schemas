import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Location::Tracker Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html}
 */
export type LocationTrackerProperties = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  EventBridgeEnabled?: boolean;
  KmsKeyEnableGeospatialQueries?: boolean;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  PositionFiltering?: PositionFiltering;
  PricingPlan?: PricingPlan;
  PricingPlanDataSource?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  TrackerName: string;
};
/**
 * Attribute type definition for `AWS::Location::Tracker`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html#aws-resource-location-tracker-return-values}
 */
export type LocationTrackerAttributes = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  Arn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  CreateTime: string;
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  TrackerArn: string;
  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   * @pattern `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Location::Tracker.PositionFiltering`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-tracker-positionfiltering.html}
 */
export type PositionFiltering = "TimeBased" | "DistanceBased" | "AccuracyBased";
/**
 * Type definition for `AWS::Location::Tracker.PricingPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-tracker-pricingplan.html}
 */
export type PricingPlan = "RequestBasedUsage";
/**
 * Type definition for `AWS::Location::Tracker.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-location-tracker-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[A-Za-z0-9 _=@:.+-/]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::Location::Tracker Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html}
 */
export class LocationTracker extends $Resource<
  "AWS::Location::Tracker",
  LocationTrackerProperties,
  LocationTrackerAttributes
> {
  public static readonly Type = "AWS::Location::Tracker";
  constructor(
    logicalId: string,
    properties: LocationTrackerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LocationTracker.Type, properties, options);
  }
}
