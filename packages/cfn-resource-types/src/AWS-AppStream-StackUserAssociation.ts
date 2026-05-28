import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export type AppStreamStackUserAssociationProperties = {
  /**
   * The authentication type for the user who is associated with the stack. You must specify USERPOOL.
   */
  AuthenticationType: string;
  /**
   * Specifies whether a welcome email is sent to a user after the user is created in the user pool.
   */
  SendEmailNotification?: boolean;
  /**
   * The name of the stack that is associated with the user.
   */
  StackName: string;
  /**
   * The name of the user who is associated with the stack.
   */
  UserName: string;
};
/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export class AppStreamStackUserAssociation extends $Resource<
  "AWS::AppStream::StackUserAssociation",
  AppStreamStackUserAssociationProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::AppStream::StackUserAssociation";
  constructor(
    logicalId: string,
    properties: AppStreamStackUserAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamStackUserAssociation.Type, properties, options);
  }
}
