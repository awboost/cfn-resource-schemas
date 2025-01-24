import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::BillingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html}
 */
export type IoTBillingGroupProperties = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  BillingGroupName?: string;
  BillingGroupProperties?: {
    /**
     * @maxLength `2028`
     * @pattern `[\p{Graph}\x20]*`
     */
    BillingGroupDescription?: string;
  };
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::BillingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html#aws-resource-iot-billinggroup-return-values}
 */
export type IoTBillingGroupAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::BillingGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-billinggroup-tag.html}
 */
export type Tag = {
  /**
   * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IoT::BillingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-billinggroup.html}
 */
export class IoTBillingGroup extends $Resource<
  "AWS::IoT::BillingGroup",
  IoTBillingGroupProperties,
  IoTBillingGroupAttributes
> {
  public static readonly Type = "AWS::IoT::BillingGroup";
  constructor(
    logicalId: string,
    properties: IoTBillingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTBillingGroup.Type, properties, options);
  }
}
