import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * @minLength `0`
   * @maxLength `20`
   */
  StateTemplates?: StateTemplateAssociation[];
  /**
   * @minLength `0`
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
 * Type definition for `AWS::IoTFleetWise::Vehicle.attributesMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-attributesmap.html}
 */
export type attributesMap = Record<string, string>;
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.OnChangeStateTemplateUpdateStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-onchangestatetemplateupdatestrategy.html}
 */
export type OnChangeStateTemplateUpdateStrategy = Record<string, any>;
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.PeriodicStateTemplateUpdateStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-periodicstatetemplateupdatestrategy.html}
 */
export type PeriodicStateTemplateUpdateStrategy = {
  StateTemplateUpdateRate: TimePeriod;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.StateTemplateAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-statetemplateassociation.html}
 */
export type StateTemplateAssociation = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Identifier: string;
  StateTemplateUpdateStrategy: StateTemplateUpdateStrategy;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.StateTemplateUpdateStrategy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-statetemplateupdatestrategy.html}
 */
export type StateTemplateUpdateStrategy =
  | {
      Periodic: PeriodicStateTemplateUpdateStrategy;
    }
  | {
      OnChange: OnChangeStateTemplateUpdateStrategy;
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
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.TimePeriod`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-timeperiod.html}
 */
export type TimePeriod = {
  Unit: TimeUnit;
  /**
   * @min `1`
   */
  Value: number;
};
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.TimeUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-timeunit.html}
 */
export type TimeUnit = "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR";
/**
 * Type definition for `AWS::IoTFleetWise::Vehicle.VehicleAssociationBehavior`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-vehicle-vehicleassociationbehavior.html}
 */
export type VehicleAssociationBehavior =
  | "CreateIotThing"
  | "ValidateIotThingExists";
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
  constructor(
    logicalId: string,
    properties: IoTFleetWiseVehicleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseVehicle.Type, properties, options);
  }
}
