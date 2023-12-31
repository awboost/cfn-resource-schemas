import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaTailor::VodSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html}
 */
export type MediaTailorVodSourceProperties = {
  /**
   * <p>A list of HTTP package configuration parameters for this VOD source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[];
  SourceLocationName: string;
  /**
   * The tags to assign to the VOD source.
   */
  Tags?: Tag[];
  VodSourceName: string;
};
/**
 * Attribute type definition for `AWS::MediaTailor::VodSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html#aws-resource-mediatailor-vodsource-return-values}
 */
export type MediaTailorVodSourceAttributes = {
  /**
   * <p>The ARN of the VOD source.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaTailor::VodSource.HttpPackageConfiguration`.
 * <p>The HTTP package configuration properties for the requested VOD source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html}
 */
export type HttpPackageConfiguration = {
  /**
   * <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
   */
  Path: string;
  /**
   * <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
   */
  SourceGroup: string;
  Type: Type;
};
/**
 * Type definition for `AWS::MediaTailor::VodSource.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::MediaTailor::VodSource.Type`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-type.html}
 */
export type Type = "DASH" | "HLS";
/**
 * Definition of AWS::MediaTailor::VodSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html}
 */
export class MediaTailorVodSource extends $Resource<
  "AWS::MediaTailor::VodSource",
  MediaTailorVodSourceProperties,
  MediaTailorVodSourceAttributes
> {
  public static readonly Type = "AWS::MediaTailor::VodSource";
  constructor(
    logicalId: string,
    properties: MediaTailorVodSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaTailorVodSource.Type, properties, options);
  }
}
