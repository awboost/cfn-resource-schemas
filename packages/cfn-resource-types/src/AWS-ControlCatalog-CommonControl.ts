import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ControlCatalog::CommonControl`.
 * Returns information about a common control in the AWS Control Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-commoncontrol.html}
 */
export type ControlCatalogCommonControlProperties = Record<string, never>;
/**
 * Attribute type definition for `AWS::ControlCatalog::CommonControl`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-commoncontrol.html#aws-resource-controlcatalog-commoncontrol-return-values}
 */
export type ControlCatalogCommonControlAttributes = {
  /**
   * The Amazon Resource Name (ARN) that identifies the common control.
   * @minLength `41`
   * @maxLength `2048`
   * @pattern `^arn:(aws(?:[-a-z]*)?):controlcatalog:::common-control/[0-9a-z]+$`
   */
  Arn: string;
  /**
   * The unique identifier of the common control.
   * @pattern `^[0-9a-z]+$`
   */
  CommonControlId: string;
  /**
   * The time when the common control was created.
   */
  CreateTime: string;
  /**
   * The description of the common control.
   */
  Description: string;
  /**
   * The domain that the common control belongs to.
   */
  Domain: {
    /**
     * The Amazon Resource Name (ARN) of the related domain.
     */
    Arn: string;
    /**
     * The name of the related domain.
     */
    Name: string;
  };
  /**
   * The time when the common control was most recently updated.
   */
  LastUpdateTime: string;
  /**
   * The name of the common control.
   */
  Name: string;
  /**
   * The objective that the common control belongs to.
   */
  Objective: {
    /**
     * The Amazon Resource Name (ARN) of the related objective.
     */
    Arn: string;
    /**
     * The name of the related objective.
     */
    Name: string;
  };
};
/**
 * Resource type definition for `AWS::ControlCatalog::CommonControl`.
 * Returns information about a common control in the AWS Control Catalog.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controlcatalog-commoncontrol.html}
 */
export class ControlCatalogCommonControl extends $Resource<
  "AWS::ControlCatalog::CommonControl",
  ControlCatalogCommonControlProperties,
  ControlCatalogCommonControlAttributes
> {
  public static readonly Type = "AWS::ControlCatalog::CommonControl";
  constructor(
    logicalId: string,
    properties: ControlCatalogCommonControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ControlCatalogCommonControl.Type, properties, options);
  }
}
