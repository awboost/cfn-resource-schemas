import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::Label`.
 * An label for fraud detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html}
 */
export type FraudDetectorLabelProperties = {
  /**
   * The label description.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The name of the label.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  Name: string;
  /**
   * Tags associated with this label.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FraudDetector::Label`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#aws-resource-frauddetector-label-return-values}
 */
export type FraudDetectorLabelAttributes = {
  /**
   * The label ARN.
   */
  Arn: string;
  /**
   * The timestamp when the label was created.
   */
  CreatedTime: string;
  /**
   * The timestamp when the label was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::Label.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-label-tag.html}
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
 * Resource type definition for `AWS::FraudDetector::Label`.
 * An label for fraud detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html}
 */
export class FraudDetectorLabel extends $Resource<
  "AWS::FraudDetector::Label",
  FraudDetectorLabelProperties,
  FraudDetectorLabelAttributes
> {
  public static readonly Type = "AWS::FraudDetector::Label";
  constructor(
    logicalId: string,
    properties: FraudDetectorLabelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorLabel.Type, properties, options);
  }
}
