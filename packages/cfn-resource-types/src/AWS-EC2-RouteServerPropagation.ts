import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::RouteServerPropagation`.
 * VPC Route Server Propagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpropagation.html}
 */
export type EC2RouteServerPropagationProperties = {
  /**
   * Route Server ID
   */
  RouteServerId: string;
  /**
   * Route Table ID
   */
  RouteTableId: string;
};
/**
 * Resource type definition for `AWS::EC2::RouteServerPropagation`.
 * VPC Route Server Propagation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpropagation.html}
 */
export class EC2RouteServerPropagation extends $Resource<
  "AWS::EC2::RouteServerPropagation",
  EC2RouteServerPropagationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::RouteServerPropagation";
  constructor(
    logicalId: string,
    properties: EC2RouteServerPropagationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2RouteServerPropagation.Type, properties, options);
  }
}
