import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
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
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: IoTBillingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTBillingGroup.Type,
      properties,
      IoTBillingGroup.AttributeNames,
      options,
    );
  }
}
