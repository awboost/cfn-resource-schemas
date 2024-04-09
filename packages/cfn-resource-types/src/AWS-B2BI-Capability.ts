import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::B2BI::Capability Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html}
 */
export type B2BICapabilityProperties = {
  Configuration: CapabilityConfiguration;
  /**
   * @minLength `0`
   * @maxLength `5`
   */
  InstructionsDocuments?: S3Location[];
  /**
   * @minLength `1`
   * @maxLength `254`
   */
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  Type: CapabilityType;
};
/**
 * Attribute type definition for `AWS::B2BI::Capability`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#aws-resource-b2bi-capability-return-values}
 */
export type B2BICapabilityAttributes = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  CapabilityArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  CapabilityId: string;
  CreatedAt: string;
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::B2BI::Capability.CapabilityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilityconfiguration.html}
 */
export type CapabilityConfiguration = {
  Edi: EdiConfiguration;
};
/**
 * Type definition for `AWS::B2BI::Capability.CapabilityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-capabilitytype.html}
 */
export type CapabilityType = "edi";
/**
 * Type definition for `AWS::B2BI::Capability.EdiConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-ediconfiguration.html}
 */
export type EdiConfiguration = {
  InputLocation: S3Location;
  OutputLocation: S3Location;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  TransformerId: string;
  Type: EdiType;
};
/**
 * Type definition for `AWS::B2BI::Capability.EdiType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-editype.html}
 */
export type EdiType = {
  X12Details: X12Details;
};
/**
 * Type definition for `AWS::B2BI::Capability.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-s3location.html}
 */
export type S3Location = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  BucketName?: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Key?: string;
};
/**
 * Type definition for `AWS::B2BI::Capability.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-tag.html}
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
 * Type definition for `AWS::B2BI::Capability.X12Details`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12details.html}
 */
export type X12Details = {
  TransactionSet?: X12TransactionSet;
  Version?: X12Version;
};
/**
 * Type definition for `AWS::B2BI::Capability.X12TransactionSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12transactionset.html}
 */
export type X12TransactionSet =
  | "X12_110"
  | "X12_180"
  | "X12_204"
  | "X12_210"
  | "X12_211"
  | "X12_214"
  | "X12_215"
  | "X12_259"
  | "X12_260"
  | "X12_266"
  | "X12_269"
  | "X12_270"
  | "X12_271"
  | "X12_274"
  | "X12_275"
  | "X12_276"
  | "X12_277"
  | "X12_278"
  | "X12_310"
  | "X12_315"
  | "X12_322"
  | "X12_404"
  | "X12_410"
  | "X12_417"
  | "X12_421"
  | "X12_426"
  | "X12_810"
  | "X12_820"
  | "X12_824"
  | "X12_830"
  | "X12_832"
  | "X12_834"
  | "X12_835"
  | "X12_837"
  | "X12_844"
  | "X12_846"
  | "X12_849"
  | "X12_850"
  | "X12_852"
  | "X12_855"
  | "X12_856"
  | "X12_860"
  | "X12_861"
  | "X12_864"
  | "X12_865"
  | "X12_869"
  | "X12_870"
  | "X12_940"
  | "X12_945"
  | "X12_990"
  | "X12_997"
  | "X12_999"
  | "X12_270_X279"
  | "X12_271_X279"
  | "X12_275_X210"
  | "X12_275_X211"
  | "X12_276_X212"
  | "X12_277_X212"
  | "X12_277_X214"
  | "X12_277_X364"
  | "X12_278_X217"
  | "X12_820_X218"
  | "X12_820_X306"
  | "X12_824_X186"
  | "X12_834_X220"
  | "X12_834_X307"
  | "X12_834_X318"
  | "X12_835_X221"
  | "X12_837_X222"
  | "X12_837_X223"
  | "X12_837_X224"
  | "X12_837_X291"
  | "X12_837_X292"
  | "X12_837_X298"
  | "X12_999_X231";
/**
 * Type definition for `AWS::B2BI::Capability.X12Version`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-capability-x12version.html}
 */
export type X12Version = "VERSION_4010" | "VERSION_4030" | "VERSION_5010";
/**
 * Definition of AWS::B2BI::Capability Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html}
 */
export class B2BICapability extends $Resource<
  "AWS::B2BI::Capability",
  B2BICapabilityProperties,
  B2BICapabilityAttributes
> {
  public static readonly Type = "AWS::B2BI::Capability";
  constructor(
    logicalId: string,
    properties: B2BICapabilityProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, B2BICapability.Type, properties, options);
  }
}
