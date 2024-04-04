import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html}
 */
export type ARCZonalShiftZonalAutoshiftConfigurationProperties = {
  PracticeRunConfiguration?: PracticeRunConfiguration;
  /**
   * @minLength `8`
   * @maxLength `1024`
   */
  ResourceIdentifier?: string;
  ZonalAutoshiftStatus?: ZonalAutoshiftStatus;
};
/**
 * Type definition for `AWS::ARCZonalShift::ZonalAutoshiftConfiguration.ControlCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html}
 */
export type ControlCondition = {
  /**
   * @minLength `8`
   * @maxLength `1024`
   * @pattern `^arn:.*$`
   */
  AlarmIdentifier: string;
  Type: ControlConditionType;
};
/**
 * Type definition for `AWS::ARCZonalShift::ZonalAutoshiftConfiguration.ControlConditionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-controlconditiontype.html}
 */
export type ControlConditionType = "CLOUDWATCH";
/**
 * Type definition for `AWS::ARCZonalShift::ZonalAutoshiftConfiguration.PracticeRunConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html}
 */
export type PracticeRunConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `15`
   */
  BlockedDates?: string[];
  /**
   * @minLength `0`
   * @maxLength `15`
   */
  BlockedWindows?: string[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  BlockingAlarms?: ControlCondition[];
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  OutcomeAlarms: ControlCondition[];
};
/**
 * Type definition for `AWS::ARCZonalShift::ZonalAutoshiftConfiguration.ZonalAutoshiftStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-arczonalshift-zonalautoshiftconfiguration-zonalautoshiftstatus.html}
 */
export type ZonalAutoshiftStatus = "ENABLED";
/**
 * Definition of AWS::ARCZonalShift::ZonalAutoshiftConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html}
 */
export class ARCZonalShiftZonalAutoshiftConfiguration extends $Resource<
  "AWS::ARCZonalShift::ZonalAutoshiftConfiguration",
  ARCZonalShiftZonalAutoshiftConfigurationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::ARCZonalShift::ZonalAutoshiftConfiguration";
  constructor(
    logicalId: string,
    properties: ARCZonalShiftZonalAutoshiftConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ARCZonalShiftZonalAutoshiftConfiguration.Type,
      properties,
      options,
    );
  }
}
