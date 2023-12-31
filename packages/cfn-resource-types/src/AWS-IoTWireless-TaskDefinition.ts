import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::IoTWireless::TaskDefinition`.
 * Creates a gateway task definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html}
 */
export type IoTWirelessTaskDefinitionProperties = {
  /**
   * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
   */
  AutoCreateTasks: boolean;
  /**
   * The list of task definitions.
   */
  LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry;
  /**
   * The name of the new resource.
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the destination.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * A filter to list only the wireless gateway task definitions that use this task definition type
   */
  TaskDefinitionType?: "UPDATE";
  /**
   * Information about the gateways to update.
   */
  Update?: UpdateWirelessGatewayTaskCreate;
};
/**
 * Attribute type definition for `AWS::IoTWireless::TaskDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#aws-resource-iotwireless-taskdefinition-return-values}
 */
export type IoTWirelessTaskDefinitionAttributes = {
  /**
   * TaskDefinition arn. Returned after successful create.
   */
  Arn: string;
  /**
   * The ID of the new wireless gateway task definition
   * @pattern `[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTWireless::TaskDefinition.LoRaWANGatewayVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html}
 */
export type LoRaWANGatewayVersion = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Model?: string;
  /**
   * @minLength `1`
   * @maxLength `32`
   */
  PackageVersion?: string;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  Station?: string;
};
/**
 * Type definition for `AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskCreate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html}
 */
export type LoRaWANUpdateGatewayTaskCreate = {
  CurrentVersion?: LoRaWANGatewayVersion;
  SigKeyCrc?: number;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  UpdateSignature?: string;
  UpdateVersion?: LoRaWANGatewayVersion;
};
/**
 * Type definition for `AWS::IoTWireless::TaskDefinition.LoRaWANUpdateGatewayTaskEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html}
 */
export type LoRaWANUpdateGatewayTaskEntry = {
  CurrentVersion?: LoRaWANGatewayVersion;
  UpdateVersion?: LoRaWANGatewayVersion;
};
/**
 * Type definition for `AWS::IoTWireless::TaskDefinition.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::IoTWireless::TaskDefinition.UpdateWirelessGatewayTaskCreate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html}
 */
export type UpdateWirelessGatewayTaskCreate = {
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  UpdateDataRole?: string;
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  UpdateDataSource?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::TaskDefinition`.
 * Creates a gateway task definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html}
 */
export class IoTWirelessTaskDefinition extends $Resource<
  "AWS::IoTWireless::TaskDefinition",
  IoTWirelessTaskDefinitionProperties,
  IoTWirelessTaskDefinitionAttributes
> {
  public static readonly Type = "AWS::IoTWireless::TaskDefinition";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: IoTWirelessTaskDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTWirelessTaskDefinition.Type,
      properties,
      IoTWirelessTaskDefinition.AttributeNames,
      options,
    );
  }
}
