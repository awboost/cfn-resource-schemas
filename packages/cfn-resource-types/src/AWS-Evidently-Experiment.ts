import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Evidently::Experiment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html}
 */
export type EvidentlyExperimentProperties = {
  /**
   * @maxLength `160`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `3`
   */
  MetricGoals: MetricGoalObject[];
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Name: string;
  OnlineAbConfig: OnlineAbConfigObject;
  /**
   * @maxLength `2048`
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)`
   */
  Project: string;
  /**
   * @maxLength `127`
   * @pattern `.*`
   */
  RandomizationSalt?: string;
  RemoveSegment?: boolean;
  /**
   * Start Experiment. Default is False
   */
  RunningStatus?: RunningStatusObject;
  /**
   * @max `100000`
   */
  SamplingRate?: number;
  /**
   * @maxLength `2048`
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*)`
   */
  Segment?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * @minLength `2`
   * @maxLength `5`
   */
  Treatments: TreatmentObject[];
};
/**
 * Attribute type definition for `AWS::Evidently::Experiment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html#aws-resource-evidently-experiment-return-values}
 */
export type EvidentlyExperimentAttributes = {
  /**
   * @pattern `arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]/‍*experiment/[-a-zA-Z0-9._]*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Evidently::Experiment.MetricGoalObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html}
 */
export type MetricGoalObject = {
  DesiredChange: "INCREASE" | "DECREASE";
  /**
   * The JSON path to reference the entity id in the event.
   */
  EntityIdKey: string;
  /**
   * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
   */
  EventPattern?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\S]+$`
   */
  MetricName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `.*`
   */
  UnitLabel?: string;
  /**
   * The JSON path to reference the numerical metric value in the event.
   */
  ValueKey: string;
};
/**
 * Type definition for `AWS::Evidently::Experiment.OnlineAbConfigObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html}
 */
export type OnlineAbConfigObject = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  ControlTreatmentName?: string;
  TreatmentWeights?: TreatmentToWeight[];
};
/**
 * Type definition for `AWS::Evidently::Experiment.RunningStatusObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html}
 */
export type RunningStatusObject = {
  /**
   * Provide the analysis Completion time for an experiment
   */
  AnalysisCompleteTime?: string;
  /**
   * Provide CANCELLED or COMPLETED desired state when stopping an experiment
   * @pattern `^(CANCELLED|COMPLETED)`
   */
  DesiredState?: string;
  /**
   * Reason is a required input for stopping the experiment
   */
  Reason?: string;
  /**
   * Provide START or STOP action to apply on an experiment
   */
  Status?: string;
};
/**
 * Type definition for `AWS::Evidently::Experiment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Evidently::Experiment.TreatmentObject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html}
 */
export type TreatmentObject = {
  Description?: string;
  /**
   * @pattern `([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:.*)`
   */
  Feature: string;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  TreatmentName: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Variation: string;
};
/**
 * Type definition for `AWS::Evidently::Experiment.TreatmentToWeight`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html}
 */
export type TreatmentToWeight = {
  /**
   * @max `100000`
   */
  SplitWeight: number;
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `[-a-zA-Z0-9._]*`
   */
  Treatment: string;
};
/**
 * Resource Type definition for AWS::Evidently::Experiment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html}
 */
export class EvidentlyExperiment extends $Resource<
  "AWS::Evidently::Experiment",
  EvidentlyExperimentProperties,
  EvidentlyExperimentAttributes
> {
  public static readonly Type = "AWS::Evidently::Experiment";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: EvidentlyExperimentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EvidentlyExperiment.Type,
      properties,
      EvidentlyExperiment.AttributeNames,
      options,
    );
  }
}
