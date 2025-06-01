import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::InstanceSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instancesnapshot.html}
 */
export type LightsailInstanceSnapshotProperties = {
  /**
   * The instance from which the snapshot was created.
   */
  InstanceName: string;
  /**
   * The name of the snapshot.
   */
  InstanceSnapshotName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::InstanceSnapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instancesnapshot.html#aws-resource-lightsail-instancesnapshot-return-values}
 */
export type LightsailInstanceSnapshotAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the snapshot.
   */
  Arn: string;
  /**
   * The Amazon Resource Name (ARN) of the instance from which the snapshot was created.
   */
  FromInstanceArn: string;
  /**
   * The instance from which the snapshot was created.
   */
  FromInstanceName: string;
  /**
   * A Boolean value indicating whether the snapshot was created from an automatic snapshot.
   */
  IsFromAutoSnapshot: boolean;
  /**
   * The region name and Availability Zone where you created the snapshot.
   */
  Location: {
    /**
     * The Availability Zone. Follows the format us-east-2a (case-sensitive).
     */
    AvailabilityZone: string;
    /**
     * The AWS Region name.
     */
    RegionName: string;
  };
  /**
   * The type of resource (usually InstanceSnapshot).
   */
  ResourceType: string;
  /**
   * The size in GB of the SSD
   */
  SizeInGb: number;
  /**
   * The state the snapshot is in.
   */
  State: string;
  /**
   * Support code to help identify any issues
   */
  SupportCode: string;
};
/**
 * Type definition for `AWS::Lightsail::InstanceSnapshot.Location`.
 * The region name and Availability Zone where you created the snapshot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instancesnapshot-location.html}
 */
export type Location = {
  /**
   * The Availability Zone. Follows the format us-east-2a (case-sensitive).
   */
  AvailabilityZone?: string;
  /**
   * The AWS Region name.
   */
  RegionName?: string;
};
/**
 * Type definition for `AWS::Lightsail::InstanceSnapshot.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instancesnapshot-tag.html}
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
 * Resource Type definition for AWS::Lightsail::InstanceSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instancesnapshot.html}
 */
export class LightsailInstanceSnapshot extends $Resource<
  "AWS::Lightsail::InstanceSnapshot",
  LightsailInstanceSnapshotProperties,
  LightsailInstanceSnapshotAttributes
> {
  public static readonly Type = "AWS::Lightsail::InstanceSnapshot";
  constructor(
    logicalId: string,
    properties: LightsailInstanceSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailInstanceSnapshot.Type, properties, options);
  }
}
