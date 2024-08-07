import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::StorageProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html}
 */
export type DeadlineStorageProfileProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  FileSystemLocations?: FileSystemLocation[];
  OsFamily: StorageProfileOperatingSystemFamily;
};
/**
 * Attribute type definition for `AWS::Deadline::StorageProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#aws-resource-deadline-storageprofile-return-values}
 */
export type DeadlineStorageProfileAttributes = {
  /**
   * @pattern `^sp-[0-9a-f]{32}$`
   */
  StorageProfileId: string;
};
/**
 * Type definition for `AWS::Deadline::StorageProfile.FileSystemLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-storageprofile-filesystemlocation.html}
 */
export type FileSystemLocation = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9A-Za-z ]*$`
   */
  Name: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Path: string;
  Type: FileSystemLocationType;
};
/**
 * Type definition for `AWS::Deadline::StorageProfile.FileSystemLocationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-storageprofile-filesystemlocationtype.html}
 */
export type FileSystemLocationType = "SHARED" | "LOCAL";
/**
 * Type definition for `AWS::Deadline::StorageProfile.StorageProfileOperatingSystemFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-storageprofile-storageprofileoperatingsystemfamily.html}
 */
export type StorageProfileOperatingSystemFamily = "WINDOWS" | "LINUX" | "MACOS";
/**
 * Definition of AWS::Deadline::StorageProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html}
 */
export class DeadlineStorageProfile extends $Resource<
  "AWS::Deadline::StorageProfile",
  DeadlineStorageProfileProperties,
  DeadlineStorageProfileAttributes
> {
  public static readonly Type = "AWS::Deadline::StorageProfile";
  constructor(
    logicalId: string,
    properties: DeadlineStorageProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineStorageProfile.Type, properties, options);
  }
}
