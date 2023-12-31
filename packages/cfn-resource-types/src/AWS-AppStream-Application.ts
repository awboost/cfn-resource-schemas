import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  Tags?: (
    | {
        Key: string;
        Value: string;
      }
    | {
        TagKey: string;
        TagValue: string;
      }
  )[];
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
 * Resource Type definition for AWS::AppStream::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-application.html}
 */
export class AppStreamApplication extends $Resource<
  "AWS::AppStream::Application",
  AppStreamApplicationProperties,
  AppStreamApplicationAttributes
> {
  public static readonly Type = "AWS::AppStream::Application";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppStreamApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamApplication.Type,
      properties,
      AppStreamApplication.AttributeNames,
      options,
    );
  }
}
