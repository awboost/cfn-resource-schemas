import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export type EC2TransitGatewayRouteProperties = {
  /**
   * Indicates whether to drop traffic that matches this route.
   */
  Blackhole?: boolean;
  /**
   * The CIDR range used for destination matches. Routing decisions are based on the most specific match.
   */
  DestinationCidrBlock: string;
  /**
   * The ID of transit gateway attachment.
   */
  TransitGatewayAttachmentId?: string;
  /**
   * The ID of transit gateway route table.
   */
  TransitGatewayRouteTableId: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRoute
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html}
 */
export class EC2TransitGatewayRoute extends $Resource<
  "AWS::EC2::TransitGatewayRoute",
  EC2TransitGatewayRouteProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRoute";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayRoute.Type, properties, options);
  }
}
