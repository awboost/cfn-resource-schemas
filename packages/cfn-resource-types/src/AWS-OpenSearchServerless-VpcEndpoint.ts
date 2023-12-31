import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::VpcEndpoint`.
 * Amazon OpenSearchServerless vpc endpoint resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html}
 */
export type OpenSearchServerlessVpcEndpointProperties = {
  /**
   * The name of the VPC Endpoint
   * @minLength `3`
   * @maxLength `32`
   * @pattern `^[a-z][a-z0-9-]{2,31}$`
   */
  Name: string;
  /**
   * The ID of one or more security groups to associate with the endpoint network interface
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds?: string[];
  /**
   * The ID of one or more subnets in which to create an endpoint network interface
   * @minLength `1`
   * @maxLength `6`
   */
  SubnetIds: string[];
  /**
   * The ID of the VPC in which the endpoint will be used.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^vpc-[0-9a-z]*$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::OpenSearchServerless::VpcEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#aws-resource-opensearchserverless-vpcendpoint-return-values}
 */
export type OpenSearchServerlessVpcEndpointAttributes = {
  /**
   * The identifier of the VPC Endpoint
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^vpce-[0-9a-z]*$`
   */
  Id: string;
};
/**
 * Resource type definition for `AWS::OpenSearchServerless::VpcEndpoint`.
 * Amazon OpenSearchServerless vpc endpoint resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html}
 */
export class OpenSearchServerlessVpcEndpoint extends $Resource<
  "AWS::OpenSearchServerless::VpcEndpoint",
  OpenSearchServerlessVpcEndpointProperties,
  OpenSearchServerlessVpcEndpointAttributes
> {
  public static readonly Type = "AWS::OpenSearchServerless::VpcEndpoint";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessVpcEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OpenSearchServerlessVpcEndpoint.Type, properties, options);
  }
}
