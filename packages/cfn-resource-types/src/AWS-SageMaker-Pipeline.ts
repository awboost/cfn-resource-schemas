import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export type SageMakerPipelineProperties = {
  ParallelismConfiguration?: {
    /**
     * Maximum parallel execution steps
     * @min `1`
     */
    MaxParallelExecutionSteps: number;
  };
  PipelineDefinition:
    | {
        /**
         * A specification that defines the pipeline in JSON format.
         */
        PipelineDefinitionBody: string;
      }
    | {
        PipelineDefinitionS3Location: S3Location;
      };
  /**
   * The description of the Pipeline.
   * @maxLength `3072`
   */
  PipelineDescription?: string;
  /**
   * The display name of the Pipeline.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  PipelineDisplayName?: string;
  /**
   * The name of the Pipeline.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  PipelineName: string;
  /**
   * Role Arn
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::SageMaker::Pipeline.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-s3location.html}
 */
export type S3Location = {
  /**
   * The name of the S3 bucket where the PipelineDefinition file is stored.
   */
  Bucket: string;
  /**
   * The Amazon S3 ETag (a file checksum) of the PipelineDefinition file. If you don't specify a value, SageMaker skips ETag validation of your PipelineDefinition file.
   */
  ETag?: string;
  /**
   * The file name of the PipelineDefinition file (Amazon S3 object name).
   */
  Key: string;
  /**
   * For versioning-enabled buckets, a specific version of the PipelineDefinition file.
   */
  Version?: string;
};
/**
 * Type definition for `AWS::SageMaker::Pipeline.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-pipeline-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Pipeline
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export class SageMakerPipeline extends $Resource<
  "AWS::SageMaker::Pipeline",
  SageMakerPipelineProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::Pipeline";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SageMakerPipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerPipeline.Type,
      properties,
      SageMakerPipeline.AttributeNames,
      options,
    );
  }
}
