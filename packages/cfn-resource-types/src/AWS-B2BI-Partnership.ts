import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::B2BI::Partnership Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html}
 */
export type B2BIPartnershipProperties = {
  Capabilities: string[];
  CapabilityOptions?: CapabilityOptions;
  /**
   * @minLength `5`
   * @maxLength `254`
   * @pattern `^[\w\.\-]+@[\w\.\-]+$`
   */
  Email: string;
  /**
   * @minLength `1`
   * @maxLength `254`
   */
  Name: string;
  /**
   * @minLength `7`
   * @maxLength `22`
   * @pattern `^\+?([0-9 \t\-()\/]{7,})(?:\s*(?:#|x\.?|ext\.?|extension) \t*(\d+))?$`
   */
  Phone?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ProfileId: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::B2BI::Partnership`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html#aws-resource-b2bi-partnership-return-values}
 */
export type B2BIPartnershipAttributes = {
  CreatedAt: string;
  ModifiedAt: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  PartnershipArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  PartnershipId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  TradingPartnerId: string;
};
/**
 * Type definition for `AWS::B2BI::Partnership.CapabilityOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-capabilityoptions.html}
 */
export type CapabilityOptions = {
  InboundEdi?: InboundEdiOptions;
  OutboundEdi?: OutboundEdiOptions;
};
/**
 * Type definition for `AWS::B2BI::Partnership.InboundEdiOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-inboundedioptions.html}
 */
export type InboundEdiOptions = {
  X12?: X12InboundEdiOptions;
};
/**
 * Type definition for `AWS::B2BI::Partnership.LineTerminator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-lineterminator.html}
 */
export type LineTerminator = "CRLF" | "LF" | "CR";
/**
 * Type definition for `AWS::B2BI::Partnership.OutboundEdiOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-outboundedioptions.html}
 */
export type OutboundEdiOptions = {
  X12: X12Envelope;
};
/**
 * Type definition for `AWS::B2BI::Partnership.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-tag.html}
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
 * Type definition for `AWS::B2BI::Partnership.WrapFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-wrapformat.html}
 */
export type WrapFormat = "SEGMENT" | "ONE_LINE" | "LINE_LENGTH";
/**
 * Type definition for `AWS::B2BI::Partnership.WrapOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-wrapoptions.html}
 */
export type WrapOptions = {
  /**
   * @min `1`
   */
  LineLength?: number;
  LineTerminator?: LineTerminator;
  WrapBy?: WrapFormat;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12AcknowledgmentOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12acknowledgmentoptions.html}
 */
export type X12AcknowledgmentOptions = {
  FunctionalAcknowledgment: X12FunctionalAcknowledgment;
  TechnicalAcknowledgment: X12TechnicalAcknowledgment;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12ControlNumbers`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12controlnumbers.html}
 */
export type X12ControlNumbers = {
  /**
   * @min `1`
   * @max `999999999`
   */
  StartingFunctionalGroupControlNumber?: number;
  /**
   * @min `1`
   * @max `999999999`
   */
  StartingInterchangeControlNumber?: number;
  /**
   * @min `1`
   * @max `999999999`
   */
  StartingTransactionSetControlNumber?: number;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12Delimiters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12delimiters.html}
 */
export type X12Delimiters = {
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[!&'()*+,\-./:;?=%@\[\]_{}|<>~^`"]$`
   */
  ComponentSeparator?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[!&'()*+,\-./:;?=%@\[\]_{}|<>~^`"]$`
   */
  DataElementSeparator?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[!&'()*+,\-./:;?=%@\[\]_{}|<>~^`"]$`
   */
  SegmentTerminator?: string;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12Envelope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12envelope.html}
 */
export type X12Envelope = {
  Common?: X12OutboundEdiHeaders;
  WrapOptions?: WrapOptions;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12FunctionalAcknowledgment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalacknowledgment.html}
 */
export type X12FunctionalAcknowledgment =
  | "DO_NOT_GENERATE"
  | "GENERATE_ALL_SEGMENTS"
  | "GENERATE_WITHOUT_TRANSACTION_SET_RESPONSE_LOOP";
/**
 * Type definition for `AWS::B2BI::Partnership.X12FunctionalGroupHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html}
 */
export type X12FunctionalGroupHeaders = {
  /**
   * @minLength `2`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9 ]*$`
   */
  ApplicationReceiverCode?: string;
  /**
   * @minLength `2`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9 ]*$`
   */
  ApplicationSenderCode?: string;
  /**
   * @minLength `1`
   * @maxLength `2`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  ResponsibleAgencyCode?: string;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12GS05TimeFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12gs05timeformat.html}
 */
export type X12GS05TimeFormat = "HHMM" | "HHMMSS" | "HHMMSSDD";
/**
 * Type definition for `AWS::B2BI::Partnership.X12InboundEdiOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12inboundedioptions.html}
 */
export type X12InboundEdiOptions = {
  AcknowledgmentOptions?: X12AcknowledgmentOptions;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12InterchangeControlHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12interchangecontrolheaders.html}
 */
export type X12InterchangeControlHeaders = {
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  AcknowledgmentRequestedCode?: string;
  /**
   * @minLength `15`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9 ]*$`
   */
  ReceiverId?: string;
  /**
   * @minLength `2`
   * @maxLength `2`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  ReceiverIdQualifier?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  RepetitionSeparator?: string;
  /**
   * @minLength `15`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9 ]*$`
   */
  SenderId?: string;
  /**
   * @minLength `2`
   * @maxLength `2`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  SenderIdQualifier?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  UsageIndicatorCode?: string;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12OutboundEdiHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12outboundediheaders.html}
 */
export type X12OutboundEdiHeaders = {
  ControlNumbers?: X12ControlNumbers;
  Delimiters?: X12Delimiters;
  FunctionalGroupHeaders?: X12FunctionalGroupHeaders;
  Gs05TimeFormat?: X12GS05TimeFormat;
  InterchangeControlHeaders?: X12InterchangeControlHeaders;
  ValidateEdi?: boolean;
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12TechnicalAcknowledgment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12technicalacknowledgment.html}
 */
export type X12TechnicalAcknowledgment =
  | "DO_NOT_GENERATE"
  | "GENERATE_ALL_SEGMENTS";
/**
 * Definition of AWS::B2BI::Partnership Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html}
 */
export class B2BIPartnership extends $Resource<
  "AWS::B2BI::Partnership",
  B2BIPartnershipProperties,
  B2BIPartnershipAttributes
> {
  public static readonly Type = "AWS::B2BI::Partnership";
  constructor(
    logicalId: string,
    properties: B2BIPartnershipProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, B2BIPartnership.Type, properties, options);
  }
}
