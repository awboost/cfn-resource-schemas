import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SageMaker::ModelCardExportJob Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcardexportjob.html}
 */
export type SageMakerModelCardExportJobProperties = {
  /**
   * The name of the model card export job.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ModelCardExportJobName: string;
  /**
   * The name or Amazon Resource Name (ARN) of the model card to export.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:model-card/.*)?([a-zA-Z0-9](-*[a-zA-Z0-9]){0,62})$`
   */
  ModelCardName: string;
  /**
   * The version of the model card to export. If a version is not provided, then the latest version of the model card is exported.
   */
  ModelCardVersion?: number;
  /**
   * The model card output configuration that specifies the Amazon S3 path for exporting.
   */
  OutputConfig: ModelCardExportOutputConfig;
};
/**
 * Attribute type definition for `AWS::SageMaker::ModelCardExportJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcardexportjob.html#aws-resource-sagemaker-modelcardexportjob-return-values}
 */
export type SageMakerModelCardExportJobAttributes = {
  /**
   * The date and time that the model card export job was created.
   */
  CreatedAt: string;
  /**
   * The exported model card artifacts.
   */
  ExportArtifacts: {
    /**
     * The Amazon S3 URI of the exported model artifacts.
     * @minLength `0`
     * @maxLength `1024`
     * @pattern `^(https|s3)://([^/]+)/?(.*)$`
     */
    S3ExportArtifacts: string;
  };
  /**
   * The date and time that the model card export job was last modified.
   */
  LastModifiedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the model card export job.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]{9,16}:[0-9]{12}:model-card/[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}/export-job/[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   */
  ModelCardExportJobArn: string;
  /**
   * The completion status of the model card export job.
   */
  Status: "InProgress" | "Completed" | "Failed";
};
/**
 * Type definition for `AWS::SageMaker::ModelCardExportJob.ModelCardExportArtifacts`.
 * The artifacts of the model card export job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcardexportjob-modelcardexportartifacts.html}
 */
export type ModelCardExportArtifacts = {
  /**
   * The Amazon S3 URI of the exported model artifacts.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3ExportArtifacts: string;
};
/**
 * Type definition for `AWS::SageMaker::ModelCardExportJob.ModelCardExportOutputConfig`.
 * Configure the export output details for an Amazon SageMaker Model Card.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelcardexportjob-modelcardexportoutputconfig.html}
 */
export type ModelCardExportOutputConfig = {
  /**
   * The Amazon S3 output path to export your model card PDF.
   * @minLength `0`
   * @maxLength `1024`
   * @pattern `^(https|s3)://([^/]+)/?(.*)$`
   */
  S3OutputPath: string;
};
/**
 * Definition of AWS::SageMaker::ModelCardExportJob Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcardexportjob.html}
 */
export class SageMakerModelCardExportJob extends $Resource<
  "AWS::SageMaker::ModelCardExportJob",
  SageMakerModelCardExportJobProperties,
  SageMakerModelCardExportJobAttributes
> {
  public static readonly Type = "AWS::SageMaker::ModelCardExportJob";
  constructor(
    logicalId: string,
    properties: SageMakerModelCardExportJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerModelCardExportJob.Type, properties, options);
  }
}
