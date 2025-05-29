import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Notifications::ManagedNotificationAccountContactAssociation`.
 * Resource Type definition for ManagedNotificationAccountContactAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html}
 */
export type NotificationsManagedNotificationAccountContactAssociationProperties =
  {
    /**
     * This unique identifier for Contact
     */
    ContactIdentifier: ContactIdentifier;
    /**
     * The managed notification configuration ARN, against which the account contact association will be created
     * @pattern `^arn:[-.a-z0-9]{1,63}:notifications::[0-9]{12}:managed-notification-configuration/category/[a-zA-Z0-9-]{3,64}/sub-category/[a-zA-Z0-9-]{3,64}$`
     */
    ManagedNotificationConfigurationArn: string;
  };
/**
 * Type definition for `AWS::Notifications::ManagedNotificationAccountContactAssociation.ContactIdentifier`.
 * This unique identifier for Contact
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-notifications-managednotificationaccountcontactassociation-contactidentifier.html}
 */
export type ContactIdentifier =
  | "ACCOUNT_PRIMARY"
  | "ACCOUNT_ALTERNATE_SECURITY"
  | "ACCOUNT_ALTERNATE_OPERATIONS"
  | "ACCOUNT_ALTERNATE_BILLING";
/**
 * Resource type definition for `AWS::Notifications::ManagedNotificationAccountContactAssociation`.
 * Resource Type definition for ManagedNotificationAccountContactAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html}
 */
export class NotificationsManagedNotificationAccountContactAssociation extends $Resource<
  "AWS::Notifications::ManagedNotificationAccountContactAssociation",
  NotificationsManagedNotificationAccountContactAssociationProperties,
  Record<string, never>
> {
  public static readonly Type =
    "AWS::Notifications::ManagedNotificationAccountContactAssociation";
  constructor(
    logicalId: string,
    properties: NotificationsManagedNotificationAccountContactAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NotificationsManagedNotificationAccountContactAssociation.Type,
      properties,
      options,
    );
  }
}
