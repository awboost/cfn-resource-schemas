import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::InternetGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html}
 */
export type EC2InternetGatewayProperties = {
  /**
   * Any tags to assign to the internet gateway.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::InternetGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html#aws-resource-ec2-internetgateway-return-values}
 */
export type EC2InternetGatewayAttributes = {
  /**
   * ID of internet gateway.
   */
  InternetGatewayId: string;
};
/**
 * Type definition for `AWS::EC2::InternetGateway.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-internetgateway-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::InternetGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html}
 */
export class EC2InternetGateway extends $Resource<
  "AWS::EC2::InternetGateway",
  EC2InternetGatewayProperties,
  EC2InternetGatewayAttributes
> {
  public static readonly Type = "AWS::EC2::InternetGateway";
  constructor(
    logicalId: string,
    properties: EC2InternetGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2InternetGateway.Type, properties, options);
  }
}
