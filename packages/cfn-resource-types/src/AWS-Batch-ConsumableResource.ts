import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::ConsumableResource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html}
 */
export type BatchConsumableResourceProperties = {
  /**
   * Name of ConsumableResource.
   * @pattern ``
   */
  ConsumableResourceName?: string;
  /**
   * Type of Consumable Resource.
   */
  ResourceType: ResourceType;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  /**
   * Total Quantity of ConsumableResource.
   */
  TotalQuantity: number;
};
/**
 * Attribute type definition for `AWS::Batch::ConsumableResource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html#aws-resource-batch-consumableresource-return-values}
 */
export type BatchConsumableResourceAttributes = {
  /**
   * Available Quantity of ConsumableResource.
   */
  AvailableQuantity: number;
  /**
   * ARN of the Consumable Resource.
   */
  ConsumableResourceArn: string;
  CreatedAt: number;
  /**
   * In-use Quantity of ConsumableResource.
   */
  InUseQuantity: number;
};
/**
 * Type definition for `AWS::Batch::ConsumableResource.ResourceType`.
 * Type of Consumable Resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-consumableresource-resourcetype.html}
 */
export type ResourceType = "REPLENISHABLE" | "NON_REPLENISHABLE";
/**
 * Resource Type definition for AWS::Batch::ConsumableResource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html}
 */
export class BatchConsumableResource extends $Resource<
  "AWS::Batch::ConsumableResource",
  BatchConsumableResourceProperties,
  BatchConsumableResourceAttributes
> {
  public static readonly Type = "AWS::Batch::ConsumableResource";
  constructor(
    logicalId: string,
    properties: BatchConsumableResourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchConsumableResource.Type, properties, options);
  }
}
