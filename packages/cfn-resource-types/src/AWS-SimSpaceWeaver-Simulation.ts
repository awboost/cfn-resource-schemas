import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * AWS::SimSpaceWeaver::Simulation resource creates an AWS Simulation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html}
 */
export type SimSpaceWeaverSimulationProperties = {
  /**
   * The maximum running time of the simulation.
   * @minLength `2`
   * @maxLength `6`
   */
  MaximumDuration?: string;
  /**
   * The name of the simulation.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9_\-]{1,2048}$`
   */
  Name: string;
  /**
   * Role ARN.
   */
  RoleArn: string;
  SchemaS3Location?: S3Location;
  SnapshotS3Location?: S3Location;
};
/**
 * Attribute type definition for `AWS::SimSpaceWeaver::Simulation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html#aws-resource-simspaceweaver-simulation-return-values}
 */
export type SimSpaceWeaverSimulationAttributes = {
  /**
   * Json object with all simulation details
   */
  DescribePayload: string;
};
/**
 * Type definition for `AWS::SimSpaceWeaver::Simulation.S3Location`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simspaceweaver-simulation-s3location.html}
 */
export type S3Location = {
  /**
   * The Schema S3 bucket name.
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-zA-Z0-9_\-]{3,63}$`
   */
  BucketName: string;
  /**
   * This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.
   * @minLength `3`
   * @maxLength `255`
   */
  ObjectKey: string;
};
/**
 * AWS::SimSpaceWeaver::Simulation resource creates an AWS Simulation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-simspaceweaver-simulation.html}
 */
export class SimSpaceWeaverSimulation extends $Resource<
  "AWS::SimSpaceWeaver::Simulation",
  SimSpaceWeaverSimulationProperties,
  SimSpaceWeaverSimulationAttributes
> {
  public static readonly Type = "AWS::SimSpaceWeaver::Simulation";
  constructor(
    logicalId: string,
    properties: SimSpaceWeaverSimulationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SimSpaceWeaverSimulation.Type, properties, options);
  }
}
