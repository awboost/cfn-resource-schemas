import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Oam::Link Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html}
 */
export type OamLinkProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   */
  LabelTemplate?: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  ResourceTypes: ResourceType[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  SinkIdentifier: string;
  /**
   * Tags to apply to the link
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::Oam::Link`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#aws-resource-oam-link-return-values}
 */
export type OamLinkAttributes = {
  /**
   * @maxLength `2048`
   */
  Arn: string;
  Label: string;
};
/**
 * Type definition for `AWS::Oam::Link.ResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-resourcetype.html}
 */
export type ResourceType =
  | "AWS::CloudWatch::Metric"
  | "AWS::Logs::LogGroup"
  | "AWS::XRay::Trace"
  | "AWS::ApplicationInsights::Application";
/**
 * Definition of AWS::Oam::Link Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html}
 */
export class OamLink extends $Resource<
  "AWS::Oam::Link",
  OamLinkProperties,
  OamLinkAttributes
> {
  public static readonly Type = "AWS::Oam::Link";
  public static readonly AttributeNames = ["Arn" as const, "Label" as const];
  constructor(
    logicalId: string,
    properties: OamLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OamLink.Type, properties, OamLink.AttributeNames, options);
  }
}
