import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: IoTPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTPolicy.Type, properties, options);
  }
}
