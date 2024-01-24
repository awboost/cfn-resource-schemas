import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::DataQualityRuleset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html}
 */
export type GlueDataQualityRulesetProperties = {
  ClientToken?: string;
  Description?: string;
  Name?: string;
  Ruleset?: string;
  Tags?: Record<string, any>;
  TargetTable?: DataQualityTargetTable;
};
/**
 * Attribute type definition for `AWS::Glue::DataQualityRuleset`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html#aws-resource-glue-dataqualityruleset-return-values}
 */
export type GlueDataQualityRulesetAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::DataQualityRuleset.DataQualityTargetTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-dataqualityruleset-dataqualitytargettable.html}
 */
export type DataQualityTargetTable = {
  DatabaseName?: string;
  TableName?: string;
};
/**
 * Resource Type definition for AWS::Glue::DataQualityRuleset
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-dataqualityruleset.html}
 */
export class GlueDataQualityRuleset extends $Resource<
  "AWS::Glue::DataQualityRuleset",
  GlueDataQualityRulesetProperties,
  GlueDataQualityRulesetAttributes
> {
  public static readonly Type = "AWS::Glue::DataQualityRuleset";
  constructor(
    logicalId: string,
    properties: GlueDataQualityRulesetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueDataQualityRuleset.Type, properties, options);
  }
}
