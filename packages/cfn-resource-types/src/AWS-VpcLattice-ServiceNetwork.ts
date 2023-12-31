import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetwork`.
 * A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html}
 */
export type VpcLatticeServiceNetworkProperties = {
  AuthType?: "NONE" | "AWS_IAM";
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!servicenetwork-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::ServiceNetwork`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html#aws-resource-vpclattice-servicenetwork-return-values}
 */
export type VpcLatticeServiceNetworkAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `20`
   * @maxLength `20`
   * @pattern `^sn-[0-9a-z]{17}$`
   */
  Id: string;
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetwork.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetwork-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetwork`.
 * A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetwork.html}
 */
export class VpcLatticeServiceNetwork extends $Resource<
  "AWS::VpcLattice::ServiceNetwork",
  VpcLatticeServiceNetworkProperties,
  VpcLatticeServiceNetworkAttributes
> {
  public static readonly Type = "AWS::VpcLattice::ServiceNetwork";
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeServiceNetwork.Type, properties, options);
  }
}
