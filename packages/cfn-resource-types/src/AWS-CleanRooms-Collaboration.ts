import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CleanRooms::Collaboration`.
 * Represents a collaboration between AWS accounts that allows for secure data collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html}
 */
export type CleanRoomsCollaborationProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  CreatorDisplayName: string;
  CreatorMemberAbilities: MemberAbility[];
  DataEncryptionMetadata?: DataEncryptionMetadata;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
   */
  Description: string;
  /**
   * @maxLength `9`
   */
  Members: MemberSpecification[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  Name: string;
  QueryLogStatus: CollaborationQueryLogStatus;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::Collaboration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#aws-resource-cleanrooms-collaboration-return-values}
 */
export type CleanRoomsCollaborationAttributes = {
  /**
   * @maxLength `100`
   */
  Arn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.CollaborationQueryLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-collaborationquerylogstatus.html}
 */
export type CollaborationQueryLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.DataEncryptionMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html}
 */
export type DataEncryptionMetadata = {
  AllowCleartext: boolean;
  AllowDuplicates: boolean;
  AllowJoinsOnColumnsWithDifferentNames: boolean;
  PreserveNulls: boolean;
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MemberAbility`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberability.html}
 */
export type MemberAbility = "CAN_QUERY" | "CAN_RECEIVE_RESULTS";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MemberSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberspecification.html}
 */
export type MemberSpecification = {
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d+$`
   */
  AccountId: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   */
  DisplayName: string;
  MemberAbilities: MemberAbility[];
};
/**
 * Type definition for `AWS::CleanRooms::Collaboration.MemberStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-memberstatus.html}
 */
export type MemberStatus = "INVITED" | "ACTIVE" | "LEFT" | "REMOVED";
/**
 * Type definition for `AWS::CleanRooms::Collaboration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-collaboration-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::Collaboration`.
 * Represents a collaboration between AWS accounts that allows for secure data collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html}
 */
export class CleanRoomsCollaboration extends $Resource<
  "AWS::CleanRooms::Collaboration",
  CleanRoomsCollaborationProperties,
  CleanRoomsCollaborationAttributes
> {
  public static readonly Type = "AWS::CleanRooms::Collaboration";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CollaborationIdentifier" as const,
  ];
  constructor(
    logicalId: string,
    properties: CleanRoomsCollaborationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsCollaboration.Type,
      properties,
      CleanRoomsCollaboration.AttributeNames,
      options,
    );
  }
}
