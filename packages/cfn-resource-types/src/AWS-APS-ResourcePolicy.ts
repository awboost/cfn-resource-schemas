import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::APS::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-resourcepolicy.html}
 */
export type APSResourcePolicyProperties = {
  /**
   * The JSON to use as the Resource-based Policy.
   */
  PolicyDocument: string;
  /**
   * The Arn of an APS Workspace that the PolicyDocument will be attached to.
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
   */
  WorkspaceArn: string;
};
/**
 * Resource Type definition for AWS::APS::ResourcePolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-resourcepolicy.html}
 */
export class APSResourcePolicy extends $Resource<
  "AWS::APS::ResourcePolicy",
  APSResourcePolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::APS::ResourcePolicy";
  constructor(
    logicalId: string,
    properties: APSResourcePolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSResourcePolicy.Type, properties, options);
  }
}
