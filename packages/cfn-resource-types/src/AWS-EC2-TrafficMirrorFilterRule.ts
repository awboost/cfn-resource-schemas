import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for for AWS::EC2::TrafficMirrorFilterRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html}
 */
export type EC2TrafficMirrorFilterRuleProperties = {
  /**
   * The description of the Traffic Mirror Filter rule.
   */
  Description?: string;
  /**
   * The destination CIDR block to assign to the Traffic Mirror rule.
   */
  DestinationCidrBlock: string;
  /**
   * The destination port range.
   */
  DestinationPortRange?: TrafficMirrorPortRange;
  /**
   * The number of protocol, for example 17 (UDP), to assign to the Traffic Mirror rule.
   */
  Protocol?: number;
  /**
   * The action to take on the filtered traffic (accept/reject).
   */
  RuleAction: string;
  /**
   * The number of the Traffic Mirror rule.
   */
  RuleNumber: number;
  /**
   * The source CIDR block to assign to the Traffic Mirror Filter rule.
   */
  SourceCidrBlock: string;
  /**
   * The source port range.
   */
  SourcePortRange?: TrafficMirrorPortRange;
  /**
   * Any tags assigned to the Traffic Mirror Filter rule.
   */
  Tags?: Tag[];
  /**
   * The direction of traffic (ingress/egress).
   */
  TrafficDirection: string;
  /**
   * The ID of the filter that this rule is associated with.
   */
  TrafficMirrorFilterId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorFilterRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html#aws-resource-ec2-trafficmirrorfilterrule-return-values}
 */
export type EC2TrafficMirrorFilterRuleAttributes = {
  /**
   * The ID of the Traffic Mirror Filter rule.
   */
  TrafficMirrorFilterRuleId: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorFilterRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorfilterrule-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorFilterRule.TrafficMirrorPortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.html}
 */
export type TrafficMirrorPortRange = {
  /**
   * The first port in the Traffic Mirror port range.
   */
  FromPort: number;
  /**
   * The last port in the Traffic Mirror port range.
   */
  ToPort: number;
};
/**
 * Resource Type definition for for AWS::EC2::TrafficMirrorFilterRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html}
 */
export class EC2TrafficMirrorFilterRule extends $Resource<
  "AWS::EC2::TrafficMirrorFilterRule",
  EC2TrafficMirrorFilterRuleProperties,
  EC2TrafficMirrorFilterRuleAttributes
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorFilterRule";
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorFilterRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TrafficMirrorFilterRule.Type, properties, options);
  }
}
