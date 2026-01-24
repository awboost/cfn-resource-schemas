import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EMRContainers::Endpoint Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-endpoint.html}
 */
export type EMRContainersEndpointProperties = {
  /**
   * The configuration overrides for the managed endpoint.
   */
  ConfigurationOverrides?: ConfigurationOverrides;
  /**
   * The execution role ARN for the managed endpoint.
   */
  ExecutionRoleArn: string;
  /**
   * The name of the managed endpoint.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[0-9A-Za-z][A-Za-z0-9\-_]*`
   */
  Name?: string;
  /**
   * The Amazon EMR release label.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[A-Za-z0-9._/-]+`
   */
  ReleaseLabel: string;
  /**
   * An array of key-value pairs to apply to this managed endpoint.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of the managed endpoint.
   */
  Type: string;
  /**
   * The ID of the virtual cluster for which the managed endpoint is created.
   */
  VirtualClusterId: string;
};
/**
 * Attribute type definition for `AWS::EMRContainers::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-endpoint.html#aws-resource-emrcontainers-endpoint-return-values}
 */
export type EMRContainersEndpointAttributes = {
  /**
   * The ARN of the managed endpoint.
   */
  Arn: string;
  /**
   * The certificate authority for the managed endpoint.
   */
  CertificateAuthority: {
    CertificateArn: string;
    CertificateData: string;
  };
  /**
   * The date and time when the managed endpoint was created.
   */
  CreatedAt: string;
  /**
   * The reason for a failed managed endpoint.
   */
  FailureReason: string;
  /**
   * The ID of the managed endpoint.
   */
  Id: string;
  /**
   * The security group associated with the managed endpoint.
   */
  SecurityGroup: string;
  /**
   * The server URL of the managed endpoint.
   */
  ServerUrl: string;
  /**
   * The state of the managed endpoint.
   */
  State: string;
  /**
   * Additional details about the state of the managed endpoint.
   */
  StateDetails: string;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.Certificate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-certificate.html}
 */
export type Certificate = {
  CertificateArn?: string;
  CertificateData?: string;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.CloudWatchMonitoringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-cloudwatchmonitoringconfiguration.html}
 */
export type CloudWatchMonitoringConfiguration = {
  LogGroupName: string;
  LogStreamNamePrefix?: string;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.ConfigurationOverrides`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-configurationoverrides.html}
 */
export type ConfigurationOverrides = {
  /**
   * @maxLength `100`
   */
  ApplicationConfiguration?: EMREKSConfiguration[];
  MonitoringConfiguration?: MonitoringConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.ContainerLogRotationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-containerlogrotationconfiguration.html}
 */
export type ContainerLogRotationConfiguration = {
  MaxFilesToKeep: number;
  RotationSize: string;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.EMREKSConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-emreksconfiguration.html}
 */
export type EMREKSConfiguration = {
  Classification: string;
  /**
   * @maxLength `100`
   */
  Configurations?: EMREKSConfiguration[];
  Properties?: Record<string, string>;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.MonitoringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-monitoringconfiguration.html}
 */
export type MonitoringConfiguration = {
  CloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
  ContainerLogRotationConfiguration?: ContainerLogRotationConfiguration;
  PersistentAppUI?: "ENABLED" | "DISABLED";
  S3MonitoringConfiguration?: S3MonitoringConfiguration;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.S3MonitoringConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-s3monitoringconfiguration.html}
 */
export type S3MonitoringConfiguration = {
  LogUri: string;
};
/**
 * Type definition for `AWS::EMRContainers::Endpoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-endpoint-tag.html}
 */
export type Tag = {
  /**
   * A user-defined key, which is the minimum required information for a valid tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A user-defined value, which is optional in a tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Schema of AWS::EMRContainers::Endpoint Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-endpoint.html}
 */
export class EMRContainersEndpoint extends $Resource<
  "AWS::EMRContainers::Endpoint",
  EMRContainersEndpointProperties,
  EMRContainersEndpointAttributes
> {
  public static readonly Type = "AWS::EMRContainers::Endpoint";
  constructor(
    logicalId: string,
    properties: EMRContainersEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EMRContainersEndpoint.Type, properties, options);
  }
}
