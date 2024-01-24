import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecretsManager::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export type SecretsManagerResourcePolicyProperties = {
  BlockPublicPolicy?: boolean;
  ResourcePolicy: Record<string, any>;
  SecretId: string;
};
/**
 * Attribute type definition for `AWS::SecretsManager::ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#aws-resource-secretsmanager-resourcepolicy-return-values}
 */
export type SecretsManagerResourcePolicyAttributes = {
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
