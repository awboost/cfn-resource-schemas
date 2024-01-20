import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Definition for type AWS::IVS::Stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html}
 */
export type IVSStageProperties = {
  /**
   * Stage name
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::Stage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#aws-resource-ivs-stage-return-values}
 */
export type IVSStageAttributes = {
  /**
   * ID of the active session within the stage.
   * @minLength `0`
   * @maxLength `128`
   */
  ActiveSessionId: string;
  /**
   * Stage ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws[-a-z]*:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::IVS::Stage.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-stage-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Definition for type AWS::IVS::Stage.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html}
 */
export class IVSStage extends $Resource<
  "AWS::IVS::Stage",
  IVSStageProperties,
  IVSStageAttributes
> {
  public static readonly Type = "AWS::IVS::Stage";
  constructor(
    logicalId: string,
    properties: IVSStageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSStage.Type, properties, options);
  }
}
