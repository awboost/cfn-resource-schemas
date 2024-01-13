import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::B2BI::Partnership Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-partnership.html}
 */
export type B2BIPartnershipProperties = {
  Capabilities?: string[];
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
