import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::IoTFleetWise::DecoderManifest Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html}
 */
export type IoTFleetWiseDecoderManifestProperties = {
  DefaultForUnmappedSignals?: DefaultForUnmappedSignalsType;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[^\u0000-\u001F\u007F]+$`
   */
  Description?: string;
  ModelManifestArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  NetworkInterfaces?: (
    | CanNetworkInterface
    | ObdNetworkInterface
    | CustomDecodingNetworkInterface
  )[];
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  SignalDecoders?: (
    | CanSignalDecoder
    | ObdSignalDecoder
    | CustomDecodingSignalDecoder
  )[];
  Status?: ManifestStatus;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTFleetWise::DecoderManifest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#aws-resource-iotfleetwise-decodermanifest-return-values}
 */
export type IoTFleetWiseDecoderManifestAttributes = {
  Arn: string;
  CreationTime: string;
  LastModificationTime: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CanInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-caninterface.html}
 */
export type CanInterface = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ProtocolName?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ProtocolVersion?: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CanNetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html}
 */
export type CanNetworkInterface = {
  CanInterface: CanInterface;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  Type: "CAN_INTERFACE";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CanSignal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignal.html}
 */
export type CanSignal = {
  Factor: number | string;
  IsBigEndian: boolean | string;
  IsSigned: boolean | string;
  Length: number | string;
  MessageId: number | string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Name?: string;
  Offset: number | string;
  SignalValueType?: SignalValueType;
  StartBit: number | string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CanSignalDecoder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html}
 */
export type CanSignalDecoder = {
  CanSignal: CanSignal;
  /**
   * @minLength `1`
   * @maxLength `150`
   */
  FullyQualifiedName: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  Type: "CAN_SIGNAL";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CustomDecodingInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-customdecodinginterface.html}
 */
export type CustomDecodingInterface = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z\d\-_:]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CustomDecodingNetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-customdecodingnetworkinterface.html}
 */
export type CustomDecodingNetworkInterface = {
  CustomDecodingInterface: CustomDecodingInterface;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  Type: "CUSTOM_DECODING_INTERFACE";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CustomDecodingSignal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-customdecodingsignal.html}
 */
export type CustomDecodingSignal = {
  /**
   * @minLength `1`
   * @maxLength `150`
   * @pattern `^(?!.*\.\.)[a-zA-Z0-9_\-#:.]+$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.CustomDecodingSignalDecoder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-customdecodingsignaldecoder.html}
 */
export type CustomDecodingSignalDecoder = {
  CustomDecodingSignal: CustomDecodingSignal;
  /**
   * @minLength `1`
   * @maxLength `150`
   */
  FullyQualifiedName: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  Type: "CUSTOM_DECODING_SIGNAL";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.DefaultForUnmappedSignalsType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-defaultforunmappedsignalstype.html}
 */
export type DefaultForUnmappedSignalsType = "CUSTOM_DECODING";
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.ManifestStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-manifeststatus.html}
 */
export type ManifestStatus = "ACTIVE" | "DRAFT";
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.ObdInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdinterface.html}
 */
export type ObdInterface = {
  DtcRequestIntervalSeconds?: number | string;
  HasTransmissionEcu?: boolean | string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ObdStandard?: string;
  PidRequestIntervalSeconds?: number | string;
  RequestMessageId: number | string;
  UseExtendedIds?: boolean | string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.ObdNetworkInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html}
 */
export type ObdNetworkInterface = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  ObdInterface: ObdInterface;
  Type: "OBD_INTERFACE";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.ObdSignal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignal.html}
 */
export type ObdSignal = {
  BitMaskLength?: number | string;
  BitRightShift?: number | string;
  ByteLength: number | string;
  IsSigned?: boolean | string;
  Offset: number | string;
  Pid: number | string;
  PidResponseLength: number | string;
  Scaling: number | string;
  ServiceMode: number | string;
  SignalValueType?: SignalValueType;
  StartByte: number | string;
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.ObdSignalDecoder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html}
 */
export type ObdSignalDecoder = {
  /**
   * @minLength `1`
   * @maxLength `150`
   */
  FullyQualifiedName: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  InterfaceId: string;
  ObdSignal: ObdSignal;
  Type: "OBD_SIGNAL";
};
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.SignalValueType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-signalvaluetype.html}
 */
export type SignalValueType = "INTEGER" | "FLOATING_POINT";
/**
 * Type definition for `AWS::IoTFleetWise::DecoderManifest.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-decodermanifest-tag.html}
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
 * Definition of AWS::IoTFleetWise::DecoderManifest Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html}
 */
export class IoTFleetWiseDecoderManifest extends $Resource<
  "AWS::IoTFleetWise::DecoderManifest",
  IoTFleetWiseDecoderManifestProperties,
  IoTFleetWiseDecoderManifestAttributes
> {
  public static readonly Type = "AWS::IoTFleetWise::DecoderManifest";
  constructor(
    logicalId: string,
    properties: IoTFleetWiseDecoderManifestProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTFleetWiseDecoderManifest.Type, properties, options);
  }
}
