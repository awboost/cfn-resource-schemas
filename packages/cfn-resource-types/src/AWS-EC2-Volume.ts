import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html}
 */
export type EC2VolumeProperties = {
  /**
   * The Availability Zone in which to create the volume.
   */
  AutoEnableIO?: boolean;
  /**
   * The Availability Zone in which to create the volume.
   */
  AvailabilityZone: string;
  /**
   * Specifies whether the volume should be encrypted. The effect of setting the encryption state to true depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see Encryption by default in the Amazon Elastic Compute Cloud User Guide. Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see Supported instance types.
   */
  Encrypted?: boolean;
  /**
   * The number of I/O operations per second (IOPS) to provision for an io1 or io2 volume, with a maximum ratio of 50 IOPS/GiB for io1, and 500 IOPS/GiB for io2. Range is 100 to 64,000 IOPS for volumes in most Regions. Maximum IOPS of 64,000 is guaranteed only on Nitro-based instances. Other instance families guarantee performance up to 32,000 IOPS. For more information, see Amazon EBS volume types in the Amazon Elastic Compute Cloud User Guide. This parameter is valid only for Provisioned IOPS SSD (io1 and io2) volumes.
   */
  Iops?: number;
  /**
   * The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption. If KmsKeyId is specified, the encrypted state must be true. If you omit this property and your account is enabled for encryption by default, or Encrypted is set to true, then the volume is encrypted using the default CMK specified for your account. If your account does not have a default CMK, then the volume is encrypted using the AWS managed CMK.  Alternatively, if you want to specify a different CMK, you can specify one of the following:  Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. Specify the alias for the CMK, prefixed with alias/. For example, for a CMK with the alias my_cmk, use alias/my_cmk. Or to specify the AWS managed CMK, use alias/aws/ebs. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.
   */
  KmsKeyId?: string;
  /**
   * Indicates whether Amazon EBS Multi-Attach is enabled.
   */
  MultiAttachEnabled?: boolean;
  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   */
  OutpostArn?: string;
  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size.  Constraints: 1-16,384 for gp2, 4-16,384 for io1 and io2, 500-16,384 for st1, 500-16,384 for sc1, and 1-1,024 for standard. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size. Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.
   */
  Size?: number;
  /**
   * The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.
   */
  SnapshotId?: string;
  /**
   * The tags to apply to the volume during creation.
   */
  Tags?: Tag[];
  /**
   * The throughput that the volume supports, in MiB/s.
   */
  Throughput?: number;
  /**
   * The volume type. This parameter can be one of the following values: General Purpose SSD: gp2 | gp3, Provisioned IOPS SSD: io1 | io2, Throughput Optimized HDD: st1, Cold HDD: sc1, Magnetic: standard
   */
  VolumeType?: string;
};
/**
 * Attribute type definition for `AWS::EC2::Volume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html#aws-resource-ec2-volume-return-values}
 */
export type EC2VolumeAttributes = {
  VolumeId: string;
};
/**
 * Type definition for `AWS::EC2::Volume.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-volume-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::Volume
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html}
 */
export class EC2Volume extends $Resource<
  "AWS::EC2::Volume",
  EC2VolumeProperties,
  EC2VolumeAttributes
> {
  public static readonly Type = "AWS::EC2::Volume";
  constructor(
    logicalId: string,
    properties: EC2VolumeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2Volume.Type, properties, options);
  }
}