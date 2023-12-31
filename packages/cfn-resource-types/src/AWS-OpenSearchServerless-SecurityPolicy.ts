import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::SecurityPolicy`.
 * Amazon OpenSearchServerless security policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html}
 */
export type OpenSearchServerlessSecurityPolicyProperties = {
  /**
   * The description of the policy
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the policy
   * @minLength `3`
   * @maxLength `32`
   * @pattern `^[a-z][a-z0-9-]{2,31}$`
   */
  Name: string;
  /**
   * The JSON policy document that is the content for the policy
   * @minLength `1`
   * @maxLength `20480`
   * @pattern `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
   */
  Policy: string;
  /**
   * The possible types for the network policy
   */
  Type: SecurityPolicyType;
};
/**
 * Type definition for `AWS::OpenSearchServerless::SecurityPolicy.SecurityPolicyType`.
 * The possible types for the network policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securitypolicy-securitypolicytype.html}
 */
export type SecurityPolicyType = "encryption" | "network";
/**
 * Resource type definition for `AWS::OpenSearchServerless::SecurityPolicy`.
 * Amazon OpenSearchServerless security policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html}
 */
export class OpenSearchServerlessSecurityPolicy extends $Resource<
  "AWS::OpenSearchServerless::SecurityPolicy",
  OpenSearchServerlessSecurityPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::SecurityPolicy";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessSecurityPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessSecurityPolicy.Type,
      properties,
      options,
    );
  }
}
