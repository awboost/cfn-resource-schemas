import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::EC2::PlacementGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html}
 */
export type EC2PlacementGroupProperties = {
  /**
   * The number of partitions. Valid only when **Strategy** is set to `partition`
   */
  PartitionCount?: number;
  /**
   * The Spread Level of Placement Group is an enum where it accepts either host or rack when strategy is spread
   */
  SpreadLevel?: string;
  /**
   * The placement strategy.
   */
  Strategy?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::PlacementGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html#aws-resource-ec2-placementgroup-return-values}
 */
export type EC2PlacementGroupAttributes = {
  /**
   * The Group Name of Placement Group.
   */
  GroupName: string;
};
/**
 * Type definition for `AWS::EC2::PlacementGroup.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-placementgroup-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::EC2::PlacementGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-placementgroup.html}
 */
export class EC2PlacementGroup extends $Resource<
  "AWS::EC2::PlacementGroup",
  EC2PlacementGroupProperties,
  EC2PlacementGroupAttributes
> {
  public static readonly Type = "AWS::EC2::PlacementGroup";
  public static readonly AttributeNames = ["GroupName" as const];
  constructor(
    logicalId: string,
    properties: EC2PlacementGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EC2PlacementGroup.Type,
      properties,
      EC2PlacementGroup.AttributeNames,
      options,
    );
  }
}
