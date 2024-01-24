import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::FraudDetector::EntityType`.
 * An entity type for fraud detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html}
 */
export type FraudDetectorEntityTypeProperties = {
  /**
   * The entity type description.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The name of the entity type.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_-]+$`
   */
  Name: string;
  /**
   * Tags associated with this entity type.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::FraudDetector::EntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html#aws-resource-frauddetector-entitytype-return-values}
 */
export type FraudDetectorEntityTypeAttributes = {
  /**
   * The entity type ARN.
   */
  Arn: string;
  /**
   * The timestamp when the entity type was created.
   */
  CreatedTime: string;
  /**
   * The timestamp when the entity type was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::EntityType.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-entitytype-tag.html}
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
 * Resource type definition for `AWS::FraudDetector::EntityType`.
 * An entity type for fraud detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-entitytype.html}
 */
export class FraudDetectorEntityType extends $Resource<
  "AWS::FraudDetector::EntityType",
  FraudDetectorEntityTypeProperties,
  FraudDetectorEntityTypeAttributes
> {
  public static readonly Type = "AWS::FraudDetector::EntityType";
  constructor(
    logicalId: string,
    properties: FraudDetectorEntityTypeProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, FraudDetectorEntityType.Type, properties, options);
  }
}
