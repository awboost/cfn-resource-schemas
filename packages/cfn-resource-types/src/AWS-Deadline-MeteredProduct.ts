import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::MeteredProduct Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html}
 */
export type DeadlineMeteredProductProperties = {
  /**
   * @pattern `^le-[0-9a-f]{32}$`
   */
  LicenseEndpointId?: string;
  /**
   * @pattern `^[0-9a-z]{1,32}-[.0-9a-z]{1,32}$`
   */
  ProductId?: string;
};
/**
 * Attribute type definition for `AWS::Deadline::MeteredProduct`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html#aws-resource-deadline-meteredproduct-return-values}
 */
export type DeadlineMeteredProductAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):deadline:[a-z0-9-]+:[0-9]{12}:license-endpoint/le-[0-9a-z]{32}/metered-product/[0-9a-z]{1,32}-[.0-9a-z]{1,32}`
   */
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Family: string;
  /**
   * @min `1024`
   * @max `65535`
   */
  Port: number;
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  Vendor: string;
};
/**
 * Definition of AWS::Deadline::MeteredProduct Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html}
 */
export class DeadlineMeteredProduct extends $Resource<
  "AWS::Deadline::MeteredProduct",
  DeadlineMeteredProductProperties,
  DeadlineMeteredProductAttributes
> {
  public static readonly Type = "AWS::Deadline::MeteredProduct";
  constructor(
    logicalId: string,
    properties: DeadlineMeteredProductProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineMeteredProduct.Type, properties, options);
  }
}
