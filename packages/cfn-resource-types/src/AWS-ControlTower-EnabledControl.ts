import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
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
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: ControlTowerEnabledControlProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ControlTowerEnabledControl.Type,
      properties,
      ControlTowerEnabledControl.AttributeNames,
      options,
    );
  }
}
