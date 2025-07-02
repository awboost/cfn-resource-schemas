import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::RedshiftServerless::Snapshot Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-snapshot.html}
 */
export type RedshiftServerlessSnapshotProperties = {
  /**
   * The namespace the snapshot is associated with.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  NamespaceName?: string;
  /**
   * The retention period of the snapshot.
   */
  RetentionPeriod?: number;
  /**
   * The name of the snapshot.
   * @minLength `3`
   * @maxLength `64`
   * @pattern `^(?=^[a-z0-9-]+$).{3,64}$`
   */
  SnapshotName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::RedshiftServerless::Snapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-snapshot.html#aws-resource-redshiftserverless-snapshot-return-values}
 */
export type RedshiftServerlessSnapshotAttributes = {
  /**
   * The owner account of the snapshot.
   */
  OwnerAccount: string;
  /**
   * Definition for snapshot resource
   */
  Snapshot: {
    AdminUsername: string;
    KmsKeyId: string;
    NamespaceArn: string;
    /**
     * @minLength `3`
     * @maxLength `64`
     * @pattern `^[a-z0-9-]+$`
     */
    NamespaceName: string;
    OwnerAccount: string;
    RetentionPeriod: number;
    SnapshotArn: string;
    SnapshotCreateTime: string;
    /**
     * @minLength `3`
     * @maxLength `64`
     * @pattern `^[a-z0-9-]+$`
     */
    SnapshotName: string;
    Status: SnapshotStatus;
  };
};
/**
 * Type definition for `AWS::RedshiftServerless::Snapshot.SnapshotStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-snapshot-snapshotstatus.html}
 */
export type SnapshotStatus =
  | "AVAILABLE"
  | "CREATING"
  | "DELETED"
  | "CANCELLED"
  | "FAILED"
  | "COPYING";
/**
 * Type definition for `AWS::RedshiftServerless::Snapshot.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-snapshot-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::RedshiftServerless::Snapshot Resource Type.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-snapshot.html}
 */
export class RedshiftServerlessSnapshot extends $Resource<
  "AWS::RedshiftServerless::Snapshot",
  RedshiftServerlessSnapshotProperties,
  RedshiftServerlessSnapshotAttributes
> {
  public static readonly Type = "AWS::RedshiftServerless::Snapshot";
  constructor(
    logicalId: string,
    properties: RedshiftServerlessSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RedshiftServerlessSnapshot.Type, properties, options);
  }
}
