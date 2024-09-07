import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Batch::ComputeEnvironment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html}
 */
export type BatchComputeEnvironmentProperties = {
  ComputeEnvironmentName?: string;
  ComputeResources?: ComputeResources;
  Context?: string;
  EksConfiguration?: EksConfiguration;
  ReplaceComputeEnvironment?: boolean;
  ServiceRole?: string;
  State?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  Type: string;
  UnmanagedvCpus?: number;
  UpdatePolicy?: UpdatePolicy;
};
/**
 * Attribute type definition for `AWS::Batch::ComputeEnvironment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html#aws-resource-batch-computeenvironment-return-values}
 */
export type BatchComputeEnvironmentAttributes = {
  ComputeEnvironmentArn: string;
};
/**
 * Type definition for `AWS::Batch::ComputeEnvironment.ComputeResources`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html}
 */
export type ComputeResources = {
  AllocationStrategy?: string;
  BidPercentage?: number;
  DesiredvCpus?: number;
  Ec2Configuration?: Ec2ConfigurationObject[];
  Ec2KeyPair?: string;
  ImageId?: string;
  InstanceRole?: string;
  InstanceTypes?: string[];
  LaunchTemplate?: LaunchTemplateSpecification;
  MaxvCpus: number;
  MinvCpus?: number;
  PlacementGroup?: string;
  SecurityGroupIds?: string[];
  SpotIamFleetRole?: string;
  Subnets: string[];
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Record<string, string>;
  Type: string;
  UpdateToLatestImageVersion?: boolean;
};
/**
 * Type definition for `AWS::Batch::ComputeEnvironment.Ec2ConfigurationObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-ec2configurationobject.html}
 */
export type Ec2ConfigurationObject = {
  ImageIdOverride?: string;
  ImageKubernetesVersion?: string;
  ImageType: string;
};
/**
 * Type definition for `AWS::Batch::ComputeEnvironment.EksConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-eksconfiguration.html}
 */
export type EksConfiguration = {
  EksClusterArn: string;
  KubernetesNamespace: string;
};
/**
 * Type definition for `AWS::Batch::ComputeEnvironment.LaunchTemplateSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-launchtemplatespecification.html}
 */
export type LaunchTemplateSpecification = {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
};
/**
 * Type definition for `AWS::Batch::ComputeEnvironment.UpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-updatepolicy.html}
 */
export type UpdatePolicy = {
  JobExecutionTimeoutMinutes?: number;
  TerminateJobsOnUpdate?: boolean;
};
/**
 * Resource Type definition for AWS::Batch::ComputeEnvironment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html}
 */
export class BatchComputeEnvironment extends $Resource<
  "AWS::Batch::ComputeEnvironment",
  BatchComputeEnvironmentProperties,
  BatchComputeEnvironmentAttributes
> {
  public static readonly Type = "AWS::Batch::ComputeEnvironment";
  constructor(
    logicalId: string,
    properties: BatchComputeEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BatchComputeEnvironment.Type, properties, options);
  }
}
