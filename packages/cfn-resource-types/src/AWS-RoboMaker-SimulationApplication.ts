import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::RoboMaker::SimulationApplication`.
 * This schema is for testing purpose only.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html}
 */
export type RoboMakerSimulationApplicationProperties = {
  /**
   * The current revision id.
   */
  CurrentRevisionId?: string;
  /**
   * The URI of the Docker image for the robot application.
   */
  Environment?: string;
  /**
   * The name of the simulation application.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[a-zA-Z0-9_\-]*`
   */
  Name?: string;
  /**
   * The rendering engine for the simulation application.
   */
  RenderingEngine?: RenderingEngine;
  /**
   * The robot software suite used by the simulation application.
   */
  RobotSoftwareSuite: RobotSoftwareSuite;
  /**
   * The simulation software suite used by the simulation application.
   */
  SimulationSoftwareSuite: SimulationSoftwareSuite;
  /**
   * The sources of the simulation application.
   */
  Sources?: SourceConfig[];
  /**
   * A key-value pair to associate with a resource.
   */
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::RoboMaker::SimulationApplication`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#aws-resource-robomaker-simulationapplication-return-values}
 */
export type RoboMakerSimulationApplicationAttributes = {
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::RoboMaker::SimulationApplication.RenderingEngine`.
 * Information about a rendering engine.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-renderingengine.html}
 */
export type RenderingEngine = {
  /**
   * The name of the rendering engine.
   */
  Name: "OGRE";
  /**
   * The version of the rendering engine.
   * @pattern `1.x`
   */
  Version: string;
};
/**
 * Type definition for `AWS::RoboMaker::SimulationApplication.RobotSoftwareSuite`.
 * Information about a robot software suite.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-robotsoftwaresuite.html}
 */
export type RobotSoftwareSuite = {
  /**
   * The name of the robot software suite.
   */
  Name: "ROS" | "ROS2" | "General";
  /**
   * The version of the robot software suite.
   */
  Version?: "Kinetic" | "Melodic" | "Dashing" | "Foxy";
};
/**
 * Type definition for `AWS::RoboMaker::SimulationApplication.SimulationSoftwareSuite`.
 * Information about a simulation software suite.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-simulationsoftwaresuite.html}
 */
export type SimulationSoftwareSuite = {
  /**
   * The name of the simulation software suite.
   */
  Name: "Gazebo" | "RosbagPlay" | "SimulationRuntime";
  /**
   * The version of the simulation software suite.
   */
  Version?: "7" | "9" | "11" | "Kinetic" | "Melodic" | "Dashing" | "Foxy";
};
/**
 * Type definition for `AWS::RoboMaker::SimulationApplication.SourceConfig`.
 * Information about a source configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-sourceconfig.html}
 */
export type SourceConfig = {
  /**
   * The target processor architecture for the application.
   */
  Architecture: "X86_64" | "ARM64" | "ARMHF";
  /**
   * The Amazon S3 bucket name.
   * @pattern `[a-z0-9][a-z0-9.\-]*[a-z0-9]`
   */
  S3Bucket: string;
  /**
   * The s3 object key.
   * @minLength `1`
   * @maxLength `1024`
   */
  S3Key: string;
};
/**
 * Type definition for `AWS::RoboMaker::SimulationApplication.Tags`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::RoboMaker::SimulationApplication`.
 * This schema is for testing purpose only.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html}
 */
export class RoboMakerSimulationApplication extends $Resource<
  "AWS::RoboMaker::SimulationApplication",
  RoboMakerSimulationApplicationProperties,
  RoboMakerSimulationApplicationAttributes
> {
  public static readonly Type = "AWS::RoboMaker::SimulationApplication";
  constructor(
    logicalId: string,
    properties: RoboMakerSimulationApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, RoboMakerSimulationApplication.Type, properties, options);
  }
}
