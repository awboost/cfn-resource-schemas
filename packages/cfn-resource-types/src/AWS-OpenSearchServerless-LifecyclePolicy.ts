import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::OpenSearchServerless::LifecyclePolicy`.
 * Amazon OpenSearchServerless lifecycle policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html}
 */
export type OpenSearchServerlessLifecyclePolicyProperties = {
  /**
   * The description of the policy
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The name of the policy
   * @minLength `3`
   * @maxLength `32`
   * @pattern `^[a-z][a-z0-9-]+$`
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
   * The type of lifecycle policy
   */
  Type: LifecyclePolicyType;
};
/**
 * Type definition for `AWS::OpenSearchServerless::LifecyclePolicy.LifecyclePolicyType`.
 * The type of lifecycle policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-lifecyclepolicy-lifecyclepolicytype.html}
 */
export type LifecyclePolicyType = "retention";
/**
 * Resource type definition for `AWS::OpenSearchServerless::LifecyclePolicy`.
 * Amazon OpenSearchServerless lifecycle policy resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html}
 */
export class OpenSearchServerlessLifecyclePolicy extends $Resource<
  "AWS::OpenSearchServerless::LifecyclePolicy",
  OpenSearchServerlessLifecyclePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::OpenSearchServerless::LifecyclePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: OpenSearchServerlessLifecyclePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OpenSearchServerlessLifecyclePolicy.Type,
      properties,
      OpenSearchServerlessLifecyclePolicy.AttributeNames,
      options,
    );
  }
}
