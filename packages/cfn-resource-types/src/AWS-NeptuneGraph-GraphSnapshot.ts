import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NeptuneGraph::GraphSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graphsnapshot.html}
 */
export type NeptuneGraphGraphSnapshotProperties = {
  /**
   * The unique identifier of the Neptune Analytics graph to create the snapshot from.
   * @pattern `^g-[a-z0-9]{10}$`
   */
  GraphIdentifier?: string;
  /**
   * The snapshot name.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^(?!gs-)[a-z][a-z0-9]*(-[a-z0-9]+)*$`
   */
  SnapshotName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::NeptuneGraph::GraphSnapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graphsnapshot.html#aws-resource-neptunegraph-graphsnapshot-return-values}
 */
export type NeptuneGraphGraphSnapshotAttributes = {
  /**
   * The ARN of the graph snapshot.
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  /**
   * The unique identifier of the graph snapshot.
   * @pattern `^gs-[a-z0-9]{10}$`
   */
  Id: string;
  /**
   * The ID of the KMS key used to encrypt and decrypt the snapshot.
   * @minLength `1`
   * @maxLength `1024`
   */
  KmsKeyIdentifier: string;
  /**
   * The time when the snapshot was created.
   */
  SnapshotCreateTime: string;
  /**
   * The current status of the graph snapshot.
   */
  Status: "CREATING" | "AVAILABLE" | "DELETING" | "FAILED";
};
/**
 * Type definition for `AWS::NeptuneGraph::GraphSnapshot.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptunegraph-graphsnapshot-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::NeptuneGraph::GraphSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graphsnapshot.html}
 */
export class NeptuneGraphGraphSnapshot extends $Resource<
  "AWS::NeptuneGraph::GraphSnapshot",
  NeptuneGraphGraphSnapshotProperties,
  NeptuneGraphGraphSnapshotAttributes
> {
  public static readonly Type = "AWS::NeptuneGraph::GraphSnapshot";
  constructor(
    logicalId: string,
    properties: NeptuneGraphGraphSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NeptuneGraphGraphSnapshot.Type, properties, options);
  }
}
