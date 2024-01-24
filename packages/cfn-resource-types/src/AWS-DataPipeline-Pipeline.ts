import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataPipeline::Pipeline`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html}
 */
export type DataPipelinePipelineProperties = {
  /**
   * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
   */
  Activate?: boolean;
  /**
   * A description of the pipeline.
   */
  Description?: string;
  /**
   * The name of the pipeline.
   */
  Name: string;
  /**
   * The parameter objects used with the pipeline.
   */
  ParameterObjects?: ParameterObject[];
  /**
   * The parameter values used with the pipeline.
   */
  ParameterValues?: ParameterValue[];
  /**
   * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.
   */
  PipelineObjects?: PipelineObject[];
  /**
   * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
   */
  PipelineTags?: PipelineTag[];
};
/**
 * Attribute type definition for `AWS::DataPipeline::Pipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html#aws-resource-datapipeline-pipeline-return-values}
 */
export type DataPipelinePipelineAttributes = {
  PipelineId: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.Field`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html}
 */
export type Field = {
  /**
   * Specifies the name of a field for a particular object. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
   */
  Key: string;
  /**
   * A field value that you specify as an identifier of another object in the same pipeline definition.
   */
  RefValue?: string;
  /**
   * A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
   */
  StringValue?: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.ParameterAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html}
 */
export type ParameterAttribute = {
  /**
   * The field identifier.
   */
  Key: string;
  /**
   * The field value, expressed as a String.
   */
  StringValue: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.ParameterObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html}
 */
export type ParameterObject = {
  /**
   * The attributes of the parameter object.
   */
  Attributes: ParameterAttribute[];
  /**
   * The ID of the parameter object.
   */
  Id: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.ParameterValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html}
 */
export type ParameterValue = {
  /**
   * The ID of the parameter value.
   */
  Id: string;
  /**
   * The field value, expressed as a String.
   */
  StringValue: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.PipelineObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html}
 */
export type PipelineObject = {
  /**
   * Key-value pairs that define the properties of the object.
   */
  Fields: Field[];
  /**
   * The ID of the object.
   */
  Id: string;
  /**
   * The name of the object.
   */
  Name: string;
};
/**
 * Type definition for `AWS::DataPipeline::Pipeline.PipelineTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html}
 */
export type PipelineTag = {
  /**
   * The key name of a tag.
   */
  Key: string;
  /**
   * The value to associate with the key name.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::DataPipeline::Pipeline`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html}
 */
export class DataPipelinePipeline extends $Resource<
  "AWS::DataPipeline::Pipeline",
  DataPipelinePipelineProperties,
  DataPipelinePipelineAttributes
> {
  public static readonly Type = "AWS::DataPipeline::Pipeline";
  constructor(
    logicalId: string,
    properties: DataPipelinePipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataPipelinePipeline.Type, properties, options);
  }
}
