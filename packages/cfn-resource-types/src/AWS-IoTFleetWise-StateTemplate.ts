import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::IoTFleetWise::StateTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-statetemplate.html}
 */
export type IoTFleetWiseStateTemplateProperties = {
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  DataExtraDimensions?: string[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  MetadataExtraDimensions?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
  SignalCatalogArn: string;
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  StateTemplateProperties: string[];
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::StateTemplate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-statetemplate.html#aws-resource-iotfleetwise-statetemplate-return-values}
 */
export type IoTFleetWiseStateTemplateAttributes = {
  Arn: string;
  CreationTime: string;
  /**
   * @minLength `26`
   * @maxLength `26`
   * @pattern `^[A-Z0-9]+$`
   */
  Id: string;
  LastModificationTime: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::StateTemplate.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-statetemplate-tag.html}
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
 * Definition of AWS::IoTFleetWise::StateTemplate Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-statetemplate.html}
 */
export class IoTFleetWiseStateTemplate extends $Resource<
  "AWS::IoTFleetWise::StateTemplate",
  IoTFleetWiseStateTemplateProperties,
  IoTFleetWiseStateTemplateAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::StateTemplate";
  constructor(
    logicalId: string,
    properties: IoTFleetWiseStateTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseStateTemplate.Type, properties, options);
  }
}
