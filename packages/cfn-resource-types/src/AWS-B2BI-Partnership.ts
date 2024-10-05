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
  OutboundEdi?: OutboundEdiOptions;
};
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
};
/**
 * Type definition for `AWS::B2BI::Partnership.X12FunctionalGroupHeaders`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-partnership-x12functionalgroupheaders.html}
 */
export type X12FunctionalGroupHeaders = {
  /**
   * @minLength `2`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9]*$`
   */
  ApplicationReceiverCode?: string;
  /**
   * @minLength `2`
   * @maxLength `15`
   * @pattern `^[a-zA-Z0-9]*$`
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
   * @pattern `^[a-zA-Z0-9]*$`
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
   * @pattern `^[a-zA-Z0-9]*$`
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
  Delimiters?: X12Delimiters;
  FunctionalGroupHeaders?: X12FunctionalGroupHeaders;
  InterchangeControlHeaders?: X12InterchangeControlHeaders;
  ValidateEdi?: boolean;
};
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
