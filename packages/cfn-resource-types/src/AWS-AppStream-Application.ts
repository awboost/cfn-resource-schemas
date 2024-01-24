import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppStream::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html}
 */
export type AppStreamApplicationProperties = {
  AppBlockArn: string;
  AttributesToDelete?: string[];
  Description?: string;
  DisplayName?: string;
  IconS3Location: S3Location;
  InstanceFamilies: string[];
  LaunchParameters?: string;
  LaunchPath: string;
  Name: string;
  Platforms: string[];
  Tags?: Tag[];
  WorkingDirectory?: string;
};
/**
 * Attribute type definition for `AWS::AppStream::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html#aws-resource-appstream-application-return-values}
 */
export type AppStreamApplicationAttributes = {
  Arn: string;
  CreatedTime: string;
};
/**
 * Type definition for `AWS::AppStream::Application.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-s3location.html}
 */
export type S3Location = {
  S3Bucket: string;
  S3Key: string;
};
/**
 * Type definition for `AWS::AppStream::Application.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-application-tag.html}
 */
export type Tag =
  | {
      Key: string;
      Value: string;
    }
  | {
      TagKey: string;
      TagValue: string;
    };
/**
 * Resource Type definition for AWS::AppStream::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html}
 */
export class AppStreamApplication extends $Resource<
  "AWS::AppStream::Application",
  AppStreamApplicationProperties,
  AppStreamApplicationAttributes
> {
  public static readonly Type = "AWS::AppStream::Application";
  constructor(
    logicalId: string,
    properties: AppStreamApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppStreamApplication.Type, properties, options);
  }
}
