import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ODB::OdbPeeringConnection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbpeeringconnection.html}
 */
export type ODBOdbPeeringConnectionProperties = {
  /**
   * The name of the ODB peering connection.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z_](?!.*--)[a-zA-Z0-9_-]*$`
   */
  DisplayName?: string;
  /**
   * The unique identifier of the ODB network.
   * @minLength `6`
   * @maxLength `2048`
   * @pattern `^(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[a-z0-9-]+:[a-z0-9-]*:[0-9]+:[a-z0-9-]+/[a-zA-Z0-9_~.-]{6,64}|[a-zA-Z0-9_~.-]{6,64})$`
   */
  OdbNetworkId?: string;
  /**
   * The unique identifier of the peer network.
   * @minLength `6`
   * @maxLength `2048`
   * @pattern `^(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-{0,1}[a-z]{0,1}):[a-z0-9-]+:[a-z0-9-]*:[0-9]+:[a-z0-9-]+/[a-zA-Z0-9_~.-]{6,64}|[a-zA-Z0-9_~.-]{6,64})$`
   */
  PeerNetworkId?: string;
  /**
   * Tags to assign to the Odb peering connection.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::ODB::OdbPeeringConnection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbpeeringconnection.html#aws-resource-odb-odbpeeringconnection-return-values}
 */
export type ODBOdbPeeringConnectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the ODB network.
   */
  OdbNetworkArn: string;
  /**
   * The Amazon Resource Name (ARN) of the ODB peering connection.
   */
  OdbPeeringConnectionArn: string;
  /**
   * The unique identifier of the ODB peering connection.
   */
  OdbPeeringConnectionId: string;
  /**
   * The Amazon Resource Name (ARN) of the peer network.
   */
  PeerNetworkArn: string;
};
/**
 * Type definition for `AWS::ODB::OdbPeeringConnection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-odb-odbpeeringconnection-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::ODB::OdbPeeringConnection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-odb-odbpeeringconnection.html}
 */
export class ODBOdbPeeringConnection extends $Resource<
  "AWS::ODB::OdbPeeringConnection",
  ODBOdbPeeringConnectionProperties,
  ODBOdbPeeringConnectionAttributes
> {
  public static readonly Type = "AWS::ODB::OdbPeeringConnection";
  constructor(
    logicalId: string,
    properties: ODBOdbPeeringConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ODBOdbPeeringConnection.Type, properties, options);
  }
}
