import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::AppRunner::Service resource specifies an AppRunner Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html}
 */
export type AppRunnerServiceProperties = {
  /**
   * Autoscaling configuration ARN
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   */
  AutoScalingConfigurationArn?: string;
  /**
   * Encryption configuration (KMS key)
   */
  EncryptionConfiguration?: EncryptionConfiguration;
  /**
   * Health check configuration
   */
  HealthCheckConfiguration?: HealthCheckConfiguration;
  /**
   * Instance Configuration
   */
  InstanceConfiguration?: InstanceConfiguration;
  /**
   * Network configuration
   */
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * Service observability configuration
   */
  ObservabilityConfiguration?: ServiceObservabilityConfiguration;
  /**
   * The AppRunner Service Name.
   * @minLength `4`
   * @maxLength `40`
   * @pattern `[A-Za-z0-9][A-Za-z0-9-_]{3,39}`
   */
  ServiceName?: string;
  /**
   * Source Code configuration
   */
  SourceConfiguration: SourceConfiguration;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppRunner::Service`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#aws-resource-apprunner-service-return-values}
 */
export type AppRunnerServiceAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the AppRunner Service.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   */
  ServiceArn: string;
  /**
   * The AppRunner Service Id
   * @minLength `32`
   * @maxLength `32`
   */
  ServiceId: string;
  /**
   * The Service Url of the AppRunner Service.
   */
  ServiceUrl: string;
  /**
   * AppRunner Service status.
   */
  Status: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.AuthenticationConfiguration`.
 * Authentication Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html}
 */
export type AuthenticationConfiguration = {
  /**
   * Access Role Arn
   * @minLength `29`
   * @maxLength `1024`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:role/[\w+=,.@-]{1,64}`
   */
  AccessRoleArn?: string;
  /**
   * Connection Arn
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   */
  ConnectionArn?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.CodeConfiguration`.
 * Code Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html}
 */
export type CodeConfiguration = {
  /**
   * Code Configuration Values
   */
  CodeConfigurationValues?: CodeConfigurationValues;
  /**
   * Configuration Source
   */
  ConfigurationSource: "REPOSITORY" | "API";
};
/**
 * Type definition for `AWS::AppRunner::Service.CodeConfigurationValues`.
 * Code Configuration Values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html}
 */
export type CodeConfigurationValues = {
  /**
   * Build Command
   */
  BuildCommand?: string;
  /**
   * Port
   */
  Port?: string;
  /**
   * Runtime
   */
  Runtime:
    | "PYTHON_3"
    | "NODEJS_12"
    | "NODEJS_14"
    | "CORRETTO_8"
    | "CORRETTO_11"
    | "NODEJS_16"
    | "GO_1"
    | "DOTNET_6"
    | "PHP_81"
    | "RUBY_31"
    | "PYTHON_311"
    | "NODEJS_18";
  /**
   * The secrets and parameters that get referenced by your service as environment variables
   */
  RuntimeEnvironmentSecrets?: KeyValuePair[];
  RuntimeEnvironmentVariables?: KeyValuePair[];
  /**
   * Start Command
   */
  StartCommand?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.CodeRepository`.
 * Source Code Repository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html}
 */
