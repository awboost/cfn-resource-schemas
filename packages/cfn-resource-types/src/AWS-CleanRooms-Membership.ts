import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::CleanRooms::Membership`.
 * Represents an AWS account that is a part of a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html}
 */
export type CleanRoomsMembershipProperties = {
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  CollaborationIdentifier: string;
  DefaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
  QueryLogStatus: MembershipQueryLogStatus;
  /**
   * An arbitrary set of tags (key-value pairs) for this cleanrooms membership.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CleanRooms::Membership`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#aws-resource-cleanrooms-membership-return-values}
 */
export type CleanRoomsMembershipAttributes = {
  /**
   * @maxLength `100`
   */
  Arn: string;
  /**
   * @maxLength `100`
   */
  CollaborationArn: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d+$`
   */
  CollaborationCreatorAccountId: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   */
  MembershipIdentifier: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedQueryOutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html}
 */
export type MembershipProtectedQueryOutputConfiguration = {
  S3: ProtectedQueryS3OutputConfiguration;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipProtectedQueryResultConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html}
 */
export type MembershipProtectedQueryResultConfiguration = {
  OutputConfiguration: MembershipProtectedQueryOutputConfiguration;
  /**
   * @minLength `32`
   * @maxLength `512`
   */
  RoleArn?: string;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipQueryLogStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipquerylogstatus.html}
 */
export type MembershipQueryLogStatus = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::CleanRooms::Membership.MembershipStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-membershipstatus.html}
 */
export type MembershipStatus = "ACTIVE" | "REMOVED" | "COLLABORATION_DELETED";
/**
 * Type definition for `AWS::CleanRooms::Membership.ProtectedQueryS3OutputConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html}
 */
export type ProtectedQueryS3OutputConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `63`
   */
  Bucket: string;
  KeyPrefix?: string;
  ResultFormat: ResultFormat;
};
/**
 * Type definition for `AWS::CleanRooms::Membership.ResultFormat`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-resultformat.html}
 */
export type ResultFormat = "CSV" | "PARQUET";
/**
 * Type definition for `AWS::CleanRooms::Membership.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cleanrooms-membership-tag.html}
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
 * Resource type definition for `AWS::CleanRooms::Membership`.
 * Represents an AWS account that is a part of a collaboration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html}
 */
export class CleanRoomsMembership extends $Resource<
  "AWS::CleanRooms::Membership",
  CleanRoomsMembershipProperties,
  CleanRoomsMembershipAttributes
> {
  public static readonly Type = "AWS::CleanRooms::Membership";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CollaborationArn" as const,
    "CollaborationCreatorAccountId" as const,
    "MembershipIdentifier" as const,
  ];
  constructor(
    logicalId: string,
    properties: CleanRoomsMembershipProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      CleanRoomsMembership.Type,
      properties,
      CleanRoomsMembership.AttributeNames,
      options,
    );
  }
}
