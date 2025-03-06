import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  LinkConfiguration?: LinkConfiguration;
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
 * Type definition for `AWS::Oam::Link.LinkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkconfiguration.html}
 */
export type LinkConfiguration = {
  LogGroupConfiguration?: LinkFilter;
  MetricConfiguration?: LinkFilter;
};
/**
 * Type definition for `AWS::Oam::Link.LinkFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-linkfilter.html}
 */
export type LinkFilter = {
  /**
   * @minLength `1`
   * @maxLength `2000`
   */
  Filter: string;
};
/**
 * Type definition for `AWS::Oam::Link.ResourceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-oam-link-resourcetype.html}
 */
export type ResourceType =
  | "AWS::CloudWatch::Metric"
  | "AWS::Logs::LogGroup"
  | "AWS::XRay::Trace"
  | "AWS::ApplicationInsights::Application"
  | "AWS::InternetMonitor::Monitor"
  | "AWS::ApplicationSignals::Service"
  | "AWS::ApplicationSignals::ServiceLevelObjective";
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
  constructor(
    logicalId: string,
    properties: OamLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OamLink.Type, properties, options);
  }
}
