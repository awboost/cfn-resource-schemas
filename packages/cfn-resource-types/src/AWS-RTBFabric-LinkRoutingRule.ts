import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RTBFabric::LinkRoutingRule. A routing rule on a link within RTB Fabric that controls request routing based on conditions such as host headers, path matching, and query string parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-linkroutingrule.html}
 */
export type RTBFabricLinkRoutingRuleProperties = {
  /**
   * Conditions for a routing rule. All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.
   */
  Conditions: RuleCondition;
  /**
   * @pattern `^rtb-gw-[a-z0-9-]{1,25}$`
   */
  GatewayId: string;
  /**
   * @pattern `^link-[a-z0-9-]{1,25}$`
   */
  LinkId: string;
  /**
   * @min `1`
   * @max `1000`
   */
  Priority: number;
  /**
   * Tags to assign to the LinkRoutingRule.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RTBFabric::LinkRoutingRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-linkroutingrule.html#aws-resource-rtbfabric-linkroutingrule-return-values}
 */
export type RTBFabricLinkRoutingRuleAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws:rtbfabric:[a-zA-Z0-9_-]+:[0-9]{12}:gateway/[a-zA-Z0-9-]+/link/[a-zA-Z0-9-]+/routing-rule/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  CreatedTimestamp: string;
  /**
   * @pattern `^rule-[a-z0-9-]{1,25}$`
   */
  RuleId: string;
  Status: RuleStatus;
  UpdatedTimestamp: string;
};
/**
 * Type definition for `AWS::RTBFabric::LinkRoutingRule.QueryStringKeyValuePair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-linkroutingrule-querystringkeyvaluepair.html}
 */
export type QueryStringKeyValuePair = {
  /**
   * Query string key — RFC 3986 unreserved characters.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9._~-]+$`
   */
  Key: string;
  /**
   * Query string value — RFC 3986 unreserved characters.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9._~-]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::RTBFabric::LinkRoutingRule.RuleCondition`.
 * Conditions for a routing rule. All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-linkroutingrule-rulecondition.html}
 */
export type RuleCondition = {
  /**
   * Exact host match — RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9._~-]+$`
   */
  HostHeader?: string;
  /**
   * Wildcard host pattern (e.g., *.example.com) — RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.
   * @minLength `3`
   * @maxLength `255`
   * @pattern `^[A-Za-z0-9._~*-]+$`
   */
  HostHeaderWildcard?: string;
  /**
   * Exact path match — must start with /. Mutually exclusive with PathPrefix.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^/[A-Za-z0-9._~/-]*$`
   */
  PathExact?: string;
  /**
   * Path prefix matching — strict starts-with, must start with /. Mutually exclusive with PathExact.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^/[A-Za-z0-9._~/-]*$`
   */
  PathPrefix?: string;
  /**
   * Query string key=value pair match (single pair).
   */
  QueryStringEquals?: QueryStringKeyValuePair;
  /**
   * Query string key presence check (any value accepted).
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[A-Za-z0-9._~-]+$`
   */
  QueryStringExists?: string;
};
/**
 * Type definition for `AWS::RTBFabric::LinkRoutingRule.RuleStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-linkroutingrule-rulestatus.html}
 */
export type RuleStatus =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "UPDATE_IN_PROGRESS"
  | "DELETION_IN_PROGRESS"
  | "DELETED"
  | "FAILED";
/**
 * Type definition for `AWS::RTBFabric::LinkRoutingRule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rtbfabric-linkroutingrule-tag.html}
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
  Value?: string;
};
/**
 * Resource Type definition for AWS::RTBFabric::LinkRoutingRule. A routing rule on a link within RTB Fabric that controls request routing based on conditions such as host headers, path matching, and query string parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rtbfabric-linkroutingrule.html}
 */
export class RTBFabricLinkRoutingRule extends $Resource<
  "AWS::RTBFabric::LinkRoutingRule",
  RTBFabricLinkRoutingRuleProperties,
  RTBFabricLinkRoutingRuleAttributes
> {
  public static readonly Type = "AWS::RTBFabric::LinkRoutingRule";
  constructor(
    logicalId: string,
    properties: RTBFabricLinkRoutingRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RTBFabricLinkRoutingRule.Type, properties, options);
  }
}
