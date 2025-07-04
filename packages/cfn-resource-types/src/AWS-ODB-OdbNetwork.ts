import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ODB::OdbNetwork resource creates an ODB Network
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbnetwork.html}
 */
export type ODBOdbNetworkProperties = {
  /**
   * The AWS Availability Zone (AZ) where the ODB network is located.
   * @minLength `1`
   * @maxLength `255`
   */
  AvailabilityZone?: string;
  /**
   * The AZ ID of the AZ where the ODB network is located.
   * @minLength `1`
   * @maxLength `255`
   */
  AvailabilityZoneId?: string;
  /**
   * The CIDR range of the backup subnet in the ODB network.
   * @minLength `1`
   * @maxLength `255`
   */
  BackupSubnetCidr?: string;
  /**
   * The CIDR range of the client subnet in the ODB network.
   * @minLength `1`
   * @maxLength `255`
   */
  ClientSubnetCidr?: string;
  /**
   * The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.
   * @minLength `1`
   * @maxLength `255`
   */
  DefaultDnsPrefix?: string;
  /**
   * Specifies whether to delete associated OCI networking resources along with the ODB network.
   */
  DeleteAssociatedResources?: boolean;
  /**
   * The user-friendly name of the ODB network.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_](?!.*--)[a-zA-Z0-9_-]*$`
   */
  DisplayName?: string;
  /**
   * Tags to assign to the Odb Network.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ODB::OdbNetwork`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbnetwork.html#aws-resource-odb-odbnetwork-return-values}
 */
export type ODBOdbNetworkAttributes = {
  /**
   * The unique identifier of the OCI network anchor for the ODB network.
   * @minLength `1`
   * @maxLength `255`
   */
  OciNetworkAnchorId: string;
  /**
   * The name of the OCI resource anchor that's associated with the ODB network.
   */
  OciResourceAnchorName: string;
  /**
   * The URL for the VCN that's associated with the ODB network.
   */
  OciVcnUrl: string;
  /**
   * The Amazon Resource Name (ARN) of the ODB network.
   */
  OdbNetworkArn: string;
  /**
   * The unique identifier of the ODB network.
   */
  OdbNetworkId: string;
};
/**
 * Type definition for `AWS::ODB::OdbNetwork.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-odbnetwork-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::ODB::OdbNetwork resource creates an ODB Network
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbnetwork.html}
 */
export class ODBOdbNetwork extends $Resource<
  "AWS::ODB::OdbNetwork",
  ODBOdbNetworkProperties,
  ODBOdbNetworkAttributes
> {
  public static readonly Type = "AWS::ODB::OdbNetwork";
  constructor(
    logicalId: string,
    properties: ODBOdbNetworkProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ODBOdbNetwork.Type, properties, options);
  }
}
