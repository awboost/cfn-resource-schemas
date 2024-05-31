import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::SecurityHub::PolicyAssociation resource represents the AWS Security Hub Central Configuration Policy associations in your Target. Only the AWS Security Hub delegated administrator can create the resouce from the home region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html}
 */
export type SecurityHubPolicyAssociationProperties = {
  /**
   * The universally unique identifier (UUID) of the configuration policy or a value of SELF_MANAGED_SECURITY_HUB for a self-managed configuration
   * @pattern `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^SELF_MANAGED_SECURITY_HUB$`
   */
  ConfigurationPolicyId: string;
  /**
   * The identifier of the target account, organizational unit, or the root
   */
  TargetId: string;
  /**
   * Indicates whether the target is an AWS account, organizational unit, or the organization root
   */
  TargetType: "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT";
};
/**
 * Attribute type definition for `AWS::SecurityHub::PolicyAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#aws-resource-securityhub-policyassociation-return-values}
 */
export type SecurityHubPolicyAssociationAttributes = {
  /**
   * A unique identifier to indicates if the target has an association
   */
  AssociationIdentifier: string;
  /**
   * The current status of the association between the specified target and the configuration
   */
  AssociationStatus: "SUCCESS" | "PENDING" | "FAILED";
  /**
   * An explanation for a FAILED value for AssociationStatus
   */
  AssociationStatusMessage: string;
  /**
   * Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub delegated administrator or inherited from a parent
   */
  AssociationType: "APPLIED" | "INHERITED";
  /**
   * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated
   */
  UpdatedAt: string;
};
/**
 * The AWS::SecurityHub::PolicyAssociation resource represents the AWS Security Hub Central Configuration Policy associations in your Target. Only the AWS Security Hub delegated administrator can create the resouce from the home region.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html}
 */
export class SecurityHubPolicyAssociation extends $Resource<
  "AWS::SecurityHub::PolicyAssociation",
  SecurityHubPolicyAssociationProperties,
  SecurityHubPolicyAssociationAttributes
> {
  public static readonly Type = "AWS::SecurityHub::PolicyAssociation";
  constructor(
    logicalId: string,
    properties: SecurityHubPolicyAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityHubPolicyAssociation.Type, properties, options);
  }
}
