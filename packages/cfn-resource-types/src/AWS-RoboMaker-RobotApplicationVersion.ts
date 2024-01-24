import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::RoboMaker::RobotApplicationVersion resource creates an AWS RoboMaker RobotApplicationVersion. This helps you control which code your robot uses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html}
 */
export type RoboMakerRobotApplicationVersionProperties = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Application: string;
  /**
   * The revision ID of robot application.
   * @minLength `1`
   * @maxLength `40`
   * @pattern `[a-zA-Z0-9_.\-]*`
   */
  CurrentRevisionId?: string;
};
/**
 * Attribute type definition for `AWS::RoboMaker::RobotApplicationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html#aws-resource-robomaker-robotapplicationversion-return-values}
 */
export type RoboMakerRobotApplicationVersionAttributes = {
  ApplicationVersion: string;
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * AWS::RoboMaker::RobotApplicationVersion resource creates an AWS RoboMaker RobotApplicationVersion. This helps you control which code your robot uses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html}
 */
export class RoboMakerRobotApplicationVersion extends $Resource<
  "AWS::RoboMaker::RobotApplicationVersion",
  RoboMakerRobotApplicationVersionProperties,
  RoboMakerRobotApplicationVersionAttributes
> {
  public static readonly Type = "AWS::RoboMaker::RobotApplicationVersion";
  constructor(
    logicalId: string,
    properties: RoboMakerRobotApplicationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RoboMakerRobotApplicationVersion.Type,
      properties,
      options,
    );
  }
}
