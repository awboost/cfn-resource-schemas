import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::KafkaConnect::CustomPlugin`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html}
 */
export type KafkaConnectCustomPluginProperties = {
  /**
   * The type of the plugin file.
   */
  ContentType: "JAR" | "ZIP";
  /**
   * A summary description of the custom plugin.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * Information about the location of a custom plugin.
   */
  Location: CustomPluginLocation;
  /**
   * The name of the custom plugin.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::KafkaConnect::CustomPlugin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html#aws-resource-kafkaconnect-customplugin-return-values}
 */
export type KafkaConnectCustomPluginAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin to use.
   * @pattern `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   */
  CustomPluginArn: string;
  /**
   * Details about the custom plugin file.
   */
  FileDescription: {
    /**
     * The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.
     */
    FileMd5: string;
    /**
     * The size in bytes of the custom plugin file. You can use it to validate the file.
     */
    FileSize: number;
  };
  /**
   * The revision of the custom plugin.
   */
  Revision: number;
};
/**
 * Type definition for `AWS::KafkaConnect::CustomPlugin.CustomPluginFileDescription`.
 * Details about the custom plugin file.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginfiledescription.html}
 */
export type CustomPluginFileDescription = {
  /**
   * The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.
   */
  FileMd5?: string;
  /**
   * The size in bytes of the custom plugin file. You can use it to validate the file.
   */
  FileSize?: number;
};
/**
 * Type definition for `AWS::KafkaConnect::CustomPlugin.CustomPluginLocation`.
 * Information about the location of a custom plugin.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-custompluginlocation.html}
 */
export type CustomPluginLocation = {
  /**
   * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
   */
  S3Location: S3Location;
};
/**
 * Type definition for `AWS::KafkaConnect::CustomPlugin.S3Location`.
 * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-s3location.html}
 */
export type S3Location = {
  /**
   * The Amazon Resource Name (ARN) of an S3 bucket.
   */
  BucketArn: string;
  /**
   * The file key for an object in an S3 bucket.
   */
  FileKey: string;
  /**
   * The version of an object in an S3 bucket.
   */
  ObjectVersion?: string;
};
/**
 * Type definition for `AWS::KafkaConnect::CustomPlugin.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-customplugin-tag.html}
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
 * Resource type definition for `AWS::KafkaConnect::CustomPlugin`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-customplugin.html}
 */
export class KafkaConnectCustomPlugin extends $Resource<
  "AWS::KafkaConnect::CustomPlugin",
  KafkaConnectCustomPluginProperties,
  KafkaConnectCustomPluginAttributes
> {
  public static readonly Type = "AWS::KafkaConnect::CustomPlugin";
  constructor(
    logicalId: string,
    properties: KafkaConnectCustomPluginProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KafkaConnectCustomPlugin.Type, properties, options);
  }
}
