import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::NotebookInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html}
 */
export type SageMakerNotebookInstanceProperties = {
  AcceleratorTypes?: string[];
  AdditionalCodeRepositories?: string[];
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
  InstanceType: string;
  KmsKeyId?: string;
  LifecycleConfigName?: string;
  NotebookInstanceName?: string;
  PlatformIdentifier?: string;
  RoleArn: string;
  RootAccess?: string;
  SecurityGroupIds?: string[];
  SubnetId?: string;
  Tags?: Tag[];
  VolumeSizeInGB?: number;
};
/**
 * Attribute type definition for `AWS::SageMaker::NotebookInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html#aws-resource-sagemaker-notebookinstance-return-values}
 */
export type SageMakerNotebookInstanceAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::NotebookInstance.InstanceMetadataServiceConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstance-instancemetadataserviceconfiguration.html}
 */
export type InstanceMetadataServiceConfiguration = {
  MinimumInstanceMetadataServiceVersion: string;
};
/**
 * Type definition for `AWS::SageMaker::NotebookInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::NotebookInstance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstance.html}
 */
export class SageMakerNotebookInstance extends $Resource<
  "AWS::SageMaker::NotebookInstance",
  SageMakerNotebookInstanceProperties,
  SageMakerNotebookInstanceAttributes
> {
  public static readonly Type = "AWS::SageMaker::NotebookInstance";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SageMakerNotebookInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerNotebookInstance.Type,
      properties,
      SageMakerNotebookInstance.AttributeNames,
      options,
    );
  }
}
