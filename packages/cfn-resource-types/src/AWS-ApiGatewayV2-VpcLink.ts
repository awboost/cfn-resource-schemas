import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The ``AWS::ApiGatewayV2::VpcLink`` resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from ``PENDING`` to ``AVAILABLE`` to successfully create a VPC link, which can take up to 10 minutes. To learn more, see [Working with VPC Links for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html}
 */
export type ApiGatewayV2VpcLinkProperties = {
  /**
   * The name of the VPC link.
   */
  Name: string;
  /**
   * A list of security group IDs for the VPC link.
   */
  SecurityGroupIds?: string[];
  /**
   * A list of subnet IDs to include in the VPC link.
   */
  SubnetIds: string[];
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   */
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::ApiGatewayV2::VpcLink`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#aws-resource-apigatewayv2-vpclink-return-values}
 */
export type ApiGatewayV2VpcLinkAttributes = {
  VpcLinkId: string;
};
/**
 * The ``AWS::ApiGatewayV2::VpcLink`` resource creates a VPC link. Supported only for HTTP APIs. The VPC link status must transition from ``PENDING`` to ``AVAILABLE`` to successfully create a VPC link, which can take up to 10 minutes. To learn more, see [Working with VPC Links for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html) in the *API Gateway Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html}
 */
export class ApiGatewayV2VpcLink extends $Resource<
  "AWS::ApiGatewayV2::VpcLink",
  ApiGatewayV2VpcLinkProperties,
  ApiGatewayV2VpcLinkAttributes
> {
  public static readonly Type = "AWS::ApiGatewayV2::VpcLink";
  public static readonly AttributeNames = ["VpcLinkId" as const];
  constructor(
    logicalId: string,
    properties: ApiGatewayV2VpcLinkProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ApiGatewayV2VpcLink.Type,
      properties,
      ApiGatewayV2VpcLink.AttributeNames,
      options,
    );
  }
}
