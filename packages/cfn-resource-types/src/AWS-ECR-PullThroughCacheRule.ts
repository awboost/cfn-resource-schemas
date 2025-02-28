import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::ECR::PullThroughCacheRule`` resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html}
 */
export type ECRPullThroughCacheRuleProperties = {
  /**
   * The ARN of the Secrets Manager secret associated with the pull through cache rule.
   * @minLength `50`
   * @maxLength `612`
   * @pattern `^arn:aws:secretsmanager:[a-zA-Z0-9-:]+:secret:ecr\-pullthroughcache\/[a-zA-Z0-9\/_+=.@-]+$`
   */
  CredentialArn?: string;
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   * @minLength `2`
   * @maxLength `30`
   * @pattern `(?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*`
   */
  EcrRepositoryPrefix?: string;
  /**
   * The name of the upstream source registry associated with the pull through cache rule.
   */
  UpstreamRegistry?: string;
  /**
   * The upstream registry URL associated with the pull through cache rule.
   */
  UpstreamRegistryUrl?: string;
};
/**
 * The ``AWS::ECR::PullThroughCacheRule`` resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html}
 */
export class ECRPullThroughCacheRule extends $Resource<
  "AWS::ECR::PullThroughCacheRule",
  ECRPullThroughCacheRuleProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECR::PullThroughCacheRule";
  constructor(
    logicalId: string,
    properties: ECRPullThroughCacheRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRPullThroughCacheRule.Type, properties, options);
  }
}
