import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::Outcome`.
 * An outcome for rule evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html}
 */
export type FraudDetectorOutcomeProperties = {
  /**
   * The outcome description.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The name of the outcome.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  Name: string;
  /**
   * Tags associated with this outcome.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FraudDetector::Outcome`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html#aws-resource-frauddetector-outcome-return-values}
 */
export type FraudDetectorOutcomeAttributes = {
  /**
   * The outcome ARN.
   */
  Arn: string;
  /**
   * The timestamp when the outcome was created.
   */
  CreatedTime: string;
  /**
   * The timestamp when the outcome was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::Outcome.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-outcome-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::FraudDetector::Outcome`.
 * An outcome for rule evaluation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-outcome.html}
 */
export class FraudDetectorOutcome extends $Resource<
  "AWS::FraudDetector::Outcome",
  FraudDetectorOutcomeProperties,
  FraudDetectorOutcomeAttributes
> {
  public static readonly Type = "AWS::FraudDetector::Outcome";
  constructor(
    logicalId: string,
    properties: FraudDetectorOutcomeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorOutcome.Type, properties, options);
  }
}
