import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::ApiGateway::VpcLink`.
 * Schema for AWS ApiGateway VpcLink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export type ApiGatewayVpcLinkProperties = {
  /**
   * A description of the VPC link.
   */
  Description?: string;
  /**
   * A name for the VPC link.
   */
  Name: string;
  /**
   * An array of arbitrary tags (key-value pairs) to associate with the stage.
   */
  Tags?: Tag[];
  /**
   * The ARN of network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.
   */
  TargetArns: string[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::VpcLink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#aws-resource-apigateway-vpclink-return-values}
 */
export type ApiGatewayVpcLinkAttributes = {
  /**
   * The ID of the instance that backs VPC link.
   */
  VpcLinkId: string;
};
/**
 * Type definition for `AWS::ApiGateway::VpcLink.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-vpclink-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::ApiGateway::VpcLink`.
 * Schema for AWS ApiGateway VpcLink
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export class ApiGatewayVpcLink extends $Resource<
  "AWS::ApiGateway::VpcLink",
  ApiGatewayVpcLinkProperties,
  ApiGatewayVpcLinkAttributes
> {
  public static readonly Type = "AWS::ApiGateway::VpcLink";
  public static readonly AttributeNames = ["VpcLinkId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayVpcLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayVpcLink.Type,
      properties,
      ApiGatewayVpcLink.AttributeNames,
      options,
    );
  }
}
