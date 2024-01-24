import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::LakeFormation::DataCellsFilter`.
 * A resource schema representing a Lake Formation Data Cells Filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html}
 */
export type LakeFormationDataCellsFilterProperties = {
  /**
   * A list of columns to be included in this Data Cells Filter.
   */
  ColumnNames?: string[];
  /**
   * An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required
   */
  ColumnWildcard?: ColumnWildcard;
  /**
   * The name of the Database that the Table resides in.
   * @minLength `1`
   * @maxLength `255`
   */
  DatabaseName: string;
  /**
   * The desired name of the Data Cells Filter.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  /**
   * An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required
   */
  RowFilter?: RowFilter;
  /**
   * The Catalog Id of the Table on which to create a Data Cells Filter.
   * @minLength `12`
   * @maxLength `12`
   */
  TableCatalogId: string;
  /**
   * The name of the Table to create a Data Cells Filter for.
   * @minLength `1`
   * @maxLength `255`
   */
  TableName: string;
};
/**
 * Type definition for `AWS::LakeFormation::DataCellsFilter.ColumnWildcard`.
 * An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-columnwildcard.html}
 */
export type ColumnWildcard = {
  /**
   * A list of column names to be excluded from the Data Cells Filter.
   */
  ExcludedColumnNames?: string[];
};
/**
 * Type definition for `AWS::LakeFormation::DataCellsFilter.RowFilter`.
 * An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lakeformation-datacellsfilter-rowfilter.html}
 */
export type RowFilter = {
  /**
   * An empty object representing a row wildcard.
   */
  AllRowsWildcard?: Record<string, any>;
  /**
   * A PartiQL predicate.
   */
  FilterExpression?: string;
};
/**
 * Resource type definition for `AWS::LakeFormation::DataCellsFilter`.
 * A resource schema representing a Lake Formation Data Cells Filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datacellsfilter.html}
 */
export class LakeFormationDataCellsFilter extends $Resource<
  "AWS::LakeFormation::DataCellsFilter",
  LakeFormationDataCellsFilterProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::LakeFormation::DataCellsFilter";
  constructor(
    logicalId: string,
    properties: LakeFormationDataCellsFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LakeFormationDataCellsFilter.Type, properties, options);
  }
}
