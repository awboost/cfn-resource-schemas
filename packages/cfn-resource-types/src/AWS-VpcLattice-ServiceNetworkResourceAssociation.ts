import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkResourceAssociation`.
 * VpcLattice ServiceNetworkResourceAssociation CFN resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkresourceassociation.html}
 */
export type VpcLatticeServiceNetworkResourceAssociationProperties = {
  /**
   * @minLength `17`
   * @maxLength `2048`
   * @pattern `^rcfg-[0-9a-z]{17}$`
   */
  ResourceConfigurationId?: string;
  /**
   * @minLength `3`
   * @maxLength `2048`
   * @pattern `^((sn-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetwork/sn-[0-9a-z]{17}))$`
   */
  ServiceNetworkId?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::ServiceNetworkResourceAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkresourceassociation.html#aws-resource-vpclattice-servicenetworkresourceassociation-return-values}
 */
export type VpcLatticeServiceNetworkResourceAssociationAttributes = {
  /**
   * @minLength `22`
   * @maxLength `2048`
   * @pattern `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkresourceassociation/snra-[0-9a-f]{17}$`
   */
  Arn: string;
  /**
   * @minLength `22`
   * @maxLength `22`
   * @pattern `^snra-[0-9a-f]{17}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::VpcLattice::ServiceNetworkResourceAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-servicenetworkresourceassociation-tag.html}
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
 * Resource type definition for `AWS::VpcLattice::ServiceNetworkResourceAssociation`.
 * VpcLattice ServiceNetworkResourceAssociation CFN resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-servicenetworkresourceassociation.html}
 */
export class VpcLatticeServiceNetworkResourceAssociation extends $Resource<
  "AWS::VpcLattice::ServiceNetworkResourceAssociation",
  VpcLatticeServiceNetworkResourceAssociationProperties,
  VpcLatticeServiceNetworkResourceAssociationAttributes
> {
  public static readonly Type =
    "AWS::VpcLattice::ServiceNetworkResourceAssociation";
  constructor(
    logicalId: string,
    properties: VpcLatticeServiceNetworkResourceAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeServiceNetworkResourceAssociation.Type,
      properties,
      options,
    );
  }
}
