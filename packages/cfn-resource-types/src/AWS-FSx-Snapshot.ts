import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::FSx::Snapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html}
 */
export type FSxSnapshotProperties = {
  Name: string;
  Tags?: Tag[];
  VolumeId: string;
};
/**
 * Attribute type definition for `AWS::FSx::Snapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html#aws-resource-fsx-snapshot-return-values}
 */
export type FSxSnapshotAttributes = {
  Id: string;
  ResourceARN: string;
};
/**
 * Type definition for `AWS::FSx::Snapshot.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-snapshot-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::FSx::Snapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-snapshot.html}
 */
export class FSxSnapshot extends $Resource<
  "AWS::FSx::Snapshot",
  FSxSnapshotProperties,
  FSxSnapshotAttributes
> {
  public static readonly Type = "AWS::FSx::Snapshot";
  constructor(
    logicalId: string,
    properties: FSxSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FSxSnapshot.Type, properties, options);
  }
}
