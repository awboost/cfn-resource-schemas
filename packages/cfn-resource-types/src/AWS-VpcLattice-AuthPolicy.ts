import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::VpcLattice::AuthPolicy`.
 * Creates or updates the auth policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html}
 */
export type VpcLatticeAuthPolicyProperties = {
  Policy: Record<string, any>;
  /**
   * @minLength `17`
   * @maxLength `200`
   * @pattern `^((((sn)|(svc))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(service/svc))-[0-9a-z]{17}))$`
   */
  ResourceIdentifier: string;
};
/**
 * Attribute type definition for `AWS::VpcLattice::AuthPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html#aws-resource-vpclattice-authpolicy-return-values}
 */
export type VpcLatticeAuthPolicyAttributes = {
  State: "ACTIVE" | "INACTIVE";
};
/**
 * Resource type definition for `AWS::VpcLattice::AuthPolicy`.
 * Creates or updates the auth policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html}
 */
export class VpcLatticeAuthPolicy extends $Resource<
  "AWS::VpcLattice::AuthPolicy",
  VpcLatticeAuthPolicyProperties,
  VpcLatticeAuthPolicyAttributes
> {
  public static readonly Type = "AWS::VpcLattice::AuthPolicy";
  constructor(
    logicalId: string,
    properties: VpcLatticeAuthPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, VpcLatticeAuthPolicy.Type, properties, options);
  }
}
