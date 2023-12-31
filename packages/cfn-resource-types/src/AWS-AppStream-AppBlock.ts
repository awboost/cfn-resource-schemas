import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppStream::AppBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html}
 */
export type AppStreamAppBlockProperties = {
  Description?: string;
  DisplayName?: string;
  Name: string;
  PackagingType?: string;
  PostSetupScriptDetails?: ScriptDetails;
  SetupScriptDetails?: ScriptDetails;
  SourceS3Location: S3Location;
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
};
/**
 * Attribute type definition for `AWS::AppStream::AppBlock`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html#aws-resource-appstream-appblock-return-values}
 */
export type AppStreamAppBlockAttributes = {
  Arn: string;
  CreatedTime: string;
};
/**
 * Type definition for `AWS::AppStream::AppBlock.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-s3location.html}
 */
export type S3Location = {
  S3Bucket: string;
  S3Key?: string;
};
/**
 * Type definition for `AWS::AppStream::AppBlock.ScriptDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-appblock-scriptdetails.html}
 */
export type ScriptDetails = {
  ExecutableParameters?: string;
  ExecutablePath: string;
  ScriptS3Location: S3Location;
  TimeoutInSeconds: number;
};
/**
 * Resource Type definition for AWS::AppStream::AppBlock
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-appblock.html}
 */
export class AppStreamAppBlock extends $Resource<
  "AWS::AppStream::AppBlock",
  AppStreamAppBlockProperties,
  AppStreamAppBlockAttributes
> {
  public static readonly Type = "AWS::AppStream::AppBlock";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: AppStreamAppBlockProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppStreamAppBlock.Type,
      properties,
      AppStreamAppBlock.AttributeNames,
      options,
    );
  }
}
