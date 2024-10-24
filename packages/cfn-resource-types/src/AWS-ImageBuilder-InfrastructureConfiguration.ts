import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::InfrastructureConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html}
 */
export type ImageBuilderInfrastructureConfigurationProperties = {
  /**
   * The description of the infrastructure configuration.
   */
  Description?: string;
  /**
   * The instance metadata option settings for the infrastructure configuration.
   */
  InstanceMetadataOptions?: InstanceMetadataOptions;
  /**
   * The instance profile of the infrastructure configuration.
   */
  InstanceProfileName: string;
  /**
   * The instance types of the infrastructure configuration.
   */
  InstanceTypes?: string[];
  /**
   * The EC2 key pair of the infrastructure configuration..
   */
  KeyPair?: string;
  /**
   * The logging configuration of the infrastructure configuration.
   */
  Logging?: Logging;
  /**
   * The name of the infrastructure configuration.
   */
  Name: string;
  /**
   * The placement option settings for the infrastructure configuration.
   */
  Placement?: Placement;
  /**
   * The tags attached to the resource created by Image Builder.
   */
  ResourceTags?: Record<string, string>;
  /**
   * The security group IDs of the infrastructure configuration.
   */
  SecurityGroupIds?: string[];
  /**
   * The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  SnsTopicArn?: string;
  /**
   * The subnet ID of the infrastructure configuration.
   */
  SubnetId?: string;
  /**
   * The tags associated with the component.
   */
  Tags?: Record<string, string>;
  /**
   * The terminate instance on failure configuration of the infrastructure configuration.
   */
  TerminateInstanceOnFailure?: boolean;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::InfrastructureConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html#aws-resource-imagebuilder-infrastructureconfiguration-return-values}
 */
export type ImageBuilderInfrastructureConfigurationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::ImageBuilder::InfrastructureConfiguration.InstanceMetadataOptions`.
 * The instance metadata option settings for the infrastructure configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions.html}
 */
export type InstanceMetadataOptions = {
  /**
   * Limit the number of hops that an instance metadata request can traverse to reach its destination.
   */
  HttpPutResponseHopLimit?: number;
  /**
   * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:
   */
  HttpTokens?: "required" | "optional";
};
/**
 * Type definition for `AWS::ImageBuilder::InfrastructureConfiguration.Logging`.
 * The logging configuration of the infrastructure configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-logging.html}
 */
export type Logging = {
  /**
   * The S3 path in which to store the logs.
   */
  S3Logs?: S3Logs;
};
/**
 * Type definition for `AWS::ImageBuilder::InfrastructureConfiguration.Placement`.
 * The placement options
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-placement.html}
 */
export type Placement = {
  /**
   * AvailabilityZone
   */
  AvailabilityZone?: string;
  /**
   * HostId
   */
  HostId?: string;
  /**
   * HostResourceGroupArn
   */
  HostResourceGroupArn?: string;
  /**
   * Tenancy
   */
  Tenancy?: "default" | "dedicated" | "host";
};
/**
 * Type definition for `AWS::ImageBuilder::InfrastructureConfiguration.S3Logs`.
 * The S3 path in which to store the logs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-imagebuilder-infrastructureconfiguration-s3logs.html}
 */
export type S3Logs = {
  /**
   * S3BucketName
   */
  S3BucketName?: string;
  /**
   * S3KeyPrefix
   */
  S3KeyPrefix?: string;
};
/**
 * Resource schema for AWS::ImageBuilder::InfrastructureConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-infrastructureconfiguration.html}
 */
export class ImageBuilderInfrastructureConfiguration extends $Resource<
  "AWS::ImageBuilder::InfrastructureConfiguration",
  ImageBuilderInfrastructureConfigurationProperties,
  ImageBuilderInfrastructureConfigurationAttributes
> {
  public static readonly Type =
    "AWS::ImageBuilder::InfrastructureConfiguration";
  constructor(
    logicalId: string,
    properties: ImageBuilderInfrastructureConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ImageBuilderInfrastructureConfiguration.Type,
      properties,
      options,
    );
  }
}
