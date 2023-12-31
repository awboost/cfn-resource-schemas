import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::Detective::Graph
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html}
 */
export type DetectiveGraphProperties = {
  /**
   * Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
   */
  AutoEnableMembers?: boolean;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Detective::Graph`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#aws-resource-detective-graph-return-values}
 */
export type DetectiveGraphAttributes = {
  /**
   * The Detective graph ARN
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Detective::Graph.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-detective-graph-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource schema for AWS::Detective::Graph
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html}
 */
export class DetectiveGraph extends $Resource<
  "AWS::Detective::Graph",
  DetectiveGraphProperties,
  DetectiveGraphAttributes
> {
  public static readonly Type = "AWS::Detective::Graph";
  constructor(
    logicalId: string,
    properties: DetectiveGraphProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DetectiveGraph.Type, properties, options);
  }
}
