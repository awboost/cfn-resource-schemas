import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Grafana::Workspace Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html}
 */
export type GrafanaWorkspaceProperties = {
  /**
   * These enums represent valid account access types. Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.
   */
  AccountAccessType: AccountAccessType;
  /**
   * List of authentication providers to enable.
   * @minLength `1`
   */
  AuthenticationProviders: AuthenticationProviderTypes[];
  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   * @pattern `^[!-~]{1,64}$`
   */
  ClientToken?: string;
  /**
   * List of data sources on the service managed IAM role.
   */
  DataSources?: DataSourceType[];
  /**
   * Description of a workspace.
   * @minLength `0`
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The version of Grafana to support in your workspace.
   * @minLength `1`
   * @maxLength `255`
   */
  GrafanaVersion?: string;
  /**
   * The user friendly name of a workspace.
   * @pattern `^[a-zA-Z0-9-._~]{1,255}$`
   */
  Name?: string;
  /**
   * The configuration settings for Network Access Control.
   */
  NetworkAccessControl?: NetworkAccessControl;
  /**
   * List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.
   */
  NotificationDestinations?: NotificationDestinationType[];
  /**
   * The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.
   * @minLength `1`
   * @maxLength `2048`
   */
  OrganizationRoleName?: string;
  /**
   * List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.
   */
  OrganizationalUnits?: string[];
  /**
   * These enums represent valid permission types to use when creating or configuring a Grafana workspace. The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.
   */
  PermissionType: PermissionType;
  /**
   * Allow workspace admins to install plugins
   */
  PluginAdminEnabled?: boolean;
  /**
   * IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.
   * @minLength `1`
   * @maxLength `2048`
   */
  RoleArn?: string;
  /**
   * SAML configuration data associated with an AMG workspace.
   */
  SamlConfiguration?: SamlConfiguration;
  /**
   * The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.
   */
  StackSetName?: string;
  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
   */
  VpcConfiguration?: VpcConfiguration;
};
/**
 * Attribute type definition for `AWS::Grafana::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#aws-resource-grafana-workspace-return-values}
 */
export type GrafanaWorkspaceAttributes = {
  /**
   * Timestamp when the workspace was created.
   */
  CreationTimestamp: string;
  /**
   * Endpoint for the Grafana workspace.
   * @minLength `1`
   * @maxLength `2048`
   */
  Endpoint: string;
  /**
   * The id that uniquely identifies a Grafana workspace.
   * @pattern `^g-[0-9a-f]{10}$`
   */
  Id: string;
  /**
   * Timestamp when the workspace was last modified
   */
  ModificationTimestamp: string;
  /**
   * Valid SAML configuration statuses.
   */
  SamlConfigurationStatus: SamlConfigurationStatus;
  /**
   * The client ID of the AWS SSO Managed Application.
   */
  SsoClientId: string;
  /**
   * These enums represent the status of a workspace.
   */
  Status: WorkspaceStatus;
};
/**
 * Type definition for `AWS::Grafana::Workspace.AccountAccessType`.
 * These enums represent valid account access types. Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-accountaccesstype.html}
 */
export type AccountAccessType = "CURRENT_ACCOUNT" | "ORGANIZATION";
/**
 * Type definition for `AWS::Grafana::Workspace.AssertionAttributes`.
 * Maps Grafana friendly names to the IdPs SAML attributes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html}
 */
export type AssertionAttributes = {
  /**
   * Name of the attribute within the SAML assert to use as the users email in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Email?: string;
  /**
   * Name of the attribute within the SAML assert to use as the users groups in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Groups?: string;
  /**
   * Name of the attribute within the SAML assert to use as the users login handle in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Login?: string;
  /**
   * Name of the attribute within the SAML assert to use as the users name in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Name?: string;
  /**
   * Name of the attribute within the SAML assert to use as the users organizations in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Org?: string;
  /**
   * Name of the attribute within the SAML assert to use as the users roles in Grafana.
   * @minLength `1`
   * @maxLength `256`
   */
  Role?: string;
};
/**
 * Type definition for `AWS::Grafana::Workspace.AuthenticationProviderTypes`.
 * Valid workspace authentication providers.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-authenticationprovidertypes.html}
 */
export type AuthenticationProviderTypes = "AWS_SSO" | "SAML";
/**
 * Type definition for `AWS::Grafana::Workspace.DataSourceType`.
 * These enums represent valid AWS data sources that can be queried via the Grafana workspace. These data sources are primarily used to help customers visualize which data sources have been added to a service managed workspace IAM role.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-datasourcetype.html}
 */
