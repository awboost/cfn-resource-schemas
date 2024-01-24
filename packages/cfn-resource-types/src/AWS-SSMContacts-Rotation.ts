import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SSMContacts::Rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html}
 */
export type SSMContactsRotationProperties = {
  /**
   * Members of the rotation
   */
  ContactIds: string[];
  /**
   * Name of the Rotation
   * @pattern `^[a-zA-Z0-9_]*$`
   */
  Name: string;
  /**
   * Information about when an on-call rotation is in effect and how long the rotation period lasts.
   */
  Recurrence: RecurrenceSettings;
  /**
   * Start time of the first shift of Oncall Schedule
   * @pattern `^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})$`
   */
  StartTime: string;
  Tags?: Tag[];
  /**
   * TimeZone Identifier for the Oncall Schedule
   */
  TimeZoneId: string;
};
/**
 * Attribute type definition for `AWS::SSMContacts::Rotation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#aws-resource-ssmcontacts-rotation-return-values}
 */
export type SSMContactsRotationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the rotation.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.CoverageTime`.
 * StartTime and EndTime for the Shift
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-coveragetime.html}
 */
export type CoverageTime = {
  /**
   * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
   * @pattern `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   */
  EndTime: string;
  /**
   * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
   * @pattern `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   */
  StartTime: string;
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.DayOfWeek`.
 * The day of the week when weekly recurring on-call shift rotations begin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-dayofweek.html}
 */
export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
/**
 * Type definition for `AWS::SSMContacts::Rotation.MonthlySetting`.
 * DayOfWeek for Month and HandOff Time for Monthly Recurring Rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-monthlysetting.html}
 */
export type MonthlySetting = {
  /**
   * The day of the month when monthly recurring on-call rotations begin.
   * @min `1`
   * @max `31`
   */
  DayOfMonth: number;
  /**
   * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
   * @pattern `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   */
  HandOffTime: string;
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.RecurrenceSettings`.
 * Information about when an on-call rotation is in effect and how long the rotation period lasts.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-recurrencesettings.html}
 */
export type RecurrenceSettings = {
  /**
   * Information about on-call rotations that recur daily.
   */
  DailySettings?: string[];
  /**
   * Information about on-call rotations that recur monthly.
   */
  MonthlySettings?: MonthlySetting[];
  /**
   * Number of Oncalls per shift.
   * @min `1`
   */
  NumberOfOnCalls?: number;
  /**
   * The number of days, weeks, or months a single rotation lasts.
   * @min `1`
   * @max `100`
   */
  RecurrenceMultiplier?: number;
  /**
   * Information about the days of the week included in on-call rotation coverage.
   */
  ShiftCoverages?: ShiftCoverage[];
  /**
   * Information about on-call rotations that recur weekly.
   */
  WeeklySettings?: WeeklySetting[];
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.ShiftCoverage`.
 * Information about the days of the week included in on-call rotation coverage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-shiftcoverage.html}
 */
export type ShiftCoverage = {
  /**
   * Information about when an on-call shift begins and ends.
   */
  CoverageTimes: CoverageTime[];
  /**
   * The day of the week when weekly recurring on-call shift rotations begin.
   */
  DayOfWeek: DayOfWeek;
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SSMContacts::Rotation.WeeklySetting`.
 * DayOfWeek for Rotation and HandOff Time for Weekly Recurring Rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmcontacts-rotation-weeklysetting.html}
 */
export type WeeklySetting = {
  /**
   * The day of the week when weekly recurring on-call shift rotations begin.
   */
  DayOfWeek: DayOfWeek;
  /**
   * Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM
   * @pattern `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   */
  HandOffTime: string;
};
/**
 * Resource Type definition for AWS::SSMContacts::Rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html}
 */
export class SSMContactsRotation extends $Resource<
  "AWS::SSMContacts::Rotation",
  SSMContactsRotationProperties,
  SSMContactsRotationAttributes
> {
  public static readonly Type = "AWS::SSMContacts::Rotation";
  constructor(
    logicalId: string,
    properties: SSMContactsRotationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMContactsRotation.Type, properties, options);
  }
}
