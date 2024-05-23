import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::GroupProfile`.
 * Group profiles represent groups of Amazon DataZone users. Groups can be manually created, or mapped to Active Directory groups of enterprise customers. In Amazon DataZone, groups serve two purposes. First, a group can map to a team of users in the organizational chart, and thus reduce the administrative work of a Amazon DataZone project owner when there are new employees joining or leaving a team. Second, corporate administrators use Active Directory groups to manage and update user statuses and so Amazon DataZone domain administrators can use these group memberships to implement Amazon DataZone domain policies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html}
 */
export type DataZoneGroupProfileProperties = {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile would be created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The ID of the group.
   * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  ]+)`
   */
  GroupIdentifier: string;
  /**
   * The status of the group profile.
   */
  Status?: GroupProfileStatus;
};
/**
 * Attribute type definition for `AWS::DataZone::GroupProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html#aws-resource-datazone-groupprofile-return-values}
 */
export type DataZoneGroupProfileAttributes = {
  /**
   * The identifier of the Amazon DataZone domain in which the group profile is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The group-name of the Group Profile.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^[a-zA-Z_0-9+=,.@-]+$`
   */
  GroupName: string;
  /**
   * The ID of the Amazon DataZone group profile.
   * @pattern `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::DataZone::GroupProfile.GroupProfileStatus`.
 * The status of the group profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-groupprofile-groupprofilestatus.html}
 */
export type GroupProfileStatus = "ASSIGNED" | "NOT_ASSIGNED";
/**
 * Resource type definition for `AWS::DataZone::GroupProfile`.
 * Group profiles represent groups of Amazon DataZone users. Groups can be manually created, or mapped to Active Directory groups of enterprise customers. In Amazon DataZone, groups serve two purposes. First, a group can map to a team of users in the organizational chart, and thus reduce the administrative work of a Amazon DataZone project owner when there are new employees joining or leaving a team. Second, corporate administrators use Active Directory groups to manage and update user statuses and so Amazon DataZone domain administrators can use these group memberships to implement Amazon DataZone domain policies.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-groupprofile.html}
 */
export class DataZoneGroupProfile extends $Resource<
  "AWS::DataZone::GroupProfile",
  DataZoneGroupProfileProperties,
  DataZoneGroupProfileAttributes
> {
  public static readonly Type = "AWS::DataZone::GroupProfile";
  constructor(
    logicalId: string,
    properties: DataZoneGroupProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneGroupProfile.Type, properties, options);
  }
}
