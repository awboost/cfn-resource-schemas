import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::EC2::TransitGatewayPolicyTable Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypolicytable.html}
 */
export type EC2TransitGatewayPolicyTableProperties = {
  Tags?: Tag[];
  /**
   * The Id of transit gateway
   */
  TransitGatewayId: string;
};
/**
 * Attribute type definition for `AWS::EC2::TransitGatewayPolicyTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypolicytable.html#aws-resource-ec2-transitgatewaypolicytable-return-values}
 */
export type EC2TransitGatewayPolicyTableAttributes = {
  /**
   * Creation time of the transit gateway policy table
   */
  CreationTime: string;
  /**
   * State of the transit gateway policy table
   */
  State: string;
  /**
   * The Id of transit gateway policy table.
   */
  TransitGatewayPolicyTableId: string;
};
/**
 * Type definition for `AWS::EC2::TransitGatewayPolicyTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaypolicytable-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * AWS::EC2::TransitGatewayPolicyTable Resource Definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaypolicytable.html}
 */
export class EC2TransitGatewayPolicyTable extends $Resource<
  "AWS::EC2::TransitGatewayPolicyTable",
  EC2TransitGatewayPolicyTableProperties,
  EC2TransitGatewayPolicyTableAttributes
> {
  public static readonly Type = "AWS::EC2::TransitGatewayPolicyTable";
  constructor(
    logicalId: string,
    properties: EC2TransitGatewayPolicyTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2TransitGatewayPolicyTable.Type, properties, options);
  }
}
