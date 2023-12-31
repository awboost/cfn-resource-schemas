import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::ECR::RegistryPolicy is used to specify permissions for another AWS account and is used when configuring cross-account replication. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide: https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html}
 */
export type ECRRegistryPolicyProperties = {
  /**
   * The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see Registry permissions (https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the Amazon Elastic Container Registry User Guide.
   */
  PolicyText: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::ECR::RegistryPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html#aws-resource-ecr-registrypolicy-return-values}
 */
export type ECRRegistryPolicyAttributes = {
  /**
   * The registry id.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^[0-9]{12}$`
   */
  RegistryId: string;
};
/**
 * The AWS::ECR::RegistryPolicy is used to specify permissions for another AWS account and is used when configuring cross-account replication. For more information, see Registry permissions in the Amazon Elastic Container Registry User Guide: https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html}
 */
export class ECRRegistryPolicy extends $Resource<
  "AWS::ECR::RegistryPolicy",
  ECRRegistryPolicyProperties,
  ECRRegistryPolicyAttributes
> {
  public static readonly Type = "AWS::ECR::RegistryPolicy";
  constructor(
    logicalId: string,
    properties: ECRRegistryPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRRegistryPolicy.Type, properties, options);
  }
}
