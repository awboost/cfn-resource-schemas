import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::EC2::SnapshotBlockPublicAccess
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html}
 */
export type EC2SnapshotBlockPublicAccessProperties = {
  /**
   * The state of EBS Snapshot Block Public Access.
   */
  State: "block-all-sharing" | "block-new-sharing";
};
/**
 * Attribute type definition for `AWS::EC2::SnapshotBlockPublicAccess`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html#aws-resource-ec2-snapshotblockpublicaccess-return-values}
 */
export type EC2SnapshotBlockPublicAccessAttributes = {
  /**
   * The identifier for the specified AWS account.
   */
  AccountId: string;
};
/**
 * Resource Type definition for AWS::EC2::SnapshotBlockPublicAccess
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html}
 */
export class EC2SnapshotBlockPublicAccess extends $Resource<
  "AWS::EC2::SnapshotBlockPublicAccess",
  EC2SnapshotBlockPublicAccessProperties,
  EC2SnapshotBlockPublicAccessAttributes
> {
  public static readonly Type = "AWS::EC2::SnapshotBlockPublicAccess";
  constructor(
    logicalId: string,
    properties: EC2SnapshotBlockPublicAccessProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2SnapshotBlockPublicAccess.Type, properties, options);
  }
}
