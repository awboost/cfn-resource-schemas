import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectConnect::DirectConnectGatewayAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgatewayassociation.html}
 */
export type DirectConnectDirectConnectGatewayAssociationProperties = {
  /**
   * The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.
   * @pattern `^arn:aws[a-z-]*:iam::[0-9]{12}:role/.+$`
   */
  AcceptDirectConnectGatewayAssociationProposalRoleArn?: string;
  /**
   * The Amazon VPC prefixes to advertise to the Direct Connect gateway. This parameter is required when you create an association to a transit gateway.
   * @minLength `1`
   */
  AllowedPrefixesToDirectConnectGateway?: string[];
  /**
   * The ID or ARN of the virtual private gateway or transit gateway.
   * @pattern `^((arn:aws[a-z-]*:ec2:[a-z0-9-]+:[0-9]{12}:(vpn-gateway/vgw|transit-gateway/tgw))|(vgw|tgw))-[a-zA-Z0-9]{8,32}$`
   */
  AssociatedGatewayId: string;
  /**
   * The ID or ARN of the Direct Connect gateway.
   * @pattern `^(arn:aws[a-z-]*:directconnect::[0-9]{12}:dx-gateway/)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  DirectConnectGatewayId: string;
};
/**
 * Attribute type definition for `AWS::DirectConnect::DirectConnectGatewayAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgatewayassociation.html#aws-resource-directconnect-directconnectgatewayassociation-return-values}
 */
export type DirectConnectDirectConnectGatewayAssociationAttributes = {
  /**
   * The ID of the Direct Connect gateway association.
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  AssociationId: string;
};
/**
 * Resource Type definition for AWS::DirectConnect::DirectConnectGatewayAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgatewayassociation.html}
 */
export class DirectConnectDirectConnectGatewayAssociation extends $Resource<
  "AWS::DirectConnect::DirectConnectGatewayAssociation",
  DirectConnectDirectConnectGatewayAssociationProperties,
  DirectConnectDirectConnectGatewayAssociationAttributes
> {
  public static readonly Type =
    "AWS::DirectConnect::DirectConnectGatewayAssociation";
  constructor(
    logicalId: string,
    properties: DirectConnectDirectConnectGatewayAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DirectConnectDirectConnectGatewayAssociation.Type,
      properties,
      options,
    );
  }
}
