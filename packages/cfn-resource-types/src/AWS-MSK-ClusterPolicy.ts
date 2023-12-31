import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MSK::ClusterPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html}
 */
export type MSKClusterPolicyProperties = {
  /**
   * The arn of the cluster for the resource policy.
   * @pattern `^arn:[\w-]+:kafka:[\w-]+:\d+:cluster.*\Z`
   */
  ClusterArn: string;
  /**
   * A policy document containing permissions to add to the specified cluster.
   */
  Policy: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::MSK::ClusterPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html#aws-resource-msk-clusterpolicy-return-values}
 */
export type MSKClusterPolicyAttributes = {
  /**
   * The current version of the policy attached to the specified cluster
   * @pattern `^(K)([a-zA-Z0-9]+)\Z`
   */
  CurrentVersion: string;
};
/**
 * Resource Type definition for AWS::MSK::ClusterPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html}
 */
export class MSKClusterPolicy extends $Resource<
  "AWS::MSK::ClusterPolicy",
  MSKClusterPolicyProperties,
  MSKClusterPolicyAttributes
> {
  public static readonly Type = "AWS::MSK::ClusterPolicy";
  public static readonly AttributeNames = ["CurrentVersion" as const];
  constructor(
    logicalId: string,
    properties: MSKClusterPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MSKClusterPolicy.Type,
      properties,
      MSKClusterPolicy.AttributeNames,
      options,
    );
  }
}
