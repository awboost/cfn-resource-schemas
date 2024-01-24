import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::User
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html}
 */
export type AppStreamUserProperties = {
  AuthenticationType: string;
  FirstName?: string;
  LastName?: string;
  MessageAction?: string;
  UserName: string;
};
/**
 * Attribute type definition for `AWS::AppStream::User`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#aws-resource-appstream-user-return-values}
 */
export type AppStreamUserAttributes = {
  Id: string;
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
