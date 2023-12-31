import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::IoTFleetWise::ModelManifest Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html}
 */
export type IoTFleetWiseModelManifestProperties = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
  /**
   * @minLength `1`
   */
  Nodes?: string[];
  SignalCatalogArn: string;
  Status?: ManifestStatus;
  /**
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::ModelManifest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#aws-resource-iotfleetwise-modelmanifest-return-values}
 */
export type IoTFleetWiseModelManifestAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::ModelManifest.ManifestStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-modelmanifest-manifeststatus.html}
 */
export type ManifestStatus = "ACTIVE" | "DRAFT";
/**
 * Type definition for `AWS::IoTFleetWise::ModelManifest.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-modelmanifest-tag.html}
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
 * Definition of AWS::IoTFleetWise::ModelManifest Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html}
 */
export class IoTFleetWiseModelManifest extends $Resource<
  "AWS::IoTFleetWise::ModelManifest",
  IoTFleetWiseModelManifestProperties,
  IoTFleetWiseModelManifestAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::ModelManifest";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreationTime" as const,
    "LastModificationTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: IoTFleetWiseModelManifestProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTFleetWiseModelManifest.Type,
      properties,
      IoTFleetWiseModelManifest.AttributeNames,
      options,
    );
  }
}
