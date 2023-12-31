import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Lex::ResourcePolicy`.
 * A resource policy with specified policy statements that attaches to a Lex bot or bot alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html}
 */
export type LexResourcePolicyProperties = {
  /**
   * A resource policy to add to the resource. The policy is a JSON structure following the IAM syntax that contains one or more statements that define the policy.
   */
  Policy: Policy;
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   * @minLength `1`
   * @maxLength `1011`
   */
  ResourceArn: string;
};
/**
 * Attribute type definition for `AWS::Lex::ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html#aws-resource-lex-resourcepolicy-return-values}
 */
export type LexResourcePolicyAttributes = {
  /**
   * The Physical ID of the resource policy.
   */
  Id: string;
  /**
   * The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^[0-9]+$`
   */
  RevisionId: string;
};
/**
 * Type definition for `AWS::Lex::ResourcePolicy.Policy`.
 * A resource policy to add to the resource. The policy is a JSON structure following the IAM syntax that contains one or more statements that define the policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-resourcepolicy-policy.html}
 */
export type Policy = Record<string, any>;
/**
 * Resource type definition for `AWS::Lex::ResourcePolicy`.
 * A resource policy with specified policy statements that attaches to a Lex bot or bot alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-resourcepolicy.html}
 */
export class LexResourcePolicy extends $Resource<
  "AWS::Lex::ResourcePolicy",
  LexResourcePolicyProperties,
  LexResourcePolicyAttributes
> {
  public static readonly Type = "AWS::Lex::ResourcePolicy";
  public static readonly AttributeNames = [
    "Id" as const,
    "RevisionId" as const,
  ];
  constructor(
    logicalId: string,
    properties: LexResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LexResourcePolicy.Type,
      properties,
      LexResourcePolicy.AttributeNames,
      options,
    );
  }
}
