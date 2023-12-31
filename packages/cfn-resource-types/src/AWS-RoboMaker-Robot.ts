import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::RoboMaker::Robot resource creates an AWS RoboMaker Robot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html}
 */
export type RoboMakerRobotProperties = {
  /**
   * The target architecture of the robot.
   */
  Architecture: "X86_64" | "ARM64" | "ARMHF";
  /**
   * The Amazon Resource Name (ARN) of the fleet.
   * @minLength `1`
   * @maxLength `1224`
   */
  Fleet?: string;
  /**
   * The Greengrass group id.
   * @minLength `1`
   * @maxLength `1224`
   */
  GreengrassGroupId: string;
  /**
   * The name for the robot.
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::RoboMaker::Robot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#aws-resource-robomaker-robot-return-values}
 */
export type RoboMakerRobotAttributes = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::RoboMaker::Robot.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robot-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * AWS::RoboMaker::Robot resource creates an AWS RoboMaker Robot.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html}
 */
export class RoboMakerRobot extends $Resource<
  "AWS::RoboMaker::Robot",
  RoboMakerRobotProperties,
  RoboMakerRobotAttributes
> {
  public static readonly Type = "AWS::RoboMaker::Robot";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: RoboMakerRobotProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RoboMakerRobot.Type,
      properties,
      RoboMakerRobot.AttributeNames,
      options,
    );
  }
}
