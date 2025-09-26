import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::ProjectMembership Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html}
 */
export type DataZoneProjectMembershipProperties = {
  Designation: UserDesignation;
  /**
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  Member: Member;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectIdentifier: string;
};
/**
 * Attribute type definition for `AWS::DataZone::ProjectMembership`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#aws-resource-datazone-projectmembership-return-values}
 */
export type DataZoneProjectMembershipAttributes = {
  MemberIdentifier: string;
  MemberIdentifierType: MemberIdentifierType;
};
/**
 * Type definition for `AWS::DataZone::ProjectMembership.Member`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-member.html}
 */
export type Member =
  | {
      UserIdentifier: string;
    }
  | {
      GroupIdentifier: string;
    };
/**
 * Type definition for `AWS::DataZone::ProjectMembership.MemberIdentifierType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-memberidentifiertype.html}
 */
export type MemberIdentifierType = "USER_IDENTIFIER" | "GROUP_IDENTIFIER";
/**
 * Type definition for `AWS::DataZone::ProjectMembership.UserDesignation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectmembership-userdesignation.html}
 */
export type UserDesignation =
  | "PROJECT_OWNER"
  | "PROJECT_CONTRIBUTOR"
  | "PROJECT_CATALOG_VIEWER"
  | "PROJECT_CATALOG_CONSUMER"
  | "PROJECT_CATALOG_STEWARD";
/**
 * Definition of AWS::DataZone::ProjectMembership Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html}
 */
export class DataZoneProjectMembership extends $Resource<
  "AWS::DataZone::ProjectMembership",
  DataZoneProjectMembershipProperties,
  DataZoneProjectMembershipAttributes
> {
  public static readonly Type = "AWS::DataZone::ProjectMembership";
  constructor(
    logicalId: string,
    properties: DataZoneProjectMembershipProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneProjectMembership.Type, properties, options);
  }
}
