import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkVpcAssociation`.
 * Associates a VPC with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html}
 */
export type VpcLatticeServiceNetworkVpcAssociationProperties = {
  DnsOptions?: DnsOptions;
  PrivateDnsEnabled?: boolean;
  SecurityGroupIds?: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((sn-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}))$`
   */
  ServiceNetworkIdentifier?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * @minLength `5`
   * @maxLength `2048`
   * @pattern `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   */
  VpcIdentifier?: string;
};
/**
 * Attribute type definition for `AWS::VpcLattice::ServiceNetworkVpcAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html#aws-resource-vpclattice-servicenetworkvpcassociation-return-values}
 */
export type VpcLatticeServiceNetworkVpcAssociationAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkvpcassociation/snva-[0-9a-z]{17}$`
   */
  Arn: string;
  CreatedAt: string;
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^snva-[0-9a-z]{17}$`
   */
  Id: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}$`
   */
  ServiceNetworkArn: string;
  /**
   * @minLength `20`
   * @maxLength `20`
   * @pattern `^sn-[0-9a-z]{17}$`
   */
  ServiceNetworkId: string;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!servicenetwork-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  ServiceNetworkName: string;
  Status:
    | "CREATE_IN_PROGRESS"
    | "ACTIVE"
    | "UPDATE_IN_PROGRESS"
    | "DELETE_IN_PROGRESS"
    | "CREATE_FAILED"
    | "DELETE_FAILED";
  /**
   * @minLength `5`
   * @maxLength `2048`
   * @pattern `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   */
  VpcId: string;
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetworkVpcAssociation.DnsOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkvpcassociation-dnsoptions.html}
 */
export type DnsOptions = {
  PrivateDnsPreference?:
    | "VERIFIED_DOMAINS_ONLY"
    | "ALL_DOMAINS"
    | "VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS"
    | "SPECIFIED_DOMAINS_ONLY";
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  PrivateDnsSpecifiedDomains?: string[];
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetworkVpcAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkvpcassociation-tag.html}
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
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkVpcAssociation`.
 * Associates a VPC with a service network.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkvpcassociation.html}
 */
export class VpcLatticeServiceNetworkVpcAssociation extends $Resource<
  "AWS::VpcLattice::ServiceNetworkVpcAssociation",
  VpcLatticeServiceNetworkVpcAssociationProperties,
  VpcLatticeServiceNetworkVpcAssociationAttributes
> {
  public static readonly Type = "AWS::VpcLattice::ServiceNetworkVpcAssociation";
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkVpcAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeServiceNetworkVpcAssociation.Type,
      properties,
      options,
    );
  }
}
