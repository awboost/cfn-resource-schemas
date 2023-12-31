import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MSK::Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html}
 */
export type MSKConfigurationProperties = {
  Description?: string;
  KafkaVersionsList?: string[];
  LatestRevision?: LatestRevision;
  Name: string;
  ServerProperties: string;
};
/**
 * Attribute type definition for `AWS::MSK::Configuration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#aws-resource-msk-configuration-return-values}
 */
export type MSKConfigurationAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::MSK::Configuration.LatestRevision`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-configuration-latestrevision.html}
 */
export type LatestRevision = {
  CreationTime?: string;
  Description?: string;
  Revision?: number;
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
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: MSKConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MSKConfiguration.Type,
      properties,
      MSKConfiguration.AttributeNames,
      options,
    );
  }
}
