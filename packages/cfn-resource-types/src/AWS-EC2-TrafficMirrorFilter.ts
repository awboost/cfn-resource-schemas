import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html}
 */
export type EC2TrafficMirrorFilterProperties = {
  Description?: string;
  NetworkServices?: string[];
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::TrafficMirrorFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#aws-resource-ec2-trafficmirrorfilter-return-values}
 */
export type EC2TrafficMirrorFilterAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::EC2::TrafficMirrorFilter.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-trafficmirrorfilter-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html}
 */
export class EC2TrafficMirrorFilter extends $Resource<
  "AWS::EC2::TrafficMirrorFilter",
  EC2TrafficMirrorFilterProperties,
  EC2TrafficMirrorFilterAttributes
> {
  public static readonly Type = "AWS::EC2::TrafficMirrorFilter";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2TrafficMirrorFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TrafficMirrorFilter.Type,
      properties,
      EC2TrafficMirrorFilter.AttributeNames,
      options,
    );
  }
}
