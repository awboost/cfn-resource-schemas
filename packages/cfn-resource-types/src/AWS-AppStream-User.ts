import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppStreamUserProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamUser.Type,
      properties,
      AppStreamUser.AttributeNames,
      options,
    );
  }
}
