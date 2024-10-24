import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::EncoderConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html}
 */
export type IVSEncoderConfigurationProperties = {
  /**
   * Encoder configuration name.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps
   */
  Video?: {
    /**
     * Bitrate for generated output, in bps. Default: 2500000.
     * @min `1`
     * @max `8500000`
     */
    Bitrate?: number;
    /**
     * Video frame rate, in fps. Default: 30.
     * @min `1`
     * @max `60`
     */
    Framerate?: number;
    /**
     * Video-resolution height. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
     * @min `2`
     * @max `1920`
     */
    Height?: number;
    /**
     * Video-resolution width. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.
     * @min `2`
     * @max `1920`
     */
    Width?: number;
  };
};
/**
 * Attribute type definition for `AWS::IVS::EncoderConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html#aws-resource-ivs-encoderconfiguration-return-values}
 */
export type IVSEncoderConfigurationAttributes = {
  /**
   * Encoder configuration identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:encoder-configuration/[a-zA-Z0-9-]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IVS::EncoderConfiguration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-encoderconfiguration-tag.html}
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
 * Resource Type definition for AWS::IVS::EncoderConfiguration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-encoderconfiguration.html}
 */
export class IVSEncoderConfiguration extends $Resource<
  "AWS::IVS::EncoderConfiguration",
  IVSEncoderConfigurationProperties,
  IVSEncoderConfigurationAttributes
> {
  public static readonly Type = "AWS::IVS::EncoderConfiguration";
  constructor(
    logicalId: string,
    properties: IVSEncoderConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSEncoderConfiguration.Type, properties, options);
  }
}
