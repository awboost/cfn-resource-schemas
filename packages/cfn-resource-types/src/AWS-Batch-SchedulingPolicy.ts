import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type schema for AWS::Batch::SchedulingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export type BatchSchedulingPolicyProperties = {
  /**
   * Fair Share Policy for the Job Queue.
   */
  FairsharePolicy?: FairsharePolicy;
  /**
   * Name of Scheduling Policy.
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
   * @max `99`
   */
  ComputeReservation?: number;
  /**
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
   * @max `1000`
   */
  WeightFactor?: number;
};
/**
 * Resource Type schema for AWS::Batch::SchedulingPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export class BatchSchedulingPolicy extends $Resource<
  "AWS::Batch::SchedulingPolicy",
  BatchSchedulingPolicyProperties,
  BatchSchedulingPolicyAttributes
> {
  public static readonly Type = "AWS::Batch::SchedulingPolicy";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: BatchSchedulingPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BatchSchedulingPolicy.Type,
      properties,
      BatchSchedulingPolicy.AttributeNames,
      options,
    );
  }
}
