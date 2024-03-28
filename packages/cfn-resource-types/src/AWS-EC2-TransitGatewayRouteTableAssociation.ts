import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export type EC2TransitGatewayRouteTableAssociationProperties = {
  /**
   * The ID of transit gateway attachment.
   */
  TransitGatewayAttachmentId: string;
  /**
   * The ID of transit gateway route table.
   */
  TransitGatewayRouteTableId: string;
};
/**
 * Resource Type definition for AWS::EC2::TransitGatewayRouteTableAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html}
 */
export class EC2TransitGatewayRouteTableAssociation extends $Resource<
  "AWS::EC2::TransitGatewayRouteTableAssociation",
  EC2TransitGatewayRouteTableAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::EC2::TransitGatewayRouteTableAssociation";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayRouteTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2TransitGatewayRouteTableAssociation.Type,
      properties,
      options,
    );
  }
}
