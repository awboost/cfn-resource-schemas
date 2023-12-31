import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MSK::VpcConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html}
 */
export type MSKVpcConnectionProperties = {
  /**
   * The type of private link authentication
   * @minLength `3`
   * @maxLength `10`
   */
  Authentication: Authentication;
  ClientSubnets: string[];
  SecurityGroups: string[];
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
  /**
   * The Amazon Resource Name (ARN) of the target cluster
   * @pattern `^arn:[\w-]+:kafka:[\w-]+:\d+:cluster.*\Z`
   */
  TargetClusterArn: string;
  /**
   * @pattern `^(vpc-)([a-z0-9]+)\Z`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::MSK::VpcConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#aws-resource-msk-vpcconnection-return-values}
 */
export type MSKVpcConnectionAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::MSK::VpcConnection.Authentication`.
 * The type of private link authentication
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-vpcconnection-authentication.html}
 */
export type Authentication = "SASL_IAM" | "SASL_SCRAM" | "TLS";
/**
 * Type definition for `AWS::MSK::VpcConnection.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-vpcconnection-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource Type definition for AWS::MSK::VpcConnection
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html}
 */
export class MSKVpcConnection extends $Resource<
  "AWS::MSK::VpcConnection",
  MSKVpcConnectionProperties,
  MSKVpcConnectionAttributes
> {
  public static readonly Type = "AWS::MSK::VpcConnection";
  constructor(
    logicalId: string,
    properties: MSKVpcConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MSKVpcConnection.Type, properties, options);
  }
}
