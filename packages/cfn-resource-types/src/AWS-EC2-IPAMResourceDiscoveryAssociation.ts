import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html}
 */
export type EC2IPAMResourceDiscoveryAssociationProperties = {
  /**
   * The Id of the IPAM this Resource Discovery is associated to.
   */
  IpamId: string;
  /**
   * The Amazon Resource Name (ARN) of the IPAM Resource Discovery Association.
   */
  IpamResourceDiscoveryId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::IPAMResourceDiscoveryAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html#aws-resource-ec2-ipamresourcediscoveryassociation-return-values}
 */
export type EC2IPAMResourceDiscoveryAssociationAttributes = {
  /**
   * Arn of the IPAM.
   */
  IpamArn: string;
  /**
   * The home region of the IPAM.
   */
  IpamRegion: string;
  /**
   * The Amazon Resource Name (ARN) of the resource discovery association is a part of.
   */
  IpamResourceDiscoveryAssociationArn: string;
  /**
   * Id of the IPAM Resource Discovery Association.
   */
  IpamResourceDiscoveryAssociationId: string;
  /**
   * If the Resource Discovery Association exists due as part of CreateIpam.
   */
  IsDefault: boolean;
  /**
   * The AWS Account ID for the account where the shared IPAM exists.
   */
  OwnerId: string;
  /**
   * The status of the resource discovery.
   */
  ResourceDiscoveryStatus: string;
  /**
   * The operational state of the Resource Discovery Association. Related to Create/Delete activities.
   */
  State: string;
};
/**
 * Type definition for `AWS::EC2::IPAMResourceDiscoveryAssociation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ipamresourcediscoveryassociation-tag.html}
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
 * Resource Schema of AWS::EC2::IPAMResourceDiscoveryAssociation Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscoveryassociation.html}
 */
export class EC2IPAMResourceDiscoveryAssociation extends $Resource<
  "AWS::EC2::IPAMResourceDiscoveryAssociation",
  EC2IPAMResourceDiscoveryAssociationProperties,
  EC2IPAMResourceDiscoveryAssociationAttributes
> {
  public static readonly Type = "AWS::EC2::IPAMResourceDiscoveryAssociation";
  constructor(
    logicalId: string,
    properties: EC2IPAMResourceDiscoveryAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2IPAMResourceDiscoveryAssociation.Type,
      properties,
      options,
    );
  }
}
