import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::Cell`.
 * The API Schema for AWS Route53 Recovery Readiness Cells.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html}
 */
export type Route53RecoveryReadinessCellProperties = {
  /**
   * The name of the cell to create.
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_]+`
   */
  CellName?: string;
  /**
   * A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions.
   * @maxLength `5`
   */
  Cells?: string[];
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53RecoveryReadiness::Cell`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html#aws-resource-route53recoveryreadiness-cell-return-values}
 */
export type Route53RecoveryReadinessCellAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the cell.
   * @maxLength `256`
   */
  CellArn: string;
  /**
   * The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
   * @maxLength `5`
   */
  ParentReadinessScopes: string[];
};
/**
 * Type definition for `AWS::Route53RecoveryReadiness::Cell.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoveryreadiness-cell-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::Route53RecoveryReadiness::Cell`.
 * The API Schema for AWS Route53 Recovery Readiness Cells.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-cell.html}
 */
export class Route53RecoveryReadinessCell extends $Resource<
  "AWS::Route53RecoveryReadiness::Cell",
  Route53RecoveryReadinessCellProperties,
  Route53RecoveryReadinessCellAttributes
> {
  public static readonly Type = "AWS::Route53RecoveryReadiness::Cell";
  constructor(
    logicalId: string,
    properties: Route53RecoveryReadinessCellProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53RecoveryReadinessCell.Type, properties, options);
  }
}
