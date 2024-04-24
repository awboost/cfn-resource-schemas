import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::CUR::ReportDefinition resource creates a Cost & Usage Report with user-defined settings. You can use this resource to define settings like time granularity (hourly, daily, monthly), file format (Parquet, CSV), and S3 bucket for delivery of these reports.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html}
 */
export type CURReportDefinitionProperties = {
  /**
   * A list of manifests that you want Amazon Web Services to create for this report.
   */
  AdditionalArtifacts?: ("REDSHIFT" | "QUICKSIGHT" | "ATHENA")[];
  /**
   * A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.
   */
  AdditionalSchemaElements?: (
    | "RESOURCES"
    | "SPLIT_COST_ALLOCATION_DATA"
    | "MANUAL_DISCOUNT_COMPATIBILITY"
  )[];
  /**
   * The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `(arn:aws(-cn)?:billing::[0-9]{12}:billingview/)?[a-zA-Z0-9_\+=\.\-@].{1,30}`
   */
  BillingViewArn?: string;
  /**
   * The compression format that AWS uses for the report.
   */
  Compression: "ZIP" | "GZIP" | "Parquet";
  /**
   * The format that AWS saves the report in.
   */
  Format: "textORcsv" | "Parquet";
  /**
   * Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.
   */
  RefreshClosedReports: boolean;
  /**
   * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[0-9A-Za-z!\-_.*\'()]+`
   */
  ReportName: string;
  /**
   * Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
   */
  ReportVersioning: "CREATE_NEW_REPORT" | "OVERWRITE_REPORT";
  /**
   * The S3 bucket where AWS delivers the report.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[A-Za-z0-9_\.\-]+`
   */
  S3Bucket: string;
  /**
   * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `[0-9A-Za-z!\-_.*\'()/]*`
   */
  S3Prefix: string;
  /**
   * The region of the S3 bucket that AWS delivers the report into.
   */
  S3Region: string;
  /**
   * The granularity of the line items in the report.
   */
  TimeUnit: "HOURLY" | "DAILY" | "MONTHLY";
};
/**
 * The AWS::CUR::ReportDefinition resource creates a Cost & Usage Report with user-defined settings. You can use this resource to define settings like time granularity (hourly, daily, monthly), file format (Parquet, CSV), and S3 bucket for delivery of these reports.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html}
 */
export class CURReportDefinition extends $Resource<
  "AWS::CUR::ReportDefinition",
  CURReportDefinitionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::CUR::ReportDefinition";
  constructor(
    logicalId: string,
    properties: CURReportDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CURReportDefinition.Type, properties, options);
  }
}
