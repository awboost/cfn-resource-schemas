import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Braket::SpendingLimit`.
 * Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-braket-spendinglimit.html}
 */
export type BraketSpendingLimitProperties = {
  /**
   * The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.
   * @minLength `1`
   * @maxLength `256`
   */
  DeviceArn: string;
  /**
   * The maximum amount that can be spent on the specified device, in USD.
   * @minLength `1`
   * @pattern `^\d+(\.\d{1,2})?$`
   */
  SpendingLimit: string;
  /**
   * The tags to apply to the spending limit.
   */
  Tags?: Tag[];
  /**
   * Defines a time range for spending limits, specifying when the limit is active.
   */
  TimePeriod?: TimePeriod;
};
/**
 * Attribute type definition for `AWS::Braket::SpendingLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-braket-spendinglimit.html#aws-resource-braket-spendinglimit-return-values}
 */
export type BraketSpendingLimitAttributes = {
  /**
   * The date and time when the spending limit was created, in ISO 8601 format.
   */
  CreatedAt: string;
  /**
   * The amount currently queued for spending on the device, in USD.
   */
  QueuedSpend: string;
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the spending limit.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^arn:aws[a-z\-]*:braket:[a-z0-9\-]+:[0-9]{12}:spending-limit/.*$`
   */
  SpendingLimitArn: string;
  /**
   * The total amount spent on the device so far during the current time period, in USD.
   */
  TotalSpend: string;
  /**
   * The date and time when the spending limit was last modified, in ISO 8601 format.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Braket::SpendingLimit.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-braket-spendinglimit-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Braket::SpendingLimit.TimePeriod`.
 * Defines a time range for spending limits, specifying when the limit is active.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-braket-spendinglimit-timeperiod.html}
 */
export type TimePeriod = {
  /**
   * The end date and time for the spending limit period, in ISO 8601 format.
   */
  EndAt: string;
  /**
   * The start date and time for the spending limit period, in ISO 8601 format.
   */
  StartAt: string;
};
/**
 * Resource type definition for `AWS::Braket::SpendingLimit`.
 * Creates a spending limit for a specified quantum device. Spending limits help you control costs by setting maximum amounts that can be spent on quantum computing tasks within a specified time period.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-braket-spendinglimit.html}
 */
export class BraketSpendingLimit extends $Resource<
  "AWS::Braket::SpendingLimit",
  BraketSpendingLimitProperties,
  BraketSpendingLimitAttributes
> {
  public static readonly Type = "AWS::Braket::SpendingLimit";
  constructor(
    logicalId: string,
    properties: BraketSpendingLimitProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BraketSpendingLimit.Type, properties, options);
  }
}
