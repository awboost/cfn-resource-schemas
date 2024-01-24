import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OSIS::Pipeline`.
 * An OpenSearch Ingestion Service Data Prepper pipeline running Data Prepper.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html}
 */
export type OSISPipelineProperties = {
  /**
   * Key-value pairs to configure buffering.
   */
  BufferOptions?: BufferOptions;
  /**
   * Key-value pairs to configure encryption at rest.
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  /**
   * Key-value pairs to configure log publishing.
   */
  LogPublishingOptions?: LogPublishingOptions;
  /**
   * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
   * @min `1`
   * @max `24`
   */
  MaxUnits: number;
  /**
   * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
   * @min `1`
   * @max `24`
   */
  MinUnits: number;
  /**
   * The Data Prepper pipeline configuration in YAML format.
   * @minLength `1`
   * @maxLength `12000`
   */
  PipelineConfigurationBody: string;
  /**
   * Name of the OpenSearch Ingestion Service pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.
   * @minLength `3`
   * @maxLength `28`
   * @pattern `[a-z][a-z0-9\-]+`
   */
  PipelineName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
   */
  VpcOptions?: VpcOptions;
};
/**
 * Attribute type definition for `AWS::OSIS::Pipeline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#aws-resource-osis-pipeline-return-values}
 */
export type OSISPipelineAttributes = {
  /**
   * A list of endpoints that can be used for ingesting data into a pipeline
   */
  IngestEndpointUrls: string[];
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   * @minLength `46`
   * @maxLength `76`
   * @pattern `^arn:(aws|aws\-cn|aws\-us\-gov|aws\-iso|aws\-iso\-b):osis:.+:pipeline\/.+$`
   */
  PipelineArn: string;
  /**
   * The VPC interface endpoints that have access to the pipeline.
   */
  VpcEndpoints: {
    /**
     * The unique identifier of the endpoint.
     */
    VpcEndpointId: string;
    /**
     * The ID for your VPC. AWS Privatelink generates this value when you create a VPC.
     */
    VpcId: string;
    /**
     * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
     */
    VpcOptions: {
      /**
       * A list of security groups associated with the VPC endpoint.
       */
      SecurityGroupIds: string[];
      /**
       * A list of subnet IDs associated with the VPC endpoint.
       */
      SubnetIds: string[];
    };
  }[];
};
/**
 * Type definition for `AWS::OSIS::Pipeline.BufferOptions`.
 * Key-value pairs to configure buffering.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-bufferoptions.html}
 */
export type BufferOptions = {
  /**
   * Whether persistent buffering should be enabled.
   */
  PersistentBufferEnabled: boolean;
};
/**
 * Type definition for `AWS::OSIS::Pipeline.EncryptionAtRestOptions`.
 * Key-value pairs to configure encryption at rest.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-encryptionatrestoptions.html}
 */
export type EncryptionAtRestOptions = {
  /**
   * The KMS key to use for encrypting data. By default an AWS owned key is used
   */
  KmsKeyArn: string;
};
/**
 * Type definition for `AWS::OSIS::Pipeline.LogPublishingOptions`.
 * Key-value pairs to configure log publishing.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-logpublishingoptions.html}
 */
export type LogPublishingOptions = {
  /**
   * The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.
   */
  CloudWatchLogDestination?: {
    /**
     * @minLength `1`
     * @maxLength `512`
     * @pattern `\/aws\/vendedlogs\/[\.\-_/#A-Za-z0-9]+`
     */
    LogGroup: string;
  };
  /**
   * Whether logs should be published.
   */
  IsLoggingEnabled?: boolean;
};
/**
 * Type definition for `AWS::OSIS::Pipeline.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::OSIS::Pipeline.VpcEndpoint`.
 * An OpenSearch Ingestion Service-managed VPC endpoint that will access one or more pipelines.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html}
 */
export type VpcEndpoint = {
  /**
   * The unique identifier of the endpoint.
   */
  VpcEndpointId?: string;
  /**
   * The ID for your VPC. AWS Privatelink generates this value when you create a VPC.
   */
  VpcId?: string;
  /**
   * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
   */
  VpcOptions?: VpcOptions;
};
/**
 * Type definition for `AWS::OSIS::Pipeline.VpcOptions`.
 * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html}
 */
export type VpcOptions = {
  /**
   * A list of security groups associated with the VPC endpoint.
   */
  SecurityGroupIds?: string[];
  /**
   * A list of subnet IDs associated with the VPC endpoint.
   */
  SubnetIds: string[];
};
/**
 * Resource type definition for `AWS::OSIS::Pipeline`.
 * An OpenSearch Ingestion Service Data Prepper pipeline running Data Prepper.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html}
 */
export class OSISPipeline extends $Resource<
  "AWS::OSIS::Pipeline",
  OSISPipelineProperties,
  OSISPipelineAttributes
> {
  public static readonly Type = "AWS::OSIS::Pipeline";
  constructor(
    logicalId: string,
    properties: OSISPipelineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OSISPipeline.Type, properties, options);
  }
}
