import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::XRay::ResourcePolicy`.
 * This schema provides construct and validation rules for AWS-XRay Resource Policy resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html}
 */
export type XRayResourcePolicyProperties = {
  /**
   * A flag to indicate whether to bypass the resource policy lockout safety check
   */
  BypassPolicyLockoutCheck?: boolean;
  /**
   * The resource policy document, which can be up to 5kb in size.
   * @minLength `1`
   * @maxLength `5120`
   */
  PolicyDocument: string;
  /**
   * The name of the resource policy. Must be unique within a specific AWS account.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w+=,.@-]+`
   */
  PolicyName: string;
};
/**
 * Resource type definition for `AWS::XRay::ResourcePolicy`.
 * This schema provides construct and validation rules for AWS-XRay Resource Policy resource parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html}
 */
export class XRayResourcePolicy extends $Resource<
  "AWS::XRay::ResourcePolicy",
  XRayResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::XRay::ResourcePolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: XRayResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      XRayResourcePolicy.Type,
      properties,
      XRayResourcePolicy.AttributeNames,
      options,
    );
  }
}
