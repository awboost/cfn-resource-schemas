import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export type AmazonMQConfigurationAssociationProperties = {
  Broker: string;
  Configuration: ConfigurationId;
};
/**
 * Attribute type definition for `AWS::AmazonMQ::ConfigurationAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#aws-resource-amazonmq-configurationassociation-return-values}
 */
export type AmazonMQConfigurationAssociationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::AmazonMQ::ConfigurationAssociation.ConfigurationId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html}
 */
export type ConfigurationId = {
  Id: string;
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AmazonMQConfigurationAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AmazonMQConfigurationAssociation.Type,
      properties,
      AmazonMQConfigurationAssociation.AttributeNames,
      options,
    );
  }
}
