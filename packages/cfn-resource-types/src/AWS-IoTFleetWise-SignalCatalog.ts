import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::IoTFleetWise::SignalCatalog Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html}
 */
export type IoTFleetWiseSignalCatalogProperties = {
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
  Name?: string;
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  Nodes?: Node[];
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::SignalCatalog`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html#aws-resource-iotfleetwise-signalcatalog-return-values}
 */
export type IoTFleetWiseSignalCatalogAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
  NodeCounts: {
    TotalActuators: number;
    TotalAttributes: number;
    TotalBranches: number;
    TotalNodes: number;
    TotalSensors: number;
  };
};
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Actuator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-actuator.html}
 */
export type Actuator = {
  /**
   * @minLength `1`
   */
  AllowedValues?: string[];
  AssignedValue?: string;
  DataType: NodeDataType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  FullyQualifiedName: string;
  Max?: number;
  Min?: number;
  Unit?: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Attribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-attribute.html}
 */
export type Attribute = {
  /**
   * @minLength `1`
   */
  AllowedValues?: string[];
  AssignedValue?: string;
  DataType: NodeDataType;
  DefaultValue?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  FullyQualifiedName: string;
  Max?: number;
  Min?: number;
  Unit?: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Branch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-branch.html}
 */
export type Branch = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  FullyQualifiedName: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Node`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-node.html}
 */
export type Node =
  | {
      Branch?: Branch;
    }
  | {
      Sensor?: Sensor;
    }
  | {
      Actuator?: Actuator;
    }
  | {
      Attribute?: Attribute;
    };
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.NodeDataType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-nodedatatype.html}
 */
export type NodeDataType =
  | "INT8"
  | "UINT8"
  | "INT16"
  | "UINT16"
  | "INT32"
  | "UINT32"
  | "INT64"
  | "UINT64"
  | "BOOLEAN"
  | "FLOAT"
  | "DOUBLE"
  | "STRING"
  | "UNIX_TIMESTAMP"
  | "INT8_ARRAY"
  | "UINT8_ARRAY"
  | "INT16_ARRAY"
  | "UINT16_ARRAY"
  | "INT32_ARRAY"
  | "UINT32_ARRAY"
  | "INT64_ARRAY"
  | "UINT64_ARRAY"
  | "BOOLEAN_ARRAY"
  | "FLOAT_ARRAY"
  | "DOUBLE_ARRAY"
  | "STRING_ARRAY"
  | "UNIX_TIMESTAMP_ARRAY"
  | "UNKNOWN";
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Sensor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-sensor.html}
 */
export type Sensor = {
  /**
   * @minLength `1`
   */
  AllowedValues?: string[];
  DataType: NodeDataType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  FullyQualifiedName: string;
  Max?: number;
  Min?: number;
  Unit?: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::SignalCatalog.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-signalcatalog-tag.html}
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
 * Definition of AWS::IoTFleetWise::SignalCatalog Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-signalcatalog.html}
 */
export class IoTFleetWiseSignalCatalog extends $Resource<
  "AWS::IoTFleetWise::SignalCatalog",
  IoTFleetWiseSignalCatalogProperties,
  IoTFleetWiseSignalCatalogAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::SignalCatalog";
  constructor(
    logicalId: string,
    properties: IoTFleetWiseSignalCatalogProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseSignalCatalog.Type, properties, options);
  }
}
