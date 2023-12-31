import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::RoboMaker::RobotApplication`.
 * This schema is for testing purpose only.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html}
 */
export type RoboMakerRobotApplicationProperties = {
  /**
   * The revision ID of robot application.
   * @minLength `1`
   * @maxLength `40`
   */
  CurrentRevisionId?: string;
  /**
   * The URI of the Docker image for the robot application.
   */
  Environment?: string;
  /**
   * The name of the robot application.
   * @minLength `1`
   * @maxLength `255`
   */
  Name?: string;
  /**
   * The robot software suite used by the robot application.
   */
  RobotSoftwareSuite: RobotSoftwareSuite;
  /**
   * The sources of the robot application.
   */
  Sources?: SourceConfig[];
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::RoboMaker::RobotApplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#aws-resource-robomaker-robotapplication-return-values}
 */
export type RoboMakerRobotApplicationAttributes = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::RoboMaker::RobotApplication.RobotSoftwareSuite`.
 * The robot software suite used by the robot application.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robotapplication-robotsoftwaresuite.html}
 */
export type RobotSoftwareSuite = {
  /**
   * The name of robot software suite.
   */
  Name: "ROS" | "ROS2" | "General";
  /**
   * The version of robot software suite.
   */
  Version?: "Kinetic" | "Melodic" | "Dashing";
};
/**
 * Type definition for `AWS::RoboMaker::RobotApplication.SourceConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robotapplication-sourceconfig.html}
 */
export type SourceConfig = {
  /**
   * The architecture of robot application.
   * @minLength `1`
   * @maxLength `255`
   */
  Architecture: "X86_64" | "ARM64" | "ARMHF";
  /**
   * The Arn of the S3Bucket that stores the robot application source.
   */
  S3Bucket: string;
  /**
   * The s3 key of robot application source.
   */
  S3Key: string;
};
/**
 * Type definition for `AWS::RoboMaker::RobotApplication.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-robotapplication-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::RoboMaker::RobotApplication`.
 * This schema is for testing purpose only.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html}
 */
export class RoboMakerRobotApplication extends $Resource<
  "AWS::RoboMaker::RobotApplication",
  RoboMakerRobotApplicationProperties,
  RoboMakerRobotApplicationAttributes
> {
  public static readonly Type = "AWS::RoboMaker::RobotApplication";
  constructor(
    logicalId: string,
    properties: RoboMakerRobotApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RoboMakerRobotApplication.Type, properties, options);
  }
}
