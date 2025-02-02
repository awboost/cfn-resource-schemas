import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::StorageConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html}
 */
export type IVSStorageConfigurationProperties = {
  /**
   * Storage Configuration Name.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * A complex type that describes an S3 location where recorded videos will be stored.
   */
  S3: S3StorageConfiguration;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::StorageConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html#aws-resource-ivs-storageconfiguration-return-values}
 */
export type IVSStorageConfigurationAttributes = {
  /**
   * Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws[-a-z]*:ivs:[a-z0-9-]+:[0-9]+:storage-configuration/[a-zA-Z0-9-]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IVS::StorageConfiguration.S3StorageConfiguration`.
 * A complex type that describes an S3 location where recorded videos will be stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-s3storageconfiguration.html}
 */
export type S3StorageConfiguration = {
  /**
   * Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9-.]+$`
   */
  BucketName: string;
};
/**
 * Type definition for `AWS::IVS::StorageConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-storageconfiguration-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IVS::StorageConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-storageconfiguration.html}
 */
export class IVSStorageConfiguration extends $Resource<
  "AWS::IVS::StorageConfiguration",
  IVSStorageConfigurationProperties,
  IVSStorageConfigurationAttributes
> {
  public static readonly Type = "AWS::IVS::StorageConfiguration";
  constructor(
    logicalId: string,
    properties: IVSStorageConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSStorageConfiguration.Type, properties, options);
  }
}
