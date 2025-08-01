import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::JobQueue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export type BatchJobQueueProperties = {
  ComputeEnvironmentOrder?: ComputeEnvironmentOrder[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  JobQueueName?: string;
  JobQueueType?: string;
  JobStateTimeLimitActions?: JobStateTimeLimitAction[];
  /**
   * @min `0`
   * @max `1000`
   */
  Priority: number;
  /**
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SchedulingPolicyArn?: string;
  ServiceEnvironmentOrder?: ServiceEnvironmentOrder[];
  State?: "DISABLED" | "ENABLED";
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Batch::JobQueue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html#aws-resource-batch-jobqueue-return-values}
 */
export type BatchJobQueueAttributes = {
  /**
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  JobQueueArn: string;
};
/**
 * Type definition for `AWS::Batch::JobQueue.ComputeEnvironmentOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-computeenvironmentorder.html}
 */
export type ComputeEnvironmentOrder = {
  ComputeEnvironment: string;
  Order: number;
};
/**
 * Type definition for `AWS::Batch::JobQueue.JobStateTimeLimitAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-jobstatetimelimitaction.html}
 */
export type JobStateTimeLimitAction = {
  Action: "CANCEL" | "TERMINATE";
  /**
   * @min `600`
   * @max `86400`
   */
  MaxTimeSeconds: number;
  Reason: string;
  State: "RUNNABLE";
};
/**
 * Type definition for `AWS::Batch::JobQueue.ServiceEnvironmentOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-jobqueue-serviceenvironmentorder.html}
 */
export type ServiceEnvironmentOrder = {
  Order: number;
  ServiceEnvironment: string;
};
/**
 * Resource Type definition for AWS::Batch::JobQueue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export class BatchJobQueue extends $Resource<
  "AWS::Batch::JobQueue",
  BatchJobQueueProperties,
  BatchJobQueueAttributes
> {
  public static readonly Type = "AWS::Batch::JobQueue";
  constructor(
    logicalId: string,
    properties: BatchJobQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchJobQueue.Type, properties, options);
  }
}
