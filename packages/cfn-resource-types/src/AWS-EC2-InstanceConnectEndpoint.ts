import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html}
 */
export type EC2InstanceConnectEndpointProperties = {
  /**
   * The client token of the instance connect endpoint.
   */
  ClientToken?: string;
  /**
   * If true, the address of the instance connect endpoint client is preserved when connecting to the end resource
   */
  PreserveClientIp?: boolean;
  /**
   * The security group IDs of the instance connect endpoint.
   */
  SecurityGroupIds?: string[];
  /**
   * The subnet id of the instance connect endpoint
   */
  SubnetId: string;
  /**
   * The tags of the instance connect endpoint.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::InstanceConnectEndpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html#aws-resource-ec2-instanceconnectendpoint-return-values}
 */
export type EC2InstanceConnectEndpointAttributes = {
  /**
   * The id of the instance connect endpoint
   */
  Id: string;
};
/**
 * Type definition for `AWS::EC2::InstanceConnectEndpoint.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instanceconnectendpoint-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instanceconnectendpoint.html}
 */
export class EC2InstanceConnectEndpoint extends $Resource<
  "AWS::EC2::InstanceConnectEndpoint",
  EC2InstanceConnectEndpointProperties,
  EC2InstanceConnectEndpointAttributes
> {
  public static readonly Type = "AWS::EC2::InstanceConnectEndpoint";
  constructor(
    logicalId: string,
    properties: EC2InstanceConnectEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2InstanceConnectEndpoint.Type, properties, options);
  }
}
