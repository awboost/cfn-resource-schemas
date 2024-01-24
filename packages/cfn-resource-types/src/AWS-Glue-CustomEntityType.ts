import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::CustomEntityType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html}
 */
export type GlueCustomEntityTypeProperties = {
  ContextWords?: string[];
  Name?: string;
  RegexString?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::Glue::CustomEntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html#aws-resource-glue-customentitytype-return-values}
 */
export type GlueCustomEntityTypeAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Glue::CustomEntityType
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-customentitytype.html}
 */
export class GlueCustomEntityType extends $Resource<
  "AWS::Glue::CustomEntityType",
  GlueCustomEntityTypeProperties,
  GlueCustomEntityTypeAttributes
> {
  public static readonly Type = "AWS::Glue::CustomEntityType";
  constructor(
    logicalId: string,
    properties: GlueCustomEntityTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueCustomEntityType.Type, properties, options);
  }
}
