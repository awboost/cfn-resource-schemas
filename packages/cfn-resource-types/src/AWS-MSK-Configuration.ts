import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html}
 */
export type MSKConfigurationProperties = {
  Description?: string;
  KafkaVersionsList?: string[];
  Name: string;
  ServerProperties: string;
};
/**
 * Attribute type definition for `AWS::MSK::Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#aws-resource-msk-configuration-return-values}
 */
export type MSKConfigurationAttributes = {
  Arn: string;
  LatestRevision: {
    CreationTime: string;
    Description: string;
    Revision: number;
  };
};
/**
 * Resource Type definition for AWS::MSK::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html}
 */
export class MSKConfiguration extends $Resource<
  "AWS::MSK::Configuration",
  MSKConfigurationProperties,
  MSKConfigurationAttributes
> {
  public static readonly Type = "AWS::MSK::Configuration";
  constructor(
    logicalId: string,
    properties: MSKConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKConfiguration.Type, properties, options);
  }
}
