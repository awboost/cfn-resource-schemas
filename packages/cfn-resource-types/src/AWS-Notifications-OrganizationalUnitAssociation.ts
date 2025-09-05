import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Notifications::OrganizationalUnitAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-organizationalunitassociation.html}
 */
export type NotificationsOrganizationalUnitAssociationProperties = {
  /**
     * ARN identifier of the NotificationConfiguration.
    Example: arn:aws:notifications::123456789012:configuration/a01jes88qxwkbj05xv9c967pgm1
     * @pattern `^arn:aws:notifications::[0-9]{12}:configuration\/[a-z0-9]{27}$`
     */
  NotificationConfigurationArn: string;
  /**
   * The ID of the organizational unit.
   * @pattern `^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$`
   */
  OrganizationalUnitId: string;
};
/**
 * Resource Type definition for AWS::Notifications::OrganizationalUnitAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-organizationalunitassociation.html}
 */
export class NotificationsOrganizationalUnitAssociation extends $Resource<
  "AWS::Notifications::OrganizationalUnitAssociation",
  NotificationsOrganizationalUnitAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Notifications::OrganizationalUnitAssociation";
  constructor(
    logicalId: string,
    properties: NotificationsOrganizationalUnitAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NotificationsOrganizationalUnitAssociation.Type,
      properties,
      options,
    );
  }
}
