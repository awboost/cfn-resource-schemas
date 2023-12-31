import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Personalize::Schema.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html}
 */
export type PersonalizeSchemaProperties = {
  /**
   * The domain of a Domain dataset group.
   */
  Domain?: "ECOMMERCE" | "VIDEO_ON_DEMAND";
  /**
   * Name for the schema.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   */
  Name: string;
  /**
   * A schema in Avro JSON format.
   * @maxLength `10000`
   */
  Schema: string;
};
/**
 * Attribute type definition for `AWS::Personalize::Schema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#aws-resource-personalize-schema-return-values}
 */
export type PersonalizeSchemaAttributes = {
  /**
   * Arn for the schema.
   * @maxLength `256`
   * @pattern `arn:([a-z\d-]+):personalize:.*:.*:.+`
   */
  SchemaArn: string;
};
/**
 * Resource schema for AWS::Personalize::Schema.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html}
 */
export class PersonalizeSchema extends $Resource<
  "AWS::Personalize::Schema",
  PersonalizeSchemaProperties,
  PersonalizeSchemaAttributes
> {
  public static readonly Type = "AWS::Personalize::Schema";
  constructor(
    logicalId: string,
    properties: PersonalizeSchemaProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PersonalizeSchema.Type, properties, options);
  }
}
