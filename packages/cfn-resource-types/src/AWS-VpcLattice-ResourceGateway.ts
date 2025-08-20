import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::ResourceGateway`.
 * Creates a resource gateway for a service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcegateway.html}
 */
export type VpcLatticeResourceGatewayProperties = {
  IpAddressType?: "IPV4" | "IPV6" | "DUALSTACK";
  /**
   * The number of IPv4 addresses to allocate per ENI for the resource gateway
   */
  Ipv4AddressesPerEni?: number;
  /**
   * @minLength `3`
   * @maxLength `40`
   * @pattern `^(?!rgw-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name: string;
  /**
   * The ID of one or more security groups to associate with the endpoint network interface.
   */
  SecurityGroupIds?: string[];
  /**
   * The ID of one or more subnets in which to create an endpoint network interface.
   */
  SubnetIds: string[];
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `5`
   * @maxLength `50`
   */
  VpcIdentifier: string;
};
/**
 * Attribute type definition for `AWS::VpcLattice::ResourceGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcegateway.html#aws-resource-vpclattice-resourcegateway-return-values}
 */
export type VpcLatticeResourceGatewayAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourcegateway/rgw-[0-9a-z]{17}$`
   */
  Arn: string;
  /**
   * @minLength `17`
   * @maxLength `2048`
   * @pattern `^((rgw-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourcegateway/rgw-[0-9a-z]{17}))$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::VpcLattice::ResourceGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-resourcegateway-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::ResourceGateway`.
 * Creates a resource gateway for a service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcegateway.html}
 */
export class VpcLatticeResourceGateway extends $Resource<
  "AWS::VpcLattice::ResourceGateway",
  VpcLatticeResourceGatewayProperties,
  VpcLatticeResourceGatewayAttributes
> {
  public static readonly Type = "AWS::VpcLattice::ResourceGateway";
  constructor(
    logicalId: string,
    properties: VpcLatticeResourceGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeResourceGateway.Type, properties, options);
  }
}
