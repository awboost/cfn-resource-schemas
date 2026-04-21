import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Batch::QuotaShare`.
 * Creates an AWS Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-quotashare.html}
 */
export type BatchQuotaShareProperties = {
  /**
   * A list that specifies the quantity and type of compute capacity allocated to the quota share.
   */
  CapacityLimits: QuotaShareCapacityLimit[];
  /**
   * The AWS Batch job queue associated with the quota share. This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.
   */
  JobQueue: string;
  /**
   * Specifies the preemption behavior for jobs in a quota share.
   */
  PreemptionConfiguration: QuotaSharePreemptionConfiguration;
  /**
   * The name of the quota share. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   * @minLength `1`
   * @maxLength `128`
   */
  QuotaShareName: string;
  /**
   * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
   */
  ResourceSharingConfiguration: QuotaShareResourceSharingConfiguration;
  /**
   * The state of the quota share. If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.
   */
  State?: "ENABLED" | "DISABLED";
  /**
   * The tags that you apply to the quota share to help you categorize and organize your resources. Each tag consists of a key and an optional value.
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
   * The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.
   */
  CapacityUnit: string;
  /**
   * The maximum capacity available for the quota share. This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.
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
   * Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.
   */
  InSharePreemption: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::Batch::QuotaShare.QuotaShareResourceSharingConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-quotashare-quotashareresourcesharingconfiguration.html}
 */
export type QuotaShareResourceSharingConfiguration = {
  /**
   * The maximum percentage of additional capacity that the quota share can borrow from other shares. `BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.
   * @min `-1`
   */
  BorrowLimit?: number;
  /**
   * The resource sharing strategy for the quota share. The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.
   */
  Strategy: "RESERVE" | "LEND" | "LEND_AND_BORROW";
};
/**
 * Resource type definition for `AWS::Batch::QuotaShare`.
 * Creates an AWS Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits.
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
