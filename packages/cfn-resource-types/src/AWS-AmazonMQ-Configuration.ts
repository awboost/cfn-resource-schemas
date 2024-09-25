import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AmazonMQ::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html}
 */
export type AmazonMQConfigurationProperties = {
  /**
   * The authentication strategy associated with the configuration. The default is SIMPLE.
   */
  AuthenticationStrategy?: string;
  /**
   * The base64-encoded XML configuration.
   */
  Data: string;
  /**
   * The description of the configuration.
   */
  Description?: string;
  /**
   * The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
   */
  EngineType: string;
  /**
   * The version of the broker engine.
   */
  EngineVersion?: string;
  /**
   * The name of the configuration.
   */
  Name: string;
  /**
   * Create tags when creating the configuration.
   */
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::AmazonMQ::Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#aws-resource-amazonmq-configuration-return-values}
 */
export type AmazonMQConfigurationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon MQ configuration.
   */
  Arn: string;
  /**
   * The ID of the Amazon MQ configuration.
   */
  Id: string;
  /**
   * The revision number of the configuration.
   */
  Revision: string;
};
/**
 * Type definition for `AWS::AmazonMQ::Configuration.TagsEntry`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configuration-tagsentry.html}
 */
export type TagsEntry = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::AmazonMQ::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html}
 */
export class AmazonMQConfiguration extends $Resource<
  "AWS::AmazonMQ::Configuration",
  AmazonMQConfigurationProperties,
  AmazonMQConfigurationAttributes
> {
  public static readonly Type = "AWS::AmazonMQ::Configuration";
  constructor(
    logicalId: string,
    properties: AmazonMQConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AmazonMQConfiguration.Type, properties, options);
  }
}
