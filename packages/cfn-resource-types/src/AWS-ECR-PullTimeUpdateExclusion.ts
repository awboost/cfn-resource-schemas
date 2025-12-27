import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ECR::PullTimeUpdateExclusion`.
 * The ARN of the IAM principal to remove from the pull time update exclusion list.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pulltimeupdateexclusion.html}
 */
export type ECRPullTimeUpdateExclusionProperties = {
  /**
   * The ARN of the IAM principal to remove from the pull time update exclusion list.
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:iam::[0-9]{12}:(role|user)/[\w+=,.@-]+(/[\w+=,.@-]+)*$`
   */
  PrincipalArn: string;
};
/**
 * Resource type definition for `AWS::ECR::PullTimeUpdateExclusion`.
 * The ARN of the IAM principal to remove from the pull time update exclusion list.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pulltimeupdateexclusion.html}
 */
export class ECRPullTimeUpdateExclusion extends $Resource<
  "AWS::ECR::PullTimeUpdateExclusion",
  ECRPullTimeUpdateExclusionProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ECR::PullTimeUpdateExclusion";
  constructor(
    logicalId: string,
    properties: ECRPullTimeUpdateExclusionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ECRPullTimeUpdateExclusion.Type, properties, options);
  }
}
