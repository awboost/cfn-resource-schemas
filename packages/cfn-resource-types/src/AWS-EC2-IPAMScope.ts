import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAMScope Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html}
 */
export type EC2IPAMScopeProperties = {
  Description?: string;
  /**
   * The Id of the IPAM this scope is a part of.
   */
  IpamId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::IPAMScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html#aws-resource-ec2-ipamscope-return-values}
 */
export type EC2IPAMScopeAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the IPAM scope.
   */
  Arn: string;
  /**
   * The Amazon Resource Name (ARN) of the IPAM this scope is a part of.
   */
  IpamArn: string;
  /**
   * Id of the IPAM scope.
   */
  IpamScopeId: string;
  /**
   * Determines whether this scope contains publicly routable space or space for a private network
   */
  IpamScopeType: "public" | "private";
  /**
   * Is this one of the default scopes created with the IPAM.
   */
  IsDefault: boolean;
  /**
   * The number of pools that currently exist in this scope.
   */
  PoolCount: number;
};
/**
 * Type definition for `AWS::EC2::IPAMScope.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamscope-tag.html}
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
 * Resource Schema of AWS::EC2::IPAMScope Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamscope.html}
 */
export class EC2IPAMScope extends $Resource<
  "AWS::EC2::IPAMScope",
  EC2IPAMScopeProperties,
  EC2IPAMScopeAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMScope";
  constructor(
    logicalId: string,
    properties: EC2IPAMScopeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2IPAMScope.Type, properties, options);
  }
}
