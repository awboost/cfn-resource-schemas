import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
   * @minLength `0`
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
   * @minLength `0`
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
  constructor(
    logicalId: string,
    properties: IoTFleetWiseFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseFleet.Type, properties, options);
  }
}
