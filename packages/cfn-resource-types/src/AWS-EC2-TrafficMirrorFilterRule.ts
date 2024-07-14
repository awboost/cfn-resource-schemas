import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilterRule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html}
 */
export type EC2TrafficMirrorFilterRuleProperties = {
  Description?: string;
  DestinationCidrBlock: string;
  DestinationPortRange?: TrafficMirrorPortRange;
  Protocol?: number;
  RuleAction: string;
  RuleNumber: number;
  SourceCidrBlock: string;
  SourcePortRange?: TrafficMirrorPortRange;
  Tags?: Tag[];
  TrafficDirection: string;
  TrafficMirrorFilterId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorFilterRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html#aws-resource-ec2-trafficmirrorfilterrule-return-values}
 */
export type EC2TrafficMirrorFilterRuleAttributes = {
  Id: string;
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
  FromPort: number;
  ToPort: number;
};
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilterRule
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
