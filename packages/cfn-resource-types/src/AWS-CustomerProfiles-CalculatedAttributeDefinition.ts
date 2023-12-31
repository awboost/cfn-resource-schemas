import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition`.
 * A calculated attribute definition for Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html}
 */
export type CustomerProfilesCalculatedAttributeDefinitionProperties = {
  /**
   * Mathematical expression and a list of attribute items specified in that expression.
   */
  AttributeDetails: AttributeDetails;
  /**
   * The unique name of the calculated attribute.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-]*$`
   */
  CalculatedAttributeName: string;
  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   */
  Conditions?: Conditions;
  /**
   * The description of the calculated attribute.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The display name of the calculated attribute.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_][a-zA-Z_0-9-\s]*$`
   */
  DisplayName?: string;
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * The aggregation operation to perform for the calculated attribute.
   */
  Statistic: Statistic;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html#aws-resource-customerprofiles-calculatedattributedefinition-return-values}
 */
export type CustomerProfilesCalculatedAttributeDefinitionAttributes = {
  /**
   * The timestamp of when the calculated attribute definition was created.
   */
  CreatedAt: string;
  /**
   * The timestamp of when the calculated attribute definition was most recently edited.
   */
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeDetails`.
 * Mathematical expression and a list of attribute items specified in that expression.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributedetails.html}
 */
export type AttributeDetails = {
  /**
   * A list of attribute items specified in the mathematical expression.
   * @minLength `1`
   * @maxLength `2`
   */
  Attributes: AttributeItem[];
  /**
   * Mathematical expression that is performed on attribute items provided in the attribute list. Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".
   * @minLength `1`
   * @maxLength `255`
   */
  Expression: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.AttributeItem`.
 * The details of a single attribute item specified in the mathematical expression.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-attributeitem.html}
 */
export type AttributeItem = {
  /**
   * The name of an attribute defined in a profile object type.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.Conditions`.
 * The conditions including range, object count, and threshold for the calculated attribute.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-conditions.html}
 */
export type Conditions = {
  /**
   * The number of profile objects used for the calculated attribute.
   * @min `1`
   * @max `100`
   */
  ObjectCount?: number;
  /**
   * The relative time period over which data is included in the aggregation.
   */
  Range?: Range;
  /**
   * The threshold for the calculated attribute.
   */
  Threshold?: Threshold;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.Range`.
 * The relative time period over which data is included in the aggregation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-range.html}
 */
export type Range = {
  /**
   * The unit of time.
   */
  Unit: RangeUnit;
  /**
   * The amount of time of the specified unit.
   * @min `1`
   * @max `366`
   */
  Value: number;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.RangeUnit`.
 * The unit of time.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-rangeunit.html}
 */
export type RangeUnit = "DAYS";
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.Statistic`.
 * The aggregation operation to perform for the calculated attribute.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-statistic.html}
 */
export type Statistic =
  | "FIRST_OCCURRENCE"
  | "LAST_OCCURRENCE"
  | "COUNT"
  | "SUM"
  | "MINIMUM"
  | "MAXIMUM"
  | "AVERAGE"
  | "MAX_OCCURRENCE";
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
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
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.Threshold`.
 * The threshold for the calculated attribute.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-threshold.html}
 */
export type Threshold = {
  /**
   * The operator of the threshold.
   */
  Operator: ThresholdOperator;
  /**
   * The value of the threshold.
   * @minLength `1`
   * @maxLength `255`
   */
  Value: string;
};
/**
 * Type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition.ThresholdOperator`.
 * The operator of the threshold.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-calculatedattributedefinition-thresholdoperator.html}
 */
export type ThresholdOperator =
  | "EQUAL_TO"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "NOT_EQUAL_TO";
/**
 * Resource type definition for `AWS::CustomerProfiles::CalculatedAttributeDefinition`.
 * A calculated attribute definition for Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-calculatedattributedefinition.html}
 */
export class CustomerProfilesCalculatedAttributeDefinition extends $Resource<
  "AWS::CustomerProfiles::CalculatedAttributeDefinition",
  CustomerProfilesCalculatedAttributeDefinitionProperties,
  CustomerProfilesCalculatedAttributeDefinitionAttributes
> {
  public static readonly Type =
    "AWS::CustomerProfiles::CalculatedAttributeDefinition";
  constructor(
    logicalId: string,
    properties: CustomerProfilesCalculatedAttributeDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CustomerProfilesCalculatedAttributeDefinition.Type,
      properties,
      options,
    );
  }
}
