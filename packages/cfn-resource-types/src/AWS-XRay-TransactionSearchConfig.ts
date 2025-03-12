import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::XRay::TransactionSearchConfig`.
 * This schema provides construct and validation rules for AWS-XRay TransactionSearchConfig resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html}
 */
export type XRayTransactionSearchConfigProperties = {
  /**
   * Determines the percentage of traces indexed from CloudWatch Logs to X-Ray
   * @min `0`
   * @max `100`
   */
  IndexingPercentage?: number;
};
/**
 * Attribute type definition for `AWS::XRay::TransactionSearchConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html#aws-resource-xray-transactionsearchconfig-return-values}
 */
export type XRayTransactionSearchConfigAttributes = {
  /**
   * User account id, used as the primary identifier for the resource
   * @pattern `^\d{12}$`
   */
  AccountId: string;
};
/**
 * Resource type definition for `AWS::XRay::TransactionSearchConfig`.
 * This schema provides construct and validation rules for AWS-XRay TransactionSearchConfig resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html}
 */
export class XRayTransactionSearchConfig extends $Resource<
  "AWS::XRay::TransactionSearchConfig",
  XRayTransactionSearchConfigProperties,
  XRayTransactionSearchConfigAttributes
> {
  public static readonly Type = "AWS::XRay::TransactionSearchConfig";
  constructor(
    logicalId: string,
    properties: XRayTransactionSearchConfigProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, XRayTransactionSearchConfig.Type, properties, options);
  }
}
