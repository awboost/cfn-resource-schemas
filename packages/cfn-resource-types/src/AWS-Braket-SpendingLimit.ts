import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Braket::SpendingLimit
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-braket-spendinglimit.html}
 */
export type BraketSpendingLimitProperties = {
  DeviceArn: string;
  SpendingLimit: string;
  Tags?: Tag[];
  TimePeriod?: TimePeriod;
};
/**
 * Attribute type definition for `AWS::Braket::SpendingLimit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-braket-spendinglimit.html#aws-resource-braket-spendinglimit-return-values}
 */
export type BraketSpendingLimitAttributes = {
  CreatedAt: string;
  Id: string;
  QueuedSpend: string;
  SpendingLimitArn: string;
  TotalSpend: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Braket::SpendingLimit.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-braket-spendinglimit-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::Braket::SpendingLimit.TimePeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-braket-spendinglimit-timeperiod.html}
 */
export type TimePeriod = {
  EndAt: string;
  StartAt: string;
};
/**
 * Resource Type definition for AWS::Braket::SpendingLimit
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
