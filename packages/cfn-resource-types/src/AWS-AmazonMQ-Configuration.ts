import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AmazonMQ::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html}
 */
export type AmazonMQConfigurationProperties = {
  AuthenticationStrategy?: string;
  Data: string;
  Description?: string;
  EngineType: string;
  EngineVersion: string;
  Name: string;
  Tags?: TagsEntry[];
};
/**
 * Attribute type definition for `AWS::AmazonMQ::Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configuration.html#aws-resource-amazonmq-configuration-return-values}
 */
export type AmazonMQConfigurationAttributes = {
  Arn: string;
  Id: string;
  Revision: number;
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