export type CodeRepository = {
  /**
   * Code Configuration
   */
  CodeConfiguration?: CodeConfiguration;
  /**
   * Repository Url
   */
  RepositoryUrl: string;
  /**
   * Source Code Version
   */
  SourceCodeVersion: SourceCodeVersion;
  /**
   * Source Directory
   * @minLength `1`
   * @maxLength `4096`
   * @pattern `[^\x00]+`
   */
  SourceDirectory?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.EgressConfiguration`.
 * Network egress configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html}
 */
export type EgressConfiguration = {
  /**
   * Network egress type.
   */
  EgressType: "DEFAULT" | "VPC";
  /**
   * The Amazon Resource Name (ARN) of the App Runner VpcConnector.
   * @minLength `44`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   */
  VpcConnectorArn?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.EncryptionConfiguration`.
 * Encryption configuration (KMS key)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  /**
   * The KMS Key
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws(-[\w]+)*:kms:[a-z\-]+-[0-9]{1}:[0-9]{12}:key\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  KmsKey: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.HealthCheckConfiguration`.
 * Health check configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html}
 */
export type HealthCheckConfiguration = {
  /**
   * Health check Healthy Threshold
   * @min `1`
   * @max `20`
   */
  HealthyThreshold?: number;
  /**
   * Health check Interval
   */
  Interval?: number;
  /**
   * Health check Path
   */
  Path?: string;
  /**
   * Health Check Protocol
   */
  Protocol?: "TCP" | "HTTP";
  /**
   * Health check Timeout
   * @min `1`
   * @max `20`
   */
  Timeout?: number;
  /**
   * Health check Unhealthy Threshold
   * @min `1`
   * @max `20`
   */
  UnhealthyThreshold?: number;
};
/**
 * Type definition for `AWS::AppRunner::Service.ImageConfiguration`.
 * Image Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html}
 */
export type ImageConfiguration = {
  /**
   * Port
   */
  Port?: string;
  /**
   * The secrets and parameters that get referenced by your service as environment variables
   */
  RuntimeEnvironmentSecrets?: KeyValuePair[];
  RuntimeEnvironmentVariables?: KeyValuePair[];
  /**
   * Start Command
   */
  StartCommand?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.ImageRepository`.
 * Image Repository
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html}
 */
export type ImageRepository = {
  /**
   * Image Configuration
   */
  ImageConfiguration?: ImageConfiguration;
  /**
   * Image Identifier
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `([0-9]{12}.dkr.ecr.[a-z\-]+-[0-9]{1}.amazonaws.com\/.*)|(^public\.ecr\.aws\/.+\/.+)`
   */
  ImageIdentifier: string;
  /**
   * Image Repository Type
   */
  ImageRepositoryType: "ECR" | "ECR_PUBLIC";
};
/**
 * Type definition for `AWS::AppRunner::Service.IngressConfiguration`.
 * Network ingress configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-ingressconfiguration.html}
 */
export type IngressConfiguration = {
  /**
   * It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.
   */
  IsPubliclyAccessible: boolean;
};
/**
 * Type definition for `AWS::AppRunner::Service.InstanceConfiguration`.
 * Instance Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html}
 */
export type InstanceConfiguration = {
  /**
   * CPU
   * @minLength `3`
   * @maxLength `9`
   * @pattern `256|512|1024|2048|4096|(0.25|0.5|1|2|4) vCPU`
   */
  Cpu?: string;
  /**
   * Instance Role Arn
   * @minLength `29`
   * @maxLength `1024`
   * @pattern `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:role/[\w+=,.@-]{1,64}`
   */
  InstanceRoleArn?: string;
  /**
   * Memory
   * @minLength `3`
   * @maxLength `6`
   * @pattern `512|1024|2048|3072|4096|6144|8192|10240|12288|(0.5|1|2|3|4|6|8|10|12) GB`
   */
  Memory?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.KeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html}
 */
export type KeyValuePair = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.NetworkConfiguration`.
 * Network configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html}
 */
export type NetworkConfiguration = {
  /**
   * Network egress configuration
   */
  EgressConfiguration?: EgressConfiguration;
  /**
   * Network ingress configuration
   */
  IngressConfiguration?: IngressConfiguration;
  /**
   * App Runner service endpoint IP address type
   */
  IpAddressType?: "IPV4" | "DUAL_STACK";
};
/**
 * Type definition for `AWS::AppRunner::Service.ServiceObservabilityConfiguration`.
 * Service observability configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html}
 */
export type ServiceObservabilityConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
   */
  ObservabilityConfigurationArn?: string;
  /**
   * Observability enabled
   */
  ObservabilityEnabled: boolean;
};
/**
 * Type definition for `AWS::AppRunner::Service.SourceCodeVersion`.
 * Source Code Version
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html}
 */
export type SourceCodeVersion = {
  /**
   * Source Code Version Type
   */
  Type: "BRANCH";
  /**
   * Source Code Version Value
   */
  Value: string;
};
/**
 * Type definition for `AWS::AppRunner::Service.SourceConfiguration`.
 * Source Code configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html}
 */
export type SourceConfiguration = {
  /**
   * Authentication Configuration
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;
  /**
   * Auto Deployment enabled
   */
  AutoDeploymentsEnabled?: boolean;
  /**
   * Source Code Repository
   */
  CodeRepository?: CodeRepository;
  /**
   * Image Repository
   */
  ImageRepository?: ImageRepository;
};
/**
 * Type definition for `AWS::AppRunner::Service.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * The AWS::AppRunner::Service resource specifies an AppRunner Service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html}
 */
export class AppRunnerService extends $Resource<
  "AWS::AppRunner::Service",
  AppRunnerServiceProperties,
  AppRunnerServiceAttributes
> {
  public static readonly Type = "AWS::AppRunner::Service";
  constructor(
    logicalId: string,
    properties: AppRunnerServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppRunnerService.Type, properties, options);
  }
}
