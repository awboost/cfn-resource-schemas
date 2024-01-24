import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DataBrew::Schedule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html}
 */
export type DataBrewScheduleProperties = {
  /**
   * Schedule cron
   * @minLength `1`
   * @maxLength `512`
   */
  CronExpression: string;
  JobNames?: string[];
  /**
   * Schedule Name
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::DataBrew::Schedule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-databrew-schedule-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataBrew::Schedule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-schedule.html}
 */
export class DataBrewSchedule extends $Resource<
  "AWS::DataBrew::Schedule",
  DataBrewScheduleProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::DataBrew::Schedule";
  constructor(
    logicalId: string,
    properties: DataBrewScheduleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataBrewSchedule.Type, properties, options);
  }
}
