import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::IoTFleetWise::Fleet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html}
 */
export type IoTFleetWiseFleetProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9:_-]+$`
   */
  Id: string;
  SignalCatalogArn: string;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html#aws-resource-iotfleetwise-fleet-return-values}
 */
export type IoTFleetWiseFleetAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::Fleet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-fleet-tag.html}
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
 * Definition of AWS::IoTFleetWise::Fleet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-fleet.html}
 */
export class IoTFleetWiseFleet extends $Resource<
  "AWS::IoTFleetWise::Fleet",
  IoTFleetWiseFleetProperties,
  IoTFleetWiseFleetAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::Fleet";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "LastModificationTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTFleetWiseFleet.Type,
      properties,
      IoTFleetWiseFleet.AttributeNames,
      options,
    );
  }
}
