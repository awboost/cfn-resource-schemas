import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Lambda::CapacityProvider`.
 * Creates a capacity provider that manages compute resources for Lambda functions
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-capacityprovider.html}
 */
export type LambdaCapacityProviderProperties = {
  /**
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
   * The instance requirements for compute resources managed by the capacity provider.
   */
  InstanceRequirements?: InstanceRequirements;
  /**
   * The ARN of the KMS key used to encrypt the capacity provider's resources.
   * @minLength `0`
   * @maxLength `10000`
   * @pattern `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   */
  KmsKeyArn?: string;
  /**
   * The permissions configuration for the capacity provider.
   */
  PermissionsConfig: CapacityProviderPermissionsConfig;
  /**
   * A key-value pair that provides metadata for the capacity provider.
   */
  Tags?: Tag[];
  /**
   * The VPC configuration for the capacity provider.
   */
  VpcConfig: CapacityProviderVpcConfig;
};
/**
 * Attribute type definition for `AWS::Lambda::CapacityProvider`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-capacityprovider.html#aws-resource-lambda-capacityprovider-return-values}
 */
export type LambdaCapacityProviderAttributes = {
  /**
   * @minLength `1`
   * @maxLength `140`
   * @pattern `^arn:aws[a-zA-Z-]*:lambda:(eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:\d{12}:capacity-provider:[a-zA-Z0-9-_]+$`
   */
  Arn: string;
  /**
   * The current state of the capacity provider. Indicates whether the provider is being created, is active and ready for use, has failed, or is being deleted.
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
 * Configuration that specifies the permissions required for the capacity provider to manage compute resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderpermissionsconfig.html}
 */
export type CapacityProviderPermissionsConfig = {
  /**
   * The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources.
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
 * Configuration that defines how the capacity provider scales compute instances based on demand and policies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityproviderscalingconfig.html}
 */
export type CapacityProviderScalingConfig = {
  /**
   * The maximum number of vCPUs that the capacity provider can provision across all compute instances.
   * @min `2`
   * @max `15000`
   */
  MaxVCpuCount?: number;
  /**
   * The scaling mode that determines how the capacity provider responds to changes in demand.
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
 * VPC configuration that specifies the network settings for compute instances managed by the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-capacityprovidervpcconfig.html}
 */
export type CapacityProviderVpcConfig = {
  /**
   * A list of security group IDs that control network access for compute instances managed by the capacity provider.
   * @minLength `0`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * A list of subnet IDs where the capacity provider launches compute instances.
   * @minLength `1`
   * @maxLength `16`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::Lambda::CapacityProvider.InstanceRequirements`.
 * Specifications that define the characteristics and constraints for compute instances used by the capacity provider.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-instancerequirements.html}
 */
export type InstanceRequirements = {
  /**
   * A list of EC2 instance types that the capacity provider is allowed to use. If not specified, all compatible instance types are allowed.
   * @minLength `0`
   * @maxLength `400`
   */
  AllowedInstanceTypes?: string[];
  /**
   * A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``.
   * @minLength `1`
   * @maxLength `1`
   */
  Architectures?: Architecture[];
  /**
   * A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.
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
 * A scaling policy for the capacity provider that automatically adjusts capacity to maintain a target value for a specific metric.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-capacityprovider-targettrackingscalingpolicy.html}
 */
export type TargetTrackingScalingPolicy = {
  /**
   * The predefined metric type to track for scaling decisions.
   */
  PredefinedMetricType: CapacityProviderPredefinedMetricType;
  /**
   * The target value for the metric that the scaling policy attempts to maintain through scaling actions.
   * @min `0`
   */
  TargetValue: number;
};
/**
 * Resource type definition for `AWS::Lambda::CapacityProvider`.
 * Creates a capacity provider that manages compute resources for Lambda functions
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
