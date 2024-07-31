import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CleanRooms::IdMappingTable`.
 * Represents an association between an ID mapping workflow and a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idmappingtable.html}
 */
export type CleanRoomsIdMappingTableProperties = {
  /**
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description?: string;
  InputReferenceConfig: IdMappingTableInputReferenceConfig;
  /**
   * @minLength `4`
   * @maxLength `2048`
   */
  KmsKeyArn?: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  MembershipIdentifier: string;
  /**
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
   */
  Name: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::IdMappingTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idmappingtable.html#aws-resource-cleanrooms-idmappingtable-return-values}
 */
export type CleanRoomsIdMappingTableAttributes = {
  /**
   * @maxLength `200`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  CollaborationIdentifier: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  IdMappingTableIdentifier: string;
  InputReferenceProperties: {
    /**
     * @minLength `2`
     * @maxLength `2`
     */
    IdMappingTableInputSource: {
      IdNamespaceAssociationId: string;
      Type: "SOURCE" | "TARGET";
    }[];
  };
  /**
   * @maxLength `100`
   */
  MembershipArn: string;
};
/**
 * Type definition for `AWS::CleanRooms::IdMappingTable.IdMappingTableInputReferenceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idmappingtable-idmappingtableinputreferenceconfig.html}
 */
export type IdMappingTableInputReferenceConfig = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  InputReferenceArn: string;
  ManageResourcePolicies: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::IdMappingTable.IdMappingTableInputReferenceProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idmappingtable-idmappingtableinputreferenceproperties.html}
 */
export type IdMappingTableInputReferenceProperties = {
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  IdMappingTableInputSource: IdMappingTableInputSource[];
};
/**
 * Type definition for `AWS::CleanRooms::IdMappingTable.IdMappingTableInputSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idmappingtable-idmappingtableinputsource.html}
 */
export type IdMappingTableInputSource = {
  IdNamespaceAssociationId: string;
  Type: "SOURCE" | "TARGET";
};
/**
 * Type definition for `AWS::CleanRooms::IdMappingTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-idmappingtable-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::IdMappingTable`.
 * Represents an association between an ID mapping workflow and a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-idmappingtable.html}
 */
export class CleanRoomsIdMappingTable extends $Resource<
  "AWS::CleanRooms::IdMappingTable",
  CleanRoomsIdMappingTableProperties,
  CleanRoomsIdMappingTableAttributes
> {
  public static readonly Type = "AWS::CleanRooms::IdMappingTable";
  constructor(
    logicalId: string,
    properties: CleanRoomsIdMappingTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CleanRoomsIdMappingTable.Type, properties, options);
  }
}
