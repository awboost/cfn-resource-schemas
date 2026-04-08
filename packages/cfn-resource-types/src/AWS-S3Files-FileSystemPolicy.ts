import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::S3Files::FileSystemPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-filesystempolicy.html}
 */
export type S3FilesFileSystemPolicyProperties = {
  /**
   * @maxLength `128`
   * @pattern `^(arn:aws[-a-z]*:s3files:[0-9a-z-:]+:file-system/fs-[0-9a-f]{17,40}|fs-[0-9a-f]{17,40})$`
   */
  FileSystemId: string;
  Policy: Record<string, any>;
};
/**
 * Resource Type definition for AWS::S3Files::FileSystemPolicy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-filesystempolicy.html}
 */
export class S3FilesFileSystemPolicy extends $Resource<
  "AWS::S3Files::FileSystemPolicy",
  S3FilesFileSystemPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::S3Files::FileSystemPolicy";
  constructor(
    logicalId: string,
    properties: S3FilesFileSystemPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3FilesFileSystemPolicy.Type, properties, options);
  }
}
