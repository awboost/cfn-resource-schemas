import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::IoTFleetWise::Vehicle Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html}
 */
export type IoTFleetWiseVehicleProperties = {
  AssociationBehavior?: VehicleAssociationBehavior;
  Attributes?: attributesMap;
  DecoderManifestArn: string;
  ModelManifestArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::Vehicle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#aws-resource-iotfleetwise-vehicle-return-values}
 */
export type IoTFleetWiseVehicleAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.VehicleAssociationBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-vehicleassociationbehavior.html}
 */
export type VehicleAssociationBehavior =
  | "CreateIotThing"
  | "ValidateIotThingExists";
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.attributesMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-attributesmap.html}
 */
export type attributesMap = Record<string, string>;
/**
 * Definition of AWS::IoTFleetWise::Vehicle Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html}
 */
export class IoTFleetWiseVehicle extends $Resource<
  "AWS::IoTFleetWise::Vehicle",
  IoTFleetWiseVehicleProperties,
  IoTFleetWiseVehicleAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::Vehicle";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "LastModificationTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseVehicleProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTFleetWiseVehicle.Type,
      properties,
      IoTFleetWiseVehicle.AttributeNames,
      options,
    );
  }
}
