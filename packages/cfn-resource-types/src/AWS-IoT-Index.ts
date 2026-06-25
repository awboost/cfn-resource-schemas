import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::Index`.
 * Represents an AWS IoT fleet index, which enables searching and aggregating IoT device data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-index.html}
 */
export type IoTIndexProperties = {
  /**
   * The index name.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9:_-]+$`
   */
  IndexName?: string;
};
/**
 * Attribute type definition for `AWS::IoT::Index`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-index.html#aws-resource-iot-index-return-values}
 */
export type IoTIndexAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the index.
   */
  Arn: string;
  /**
   * The index status.
   */
  IndexStatus: "ACTIVE" | "BUILDING" | "REBUILDING";
  /**
   * Contains a value that specifies the type of indexing performed.
   */
  Schema: string;
};
/**
 * Resource type definition for `AWS::IoT::Index`.
 * Represents an AWS IoT fleet index, which enables searching and aggregating IoT device data.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-index.html}
 */
export class IoTIndex extends $Resource<
  "AWS::IoT::Index",
  IoTIndexProperties,
  IoTIndexAttributes
> {
  public static readonly Type = "AWS::IoT::Index";
  constructor(
    logicalId: string,
    properties: IoTIndexProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTIndex.Type, properties, options);
  }
}
