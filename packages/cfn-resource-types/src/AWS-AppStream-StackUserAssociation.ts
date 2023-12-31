import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: AppStreamStackUserAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamStackUserAssociation.Type, properties, options);
  }
}
