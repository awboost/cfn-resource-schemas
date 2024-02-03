import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::TableOptimizer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html}
 */
export type GlueTableOptimizerProperties = {
  CatalogId: string;
  DatabaseName: string;
  TableName: string;
  TableOptimizerConfiguration: TableOptimizerConfiguration;
  Type: string;
};
/**
 * Attribute type definition for `AWS::Glue::TableOptimizer`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#aws-resource-glue-tableoptimizer-return-values}
 */
export type GlueTableOptimizerAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.TableOptimizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html}
 */
export type TableOptimizerConfiguration = {
  Enabled?: boolean;
  RoleArn?: string;
};
/**
 * Resource Type definition for AWS::Glue::TableOptimizer
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html}
 */
export class GlueTableOptimizer extends $Resource<
  "AWS::Glue::TableOptimizer",
  GlueTableOptimizerProperties,
  GlueTableOptimizerAttributes
> {
  public static readonly Type = "AWS::Glue::TableOptimizer";
  constructor(
    logicalId: string,
    properties: GlueTableOptimizerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueTableOptimizer.Type, properties, options);
  }
}
