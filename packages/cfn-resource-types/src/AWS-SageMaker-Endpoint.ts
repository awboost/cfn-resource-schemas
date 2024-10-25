import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::Endpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html}
 */
export type SageMakerEndpointProperties = {
  /**
   * Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies.
   */
  DeploymentConfig?: DeploymentConfig;
  /**
   * The name of the endpoint configuration for the SageMaker endpoint. This is a required property.
   */
  EndpointConfigName: string;
  /**
   * Specifies a list of variant properties that you want to exclude when updating an endpoint.
   */
  ExcludeRetainedVariantProperties?: VariantProperty[];
  /**
   * When set to true, retains all variant properties for an endpoint when it is updated.
   */
  RetainAllVariantProperties?: boolean;
  /**
   * When set to true, retains the deployment configuration during endpoint updates.
   */
  RetainDeploymentConfig?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SageMaker::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html#aws-resource-sagemaker-endpoint-return-values}
 */
export type SageMakerEndpointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   */
  EndpointArn: string;
  /**
   * The name of the SageMaker endpoint. This name must be unique within an AWS Region.
   */
  EndpointName: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.Alarm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html}
 */
export type Alarm = {
  /**
   * The name of the CloudWatch alarm.
   */
  AlarmName: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.AutoRollbackConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html}
 */
export type AutoRollbackConfig = {
  /**
   * List of CloudWatch alarms to monitor during the deployment. If any alarm goes off, the deployment is rolled back.
   */
  Alarms: Alarm[];
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.BlueGreenUpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html}
 */
export type BlueGreenUpdatePolicy = {
  /**
   * The maximum time allowed for the blue/green update, in seconds.
   */
  MaximumExecutionTimeoutInSeconds?: number;
  /**
   * The wait time before terminating the old endpoint during a blue/green deployment.
   */
  TerminationWaitInSeconds?: number;
  /**
   * The traffic routing configuration for the blue/green deployment.
   */
  TrafficRoutingConfiguration: TrafficRoutingConfig;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.CapacitySize`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html}
 */
export type CapacitySize = {
  /**
   * Specifies whether the `Value` is an instance count or a capacity unit.
   */
  Type: string;
  /**
   * The value representing either the number of instances or the number of capacity units.
   */
  Value: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.DeploymentConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html}
 */
export type DeploymentConfig = {
  /**
   * Configuration for automatic rollback if an error occurs during deployment.
   */
  AutoRollbackConfiguration?: AutoRollbackConfig;
  /**
   * Configuration for blue-green update deployment policies.
   */
  BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy;
  /**
   * Configuration for rolling update deployment policies.
   */
  RollingUpdatePolicy?: RollingUpdatePolicy;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.RollingUpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-rollingupdatepolicy.html}
 */
export type RollingUpdatePolicy = {
  /**
   * Specifies the maximum batch size for each rolling update.
   */
  MaximumBatchSize: CapacitySize;
  /**
   * The maximum time allowed for the rolling update, in seconds.
   */
  MaximumExecutionTimeoutInSeconds?: number;
  /**
   * The maximum batch size for rollback during an update failure.
   */
  RollbackMaximumBatchSize?: CapacitySize;
  /**
   * The time to wait between steps during the rolling update, in seconds.
   */
  WaitIntervalInSeconds: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag.
   */
  Key: string;
  /**
   * The value of the tag.
   */
  Value: string;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.TrafficRoutingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html}
 */
export type TrafficRoutingConfig = {
  /**
   * Specifies the size of the canary traffic in a canary deployment.
   */
  CanarySize?: CapacitySize;
  /**
   * Specifies the step size for linear traffic routing.
   */
  LinearStepSize?: CapacitySize;
  /**
   * Specifies the type of traffic routing (e.g., 'AllAtOnce', 'Canary', 'Linear').
   */
  Type: string;
  /**
   * Specifies the wait interval between traffic shifts, in seconds.
   */
  WaitIntervalInSeconds?: number;
};
/**
 * Type definition for `AWS::SageMaker::Endpoint.VariantProperty`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html}
 */
export type VariantProperty = {
  /**
   * The type of variant property (e.g., 'DesiredInstanceCount', 'DesiredWeight', 'DataCaptureConfig').
   */
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
  constructor(
    logicalId: string,
    properties: SageMakerEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerEndpoint.Type, properties, options);
  }
}
