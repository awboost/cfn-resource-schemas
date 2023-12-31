import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaTailor::LiveSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html}
 */
export type MediaTailorLiveSourceProperties = {
  /**
   * <p>A list of HTTP package configuration parameters for this live source.</p>
   */
  HttpPackageConfigurations: HttpPackageConfiguration[];
  LiveSourceName: string;
  SourceLocationName: string;
  /**
   * The tags to assign to the live source.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaTailor::LiveSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html#aws-resource-mediatailor-livesource-return-values}
 */
export type MediaTailorLiveSourceAttributes = {
  /**
   * <p>The ARN of the live source.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaTailor::LiveSource.HttpPackageConfiguration`.
 * <p>The HTTP package configuration properties for the requested VOD source.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html}
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
 * Type definition for `AWS::MediaTailor::LiveSource.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::MediaTailor::LiveSource.Type`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-type.html}
 */
export type Type = "DASH" | "HLS";
/**
 * Definition of AWS::MediaTailor::LiveSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html}
 */
export class MediaTailorLiveSource extends $Resource<
  "AWS::MediaTailor::LiveSource",
  MediaTailorLiveSourceProperties,
  MediaTailorLiveSourceAttributes
> {
  public static readonly Type = "AWS::MediaTailor::LiveSource";
  constructor(
    logicalId: string,
    properties: MediaTailorLiveSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaTailorLiveSource.Type, properties, options);
  }
}
