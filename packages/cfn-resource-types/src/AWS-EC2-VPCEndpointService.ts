import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
};
/**
 * Attribute type definition for `AWS::EC2::VPCEndpointService`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#aws-resource-ec2-vpcendpointservice-return-values}
 */
export type EC2VPCEndpointServiceAttributes = {
  ServiceId: string;
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
  public static readonly AttributeNames = ["ServiceId" as const];
  constructor(
    logicalId: string,
    properties: EC2VPCEndpointServiceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2VPCEndpointService.Type,
      properties,
      EC2VPCEndpointService.AttributeNames,
      options,
    );
  }
}
