import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export type AmazonMQConfigurationAssociationProperties = {
  /**
   * ID of the Broker that the configuration should be applied to
   */
  Broker: string;
  Configuration: ConfigurationId;
};
/**
 * Attribute type definition for `AWS::AmazonMQ::ConfigurationAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#aws-resource-amazonmq-configurationassociation-return-values}
 */
export type AmazonMQConfigurationAssociationAttributes = {
  /**
   * The ID of the ConfigurationAssociation Resource
   */
  Id: string;
};
/**
 * Type definition for `AWS::AmazonMQ::ConfigurationAssociation.ConfigurationId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html}
 */
export type ConfigurationId = {
  /**
   * ID of the Configuration to apply to a Broker
   */
  Id: string;
  /**
   * Revision of the Configuration to apply to a Broker
   */
  Revision: number;
};
/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export class AmazonMQConfigurationAssociation extends $Resource<
  "AWS::AmazonMQ::ConfigurationAssociation",
  AmazonMQConfigurationAssociationProperties,
  AmazonMQConfigurationAssociationAttributes
> {
  public static readonly Type = "AWS::AmazonMQ::ConfigurationAssociation";
  constructor(
    logicalId: string,
    properties: AmazonMQConfigurationAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AmazonMQConfigurationAssociation.Type,
      properties,
      options,
    );
  }
}
