import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoT::Command`.
 * Represents the resource definition of AWS IoT Command.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html}
 */
export type IoTCommandProperties = {
  /**
   * The unique identifier for the command.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  CommandId: string;
  /**
   * The date and time when the command was created.
   */
  CreatedAt?: string;
  /**
   * A flag indicating whether the command is deprecated.
   */
  Deprecated?: boolean;
  /**
   * The description of the command.
   * @maxLength `2028`
   */
  Description?: string;
  /**
   * The display name for the command.
   */
  DisplayName?: string;
  /**
   * The date and time when the command was last updated.
   */
  LastUpdatedAt?: string;
  /**
   * The list of mandatory parameters for the command.
   * @minLength `1`
   */
  MandatoryParameters?: CommandParameter[];
  /**
   * The namespace to which the command belongs.
   */
  Namespace?: "AWS-IoT" | "AWS-IoT-FleetWise";
  /**
   * The payload associated with the command.
   */
  Payload?: CommandPayload;
  /**
   * A flag indicating whether the command is pending deletion.
   */
  PendingDeletion?: boolean;
  /**
   * The customer role associated with the command.
   * @minLength `20`
   * @maxLength `2028`
   */
  RoleArn?: string;
  /**
   * The tags to be associated with the command.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::Command`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html#aws-resource-iot-command-return-values}
 */
export type IoTCommandAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the command.
   */
  CommandArn: string;
};
/**
 * Type definition for `AWS::IoT::Command.CommandParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparameter.html}
 */
export type CommandParameter = {
  DefaultValue?: CommandParameterValue;
  /**
   * @maxLength `2028`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `192`
   * @pattern `^[.$a-zA-Z0-9_-]+$`
   */
  Name: string;
  Value?: CommandParameterValue;
};
/**
 * Type definition for `AWS::IoT::Command.CommandParameterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandparametervalue.html}
 */
export type CommandParameterValue = {
  B?: boolean;
  /**
   * @minLength `1`
   */
  BIN?: string;
  D?: number;
  I?: number;
  /**
   * @maxLength `19`
   * @pattern `^-?\d+$`
   */
  L?: string;
  /**
   * @minLength `1`
   */
  S?: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[0-9]*$`
   */
  UL?: string;
};
/**
 * Type definition for `AWS::IoT::Command.CommandPayload`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-commandpayload.html}
 */
export type CommandPayload = {
  Content?: string;
  /**
   * @minLength `1`
   */
  ContentType?: string;
};
/**
 * Type definition for `AWS::IoT::Command.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-command-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoT::Command`.
 * Represents the resource definition of AWS IoT Command.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-command.html}
 */
export class IoTCommand extends $Resource<
  "AWS::IoT::Command",
  IoTCommandProperties,
  IoTCommandAttributes
> {
  public static readonly Type = "AWS::IoT::Command";
  constructor(
    logicalId: string,
    properties: IoTCommandProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTCommand.Type, properties, options);
  }
}
