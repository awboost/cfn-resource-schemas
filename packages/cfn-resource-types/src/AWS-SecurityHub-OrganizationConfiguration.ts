import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html}
 */
export type SecurityHubOrganizationConfigurationProperties = {
  /**
   * Whether to automatically enable Security Hub in new member accounts when they join the organization.
   */
  AutoEnable: boolean;
  /**
   * Whether to automatically enable Security Hub default standards in new member accounts when they join the organization.
   */
  AutoEnableStandards?: "DEFAULT" | "NONE";
  /**
   * Indicates whether the organization uses local or central configuration.
   */
  ConfigurationType?: "CENTRAL" | "LOCAL";
};
/**
 * Attribute type definition for `AWS::SecurityHub::OrganizationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#aws-resource-securityhub-organizationconfiguration-return-values}
 */
export type SecurityHubOrganizationConfigurationAttributes = {
  /**
   * Whether the maximum number of allowed member accounts are already associated with the Security Hub administrator account.
   */
  MemberAccountLimitReached: boolean;
  /**
   * The identifier of the OrganizationConfiguration being created and assigned as the unique identifier.
   * @pattern `^[0-9]{12}/[a-zA-Z0-9-]{1,32}/securityhub-organization-configuration$`
   */
  OrganizationConfigurationIdentifier: string;
  /**
   * Describes whether central configuration could be enabled as the ConfigurationType for the organization.
   */
  Status: "PENDING" | "ENABLED" | "FAILED";
  /**
   * Provides an explanation if the value of Status is equal to FAILED when ConfigurationType is equal to CENTRAL.
   */
  StatusMessage: string;
};
/**
 * The AWS::SecurityHub::OrganizationConfiguration resource represents the configuration of your organization in Security Hub. Only the Security Hub administrator account can create Organization Configuration resource in each region and can opt-in to Central Configuration only in the aggregation region of FindingAggregator.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html}
 */
export class SecurityHubOrganizationConfiguration extends $Resource<
  "AWS::SecurityHub::OrganizationConfiguration",
  SecurityHubOrganizationConfigurationProperties,
  SecurityHubOrganizationConfigurationAttributes
> {
  public static readonly Type = "AWS::SecurityHub::OrganizationConfiguration";
  constructor(
    logicalId: string,
    properties: SecurityHubOrganizationConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecurityHubOrganizationConfiguration.Type,
      properties,
      options,
    );
  }
}
