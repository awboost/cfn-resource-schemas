import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::SegmentDefinition`.
 * A segment definition resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html}
 */
export type CustomerProfilesSegmentDefinitionProperties = {
  /**
   * The description of the segment definition.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The display name of the segment definition.
   * @minLength `1`
   * @maxLength `255`
   */
  DisplayName: string;
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * The unique name of the segment definition.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  SegmentDefinitionName: string;
  /**
   * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
   */
  SegmentGroups: SegmentGroup;
  /**
   * The tags used to organize, track, or control access for this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::SegmentDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#aws-resource-customerprofiles-segmentdefinition-return-values}
 */
export type CustomerProfilesSegmentDefinitionAttributes = {
  /**
   * The time of this segment definition got created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the segment definition.
   * @minLength `1`
   * @maxLength `255`
   */
  SegmentDefinitionArn: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.AddressDimension`.
 * The address based criteria for the segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-addressdimension.html}
 */
export type AddressDimension = {
  /**
   * Specifies profile based criteria for a segment.
   */
  City?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  Country?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  County?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  PostalCode?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  Province?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  State?: ProfileDimension;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.AttributeDimension`.
 * Specifies attribute based criteria for a segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-attributedimension.html}
 */
export type AttributeDimension = {
  /**
   * The type of segment dimension to use.
   */
  DimensionType: AttributeDimensionType;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.AttributeDimensionType`.
 * The type of segment dimension to use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-attributedimensiontype.html}
 */
export type AttributeDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL";
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.CalculatedAttributeDimension`.
 * Specifies calculated attribute based criteria for a segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html}
 */
export type CalculatedAttributeDimension = {
  /**
   * Overrides the condition block within the original calculated attribute definition.
   */
  ConditionOverrides?: ConditionOverrides;
  /**
   * The type of segment dimension to use.
   */
  DimensionType: AttributeDimensionType;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.CalculatedCustomAttributes`.
 * One or more calculated attributes to use as criteria for the segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-calculatedcustomattributes.html}
 */
export type CalculatedCustomAttributes = Record<
  string,
  CalculatedAttributeDimension
>;
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.ConditionOverrides`.
 * Overrides the condition block within the original calculated attribute definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-conditionoverrides.html}
 */
export type ConditionOverrides = {
  /**
   * Defines the range to be applied to the calculated attribute definition.
   */
  Range?: RangeOverride;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.CustomAttributes`.
 * One or more custom attributes to use as criteria for the segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-customattributes.html}
 */
export type CustomAttributes = Record<string, AttributeDimension>;
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.DateDimension`.
 * Specifies date based criteria for a segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-datedimension.html}
 */
export type DateDimension = {
  /**
   * The type of segment dimension to use for a date dimension.
   */
  DimensionType: DateDimensionType;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.DateDimensionType`.
 * The type of segment dimension to use for a date dimension.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-datedimensiontype.html}
 */
export type DateDimensionType =
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON";
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.Dimension`.
 * The criteria that define the dimensions for the segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-dimension.html}
 */
export type Dimension =
  | {
      /**
       * Specifies the dimension settings within profile attributes for a segment.
       */
      ProfileAttributes: ProfileAttributes;
    }
  | {
      /**
       * One or more calculated attributes to use as criteria for the segment.
       */
      CalculatedAttributes?: CalculatedCustomAttributes;
    };
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.ExtraLengthValueProfileDimension`.
 * Specifies criteria for a segment using extended-length string values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-extralengthvalueprofiledimension.html}
 */
export type ExtraLengthValueProfileDimension = {
  /**
   * The type of segment dimension to use for a string dimension.
   */
  DimensionType: StringDimensionType;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.Group`.
 * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-group.html}
 */
export type Group = {
  Dimensions?: Dimension[];
  SourceSegments?: SourceSegment[];
  /**
   * Specifies the operator on how to handle multiple groups within the same segment.
   */
  SourceType?: IncludeOptions;
  /**
   * Specifies the operator on how to handle multiple groups within the same segment.
   */
  Type?: IncludeOptions;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.IncludeOptions`.
 * Specifies the operator on how to handle multiple groups within the same segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-includeoptions.html}
 */
export type IncludeOptions = "ALL" | "ANY" | "NONE";
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.ProfileAttributes`.
 * Specifies the dimension settings within profile attributes for a segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profileattributes.html}
 */
export type ProfileAttributes = {
  /**
   * Specifies profile based criteria for a segment.
   */
  AccountNumber?: ProfileDimension;
  /**
   * Specifies criteria for a segment using extended-length string values.
   */
  AdditionalInformation?: ExtraLengthValueProfileDimension;
  /**
   * The address based criteria for the segment.
   */
  Address?: AddressDimension;
  /**
   * One or more custom attributes to use as criteria for the segment.
   */
  Attributes?: CustomAttributes;
  /**
   * The address based criteria for the segment.
   */
  BillingAddress?: AddressDimension;
  /**
   * Specifies date based criteria for a segment.
   */
  BirthDate?: DateDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  BusinessEmailAddress?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  BusinessName?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  BusinessPhoneNumber?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  EmailAddress?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  FirstName?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  GenderString?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  HomePhoneNumber?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  LastName?: ProfileDimension;
  /**
   * The address based criteria for the segment.
   */
  MailingAddress?: AddressDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  MiddleName?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  MobilePhoneNumber?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  PartyTypeString?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  PersonalEmailAddress?: ProfileDimension;
  /**
   * Specifies profile based criteria for a segment.
   */
  PhoneNumber?: ProfileDimension;
  /**
   * The address based criteria for the segment.
   */
  ShippingAddress?: AddressDimension;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.ProfileDimension`.
 * Specifies profile based criteria for a segment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-profiledimension.html}
 */
export type ProfileDimension = {
  /**
   * The type of segment dimension to use for a string dimension.
   */
  DimensionType: StringDimensionType;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.RangeOverride`.
 * Defines the range to be applied to the calculated attribute definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-rangeoverride.html}
 */
export type RangeOverride = {
  /**
   * The ending point for this overridden range.
   * @min `0`
   * @max `366`
   */
  End?: number;
  /**
   * The starting point for this overridden range.
   * @min `1`
   * @max `366`
   */
  Start: number;
  /**
   * The unit to be applied to the range.
   */
  Unit: "DAYS";
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.SegmentGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-segmentgroup.html}
 */
export type SegmentGroup = {
  Groups?: Group[];
  /**
   * Specifies the operator on how to handle multiple groups within the same segment.
   */
  Include?: IncludeOptions;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.SourceSegment`.
 * The base segment to build the segment on.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-sourcesegment.html}
 */
export type SourceSegment = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  SegmentDefinitionName?: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.StringDimensionType`.
 * The type of segment dimension to use for a string dimension.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-stringdimensiontype.html}
 */
export type StringDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH";
/**
 * Type definition for `AWS::CustomerProfiles::SegmentDefinition.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-segmentdefinition-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::CustomerProfiles::SegmentDefinition`.
 * A segment definition resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html}
 */
export class CustomerProfilesSegmentDefinition extends $Resource<
  "AWS::CustomerProfiles::SegmentDefinition",
  CustomerProfilesSegmentDefinitionProperties,
  CustomerProfilesSegmentDefinitionAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::SegmentDefinition";
  constructor(
    logicalId: string,
    properties: CustomerProfilesSegmentDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CustomerProfilesSegmentDefinition.Type,
      properties,
      options,
    );
  }
}
