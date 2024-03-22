import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::DelegatedAdmin resource represents the AWS Security Hub delegated admin account in your organization. One delegated admin resource is allowed to create for the organization in each region in which you configure the AdminAccountId.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html}
 */
export type SecurityHubDelegatedAdminProperties = {
  /**
   * The Amazon Web Services account identifier of the account to designate as the Security Hub administrator account
   * @pattern `^[0-9]{12}$`
   */
  AdminAccountId: string;
};
/**
 * Attribute type definition for `AWS::SecurityHub::DelegatedAdmin`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html#aws-resource-securityhub-delegatedadmin-return-values}
 */
export type SecurityHubDelegatedAdminAttributes = {
  /**
   * The identifier of the DelegatedAdmin being created and assigned as the unique identifier
   * @pattern `^[0-9]{12}/[a-zA-Z0-9-]{1,32}$`
   */
  DelegatedAdminIdentifier: string;
  /**
   * The current status of the Security Hub administrator account. Indicates whether the account is currently enabled as a Security Hub administrator
   */
  Status: "ENABLED" | "DISABLE_IN_PROGRESS";
};
/**
 * The AWS::SecurityHub::DelegatedAdmin resource represents the AWS Security Hub delegated admin account in your organization. One delegated admin resource is allowed to create for the organization in each region in which you configure the AdminAccountId.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html}
 */
export class SecurityHubDelegatedAdmin extends $Resource<
  "AWS::SecurityHub::DelegatedAdmin",
  SecurityHubDelegatedAdminProperties,
  SecurityHubDelegatedAdminAttributes
> {
  public static readonly Type = "AWS::SecurityHub::DelegatedAdmin";
  constructor(
    logicalId: string,
    properties: SecurityHubDelegatedAdminProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubDelegatedAdmin.Type, properties, options);
  }
}
