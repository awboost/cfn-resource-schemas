import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaLive::SdiSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html}
 */
export type MediaLiveSdiSourceProperties = {
  /**
   * The current state of the SdiSource.
   */
  Mode?: SdiSourceMode;
  /**
   * The name of the SdiSource.
   */
  Name: string;
  /**
   * A collection of key-value pairs.
   */
  Tags?: Tags[];
  /**
   * The interface mode of the SdiSource.
   */
  Type: SdiSourceType;
};
/**
 * Attribute type definition for `AWS::MediaLive::SdiSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html#aws-resource-medialive-sdisource-return-values}
 */
export type MediaLiveSdiSourceAttributes = {
  /**
   * The unique arn of the SdiSource.
   */
  Arn: string;
  /**
   * The unique identifier of the SdiSource.
   */
  Id: string;
  /**
   * The list of inputs currently using this SDI source.
   */
  Inputs: string[];
  /**
   * The current state of the SdiSource.
   */
  State: SdiSourceState;
};
/**
 * Type definition for `AWS::MediaLive::SdiSource.SdiSourceMode`.
 * The current state of the SdiSource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-sdisource-sdisourcemode.html}
 */
export type SdiSourceMode = "QUADRANT" | "INTERLEAVE";
/**
 * Type definition for `AWS::MediaLive::SdiSource.SdiSourceState`.
 * The current state of the SdiSource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-sdisource-sdisourcestate.html}
 */
export type SdiSourceState = "IDLE" | "IN_USE" | "DELETED";
/**
 * Type definition for `AWS::MediaLive::SdiSource.SdiSourceType`.
 * The interface mode of the SdiSource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-sdisource-sdisourcetype.html}
 */
export type SdiSourceType = "SINGLE" | "QUAD";
/**
 * Type definition for `AWS::MediaLive::SdiSource.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-sdisource-tags.html}
 */
export type Tags = {
  Key?: string;
  Value?: string;
};
/**
 * Definition of AWS::MediaLive::SdiSource Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html}
 */
export class MediaLiveSdiSource extends $Resource<
  "AWS::MediaLive::SdiSource",
  MediaLiveSdiSourceProperties,
  MediaLiveSdiSourceAttributes
> {
  public static readonly Type = "AWS::MediaLive::SdiSource";
  constructor(
    logicalId: string,
    properties: MediaLiveSdiSourceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveSdiSource.Type, properties, options);
  }
}
