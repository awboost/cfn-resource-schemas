import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::CodeBuild::ReportGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html}
 */
export type CodeBuildReportGroupProperties = {
  DeleteReports?: boolean;
  ExportConfig: ReportExportConfig;
  Name?: string;
  Tags?: Tag[];
  Type: string;
};
/**
 * Attribute type definition for `AWS::CodeBuild::ReportGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html#aws-resource-codebuild-reportgroup-return-values}
 */
export type CodeBuildReportGroupAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::CodeBuild::ReportGroup.ReportExportConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-reportexportconfig.html}
 */
export type ReportExportConfig = {
  ExportConfigType: string;
  S3Destination?: S3ReportExportConfig;
};
/**
 * Type definition for `AWS::CodeBuild::ReportGroup.S3ReportExportConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-s3reportexportconfig.html}
 */
export type S3ReportExportConfig = {
  Bucket: string;
  BucketOwner?: string;
  EncryptionDisabled?: boolean;
  EncryptionKey?: string;
  Packaging?: string;
  Path?: string;
};
/**
 * Type definition for `AWS::CodeBuild::ReportGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::CodeBuild::ReportGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html}
 */
export class CodeBuildReportGroup extends $Resource<
  "AWS::CodeBuild::ReportGroup",
  CodeBuildReportGroupProperties,
  CodeBuildReportGroupAttributes
> {
  public static readonly Type = "AWS::CodeBuild::ReportGroup";
  constructor(
    logicalId: string,
    properties: CodeBuildReportGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeBuildReportGroup.Type, properties, options);
  }
}
