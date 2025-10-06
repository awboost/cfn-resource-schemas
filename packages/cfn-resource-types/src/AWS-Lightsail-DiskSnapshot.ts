import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::DiskSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disksnapshot.html}
 */
export type LightsailDiskSnapshotProperties = {
  /**
   * The name of the source disk from which the snapshot was created.
   * @minLength `2`
   * @maxLength `255`
   * @pattern `^\w[\w\-]*\w$`
   */
  DiskName: string;
  /**
   * The name of the disk snapshot (e.g., my-disk-snapshot).
   * @minLength `2`
   * @maxLength `255`
   * @pattern `^\w[\w\-]*\w$`
   */
  DiskSnapshotName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::DiskSnapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disksnapshot.html#aws-resource-lightsail-disksnapshot-return-values}
 */
export type LightsailDiskSnapshotAttributes = {
  /**
   * The timestamp when the disk snapshot was created.
   */
  CreatedAt: string;
  /**
   * The Amazon Resource Name (ARN) of the disk snapshot.
   * @pattern `.*\S.*`
   */
  DiskSnapshotArn: string;
  /**
   * The name of the source disk from which the disk snapshot was created.
   * @pattern `^\w[\w\-]*\w$`
   */
  FromDiskName: string;
  /**
   * A Boolean value indicating whether the snapshot was created from an automatic snapshot.
   */
  IsFromAutoSnapshot: boolean;
  /**
   * The AWS Region and Availability Zone where the disk snapshot was created.
   */
  Location: {
    /**
     * The Availability Zone where the disk snapshot was created.
     */
    AvailabilityZone: string;
    /**
     * The AWS Region where the disk snapshot was created.
     */
    RegionName: string;
  };
  /**
   * The progress of the disk snapshot creation operation.
   */
  Progress: string;
  /**
   * The Lightsail resource type (DiskSnapshot).
   */
  ResourceType: "DiskSnapshot";
  /**
   * The size of the disk snapshot in GB.
   * @min `1`
   */
  SizeInGb: number;
  /**
   * The status of the disk snapshot operation.
   */
  State: "pending" | "completed" | "error" | "unknown";
  /**
   * The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail.
   */
  SupportCode: string;
};
/**
 * Type definition for `AWS::Lightsail::DiskSnapshot.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disksnapshot-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::DiskSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disksnapshot.html}
 */
export class LightsailDiskSnapshot extends $Resource<
  "AWS::Lightsail::DiskSnapshot",
  LightsailDiskSnapshotProperties,
  LightsailDiskSnapshotAttributes
> {
  public static readonly Type = "AWS::Lightsail::DiskSnapshot";
  constructor(
    logicalId: string,
    properties: LightsailDiskSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailDiskSnapshot.Type, properties, options);
  }
}
