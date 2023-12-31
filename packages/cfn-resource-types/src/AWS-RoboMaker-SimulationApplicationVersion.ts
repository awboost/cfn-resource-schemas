import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * AWS::RoboMaker::SimulationApplicationVersion resource creates an AWS RoboMaker SimulationApplicationVersion. This helps you control which code your simulation uses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html}
 */
export type RoboMakerSimulationApplicationVersionProperties = {
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
 * Attribute type definition for `AWS::RoboMaker::SimulationApplicationVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html#aws-resource-robomaker-simulationapplicationversion-return-values}
 */
export type RoboMakerSimulationApplicationVersionAttributes = {
  ApplicationVersion: string;
  /**
   * @pattern `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
   */
  Arn: string;
};
/**
 * AWS::RoboMaker::SimulationApplicationVersion resource creates an AWS RoboMaker SimulationApplicationVersion. This helps you control which code your simulation uses.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html}
 */
export class RoboMakerSimulationApplicationVersion extends $Resource<
  "AWS::RoboMaker::SimulationApplicationVersion",
  RoboMakerSimulationApplicationVersionProperties,
  RoboMakerSimulationApplicationVersionAttributes
> {
  public static readonly Type = "AWS::RoboMaker::SimulationApplicationVersion";
  public static readonly AttributeNames = [
    "ApplicationVersion" as const,
    "Arn" as const,
  ];
  constructor(
    logicalId: string,
    properties: RoboMakerSimulationApplicationVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RoboMakerSimulationApplicationVersion.Type,
      properties,
      RoboMakerSimulationApplicationVersion.AttributeNames,
      options,
    );
  }
}
