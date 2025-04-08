import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::SchedulingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export type BatchSchedulingPolicyProperties = {
  /**
   * Fair Share Policy for the Job Queue.
   */
  FairsharePolicy?: FairsharePolicy;
  /**
   * Name of Scheduling Policy.
   * @pattern ``
   */
  Name?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Batch::SchedulingPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html#aws-resource-batch-schedulingpolicy-return-values}
 */
export type BatchSchedulingPolicyAttributes = {
  /**
   * ARN of the Scheduling Policy.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Batch::SchedulingPolicy.FairsharePolicy`.
 * Fair Share Policy for the Job Queue.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html}
 */
export type FairsharePolicy = {
  /**
   * @min `0`
   * @max `99`
   */
  ComputeReservation?: number;
  /**
   * @min `0`
   * @max `604800`
   */
  ShareDecaySeconds?: number;
  /**
   * List of Share Attributes
   */
  ShareDistribution?: ShareAttributes[];
};
/**
 * Type definition for `AWS::Batch::SchedulingPolicy.ShareAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html}
 */
export type ShareAttributes = {
  ShareIdentifier?: string;
  /**
   * @min `0`
   * @max `1000`
   */
  WeightFactor?: number;
};
/**
 * Resource Type definition for AWS::Batch::SchedulingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export class BatchSchedulingPolicy extends $Resource<
  "AWS::Batch::SchedulingPolicy",
  BatchSchedulingPolicyProperties,
  BatchSchedulingPolicyAttributes
> {
  public static readonly Type = "AWS::Batch::SchedulingPolicy";
  constructor(
    logicalId: string,
    properties: BatchSchedulingPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchSchedulingPolicy.Type, properties, options);
  }
}
