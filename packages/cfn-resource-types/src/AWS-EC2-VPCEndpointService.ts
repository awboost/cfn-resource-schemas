import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCEndpointService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export type EC2VPCEndpointServiceProperties = {
  AcceptanceRequired?: boolean;
  ContributorInsightsEnabled?: boolean;
  GatewayLoadBalancerArns?: string[];
  NetworkLoadBalancerArns?: string[];
  PayerResponsibility?: string;
  /**
   * The tags to add to the VPC endpoint service.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::VPCEndpointService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#aws-resource-ec2-vpcendpointservice-return-values}
 */
export type EC2VPCEndpointServiceAttributes = {
  ServiceId: string;
};
/**
 * Type definition for `AWS::EC2::VPCEndpointService.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpcendpointservice-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::VPCEndpointService
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export class EC2VPCEndpointService extends $Resource<
  "AWS::EC2::VPCEndpointService",
  EC2VPCEndpointServiceProperties,
  EC2VPCEndpointServiceAttributes
> {
  public static readonly Type = "AWS::EC2::VPCEndpointService";
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCEndpointService.Type, properties, options);
  }
}
