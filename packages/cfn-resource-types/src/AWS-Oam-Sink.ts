import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Oam::Sink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html}
 */
export type OamSinkProperties = {
  /**
   * The name of the ObservabilityAccessManager Sink.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  Name: string;
  /**
   * The policy of this ObservabilityAccessManager Sink.
   */
  Policy?: Record<string, any>;
  /**
   * Tags to apply to the sink
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Oam::Sink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html#aws-resource-oam-sink-return-values}
 */
export type OamSinkAttributes = {
  /**
   * The Amazon resource name (ARN) of the ObservabilityAccessManager Sink
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::Oam::Sink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-sink.html}
 */
export class OamSink extends $Resource<
  "AWS::Oam::Sink",
  OamSinkProperties,
  OamSinkAttributes
> {
  public static readonly Type = "AWS::Oam::Sink";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: OamSinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OamSink.Type, properties, OamSink.AttributeNames, options);
  }
}
