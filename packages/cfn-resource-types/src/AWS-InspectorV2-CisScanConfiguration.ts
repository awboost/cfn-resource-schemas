import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::InspectorV2::CisScanConfiguration`.
 * CIS Scan Configuration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html}
 */
export type InspectorV2CisScanConfigurationProperties = {
  /**
   * Name of the scan
   * @minLength `1`
   */
  ScanName: string;
  /**
   * Choose a Schedule cadence
   */
  Schedule: Schedule;
  SecurityLevel: CisSecurityLevel;
  Tags?: CisTagMap;
  Targets: CisTargets;
};
/**
 * Attribute type definition for `AWS::InspectorV2::CisScanConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#aws-resource-inspectorv2-cisscanconfiguration-return-values}
 */
export type InspectorV2CisScanConfigurationAttributes = {
  /**
   * CIS Scan configuration unique identifier
   */
  Arn: string;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.CisSecurityLevel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cissecuritylevel.html}
 */
export type CisSecurityLevel = "LEVEL_1" | "LEVEL_2";
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.CisTagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cistagmap.html}
 */
export type CisTagMap = Record<string, string>;
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.CisTargets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-cistargets.html}
 */
export type CisTargets = {
  /**
   * @minLength `1`
   * @maxLength `10000`
   */
  AccountIds: string[];
  TargetResourceTags: TargetResourceTags;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.DailySchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-dailyschedule.html}
 */
export type DailySchedule = {
  StartTime: Time;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.Day`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-day.html}
 */
export type Day = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.MonthlySchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-monthlyschedule.html}
 */
export type MonthlySchedule = {
  Day: Day;
  StartTime: Time;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.OneTimeSchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-onetimeschedule.html}
 */
export type OneTimeSchedule = Record<string, any>;
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.Schedule`.
 * Choose a Schedule cadence
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-schedule.html}
 */
export type Schedule = {
  Daily?: DailySchedule;
  Monthly?: MonthlySchedule;
  OneTime?: OneTimeSchedule;
  Weekly?: WeeklySchedule;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.TargetResourceTags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-targetresourcetags.html}
 */
export type TargetResourceTags = Record<string, string[]>;
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.Time`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-time.html}
 */
export type Time = {
  /**
   * @pattern `^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$`
   */
  TimeOfDay: string;
  TimeZone: string;
};
/**
 * Type definition for `AWS::InspectorV2::CisScanConfiguration.WeeklySchedule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-cisscanconfiguration-weeklyschedule.html}
 */
export type WeeklySchedule = {
  /**
   * @minLength `1`
   * @maxLength `7`
   */
  Days: Day[];
  StartTime: Time;
};
/**
 * Resource type definition for `AWS::InspectorV2::CisScanConfiguration`.
 * CIS Scan Configuration resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html}
 */
export class InspectorV2CisScanConfiguration extends $Resource<
  "AWS::InspectorV2::CisScanConfiguration",
  InspectorV2CisScanConfigurationProperties,
  InspectorV2CisScanConfigurationAttributes
> {
  public static readonly Type = "AWS::InspectorV2::CisScanConfiguration";
  constructor(
    logicalId: string,
    properties: InspectorV2CisScanConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InspectorV2CisScanConfiguration.Type, properties, options);
  }
}
