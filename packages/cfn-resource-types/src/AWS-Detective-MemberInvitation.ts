import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Detective::MemberInvitation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html}
 */
export type DetectiveMemberInvitationProperties = {
  /**
   * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
   */
  DisableEmailNotification?: boolean;
  /**
   * The ARN of the graph to which the member account will be invited
   * @pattern `arn:aws(-[\w]+)*:detective:(([a-z]+-)+[0-9]+):[0-9]{12}:graph:[0-9a-f]{32}`
   */
  GraphArn: string;
  /**
   * The root email address for the account to be invited, for validation. Updating this field has no effect.
   * @pattern `.*@.*`
   */
  MemberEmailAddress: string;
  /**
   * The AWS account ID to be invited to join the graph as a member
   * @pattern `[0-9]{12}`
   */
  MemberId: string;
  /**
   * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
   * @minLength `1`
   * @maxLength `1000`
   */
  Message?: string;
};
/**
 * Resource schema for AWS::Detective::MemberInvitation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html}
 */
export class DetectiveMemberInvitation extends $Resource<
  "AWS::Detective::MemberInvitation",
  DetectiveMemberInvitationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Detective::MemberInvitation";
  constructor(
    logicalId: string,
    properties: DetectiveMemberInvitationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DetectiveMemberInvitation.Type, properties, options);
  }
}
