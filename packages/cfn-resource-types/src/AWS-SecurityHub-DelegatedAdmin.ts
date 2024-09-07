import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::SecurityHub::DelegatedAdmin`` resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see [Designating the delegated administrator](https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the *User Guide*.
 To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
 To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using [mappings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html).
 Tags aren't supported for this resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html}
 */
export type SecurityHubDelegatedAdminProperties = {
  /**
   * The AWS-account identifier of the account to designate as the Security Hub administrator account.
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
   * @pattern `^[0-9]{12}/[a-zA-Z0-9-]{1,32}$`
   */
  DelegatedAdminIdentifier: string;
  Status: "ENABLED" | "DISABLE_IN_PROGRESS";
};
/**
 * The ``AWS::SecurityHub::DelegatedAdmin`` resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see [Designating the delegated administrator](https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the *User Guide*.
 To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
 To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using [mappings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html).
 Tags aren't supported for this resource.
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
