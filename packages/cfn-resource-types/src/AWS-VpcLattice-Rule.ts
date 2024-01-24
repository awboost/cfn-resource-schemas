import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::Rule`.
 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html}
 */
export type VpcLatticeRuleProperties = {
  Action: Action;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((listener-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:service/svc-[0-9a-z]{17}/listener/listener-[0-9a-z]{17}))$`
   */
  ListenerIdentifier?: string;
  Match: Match;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^(?!rule-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
   */
  Name?: string;
  /**
   * @min `1`
   * @max `100`
   */
  Priority: number;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((svc-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:service/svc-[0-9a-z]{17}))$`
   */
  ServiceIdentifier?: string;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::VpcLattice::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html#aws-resource-vpclattice-rule-return-values}
 */
export type VpcLatticeRuleAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:service/svc-[0-9a-z]{17}/listener/listener-[0-9a-z]{17}/rule/((rule-[0-9a-z]{17})|(default))$`
   */
  Arn: string;
  /**
   * @minLength `7`
   * @maxLength `22`
   * @pattern `^((rule-[0-9a-z]{17})|(default))$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-action.html}
 */
export type Action = {
  FixedResponse?: FixedResponse;
  Forward?: Forward;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.FixedResponse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-fixedresponse.html}
 */
export type FixedResponse = {
  /**
   * @min `100`
   * @max `599`
   */
  StatusCode: number;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.Forward`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-forward.html}
 */
export type Forward = {
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  TargetGroups: WeightedTargetGroup[];
};
/**
 * Type definition for `AWS::VpcLattice::Rule.HeaderMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatch.html}
 */
export type HeaderMatch = {
  CaseSensitive?: boolean;
  Match: HeaderMatchType;
  /**
   * @minLength `1`
   * @maxLength `40`
   */
  Name: string;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.HeaderMatchType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-headermatchtype.html}
 */
export type HeaderMatchType = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Contains?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Exact?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.HttpMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-httpmatch.html}
 */
export type HttpMatch = {
  /**
   * @maxLength `5`
   */
  HeaderMatches?: HeaderMatch[];
  Method?:
    | "CONNECT"
    | "DELETE"
    | "GET"
    | "HEAD"
    | "OPTIONS"
    | "POST"
    | "PUT"
    | "TRACE";
  PathMatch?: PathMatch;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.Match`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-match.html}
 */
export type Match = {
  HttpMatch: HttpMatch;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.PathMatch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatch.html}
 */
export type PathMatch = {
  CaseSensitive?: boolean;
  Match: PathMatchType;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.PathMatchType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-pathmatchtype.html}
 */
export type PathMatchType = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^\/[a-zA-Z0-9@:%_+.~#?&\/=-]*$`
   */
  Exact?: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^\/[a-zA-Z0-9@:%_+.~#?&\/=-]*$`
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::VpcLattice::Rule.WeightedTargetGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-rule-weightedtargetgroup.html}
 */
export type WeightedTargetGroup = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^((tg-[0-9a-z]{17})|(arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:targetgroup/tg-[0-9a-z]{17}))$`
   */
  TargetGroupIdentifier: string;
  /**
   * @min `1`
   * @max `999`
   */
  Weight?: number;
};
/**
 * Resource type definition for `AWS::VpcLattice::Rule`.
 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-rule.html}
 */
export class VpcLatticeRule extends $Resource<
  "AWS::VpcLattice::Rule",
  VpcLatticeRuleProperties,
  VpcLatticeRuleAttributes
> {
  public static readonly Type = "AWS::VpcLattice::Rule";
  constructor(
    logicalId: string,
    properties: VpcLatticeRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeRule.Type, properties, options);
  }
}
