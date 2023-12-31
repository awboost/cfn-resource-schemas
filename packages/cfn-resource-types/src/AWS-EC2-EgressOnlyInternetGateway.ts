import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html}
 */
export type EC2EgressOnlyInternetGatewayProperties = {
  /**
   * The ID of the VPC for which to create the egress-only internet gateway.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::EgressOnlyInternetGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html#aws-resource-ec2-egressonlyinternetgateway-return-values}
 */
export type EC2EgressOnlyInternetGatewayAttributes = {
  /**
   * Service Generated ID of the EgressOnlyInternetGateway
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html}
 */
export class EC2EgressOnlyInternetGateway extends $Resource<
  "AWS::EC2::EgressOnlyInternetGateway",
  EC2EgressOnlyInternetGatewayProperties,
  EC2EgressOnlyInternetGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::EgressOnlyInternetGateway";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: EC2EgressOnlyInternetGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2EgressOnlyInternetGateway.Type,
      properties,
      EC2EgressOnlyInternetGateway.AttributeNames,
      options,
    );
  }
}
