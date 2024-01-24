import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::CarrierGateway`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html}
 */
export type EC2CarrierGatewayProperties = {
  /**
   * The tags for the carrier gateway.
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC.
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EC2::CarrierGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html#aws-resource-ec2-carriergateway-return-values}
 */
export type EC2CarrierGatewayAttributes = {
  /**
   * The ID of the carrier gateway.
   */
  CarrierGatewayId: string;
  /**
   * The ID of the owner.
   */
  OwnerId: string;
  /**
   * The state of the carrier gateway.
   */
  State: string;
};
/**
 * Type definition for `AWS::EC2::CarrierGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-carriergateway-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:.*)`
   */
  Key?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!aws:.*)`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::EC2::CarrierGateway`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html}
 */
export class EC2CarrierGateway extends $Resource<
  "AWS::EC2::CarrierGateway",
  EC2CarrierGatewayProperties,
  EC2CarrierGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::CarrierGateway";
  constructor(
    logicalId: string,
    properties: EC2CarrierGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2CarrierGateway.Type, properties, options);
  }
}
