import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lambda::CapacityProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-capacityprovider.html}
 */
export type LambdaCapacityProviderProperties = {
  /**
   * The name of the capacity provider. The name must be unique within your AWS account and region. If you don't specify a name, CloudFormation generates one.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^(arn:aws[a-zA-Z-]*:lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:capacity-provider:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+$`
   */
  CapacityProviderName?: string;
  /**
   * The scaling configuration for the capacity provider.
   */
  CapacityProviderScalingConfig?: CapacityProviderScalingConfig;
  /**
   * Specifications for the types of EC2 instances that the capacity provider can use.
   */
  InstanceRequirements?: InstanceRequirements;
  /**
   * The ARN of the AWS Key Management Service (KMS) key used by the capacity provider.
   * @minLength `0`
   * @maxLength `10000`
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  KmsKeyArn?: string;
  /**
   * IAM permissions configuration for the capacity provider.
   */
  PermissionsConfig: CapacityProviderPermissionsConfig;
  /**
   * A list of tags to apply to the capacity provider.
   */
  Tags?: Tag[];
  /**
   * VPC configuration for the capacity provider.
   */
  VpcConfig: CapacityProviderVpcConfig;
};
/**
 * Attribute type definition for `AWS::Lambda::CapacityProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-capacityprovider.html#aws-resource-lambda-capacityprovider-return-values}
 */
export type LambdaCapacityProviderAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider. This is a read-only property that is automatically generated when the capacity provider is created.
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^arn:aws[a-zA-Z-]*:lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:capacity-provider:[a-zA-Z0-9-_]+$`
   */
  Arn: string;
  /**
   * The current state of the capacity provider.
   */
  State: CapacityProviderState;
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.Architecture`.
 * Specifications for the types of EC2 instances that the capacity provider can use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-architecture.html}
 */
export type Architecture = "x86_64" | "arm64";
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderPermissionsConfig`.
 * IAM permissions configuration for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderpermissionsconfig.html}
 */
export type CapacityProviderPermissionsConfig = {
  /**
   * The ARN of the IAM role that Lambda assumes to manage the capacity provider.
   * @minLength `0`
   * @maxLength `10000`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  CapacityProviderOperatorRoleArn: string;
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderPredefinedMetricType`.
 * The predefined metric for target tracking.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderpredefinedmetrictype.html}
 */
export type CapacityProviderPredefinedMetricType =
  "LambdaCapacityProviderAverageCPUUtilization";
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderScalingConfig`.
 * The scaling configuration for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderscalingconfig.html}
 */
export type CapacityProviderScalingConfig = {
  /**
   * The maximum number of EC2 instances that the capacity provider can scale up to.
   * @min `2`
   * @max `15000`
   */
  MaxVCpuCount?: number;
  /**
   * The scaling mode for the capacity provider.
   */
  ScalingMode?: CapacityProviderScalingMode;
  /**
   * A list of target tracking scaling policies for the capacity provider.
   * @minLength `1`
   * @maxLength `10`
   */
  ScalingPolicies?: TargetTrackingScalingPolicy[];
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderScalingMode`.
 * The scaling mode for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderscalingmode.html}
 */
export type CapacityProviderScalingMode = "Auto" | "Manual";
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderState`.
 * The current state of the capacity provider. Indicates whether the provider is being created, is active and ready for use, has failed, or is being deleted.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderstate.html}
 */
export type CapacityProviderState =
  | "Pending"
  | "Active"
  | "Failed"
  | "Deleting";
/**
 * Type definition for `AWS::Lambda::CapacityProvider.CapacityProviderVpcConfig`.
 * VPC configuration for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityprovidervpcconfig.html}
 */
export type CapacityProviderVpcConfig = {
  /**
   * A list of security group IDs to associate with EC2 instances.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * A list of subnet IDs where the capacity provider can launch EC2 instances.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.InstanceRequirements`.
 * Specifications for the types of EC2 instances that the capacity provider can use.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-instancerequirements.html}
 */
export type InstanceRequirements = {
  /**
   * A list of instance types that the capacity provider can use. Supports wildcards (for example, m5.*).
   * @minLength `0`
   * @maxLength `400`
   */
  AllowedInstanceTypes?: string[];
  /**
   * The instruction set architecture for EC2 instances. Specify either x86_64 or arm64.
   * @minLength `1`
   * @maxLength `1`
   */
  Architectures?: Architecture[];
  /**
   * A list of instance types that the capacity provider should not use. Takes precedence over AllowedInstanceTypes.
   * @minLength `0`
   * @maxLength `400`
   */
  ExcludedInstanceTypes?: string[];
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.Tag`.
 * A key-value pair that provides metadata for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.TargetTrackingScalingPolicy`.
 * A target tracking scaling policy for the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-targettrackingscalingpolicy.html}
 */
export type TargetTrackingScalingPolicy = {
  /**
   * The predefined metric for target tracking.
   */
  PredefinedMetricType: CapacityProviderPredefinedMetricType;
  /**
   * The target value for the metric as a percentage (for example, 70.0 for 70%).
   * @min `0`
   */
  TargetValue: number;
};
/**
 * Resource Type definition for AWS::Lambda::CapacityProvider
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-capacityprovider.html}
 */
export class LambdaCapacityProvider extends $Resource<
  "AWS::Lambda::CapacityProvider",
  LambdaCapacityProviderProperties,
  LambdaCapacityProviderAttributes
> {
  public static readonly Type = "AWS::Lambda::CapacityProvider";
  constructor(
    logicalId: string,
    properties: LambdaCapacityProviderProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LambdaCapacityProvider.Type, properties, options);
  }
}
