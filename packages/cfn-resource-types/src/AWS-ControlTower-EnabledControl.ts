import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::ControlTower::EnabledControl`.
 * Enables a control on a specified target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html}
 */
export type ControlTowerEnabledControlProperties = {
  /**
   * Arn of the control.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  ControlIdentifier: string;
  /**
   * Parameters to configure the enabled control behavior.
   * @minLength `1`
   */
  Parameters?: EnabledControlParameter[];
  /**
   * A set of tags to assign to the enabled control.
   * @minLength `1`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Arn for Organizational unit to which the control needs to be applied
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  TargetIdentifier: string;
};
/**
 * Type definition for `AWS::ControlTower::EnabledControl.EnabledControlParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledcontrol-enabledcontrolparameter.html}
 */
export type EnabledControlParameter = {
  Key: string;
  Value:
    | (string | number | Record<string, any> | boolean)[]
    | string
    | number
    | Record<string, any>
    | boolean;
};
/**
 * Type definition for `AWS::ControlTower::EnabledControl.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-controltower-enabledcontrol-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::ControlTower::EnabledControl`.
 * Enables a control on a specified target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html}
 */
export class ControlTowerEnabledControl extends $Resource<
  "AWS::ControlTower::EnabledControl",
  ControlTowerEnabledControlProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::ControlTower::EnabledControl";
  constructor(
    logicalId: string,
    properties: ControlTowerEnabledControlProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ControlTowerEnabledControl.Type, properties, options);
  }
}
