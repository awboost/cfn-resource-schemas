import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export type SecretsManagerResourcePolicyProperties = {
  /**
   * Specifies whether to block resource-based policies that allow broad access to the secret.
   */
  BlockPublicPolicy?: boolean;
  /**
   * A JSON-formatted string for an AWS resource-based policy.
   */
  ResourcePolicy: string | Record<string, any>;
  /**
   * The ARN or name of the secret to attach the resource-based policy.
   * @minLength `1`
   * @maxLength `2048`
   */
  SecretId: string;
};
/**
 * Attribute type definition for `AWS::SecretsManager::ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#aws-resource-secretsmanager-resourcepolicy-return-values}
 */
export type SecretsManagerResourcePolicyAttributes = {
  /**
   * The Arn of the secret.
   */
  Id: string;
};
/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export class SecretsManagerResourcePolicy extends $Resource<
  "AWS::SecretsManager::ResourcePolicy",
  SecretsManagerResourcePolicyProperties,
  SecretsManagerResourcePolicyAttributes
> {
  public static readonly Type = "AWS::SecretsManager::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: SecretsManagerResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecretsManagerResourcePolicy.Type, properties, options);
  }
}
