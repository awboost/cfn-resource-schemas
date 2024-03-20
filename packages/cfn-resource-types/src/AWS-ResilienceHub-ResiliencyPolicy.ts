import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ResilienceHub::ResiliencyPolicy`.
 * Resource Type Definition for Resiliency Policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html}
 */
export type ResilienceHubResiliencyPolicyProperties = {
  /**
   * Data Location Constraint of the Policy.
   */
  DataLocationConstraint?: "AnyLocation" | "SameContinent" | "SameCountry";
  Policy: PolicyMap;
  /**
   * Description of Resiliency Policy.
   * @maxLength `500`
   */
  PolicyDescription?: string;
  /**
   * Name of Resiliency Policy.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  PolicyName: string;
  Tags?: TagMap;
  /**
   * Resiliency Policy Tier.
   */
  Tier:
    | "MissionCritical"
    | "Critical"
    | "Important"
    | "CoreServices"
    | "NonCritical";
};
/**
 * Attribute type definition for `AWS::ResilienceHub::ResiliencyPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#aws-resource-resiliencehub-resiliencypolicy-return-values}
 */
export type ResilienceHubResiliencyPolicyAttributes = {
  /**
   * Amazon Resource Name (ARN) of the Resiliency Policy.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  PolicyArn: string;
};
/**
 * Type definition for `AWS::ResilienceHub::ResiliencyPolicy.FailurePolicy`.
 * Failure Policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html}
 */
export type FailurePolicy = {
  /**
   * RPO in seconds.
   */
  RpoInSecs: number;
  /**
   * RTO in seconds.
   */
  RtoInSecs: number;
};
/**
 * Type definition for `AWS::ResilienceHub::ResiliencyPolicy.PolicyMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-policymap.html}
 */
export type PolicyMap = {
  /**
   * Failure Policy.
   */
  AZ: FailurePolicy;
  /**
   * Failure Policy.
   */
  Hardware: FailurePolicy;
  /**
   * Failure Policy.
   */
  Region?: FailurePolicy;
  /**
   * Failure Policy.
   */
  Software: FailurePolicy;
};
/**
 * Type definition for `AWS::ResilienceHub::ResiliencyPolicy.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-resiliencypolicy-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource type definition for `AWS::ResilienceHub::ResiliencyPolicy`.
 * Resource Type Definition for Resiliency Policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html}
 */
export class ResilienceHubResiliencyPolicy extends $Resource<
  "AWS::ResilienceHub::ResiliencyPolicy",
  ResilienceHubResiliencyPolicyProperties,
  ResilienceHubResiliencyPolicyAttributes
> {
  public static readonly Type = "AWS::ResilienceHub::ResiliencyPolicy";
  constructor(
    logicalId: string,
    properties: ResilienceHubResiliencyPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubResiliencyPolicy.Type, properties, options);
  }
}
