import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export type AppStreamStackUserAssociationProperties = {
  AuthenticationType: string;
  SendEmailNotification?: boolean;
  StackName: string;
  UserName: string;
};
/**
 * Attribute type definition for `AWS::AppStream::StackUserAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html#aws-resource-appstream-stackuserassociation-return-values}
 */
export type AppStreamStackUserAssociationAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::AppStream::StackUserAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackuserassociation.html}
 */
export class AppStreamStackUserAssociation extends $Resource<
  "AWS::AppStream::StackUserAssociation",
  AppStreamStackUserAssociationProperties,
  AppStreamStackUserAssociationAttributes
> {
  public static readonly Type = "AWS::AppStream::StackUserAssociation";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: AppStreamStackUserAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamStackUserAssociation.Type,
      properties,
      AppStreamStackUserAssociation.AttributeNames,
      options,
    );
  }
}
