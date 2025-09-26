import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BCMDataExports::Export Resource Type
 * @see {@link https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DataExports_CreateExport.html#API_DataExports_CreateExport_RequestSyntax}
 */
export type BCMDataExportsExportProperties = {
  Export: Export;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: ResourceTag[];
};
/**
 * Attribute type definition for `AWS::BCMDataExports::Export`.
 * @see {@link https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DataExports_CreateExport.html#API_DataExports_CreateExport_RequestSyntax}
 */
export type BCMDataExportsExportAttributes = {
  Export: {
    /**
     * @minLength `20`
     * @maxLength `2048`
     * @pattern `^arn:aws[-a-z0-9]*:(bcm-data-exports):[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
     */
    ExportArn: string;
  };
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z0-9]*:(bcm-data-exports):[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   */
  ExportArn: string;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.CompressionOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-compressionoption.html}
 */
export type CompressionOption = "GZIP" | "PARQUET";
/**
 * Type definition for `AWS::BCMDataExports::Export.DataQuery`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-dataquery.html}
 */
export type DataQuery = {
  /**
   * @minLength `1`
   * @maxLength `36000`
   * @pattern `^[\S\s]*$`
   */
  QueryStatement: string;
  TableConfigurations?: TableConfigurations;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.DestinationConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-destinationconfigurations.html}
 */
export type DestinationConfigurations = {
  S3Destination: S3Destination;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.Export`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-export.html}
 */
export type Export = {
  DataQuery: DataQuery;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[\S\s]*$`
   */
  Description?: string;
  DestinationConfigurations: DestinationConfigurations;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[0-9A-Za-z\-_]+$`
   */
  Name: string;
  RefreshCadence: RefreshCadence;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.FormatOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-formatoption.html}
 */
export type FormatOption = "TEXT_OR_CSV" | "PARQUET";
/**
 * Type definition for `AWS::BCMDataExports::Export.FrequencyOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-frequencyoption.html}
 */
export type FrequencyOption = "SYNCHRONOUS";
/**
 * Type definition for `AWS::BCMDataExports::Export.OverwriteOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-overwriteoption.html}
 */
export type OverwriteOption = "CREATE_NEW_REPORT" | "OVERWRITE_REPORT";
/**
 * Type definition for `AWS::BCMDataExports::Export.RefreshCadence`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-refreshcadence.html}
 */
export type RefreshCadence = {
  Frequency: FrequencyOption;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.ResourceTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.S3Destination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3destination.html}
 */
export type S3Destination = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[\S\s]*$`
   */
  S3Bucket: string;
  S3OutputConfigurations: S3OutputConfigurations;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[\S\s]*$`
   */
  S3Prefix: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^[\S\s]*$`
   */
  S3Region: string;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.S3OutputConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputconfigurations.html}
 */
export type S3OutputConfigurations = {
  Compression: CompressionOption;
  Format: FormatOption;
  OutputType: S3OutputType;
  Overwrite: OverwriteOption;
};
/**
 * Type definition for `AWS::BCMDataExports::Export.S3OutputType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-s3outputtype.html}
 */
export type S3OutputType = "CUSTOM";
/**
 * Type definition for `AWS::BCMDataExports::Export.TableConfigurations`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-tableconfigurations.html}
 */
export type TableConfigurations = Record<string, TableProperties>;
/**
 * Type definition for `AWS::BCMDataExports::Export.TableProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bcmdataexports-export-tableproperties.html}
 */
export type TableProperties = Record<string, string>;
/**
 * Definition of AWS::BCMDataExports::Export Resource Type
 * @see {@link https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DataExports_CreateExport.html#API_DataExports_CreateExport_RequestSyntax}
 */
export class BCMDataExportsExport extends $Resource<
  "AWS::BCMDataExports::Export",
  BCMDataExportsExportProperties,
  BCMDataExportsExportAttributes
> {
  public static readonly Type = "AWS::BCMDataExports::Export";
  constructor(
    logicalId: string,
    properties: BCMDataExportsExportProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BCMDataExportsExport.Type, properties, options);
  }
}
