import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ApiGateway::VpcLink`` resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC). For more information, see [vpclink:create](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateVpcLink.html) in the ``Amazon API Gateway REST API Reference``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export type ApiGatewayVpcLinkProperties = {
  /**
   * The description of the VPC link.
   */
  Description?: string;
  /**
   * The name used to label and identify the VPC link.
   */
  Name: string;
  /**
   * An array of arbitrary tags (key-value pairs) to associate with the VPC link.
   */
  Tags?: Tag[];
  /**
   * The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS-account of the API owner.
   */
  TargetArns: string[];
};
/**
 * Attribute type definition for `AWS::ApiGateway::VpcLink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#aws-resource-apigateway-vpclink-return-values}
 */
export type ApiGatewayVpcLinkAttributes = {
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
 * The ``AWS::ApiGateway::VpcLink`` resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC). For more information, see [vpclink:create](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateVpcLink.html) in the ``Amazon API Gateway REST API Reference``.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export class ApiGatewayVpcLink extends $Resource<
  "AWS::ApiGateway::VpcLink",
  ApiGatewayVpcLinkProperties,
  ApiGatewayVpcLinkAttributes
> {
  public static readonly Type = "AWS::ApiGateway::VpcLink";
  constructor(
    logicalId: string,
    properties: ApiGatewayVpcLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ApiGatewayVpcLink.Type, properties, options);
  }
}
