import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::KendraRanking::ExecutionPlan`.
 * A KendraRanking Rescore execution plan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html}
 */
export type KendraRankingExecutionPlanProperties = {
  /**
   * Capacity units
   */
  CapacityUnits?: CapacityUnitsConfiguration;
  /**
   * A description for the execution plan
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * Name of kendra ranking rescore execution plan
   * @minLength `1`
   * @maxLength `1000`
   */
  Name: string;
  /**
   * Tags for labeling the execution plan
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KendraRanking::ExecutionPlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html#aws-resource-kendraranking-executionplan-return-values}
 */
export type KendraRankingExecutionPlanAttributes = {
  /**
   * @maxLength `1000`
   */
  Arn: string;
  /**
   * Unique ID of rescore execution plan
   * @minLength `36`
   * @maxLength `36`
   */
  Id: string;
};
/**
 * Type definition for `AWS::KendraRanking::ExecutionPlan.CapacityUnitsConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-capacityunitsconfiguration.html}
 */
export type CapacityUnitsConfiguration = {
  RescoreCapacityUnits: number;
};
/**
 * Type definition for `AWS::KendraRanking::ExecutionPlan.Tag`.
 * A label for tagging KendraRanking resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendraranking-executionplan-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::KendraRanking::ExecutionPlan`.
 * A KendraRanking Rescore execution plan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendraranking-executionplan.html}
 */
export class KendraRankingExecutionPlan extends $Resource<
  "AWS::KendraRanking::ExecutionPlan",
  KendraRankingExecutionPlanProperties,
  KendraRankingExecutionPlanAttributes
> {
  public static readonly Type = "AWS::KendraRanking::ExecutionPlan";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: KendraRankingExecutionPlanProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      KendraRankingExecutionPlan.Type,
      properties,
      KendraRankingExecutionPlan.AttributeNames,
      options,
    );
  }
}
