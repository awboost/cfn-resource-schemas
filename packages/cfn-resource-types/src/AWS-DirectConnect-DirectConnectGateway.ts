import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DirectConnect::DirectConnectGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgateway.html}
 */
export type DirectConnectDirectConnectGatewayProperties = {
  /**
   * The autonomous system number (ASN) for the Amazon side of the connection.
   * @pattern `^[1-9][0-9]*$`
   */
  AmazonSideAsn?: string;
  /**
   * The name of the Direct Connect gateway.
   * @pattern `^[\w \-_,\/]{1,100}$`
   */
  DirectConnectGatewayName: string;
  /**
   * The tags associated with the Direct Connect gateway.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DirectConnect::DirectConnectGateway`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgateway.html#aws-resource-directconnect-directconnectgateway-return-values}
 */
export type DirectConnectDirectConnectGatewayAttributes = {
  /**
   * The ARN of the Direct Connect gateway.
   * @pattern `^arn:aws[a-z-]*:directconnect::[0-9]{12}:dx-gateway/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  DirectConnectGatewayArn: string;
  /**
   * The ID of the Direct Connect gateway.
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  DirectConnectGatewayId: string;
};
/**
 * Type definition for `AWS::DirectConnect::DirectConnectGateway.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directconnect-directconnectgateway-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DirectConnect::DirectConnectGateway
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directconnect-directconnectgateway.html}
 */
export class DirectConnectDirectConnectGateway extends $Resource<
  "AWS::DirectConnect::DirectConnectGateway",
  DirectConnectDirectConnectGatewayProperties,
  DirectConnectDirectConnectGatewayAttributes
> {
  public static readonly Type = "AWS::DirectConnect::DirectConnectGateway";
  constructor(
    logicalId: string,
    properties: DirectConnectDirectConnectGatewayProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DirectConnectDirectConnectGateway.Type,
      properties,
      options,
    );
  }
}
