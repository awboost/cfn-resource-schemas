import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::ControlTower::EnabledBaseline Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html}
 */
export type ControlTowerEnabledBaselineProperties = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  BaselineIdentifier: string;
  /**
   * @pattern `^\d+(?:\.\d+){0,2}$`
   */
  BaselineVersion: string;
  Parameters?: Parameter[];
  Tags?: Tag[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  TargetIdentifier: string;
};
/**
 * Attribute type definition for `AWS::ControlTower::EnabledBaseline`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#aws-resource-controltower-enabledbaseline-return-values}
 */
export type ControlTowerEnabledBaselineAttributes = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  EnabledBaselineIdentifier: string;
};
/**
 * Type definition for `AWS::ControlTower::EnabledBaseline.AnyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-anytype.html}
 */
export type AnyType =
  | string
  | Record<string, any>
  | number
  | (boolean | number | Record<string, any> | string)[]
  | boolean;
/**
 * Type definition for `AWS::ControlTower::EnabledBaseline.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-parameter.html}
 */
export type Parameter = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Key?: string;
  Value?: AnyType;
};
/**
 * Type definition for `AWS::ControlTower::EnabledBaseline.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledbaseline-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Key?: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Definition of AWS::ControlTower::EnabledBaseline Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html}
 */
export class ControlTowerEnabledBaseline extends $Resource<
  "AWS::ControlTower::EnabledBaseline",
  ControlTowerEnabledBaselineProperties,
  ControlTowerEnabledBaselineAttributes
> {
  public static readonly Type = "AWS::ControlTower::EnabledBaseline";
  constructor(
    logicalId: string,
    properties: ControlTowerEnabledBaselineProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ControlTowerEnabledBaseline.Type, properties, options);
  }
}
