import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::KafkaConnect::WorkerConfiguration`.
 * The configuration of the workers, which are the processes that run the connector logic.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html}
 */
export type KafkaConnectWorkerConfigurationProperties = {
  /**
   * A summary description of the worker configuration.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The name of the worker configuration.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * Base64 encoded contents of connect-distributed.properties file.
   */
  PropertiesFileContent: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KafkaConnect::WorkerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html#aws-resource-kafkaconnect-workerconfiguration-return-values}
 */
export type KafkaConnectWorkerConfigurationAttributes = {
  /**
   * The description of a revision of the worker configuration.
   */
  Revision: number;
  /**
   * The Amazon Resource Name (ARN) of the custom configuration.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   */
  WorkerConfigurationArn: string;
};
/**
 * Type definition for `AWS::KafkaConnect::WorkerConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-workerconfiguration-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::KafkaConnect::WorkerConfiguration`.
 * The configuration of the workers, which are the processes that run the connector logic.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-workerconfiguration.html}
 */
export class KafkaConnectWorkerConfiguration extends $Resource<
  "AWS::KafkaConnect::WorkerConfiguration",
  KafkaConnectWorkerConfigurationProperties,
  KafkaConnectWorkerConfigurationAttributes
> {
  public static readonly Type = "AWS::KafkaConnect::WorkerConfiguration";
  constructor(
    logicalId: string,
    properties: KafkaConnectWorkerConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KafkaConnectWorkerConfiguration.Type, properties, options);
  }
}
