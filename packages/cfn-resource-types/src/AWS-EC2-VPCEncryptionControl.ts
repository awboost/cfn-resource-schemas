import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::VPCEncryptionControl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcencryptioncontrol.html}
 */
export type EC2VPCEncryptionControlProperties = {
  /**
   * Used to enable or disable EIGW exclusion
   */
  EgressOnlyInternetGatewayExclusionInput?: "enable" | "disable";
  /**
   * Used to enable or disable EFS exclusion
   */
  ElasticFileSystemExclusionInput?: "enable" | "disable";
  /**
   * Used to enable or disable IGW exclusion
   */
  InternetGatewayExclusionInput?: "enable" | "disable";
  /**
   * Used to enable or disable Lambda exclusion
   */
  LambdaExclusionInput?: "enable" | "disable";
  /**
   * The VPC encryption control mode, either monitor or enforce.
   */
  Mode?: "monitor" | "enforce";
  /**
   * Used to enable or disable Nat gateway exclusion
   */
  NatGatewayExclusionInput?: "enable" | "disable";
  /**
   * The tags to assign to the VPC encryption control.
   */
  Tags?: Tag[];
  /**
   * Used to enable or disable VGW exclusion
   */
  VirtualPrivateGatewayExclusionInput?: "enable" | "disable";
  /**
   * The VPC on which this VPC encryption control is applied.
   */
  VpcId?: string;
  /**
   * Used to enable or disable Vpc Lattice exclusion
   */
  VpcLatticeExclusionInput?: "enable" | "disable";
  /**
   * Used to enable or disable VPC peering exclusion
   */
  VpcPeeringExclusionInput?: "enable" | "disable";
};
/**
 * Attribute type definition for `AWS::EC2::VPCEncryptionControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcencryptioncontrol.html#aws-resource-ec2-vpcencryptioncontrol-return-values}
 */
export type EC2VPCEncryptionControlAttributes = {
  /**
   * Enumerates the states of all the VPC encryption control resource exclusions
   */
  ResourceExclusions: {
    EgressOnlyInternetGateway: {
      State: string;
      StateMessage: string;
    };
    ElasticFileSystem: {
      State: string;
      StateMessage: string;
    };
    InternetGateway: {
      State: string;
      StateMessage: string;
    };
    Lambda: {
      State: string;
      StateMessage: string;
    };
    NatGateway: {
      State: string;
      StateMessage: string;
    };
    VirtualPrivateGateway: {
      State: string;
      StateMessage: string;
    };
    VpcLattice: {
      State: string;
      StateMessage: string;
    };
    VpcPeering: {
      State: string;
      StateMessage: string;
    };
  };
  /**
   * The current state of the VPC encryption control.
   */
  State:
    | "creating"
    | "available"
    | "monitor-in-progress"
    | "enforce-in-progress"
    | "monitor-failed"
    | "enforce-failed"
    | "deleting"
    | "deleted"
    | "delete-failed";
  /**
   * Provides additional context on the state of the VPC encryption control.
   */
  StateMessage: string;
  /**
   * The VPC encryption control resource id.
   */
  VpcEncryptionControlId: string;
};
/**
 * Type definition for `AWS::EC2::VPCEncryptionControl.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpcencryptioncontrol-tag.html}
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
 * Resource Type definition for AWS::EC2::VPCEncryptionControl
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcencryptioncontrol.html}
 */
export class EC2VPCEncryptionControl extends $Resource<
  "AWS::EC2::VPCEncryptionControl",
  EC2VPCEncryptionControlProperties,
  EC2VPCEncryptionControlAttributes
> {
  public static readonly Type = "AWS::EC2::VPCEncryptionControl";
  constructor(
    logicalId: string,
    properties: EC2VPCEncryptionControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2VPCEncryptionControl.Type, properties, options);
  }
}
