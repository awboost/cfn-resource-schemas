import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::VpcLattice::ResourcePolicy`.
 * Retrieves information about the resource policy. The resource policy is an IAM policy created by AWS RAM on behalf of the resource owner when they share a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcepolicy.html}
 */
export type VpcLatticeResourcePolicyProperties = {
  Policy: Record<string, any>;
  /**
   * @minLength `20`
   * @maxLength `200`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(service/svc))-[0-9a-z]{17}$`
   */
  ResourceArn: string;
};
/**
 * Resource type definition for `AWS::VpcLattice::ResourcePolicy`.
 * Retrieves information about the resource policy. The resource policy is an IAM policy created by AWS RAM on behalf of the resource owner when they share a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourcepolicy.html}
 */
export class VpcLatticeResourcePolicy extends $Resource<
  "AWS::VpcLattice::ResourcePolicy",
  VpcLatticeResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::VpcLattice::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: VpcLatticeResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      VpcLatticeResourcePolicy.Type,
      properties,
      VpcLatticeResourcePolicy.AttributeNames,
      options,
    );
  }
}
