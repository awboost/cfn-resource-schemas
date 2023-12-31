import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::ClientVpnTargetNetworkAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html}
 */
export type EC2ClientVpnTargetNetworkAssociationProperties = {
  ClientVpnEndpointId: string;
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::EC2::ClientVpnTargetNetworkAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html#aws-resource-ec2-clientvpntargetnetworkassociation-return-values}
 */
export type EC2ClientVpnTargetNetworkAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::ClientVpnTargetNetworkAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html}
 */
export class EC2ClientVpnTargetNetworkAssociation extends $Resource<
  "AWS::EC2::ClientVpnTargetNetworkAssociation",
  EC2ClientVpnTargetNetworkAssociationProperties,
  EC2ClientVpnTargetNetworkAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::ClientVpnTargetNetworkAssociation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2ClientVpnTargetNetworkAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2ClientVpnTargetNetworkAssociation.Type,
      properties,
      EC2ClientVpnTargetNetworkAssociation.AttributeNames,
      options,
    );
  }
}
