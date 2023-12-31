import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SageMaker::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html}
 */
export type SageMakerEndpointProperties = {
  DeploymentConfig?: DeploymentConfig;
  EndpointConfigName: string;
  EndpointName?: string;
  ExcludeRetainedVariantProperties?: VariantProperty[];
  RetainAllVariantProperties?: boolean;
  RetainDeploymentConfig?: boolean;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#aws-resource-sagemaker-endpoint-return-values}
 */
export type SageMakerEndpointAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.Alarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html}
 */
export type Alarm = {
  AlarmName: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.AutoRollbackConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html}
 */
export type AutoRollbackConfig = {
  Alarms: Alarm[];
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.BlueGreenUpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html}
 */
export type BlueGreenUpdatePolicy = {
  MaximumExecutionTimeoutInSeconds?: number;
  TerminationWaitInSeconds?: number;
  TrafficRoutingConfiguration: TrafficRoutingConfig;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.CapacitySize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html}
 */
export type CapacitySize = {
  Type: string;
  Value: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.DeploymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html}
 */
export type DeploymentConfig = {
  AutoRollbackConfiguration?: AutoRollbackConfig;
  BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy;
  RollingUpdatePolicy?: RollingUpdatePolicy;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.RollingUpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html}
 */
export type RollingUpdatePolicy = {
  MaximumBatchSize: CapacitySize;
  MaximumExecutionTimeoutInSeconds?: number;
  RollbackMaximumBatchSize?: CapacitySize;
  WaitIntervalInSeconds: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.TrafficRoutingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html}
 */
export type TrafficRoutingConfig = {
  CanarySize?: CapacitySize;
  LinearStepSize?: CapacitySize;
  Type: string;
  WaitIntervalInSeconds?: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.VariantProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html}
 */
export type VariantProperty = {
  VariantPropertyType?: string;
};
/**
 * Resource Type definition for AWS::SageMaker::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html}
 */
export class SageMakerEndpoint extends $Resource<
  "AWS::SageMaker::Endpoint",
  SageMakerEndpointProperties,
  SageMakerEndpointAttributes
> {
  public static readonly Type = "AWS::SageMaker::Endpoint";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SageMakerEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerEndpoint.Type,
      properties,
      SageMakerEndpoint.AttributeNames,
      options,
    );
  }
}
