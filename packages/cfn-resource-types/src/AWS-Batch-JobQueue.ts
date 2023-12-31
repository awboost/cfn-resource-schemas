import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Batch::JobQueue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export type BatchJobQueueProperties = {
  ComputeEnvironmentOrder: ComputeEnvironmentOrder[];
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  JobQueueName?: string;
  /**
   * @max `1000`
   */
  Priority: number;
  /**
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  SchedulingPolicyArn?: string;
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
 * Resource Type definition for AWS::Batch::JobQueue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobqueue.html}
 */
export class BatchJobQueue extends $Resource<
  "AWS::Batch::JobQueue",
  BatchJobQueueProperties,
  BatchJobQueueAttributes
> {
  public static readonly Type = "AWS::Batch::JobQueue";
  public static readonly AttributeNames = ["JobQueueArn" as const];
  constructor(
    logicalId: string,
    properties: BatchJobQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BatchJobQueue.Type,
      properties,
      BatchJobQueue.AttributeNames,
      options,
    );
  }
}
