import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::AppRunner::ObservabilityConfiguration resource  is an AWS App Runner resource type that specifies an App Runner observability configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html}
 */
export type AppRunnerObservabilityConfigurationProperties = {
  /**
   * A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
   * @minLength `4`
   * @maxLength `32`
   * @pattern `[A-Za-z0-9][A-Za-z0-9\-_]{3,31}`
   */
  ObservabilityConfigurationName?: string;
  /**
   * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
   */
  Tags?: Tag[];
  /**
   * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
   */
  TraceConfiguration?: TraceConfiguration;
};
/**
 * Attribute type definition for `AWS::AppRunner::ObservabilityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#aws-resource-apprunner-observabilityconfiguration-return-values}
 */
export type AppRunnerObservabilityConfigurationAttributes = {
  /**
   * It's set to true for the configuration with the highest Revision among all configurations that share the same Name. It's set to false otherwise.
   */
  Latest: boolean;
  /**
   * The Amazon Resource Name (ARN) of this ObservabilityConfiguration
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
   */
  ObservabilityConfigurationArn: string;
  /**
   * The revision of this observability configuration. It's unique among all the active configurations ('Status': 'ACTIVE') that share the same ObservabilityConfigurationName.
   */
  ObservabilityConfigurationRevision: number;
};
/**
 * Type definition for `AWS::AppRunner::ObservabilityConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::AppRunner::ObservabilityConfiguration.TraceConfiguration`.
 * Describes the configuration of the tracing feature within an AWS App Runner observability configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html}
 */
export type TraceConfiguration = {
  /**
   * The implementation provider chosen for tracing App Runner services.
   */
  Vendor: "AWSXRAY";
};
/**
 * The AWS::AppRunner::ObservabilityConfiguration resource  is an AWS App Runner resource type that specifies an App Runner observability configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html}
 */
export class AppRunnerObservabilityConfiguration extends $Resource<
  "AWS::AppRunner::ObservabilityConfiguration",
  AppRunnerObservabilityConfigurationProperties,
  AppRunnerObservabilityConfigurationAttributes
> {
  public static readonly Type = "AWS::AppRunner::ObservabilityConfiguration";
  public static readonly AttributeNames = [
    "Latest" as const,
    "ObservabilityConfigurationArn" as const,
    "ObservabilityConfigurationRevision" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppRunnerObservabilityConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppRunnerObservabilityConfiguration.Type,
      properties,
      AppRunnerObservabilityConfiguration.AttributeNames,
      options,
    );
  }
}
