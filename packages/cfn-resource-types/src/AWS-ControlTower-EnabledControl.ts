import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
   * Arn for Organizational unit to which the control needs to be applied
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[0-9a-zA-Z_\-:\/]+$`
   */
  TargetIdentifier: string;
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
