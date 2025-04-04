import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::GameLift::Build
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html}
 */
export type GameLiftBuildProperties = {
  /**
   * A descriptive label that is associated with a build. Build names do not need to be unique.
   */
  Name?: string;
  /**
   * The operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.
   */
  OperatingSystem?:
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "AMAZON_LINUX_2023"
    | "WINDOWS_2012"
    | "WINDOWS_2016";
  /**
   * A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift sets this value to 4.0.2.
   */
  ServerSdkVersion?: string;
  /**
   * Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
   */
  StorageLocation?: StorageLocation;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Version information that is associated with this build. Version strings do not need to be unique.
   */
  Version?: string;
};
/**
 * Attribute type definition for `AWS::GameLift::Build`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html#aws-resource-gamelift-build-return-values}
 */
export type GameLiftBuildAttributes = {
  /**
   * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift build ARN, the resource ID matches the BuildId value.
   * @pattern `^arn:.*:build\/build-\S+`
   */
  BuildArn: string;
  /**
   * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
   */
  BuildId: string;
};
/**
 * Type definition for `AWS::GameLift::Build.StorageLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-storagelocation.html}
 */
export type StorageLocation = {
  /**
   * An Amazon S3 bucket identifier. This is the name of the S3 bucket.
   */
  Bucket: string;
  /**
   * The name of the zip file that contains the build files or script files.
   */
  Key: string;
  /**
   * The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.
   */
  ObjectVersion?: string;
  /**
   * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::GameLift::Build.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-build-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::GameLift::Build
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-build.html}
 */
export class GameLiftBuild extends $Resource<
  "AWS::GameLift::Build",
  GameLiftBuildProperties,
  GameLiftBuildAttributes
> {
  public static readonly Type = "AWS::GameLift::Build";
  constructor(
    logicalId: string,
    properties: GameLiftBuildProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GameLiftBuild.Type, properties, options);
  }
}
