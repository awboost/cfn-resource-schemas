import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::OpenSearchServerless::AccessPolicy`.
 * Amazon OpenSearchServerless access policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html}
 */
export type OpenSearchServerlessAccessPolicyProperties = {
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
   * The possible types for the access policy
   */
  Type: AccessPolicyType;
};
/**
 * Type definition for `AWS::OpenSearchServerless::AccessPolicy.AccessPolicyType`.
 * The possible types for the access policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-accesspolicy-accesspolicytype.html}
 */
export type AccessPolicyType = "data";
/**
 * Resource type definition for `AWS::OpenSearchServerless::AccessPolicy`.
 * Amazon OpenSearchServerless access policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html}
 */
export class OpenSearchServerlessAccessPolicy extends $Resource<
  "AWS::OpenSearchServerless::AccessPolicy",
  OpenSearchServerlessAccessPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::AccessPolicy";
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessAccessPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessAccessPolicy.Type,
      properties,
      options,
    );
  }
}
