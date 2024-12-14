import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::Logs::AccountPolicy resource specifies a CloudWatch Logs AccountPolicy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html}
 */
export type LogsAccountPolicyProperties = {
  /**
     * The body of the policy document you want to use for this topic.
    
    You can only add one policy per PolicyType.
    
    The policy must be in JSON string format.
    
    Length Constraints: Maximum length of 30720
     * @minLength `1`
     * @maxLength `30720`
     */
  PolicyDocument: string;
  /**
   * The name of the account policy
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[^:*]{1,256}$`
   */
  PolicyName: string;
  /**
   * Type of the policy.
   */
  PolicyType:
    | "DATA_PROTECTION_POLICY"
    | "SUBSCRIPTION_FILTER_POLICY"
    | "FIELD_INDEX_POLICY"
    | "TRANSFORMER_POLICY";
  /**
   * Scope for policy application
   */
  Scope?: "ALL";
  /**
   * Log group  selection criteria to apply policy only to a subset of log groups. SelectionCriteria string can be up to 25KB and cloudwatchlogs determines the length of selectionCriteria by using its UTF-8 bytes
   */
  SelectionCriteria?: string;
};
/**
 * Attribute type definition for `AWS::Logs::AccountPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#aws-resource-logs-accountpolicy-return-values}
 */
export type LogsAccountPolicyAttributes = {
  /**
   * User account id
   * @pattern `^\d{12}$`
   */
  AccountId: string;
};
/**
 * The AWS::Logs::AccountPolicy resource specifies a CloudWatch Logs AccountPolicy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html}
 */
export class LogsAccountPolicy extends $Resource<
  "AWS::Logs::AccountPolicy",
  LogsAccountPolicyProperties,
  LogsAccountPolicyAttributes
> {
  public static readonly Type = "AWS::Logs::AccountPolicy";
  constructor(
    logicalId: string,
    properties: LogsAccountPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LogsAccountPolicy.Type, properties, options);
  }
}
