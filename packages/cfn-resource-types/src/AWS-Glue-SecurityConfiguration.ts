import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::SecurityConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html}
 */
export type GlueSecurityConfigurationProperties = {
  EncryptionConfiguration: EncryptionConfiguration;
  Name: string;
};
/**
 * Attribute type definition for `AWS::Glue::SecurityConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#aws-resource-glue-securityconfiguration-return-values}
 */
export type GlueSecurityConfigurationAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::Glue::SecurityConfiguration.CloudWatchEncryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html}
 */
export type CloudWatchEncryption = {
  CloudWatchEncryptionMode?: string;
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::Glue::SecurityConfiguration.EncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html}
 */
export type EncryptionConfiguration = {
  CloudWatchEncryption?: CloudWatchEncryption;
  JobBookmarksEncryption?: JobBookmarksEncryption;
  S3Encryptions?: S3Encryption[];
};
/**
 * Type definition for `AWS::Glue::SecurityConfiguration.JobBookmarksEncryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html}
 */
export type JobBookmarksEncryption = {
  JobBookmarksEncryptionMode?: string;
  KmsKeyArn?: string;
};
/**
 * Type definition for `AWS::Glue::SecurityConfiguration.S3Encryption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html}
 */
export type S3Encryption = {
  KmsKeyArn?: string;
  S3EncryptionMode?: string;
};
/**
 * Resource Type definition for AWS::Glue::SecurityConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html}
 */
export class GlueSecurityConfiguration extends $Resource<
  "AWS::Glue::SecurityConfiguration",
  GlueSecurityConfigurationProperties,
  GlueSecurityConfigurationAttributes
> {
  public static readonly Type = "AWS::Glue::SecurityConfiguration";
  constructor(
    logicalId: string,
    properties: GlueSecurityConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueSecurityConfiguration.Type, properties, options);
  }
}
