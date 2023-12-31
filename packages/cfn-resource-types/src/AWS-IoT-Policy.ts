import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IoT::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html}
 */
export type IoTPolicyProperties = {
  PolicyDocument: Record<string, any> | string;
  PolicyName?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::Policy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#aws-resource-iot-policy-return-values}
 */
export type IoTPolicyAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::IoT::Policy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-policy-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::IoT::Policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html}
 */
export class IoTPolicy extends $Resource<
  "AWS::IoT::Policy",
  IoTPolicyProperties,
  IoTPolicyAttributes
> {
  public static readonly Type = "AWS::IoT::Policy";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: IoTPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTPolicy.Type,
      properties,
      IoTPolicy.AttributeNames,
      options,
    );
  }
}
