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
 * Type definition for `AWS::Glue::TableOptimizer.IcebergConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-icebergconfiguration.html}
 */
export type IcebergConfiguration = {
  Location?: string;
  OrphanFileRetentionPeriodInDays?: number;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.IcebergRetentionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-icebergretentionconfiguration.html}
 */
export type IcebergRetentionConfiguration = {
  CleanExpiredFiles?: boolean;
  NumberOfSnapshotsToRetain?: number;
  SnapshotRetentionPeriodInDays?: number;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.OrphanFileDeletionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-orphanfiledeletionconfiguration.html}
 */
export type OrphanFileDeletionConfiguration = {
  IcebergConfiguration?: IcebergConfiguration;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.RetentionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-retentionconfiguration.html}
 */
export type RetentionConfiguration = {
  IcebergConfiguration?: IcebergRetentionConfiguration;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.TableOptimizerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html}
 */
export type TableOptimizerConfiguration = {
  Enabled: boolean;
  OrphanFileDeletionConfiguration?: OrphanFileDeletionConfiguration;
  RetentionConfiguration?: RetentionConfiguration;
  RoleArn: string;
  VpcConfiguration?: VpcConfiguration;
};
/**
 * Type definition for `AWS::Glue::TableOptimizer.VpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-tableoptimizer-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  GlueConnectionName?: string;
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
