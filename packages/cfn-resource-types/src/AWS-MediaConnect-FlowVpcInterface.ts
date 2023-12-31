import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html}
 */
export type MediaConnectFlowVpcInterfaceProperties = {
  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   */
  Name: string;
  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account.
   */
  RoleArn: string;
  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[];
  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string;
};
/**
 * Attribute type definition for `AWS::MediaConnect::FlowVpcInterface`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#aws-resource-mediaconnect-flowvpcinterface-return-values}
 */
export type MediaConnectFlowVpcInterfaceAttributes = {
  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   */
  NetworkInterfaceIds: string[];
};
/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html}
 */
export class MediaConnectFlowVpcInterface extends $Resource<
  "AWS::MediaConnect::FlowVpcInterface",
  MediaConnectFlowVpcInterfaceProperties,
  MediaConnectFlowVpcInterfaceAttributes
> {
  public static readonly Type = "AWS::MediaConnect::FlowVpcInterface";
  public static readonly AttributeNames = ["NetworkInterfaceIds" as const];
  constructor(
    logicalId: string,
    properties: MediaConnectFlowVpcInterfaceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaConnectFlowVpcInterface.Type,
      properties,
      MediaConnectFlowVpcInterface.AttributeNames,
      options,
    );
  }
}
