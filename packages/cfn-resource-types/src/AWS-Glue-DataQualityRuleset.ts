import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: GlueDataQualityRulesetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      GlueDataQualityRuleset.Type,
      properties,
      GlueDataQualityRuleset.AttributeNames,
      options,
    );
  }
}
