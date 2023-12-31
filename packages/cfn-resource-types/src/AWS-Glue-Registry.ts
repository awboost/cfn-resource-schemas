import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Glue::Registry`.
 * This resource creates a Registry for authoring schemas as part of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html}
 */
export type GlueRegistryProperties = {
  /**
   * A description of the registry. If description is not provided, there will not be any default value for this.
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * List of tags to tag the Registry
   * @minLength `0`
   * @maxLength `10`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Glue::Registry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#aws-resource-glue-registry-return-values}
 */
export type GlueRegistryAttributes = {
  /**
   * Amazon Resource Name for the created Registry.
   * @pattern `arn:aws(-(cn|us-gov|iso(-[bef])?))?:glue:.*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Glue::Registry.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-registry-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Glue::Registry`.
 * This resource creates a Registry for authoring schemas as part of Glue Schema Registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html}
 */
export class GlueRegistry extends $Resource<
  "AWS::Glue::Registry",
  GlueRegistryProperties,
  GlueRegistryAttributes
> {
  public static readonly Type = "AWS::Glue::Registry";
  constructor(
    logicalId: string,
    properties: GlueRegistryProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueRegistry.Type, properties, options);
  }
}
