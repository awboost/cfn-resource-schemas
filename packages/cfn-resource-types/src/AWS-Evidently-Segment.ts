import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Evidently::Segment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html}
 */
export type EvidentlySegmentProperties = {
  /**
   * @maxLength `160`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Pattern?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Evidently::Segment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html#aws-resource-evidently-segment-return-values}
 */
export type EvidentlySegmentAttributes = {
  /**
   * @maxLength `2048`
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Evidently::Segment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-segment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Evidently::Segment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-segment.html}
 */
export class EvidentlySegment extends $Resource<
  "AWS::Evidently::Segment",
  EvidentlySegmentProperties,
  EvidentlySegmentAttributes
> {
  public static readonly Type = "AWS::Evidently::Segment";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: EvidentlySegmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EvidentlySegment.Type,
      properties,
      EvidentlySegment.AttributeNames,
      options,
    );
  }
}
