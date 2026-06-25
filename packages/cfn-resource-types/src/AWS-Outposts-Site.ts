import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Outposts::Site Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-outposts-site.html}
 */
export type OutpostsSiteProperties = {
  /**
   * @minLength `1`
   * @maxLength `1001`
   * @pattern `^[\S ]+$`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `1000`
   * @pattern `^[\S ]+$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `2000`
   * @pattern `^[\S \n]+$`
   */
  Notes?: string;
  OperatingAddress?: Address;
  RackPhysicalProperties?: RackPhysicalProperties;
  ShippingAddress?: Address;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Outposts::Site`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-outposts-site.html#aws-resource-outposts-site-return-values}
 */
export type OutpostsSiteAttributes = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/(os-[a-f0-9]{17})$`
   */
  SiteArn: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/)?(os-[a-f0-9]{17})$`
   */
  SiteId: string;
};
/**
 * Type definition for `AWS::Outposts::Site.Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-outposts-site-address.html}
 */
export type Address = {
  /**
   * @minLength `1`
   * @maxLength `180`
   * @pattern `^\S[\S ]*$`
   */
  AddressLine1: string;
  /**
   * @minLength `0`
   * @maxLength `60`
   * @pattern `^\S[\S ]*$`
   */
  AddressLine2?: string;
  /**
   * @minLength `0`
   * @maxLength `60`
   * @pattern `^\S[\S ]*$`
   */
  AddressLine3?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^\S[\S ]*$`
   */
  City: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^\S[\S ]*$`
   */
  ContactName: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[\S ]+$`
   */
  ContactPhoneNumber: string;
  /**
   * @minLength `2`
   * @maxLength `2`
   * @pattern `^[A-Z]{2}$`
   */
  CountryCode: string;
  /**
   * @minLength `1`
   * @maxLength `60`
   * @pattern `^\S[\S ]*$`
   */
  DistrictOrCounty?: string;
  /**
   * @minLength `0`
   * @maxLength `180`
   * @pattern `^\S[\S ]*$`
   */
  Municipality?: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   * @pattern `^[a-zA-Z0-9 -]+$`
   */
  PostalCode: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^\S[\S ]*$`
   */
  StateOrRegion: string;
};
/**
 * Type definition for `AWS::Outposts::Site.RackPhysicalProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-outposts-site-rackphysicalproperties.html}
 */
export type RackPhysicalProperties = {
  FiberOpticCableType?: "SINGLE_MODE" | "MULTI_MODE";
  MaximumSupportedWeightLbs?:
    | "NO_LIMIT"
    | "MAX_1400_LBS"
    | "MAX_1600_LBS"
    | "MAX_1800_LBS"
    | "MAX_2000_LBS";
  OpticalStandard?:
    | "OPTIC_10GBASE_SR"
    | "OPTIC_10GBASE_IR"
    | "OPTIC_10GBASE_LR"
    | "OPTIC_40GBASE_SR"
    | "OPTIC_40GBASE_ESR"
    | "OPTIC_40GBASE_IR4_LR4L"
    | "OPTIC_40GBASE_LR4"
    | "OPTIC_100GBASE_SR4"
    | "OPTIC_100GBASE_CWDM4"
    | "OPTIC_100GBASE_LR4"
    | "OPTIC_100G_PSM4_MSA"
    | "OPTIC_1000BASE_LX"
    | "OPTIC_1000BASE_SX";
  PowerConnector?: "L6_30P" | "IEC309" | "AH530P7W" | "AH532P6W" | "CS8365C";
  PowerDrawKva?:
    | "POWER_5_KVA"
    | "POWER_10_KVA"
    | "POWER_15_KVA"
    | "POWER_30_KVA";
  PowerFeedDrop?: "ABOVE_RACK" | "BELOW_RACK";
  PowerPhase?: "SINGLE_PHASE" | "THREE_PHASE";
  UplinkCount?:
    | "UPLINK_COUNT_1"
    | "UPLINK_COUNT_2"
    | "UPLINK_COUNT_3"
    | "UPLINK_COUNT_4"
    | "UPLINK_COUNT_5"
    | "UPLINK_COUNT_6"
    | "UPLINK_COUNT_7"
    | "UPLINK_COUNT_8"
    | "UPLINK_COUNT_12"
    | "UPLINK_COUNT_16";
  UplinkGbps?: "UPLINK_1G" | "UPLINK_10G" | "UPLINK_40G" | "UPLINK_100G";
};
/**
 * Type definition for `AWS::Outposts::Site.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-outposts-site-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[\S \n]+$`
   */
  Value: string;
};
/**
 * Definition of AWS::Outposts::Site Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-outposts-site.html}
 */
export class OutpostsSite extends $Resource<
  "AWS::Outposts::Site",
  OutpostsSiteProperties,
  OutpostsSiteAttributes
> {
  public static readonly Type = "AWS::Outposts::Site";
  constructor(
    logicalId: string,
    properties: OutpostsSiteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OutpostsSite.Type, properties, options);
  }
}
