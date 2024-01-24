import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of the AWS::QuickSight::RefreshSchedule Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html}
 */
export type QuickSightRefreshScheduleProperties = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  DataSetId?: string;
  Schedule?: RefreshScheduleMap;
};
/**
 * Attribute type definition for `AWS::QuickSight::RefreshSchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#aws-resource-quicksight-refreshschedule-return-values}
 */
export type QuickSightRefreshScheduleAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) of the data source.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::QuickSight::RefreshSchedule.RefreshScheduleMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-refreshschedulemap.html}
 */
export type RefreshScheduleMap = {
  RefreshType?: "FULL_REFRESH" | "INCREMENTAL_REFRESH";
  /**
   * <p>Information about the schedule frequency.</p>
   */
  ScheduleFrequency?: {
    Interval?:
      | "MINUTE15"
      | "MINUTE30"
      | "HOURLY"
      | "DAILY"
      | "WEEKLY"
      | "MONTHLY";
    /**
     * <p>The day scheduled for refresh.</p>
     */
    RefreshOnDay?: {
      /**
       * <p>The Day Of Month for scheduled refresh.</p>
       * @minLength `1`
       * @maxLength `128`
       */
      DayOfMonth?: string;
      DayOfWeek?:
        | "SUNDAY"
        | "MONDAY"
        | "TUESDAY"
        | "WEDNESDAY"
        | "THURSDAY"
        | "FRIDAY"
        | "SATURDAY";
    };
    /**
     * <p>The time of the day for scheduled refresh.</p>
     * @minLength `1`
     * @maxLength `128`
     */
    TimeOfTheDay?: string;
    /**
     * <p>The timezone for scheduled refresh.</p>
     * @minLength `1`
     * @maxLength `128`
     */
    TimeZone?: string;
  };
  /**
   * <p>An unique identifier for the refresh schedule.</p>
   * @minLength `1`
   * @maxLength `128`
   */
  ScheduleId?: string;
  /**
   * <p>The date time after which refresh is to be scheduled</p>
   * @minLength `1`
   * @maxLength `128`
   */
  StartAfterDateTime?: string;
};
/**
 * Definition of the AWS::QuickSight::RefreshSchedule Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html}
 */
export class QuickSightRefreshSchedule extends $Resource<
  "AWS::QuickSight::RefreshSchedule",
  QuickSightRefreshScheduleProperties,
  QuickSightRefreshScheduleAttributes
> {
  public static readonly Type = "AWS::QuickSight::RefreshSchedule";
  constructor(
    logicalId: string,
    properties: QuickSightRefreshScheduleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QuickSightRefreshSchedule.Type, properties, options);
  }
}
