import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::APS::RuleGroupsNamespace`.
 * RuleGroupsNamespace schema for cloudformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html}
 */
export type APSRuleGroupsNamespaceProperties = {
  /**
   * The RuleGroupsNamespace data.
   */
  Data: string;
  /**
   * The RuleGroupsNamespace name.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
   */
  Workspace: string;
};
/**
 * Attribute type definition for `AWS::APS::RuleGroupsNamespace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#aws-resource-aps-rulegroupsnamespace-return-values}
 */
export type APSRuleGroupsNamespaceAttributes = {
  /**
   * The RuleGroupsNamespace ARN.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:rulegroupsnamespace/[a-zA-Z0-9-]+/[0-9A-Za-z][-.0-9A-Z_a-z]*$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::APS::RuleGroupsNamespace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-rulegroupsnamespace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::APS::RuleGroupsNamespace`.
 * RuleGroupsNamespace schema for cloudformation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html}
 */
export class APSRuleGroupsNamespace extends $Resource<
  "AWS::APS::RuleGroupsNamespace",
  APSRuleGroupsNamespaceProperties,
  APSRuleGroupsNamespaceAttributes
> {
  public static readonly Type = "AWS::APS::RuleGroupsNamespace";
  constructor(
    logicalId: string,
    properties: APSRuleGroupsNamespaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSRuleGroupsNamespace.Type, properties, options);
  }
}
