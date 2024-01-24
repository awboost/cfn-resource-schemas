import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::B2BI::Profile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html}
 */
export type B2BIProfileProperties = {
  /**
   * @minLength `1`
   * @maxLength `254`
   */
  BusinessName: string;
  /**
   * @minLength `5`
   * @maxLength `254`
   * @pattern `^[\w\.\-]+@[\w\.\-]+$`
   */
  Email?: string;
  Logging: Logging;
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
  Phone: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::B2BI::Profile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#aws-resource-b2bi-profile-return-values}
 */
export type B2BIProfileAttributes = {
  CreatedAt: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   */
  LogGroupName: string;
  ModifiedAt: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  ProfileArn: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ProfileId: string;
};
/**
 * Type definition for `AWS::B2BI::Profile.Logging`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-profile-logging.html}
 */
export type Logging = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::B2BI::Profile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-b2bi-profile-tag.html}
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
 * Definition of AWS::B2BI::Profile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html}
 */
export class B2BIProfile extends $Resource<
  "AWS::B2BI::Profile",
  B2BIProfileProperties,
  B2BIProfileAttributes
> {
  public static readonly Type = "AWS::B2BI::Profile";
  constructor(
    logicalId: string,
    properties: B2BIProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, B2BIProfile.Type, properties, options);
  }
}
