import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::ConfiguredTableAssociation`.
 * Represents a table that can be queried within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html}
 */
export type CleanRoomsConfiguredTableAssociationProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  ConfiguredTableIdentifier: string;
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  MembershipIdentifier: string;
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
   */
  Name: string;
  /**
   * @minLength `32`
   * @maxLength `512`
   */
  RoleArn: string;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::ConfiguredTableAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html#aws-resource-cleanrooms-configuredtableassociation-return-values}
 */
export type CleanRoomsConfiguredTableAssociationAttributes = {
  /**
   * @maxLength `100`
   */
  Arn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  ConfiguredTableAssociationIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::ConfiguredTableAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-configuredtableassociation-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::ConfiguredTableAssociation`.
 * Represents a table that can be queried within a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtableassociation.html}
 */
export class CleanRoomsConfiguredTableAssociation extends $Resource<
  "AWS::CleanRooms::ConfiguredTableAssociation",
  CleanRoomsConfiguredTableAssociationProperties,
  CleanRoomsConfiguredTableAssociationAttributes
> {
  public static readonly Type = "AWS::CleanRooms::ConfiguredTableAssociation";
  constructor(
    logicalId: string,
    properties: CleanRoomsConfiguredTableAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsConfiguredTableAssociation.Type,
      properties,
      options,
    );
  }
}
