import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::ECR::PullTimeUpdateExclusion controls the exclusion configuration for ecr image pull time update.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pulltimeupdateexclusion.html}
 */
export type ECRPullTimeUpdateExclusionProperties = {
  /**
   * Principal arn that should not update image pull times.
   * @maxLength `200`
   * @pattern `^arn:aws(-[a-z]+)*:iam::[0-9]{12}:(role|user)/[\w+=,.@-]+(/[\w+=,.@-]+)*$`
   */
  PrincipalArn: string;
};
/**
 * Resource Type definition for AWS::ECR::PullTimeUpdateExclusion controls the exclusion configuration for ecr image pull time update.
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
