import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EntityResolution::SchemaMapping`.
 * SchemaMapping defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html}
 */
export type EntityResolutionSchemaMappingProperties = {
  /**
   * The description of the SchemaMapping
   * @minLength `0`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The SchemaMapping attributes input
   * @minLength `2`
   * @maxLength `35`
   */
  MappedInputFields: SchemaInputAttribute[];
  /**
   * The name of the SchemaMapping
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9-]*$`
   */
  SchemaName: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EntityResolution::SchemaMapping`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#aws-resource-entityresolution-schemamapping-return-values}
 */
export type EntityResolutionSchemaMappingAttributes = {
  /**
   * The time of this SchemaMapping got created
   */
  CreatedAt: string;
  /**
   * The boolean value that indicates whether or not a SchemaMapping has MatchingWorkflows that are associated with
   */
  HasWorkflows: boolean;
  /**
   * The SchemaMapping arn associated with the Schema
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(schemamapping/.*)$`
   */
  SchemaArn: string;
  /**
   * The time of this SchemaMapping got last updated at
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::EntityResolution::SchemaMapping.SchemaAttributeType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemaattributetype.html}
 */
export type SchemaAttributeType =
  | "NAME"
  | "NAME_FIRST"
  | "NAME_MIDDLE"
  | "NAME_LAST"
  | "ADDRESS"
  | "ADDRESS_STREET1"
  | "ADDRESS_STREET2"
  | "ADDRESS_STREET3"
  | "ADDRESS_CITY"
  | "ADDRESS_STATE"
  | "ADDRESS_COUNTRY"
  | "ADDRESS_POSTALCODE"
  | "PHONE"
  | "PHONE_NUMBER"
  | "PHONE_COUNTRYCODE"
  | "EMAIL_ADDRESS"
  | "UNIQUE_ID"
  | "DATE"
  | "STRING"
  | "PROVIDER_ID";
/**
 * Type definition for `AWS::EntityResolution::SchemaMapping.SchemaInputAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-schemainputattribute.html}
 */
export type SchemaInputAttribute = {
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9- \t]*$`
   */
  FieldName: string;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9- \t]*$`
   */
  GroupName?: string;
  Hashed?: boolean;
  /**
   * @minLength `0`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_0-9- \t]*$`
   */
  MatchKey?: string;
  /**
   * The subtype of the Attribute. Would be required only when type is PROVIDER_ID
   */
  SubType?: string;
  Type: SchemaAttributeType;
};
/**
 * Type definition for `AWS::EntityResolution::SchemaMapping.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-entityresolution-schemamapping-tag.html}
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
 * Resource type definition for `AWS::EntityResolution::SchemaMapping`.
 * SchemaMapping defined in AWS Entity Resolution service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html}
 */
export class EntityResolutionSchemaMapping extends $Resource<
  "AWS::EntityResolution::SchemaMapping",
  EntityResolutionSchemaMappingProperties,
  EntityResolutionSchemaMappingAttributes
> {
  public static readonly Type = "AWS::EntityResolution::SchemaMapping";
  constructor(
    logicalId: string,
    properties: EntityResolutionSchemaMappingProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EntityResolutionSchemaMapping.Type, properties, options);
  }
}
