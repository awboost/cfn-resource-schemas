import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into AWS IoT Events. This is done by sending messages as *inputs* to AWS IoT Events. For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html}
 */
export type IoTEventsInputProperties = {
  /**
   * The definition of the input.
   */
  InputDefinition: InputDefinition;
  /**
   * A brief description of the input.
   * @minLength `1`
   * @maxLength `128`
   */
  InputDescription?: string;
  /**
   * The name of the input.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z][a-zA-Z0-9_]*$`
   */
  InputName?: string;
  /**
     * An array of key-value pairs to apply to this resource.
    
    For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::IoTEvents::Input.Attribute`.
 * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-attribute.html}
 */
export type Attribute = {
  /**
     * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.
    
    _Syntax_: `<field-name>.<field-name>...`
     * @minLength `1`
     * @maxLength `128`
     * @pattern `^((`[a-zA-Z0-9_\- ]+`)|([a-zA-Z0-9_\-]+))(\.((`[a-zA-Z0-9_\- ]+`)|([a-zA-Z0-9_\-]+)))*$`
     */
  JsonPath: string;
};
/**
 * Type definition for `AWS::IoTEvents::Input.InputDefinition`.
 * The definition of the input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-inputdefinition.html}
 */
export type InputDefinition = {
  /**
   * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
   * @minLength `1`
   * @maxLength `200`
   */
  Attributes: Attribute[];
};
/**
 * Type definition for `AWS::IoTEvents::Input.Tag`.
 * Tags to be applied to Input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-input-tag.html}
 */
export type Tag = {
  /**
   * Key of the Tag.
   */
  Key: string;
  /**
   * Value of the Tag.
   */
  Value: string;
};
/**
 * The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into AWS IoT Events. This is done by sending messages as *inputs* to AWS IoT Events. For more information, see [How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the *AWS IoT Events Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-input.html}
 */
export class IoTEventsInput extends $Resource<
  "AWS::IoTEvents::Input",
  IoTEventsInputProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::IoTEvents::Input";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: IoTEventsInputProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTEventsInput.Type,
      properties,
      IoTEventsInput.AttributeNames,
      options,
    );
  }
}
