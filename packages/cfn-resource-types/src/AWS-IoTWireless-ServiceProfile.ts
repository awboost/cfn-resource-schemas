import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTWireless::ServiceProfile`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html}
 */
export type IoTWirelessServiceProfileProperties = {
  /**
   * LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation
   */
  LoRaWAN?: LoRaWANServiceProfile;
  /**
   * Name of service profile
   * @maxLength `256`
   */
  Name?: string;
  /**
   * A list of key-value pairs that contain metadata for the service profile.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTWireless::ServiceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#aws-resource-iotwireless-serviceprofile-return-values}
 */
export type IoTWirelessServiceProfileAttributes = {
  /**
   * Service profile Arn. Returned after successful create.
   */
  Arn: string;
  /**
   * Service profile Id. Returned after successful create.
   * @maxLength `256`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTWireless::ServiceProfile.LoRaWANServiceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html}
 */
export type LoRaWANServiceProfile = {
  AddGwMetadata?: boolean;
  PrAllowed?: boolean;
  RaAllowed?: boolean;
};
/**
 * Type definition for `AWS::IoTWireless::ServiceProfile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::IoTWireless::ServiceProfile`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html}
 */
export class IoTWirelessServiceProfile extends $Resource<
  "AWS::IoTWireless::ServiceProfile",
  IoTWirelessServiceProfileProperties,
  IoTWirelessServiceProfileAttributes
> {
  public static readonly Type = "AWS::IoTWireless::ServiceProfile";
  constructor(
    logicalId: string,
    properties: IoTWirelessServiceProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTWirelessServiceProfile.Type, properties, options);
  }
}
