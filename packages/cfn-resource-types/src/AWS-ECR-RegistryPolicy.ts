import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["RegistryId" as const];
  constructor(
    logicalId: string,
    properties: ECRRegistryPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ECRRegistryPolicy.Type,
      properties,
      ECRRegistryPolicy.AttributeNames,
      options,
    );
  }
}
