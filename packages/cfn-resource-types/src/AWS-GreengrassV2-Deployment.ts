import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::GreengrassV2::Deployment`.
 * Resource for Greengrass V2 deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html}
 */
export type GreengrassV2DeploymentProperties = {
  Components?: Record<string, ComponentDeploymentSpecification>;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  DeploymentName?: string;
  DeploymentPolicies?: DeploymentPolicies;
  IotJobConfiguration?: DeploymentIoTJobConfiguration;
  /**
   * @pattern `arn:[^:]*:iot:[^:]*:[0-9]+:thinggroup/.+`
   */
  ParentTargetArn?: string;
  Tags?: Record<string, string>;
  /**
   * @pattern `arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)/.+`
   */
  TargetArn: string;
};
/**
 * Attribute type definition for `AWS::GreengrassV2::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html#aws-resource-greengrassv2-deployment-return-values}
 */
export type GreengrassV2DeploymentAttributes = {
  /**
   * @pattern `.+`
   */
  DeploymentId: string;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.ComponentConfigurationUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentconfigurationupdate.html}
 */
export type ComponentConfigurationUpdate = {
  /**
   * @minLength `1`
   * @maxLength `10485760`
   */
  Merge?: string;
  Reset?: string[];
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.ComponentDeploymentSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentdeploymentspecification.html}
 */
export type ComponentDeploymentSpecification = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  ComponentVersion?: string;
  ConfigurationUpdate?: ComponentConfigurationUpdate;
  RunWith?: ComponentRunWith;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.ComponentRunWith`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-componentrunwith.html}
 */
export type ComponentRunWith = {
  /**
   * @minLength `1`
   */
  PosixUser?: string;
  SystemResourceLimits?: SystemResourceLimits;
  /**
   * @minLength `1`
   */
  WindowsUser?: string;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.DeploymentComponentUpdatePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentcomponentupdatepolicy.html}
 */
export type DeploymentComponentUpdatePolicy = {
  Action?: "NOTIFY_COMPONENTS" | "SKIP_NOTIFY_COMPONENTS";
  /**
   * @min `1`
   * @max `2147483647`
   */
  TimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.DeploymentConfigurationValidationPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentconfigurationvalidationpolicy.html}
 */
export type DeploymentConfigurationValidationPolicy = {
  /**
   * @min `1`
   * @max `2147483647`
   */
  TimeoutInSeconds?: number;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.DeploymentIoTJobConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentiotjobconfiguration.html}
 */
export type DeploymentIoTJobConfiguration = {
  AbortConfig?: IoTJobAbortConfig;
  JobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
  TimeoutConfig?: IoTJobTimeoutConfig;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.DeploymentPolicies`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-deploymentpolicies.html}
 */
export type DeploymentPolicies = {
  ComponentUpdatePolicy?: DeploymentComponentUpdatePolicy;
  ConfigurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
  FailureHandlingPolicy?: "ROLLBACK" | "DO_NOTHING";
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobAbortConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortconfig.html}
 */
export type IoTJobAbortConfig = {
  /**
   * @minLength `1`
   */
  CriteriaList: IoTJobAbortCriteria[];
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobAbortCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobabortcriteria.html}
 */
export type IoTJobAbortCriteria = {
  Action: "CANCEL";
  FailureType: "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL";
  /**
   * @min `1`
   * @max `2147483647`
   */
  MinNumberOfExecutedThings: number;
  /**
   * @min `0`
   * @max `100`
   */
  ThresholdPercentage: number;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobExecutionsRolloutConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexecutionsrolloutconfig.html}
 */
export type IoTJobExecutionsRolloutConfig = {
  ExponentialRate?: IoTJobExponentialRolloutRate;
  /**
   * @min `1`
   * @max `1000`
   */
  MaximumPerMinute?: number;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobExponentialRolloutRate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobexponentialrolloutrate.html}
 */
export type IoTJobExponentialRolloutRate = {
  /**
   * @min `1`
   * @max `1000`
   */
  BaseRatePerMinute: number;
  /**
   * @min `1`
   * @max `5`
   */
  IncrementFactor: number;
  RateIncreaseCriteria: IoTJobRateIncreaseCriteria;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobRateIncreaseCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobrateincreasecriteria.html}
 */
export type IoTJobRateIncreaseCriteria =
  | {
      /**
       * @min `1`
       * @max `2147483647`
       */
      NumberOfNotifiedThings?: number;
    }
  | {
      /**
       * @min `1`
       * @max `2147483647`
       */
      NumberOfSucceededThings?: number;
    };
/**
 * Type definition for `AWS::GreengrassV2::Deployment.IoTJobTimeoutConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-iotjobtimeoutconfig.html}
 */
export type IoTJobTimeoutConfig = {
  /**
   * @min `0`
   * @max `2147483647`
   */
  InProgressTimeoutInMinutes?: number;
};
/**
 * Type definition for `AWS::GreengrassV2::Deployment.SystemResourceLimits`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrassv2-deployment-systemresourcelimits.html}
 */
export type SystemResourceLimits = {
  /**
   * @min `0`
   */
  Cpus?: number;
  /**
   * @min `0`
   * @max `9223372036854772000`
   */
  Memory?: number;
};
/**
 * Resource type definition for `AWS::GreengrassV2::Deployment`.
 * Resource for Greengrass V2 deployment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-deployment.html}
 */
export class GreengrassV2Deployment extends $Resource<
  "AWS::GreengrassV2::Deployment",
  GreengrassV2DeploymentProperties,
  GreengrassV2DeploymentAttributes
> {
  public static readonly Type = "AWS::GreengrassV2::Deployment";
  constructor(
    logicalId: string,
    properties: GreengrassV2DeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GreengrassV2Deployment.Type, properties, options);
  }
}
