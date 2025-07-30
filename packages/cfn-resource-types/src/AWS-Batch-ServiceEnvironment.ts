import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::ServiceEnvironment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-serviceenvironment.html}
 */
export type BatchServiceEnvironmentProperties = {
  CapacityLimits: CapacityLimit[];
  ServiceEnvironmentName?: string;
  ServiceEnvironmentType: string;
  State?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Batch::ServiceEnvironment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-serviceenvironment.html#aws-resource-batch-serviceenvironment-return-values}
 */
export type BatchServiceEnvironmentAttributes = {
  ServiceEnvironmentArn: string;
};
/**
 * Type definition for `AWS::Batch::ServiceEnvironment.CapacityLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-serviceenvironment-capacitylimit.html}
 */
export type CapacityLimit = {
  CapacityUnit?: string;
  MaxCapacity?: number;
};
/**
 * Resource Type definition for AWS::Batch::ServiceEnvironment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-serviceenvironment.html}
 */
export class BatchServiceEnvironment extends $Resource<
  "AWS::Batch::ServiceEnvironment",
  BatchServiceEnvironmentProperties,
  BatchServiceEnvironmentAttributes
> {
  public static readonly Type = "AWS::Batch::ServiceEnvironment";
  constructor(
    logicalId: string,
    properties: BatchServiceEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchServiceEnvironment.Type, properties, options);
  }
}