export type DataSourceType =
  | "AMAZON_OPENSEARCH_SERVICE"
  | "CLOUDWATCH"
  | "PROMETHEUS"
  | "XRAY"
  | "TIMESTREAM"
  | "SITEWISE"
  | "ATHENA"
  | "REDSHIFT";
/**
 * Type definition for `AWS::Grafana::Workspace.IdpMetadata`.
 * IdP Metadata used to configure SAML authentication in Grafana.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html}
 */
export type IdpMetadata = {
  /**
   * URL that vends the IdPs metadata.
   * @minLength `1`
   * @maxLength `2048`
   */
  Url?: string;
  /**
   * XML blob of the IdPs metadata.
   */
  Xml?: string;
};
/**
 * Type definition for `AWS::Grafana::Workspace.NetworkAccessControl`.
 * The configuration settings for Network Access Control.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html}
 */
export type NetworkAccessControl = {
  /**
   * The list of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.
   * @minLength `0`
   * @maxLength `5`
   */
  PrefixListIds?: string[];
  /**
   * The list of Amazon VPC endpoint IDs for the workspace. If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.
   * @minLength `0`
   * @maxLength `5`
   */
  VpceIds?: string[];
};
/**
 * Type definition for `AWS::Grafana::Workspace.NotificationDestinationType`.
 * These enums represent valid AWS notification destinations that the Grafana workspace has permission to use. These notification destinations are primarily used to help customers visualize which destinations have been added to a service managed IAM role.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-notificationdestinationtype.html}
 */
export type NotificationDestinationType = "SNS";
/**
 * Type definition for `AWS::Grafana::Workspace.PermissionType`.
 * These enums represent valid permission types to use when creating or configuring a Grafana workspace. The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-permissiontype.html}
 */
export type PermissionType = "CUSTOMER_MANAGED" | "SERVICE_MANAGED";
/**
 * Type definition for `AWS::Grafana::Workspace.RoleValues`.
 * Maps SAML roles to the Grafana Editor and Admin roles.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html}
 */
export type RoleValues = {
  /**
   * List of SAML roles which will be mapped into the Grafana Admin role.
   */
  Admin?: string[];
  /**
   * List of SAML roles which will be mapped into the Grafana Editor role.
   */
  Editor?: string[];
};
/**
 * Type definition for `AWS::Grafana::Workspace.SamlConfiguration`.
 * SAML configuration data associated with an AMG workspace.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html}
 */
export type SamlConfiguration = {
  /**
   * List of SAML organizations allowed to access Grafana.
   */
  AllowedOrganizations?: string[];
  /**
   * Maps Grafana friendly names to the IdPs SAML attributes.
   */
  AssertionAttributes?: AssertionAttributes;
  /**
   * IdP Metadata used to configure SAML authentication in Grafana.
   */
  IdpMetadata: IdpMetadata;
  /**
   * The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.
   */
  LoginValidityDuration?: number;
  /**
   * Maps SAML roles to the Grafana Editor and Admin roles.
   */
  RoleValues?: RoleValues;
};
/**
 * Type definition for `AWS::Grafana::Workspace.SamlConfigurationStatus`.
 * Valid SAML configuration statuses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfigurationstatus.html}
 */
export type SamlConfigurationStatus = "CONFIGURED" | "NOT_CONFIGURED";
/**
 * Type definition for `AWS::Grafana::Workspace.VpcConfiguration`.
 * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  /**
   * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.
   * @minLength `2`
   * @maxLength `6`
   */
  SubnetIds: string[];
};
/**
 * Type definition for `AWS::Grafana::Workspace.WorkspaceStatus`.
 * These enums represent the status of a workspace.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-workspacestatus.html}
 */
export type WorkspaceStatus =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "UPGRADING"
  | "VERSION_UPDATING"
  | "DELETION_FAILED"
  | "CREATION_FAILED"
  | "UPDATE_FAILED"
  | "UPGRADE_FAILED"
  | "LICENSE_REMOVAL_FAILED"
  | "VERSION_UPDATE_FAILED";
/**
 * Definition of AWS::Grafana::Workspace Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html}
 */
export class GrafanaWorkspace extends $Resource<
  "AWS::Grafana::Workspace",
  GrafanaWorkspaceProperties,
  GrafanaWorkspaceAttributes
> {
  public static readonly Type = "AWS::Grafana::Workspace";
  constructor(
    logicalId: string,
    properties: GrafanaWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GrafanaWorkspace.Type, properties, options);
  }
}
