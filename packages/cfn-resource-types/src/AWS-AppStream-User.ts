import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html}
 */
export type AppStreamUserProperties = {
  /**
   * The authentication type for the user.
   */
  AuthenticationType: string;
  /**
   * The first name, or given name, of the user.
   */
  FirstName?: string;
  /**
   * The last name, or surname, of the user.
   */
  LastName?: string;
  /**
   * The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.
   */
  MessageAction?: string;
  /**
   * The email address of the user.
   */
  UserName: string;
};
/**
 * Attribute type definition for `AWS::AppStream::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#aws-resource-appstream-user-return-values}
 */
export type AppStreamUserAttributes = {
  /**
   * Returns the Amazon Resource Name (ARN) for the Amazon AppStream User resource.
   * @pattern `^arn:.*`
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::AppStream::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html}
 */
export class AppStreamUser extends $Resource<
  "AWS::AppStream::User",
  AppStreamUserProperties,
  AppStreamUserAttributes
> {
  public static readonly Type = "AWS::AppStream::User";
  constructor(
    logicalId: string,
    properties: AppStreamUserProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamUser.Type, properties, options);
  }
}
