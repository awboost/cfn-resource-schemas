import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::QuotaShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-quotashare.html}
 */
export type BatchQuotaShareProperties = {
  /**
   * The capacity limits for the quota share.
   */
  CapacityLimits: QuotaShareCapacityLimit[];
  /**
   * The Amazon Resource Name (ARN) or name of the job queue.
   */
  JobQueue: string;
  /**
   * The preemption configuration for the quota share.
   */
  PreemptionConfiguration: QuotaSharePreemptionConfiguration;
  /**
   * The name of the quota share.
   * @minLength `1`
   * @maxLength `128`
   */
  QuotaShareName: string;
  /**
   * The resource sharing configuration for the quota share.
   */
  ResourceSharingConfiguration: QuotaShareResourceSharingConfiguration;
  /**
   * The state of the quota share.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Batch::QuotaShare`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-quotashare.html#aws-resource-batch-quotashare-return-values}
 */
export type BatchQuotaShareAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the quota share.
   * @pattern `^arn:aws[a-z\-]*:batch:[a-z0-9\-]+:[0-9]{12}:job-queue/[a-zA-Z0-9_\-]{1,128}/quota-share/[a-zA-Z0-9_\-]{1,128}$`
   */
  QuotaShareArn: string;
};
/**
 * Type definition for `AWS::Batch::QuotaShare.QuotaShareCapacityLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-quotashare-quotasharecapacitylimit.html}
 */
export type QuotaShareCapacityLimit = {
  /**
   * The unit of compute capacity for the capacityLimit.
   */
  CapacityUnit: string;
  /**
   * The maximum capacity available for the quota share. This value represents the maximum amount of resources that can be allocated to jobs in the quota share without borrowing
   * @min `1`
   */
  MaxCapacity: number;
};
/**
 * Type definition for `AWS::Batch::QuotaShare.QuotaSharePreemptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-quotashare-quotasharepreemptionconfiguration.html}
 */
export type QuotaSharePreemptionConfiguration = {
  /**
   * Whether preemption is enabled within the quota share.
   */
  InSharePreemption: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::Batch::QuotaShare.QuotaShareResourceSharingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-quotashare-quotashareresourcesharingconfiguration.html}
 */
export type QuotaShareResourceSharingConfiguration = {
  /**
   * The maximum amount of compute capacity that can be borrowed. Use -1 for unlimited borrowing.
   * @min `-1`
   */
  BorrowLimit?: number;
  /**
   * The resource sharing strategy.
   */
  Strategy: "RESERVE" | "LEND" | "LEND_AND_BORROW";
};
/**
 * Resource Type definition for AWS::Batch::QuotaShare
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-quotashare.html}
 */
export class BatchQuotaShare extends $Resource<
  "AWS::Batch::QuotaShare",
  BatchQuotaShareProperties,
  BatchQuotaShareAttributes
> {
  public static readonly Type = "AWS::Batch::QuotaShare";
  constructor(
    logicalId: string,
    properties: BatchQuotaShareProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchQuotaShare.Type, properties, options);
  }
}
