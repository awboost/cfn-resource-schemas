import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::PullThroughCacheRule resource configures the upstream registry configuration details for an Amazon Elastic Container Registry (Amazon Private ECR) pull-through cache.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html}
 */
export type ECRPullThroughCacheRuleProperties = {
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
   * @minLength `50`
   * @maxLength `612`
   * @pattern `^arn:aws:secretsmanager:[a-zA-Z0-9-:]+:secret:ecr\-pullthroughcache\/[a-zA-Z0-9\/_+=.@-]+$`
   */
  CredentialArn?: string;
  /**
   * The ECRRepositoryPrefix is a custom alias for upstream registry url.
   * @minLength `2`
   * @maxLength `30`
   * @pattern `(?:[a-z0-9]+(?:[._-][a-z0-9]+)/‍*)*[a-z0-9]+(?:[._-][a-z0-9]+)*`
   */
  EcrRepositoryPrefix?: string;
  /**
   * The name of the upstream registry.
   */
  UpstreamRegistry?: string;
  /**
   * The upstreamRegistryUrl is the endpoint of upstream registry url of the public repository to be cached
   */
  UpstreamRegistryUrl?: string;
};
/**
 * The AWS::ECR::PullThroughCacheRule resource configures the upstream registry configuration details for an Amazon Elastic Container Registry (Amazon Private ECR) pull-through cache.
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
