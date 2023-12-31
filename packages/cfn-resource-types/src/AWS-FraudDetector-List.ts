import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::FraudDetector::List`.
 * A resource schema for a List in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html}
 */
export type FraudDetectorListProperties = {
  /**
   * The description of the list.
   * @minLength `1`
   * @maxLength `128`
   */
  Description?: string;
  /**
   * The elements in this list.
   * @maxLength `100000`
   */
  Elements?: string[];
  /**
   * The name of the list.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[0-9a-z_]+$`
   */
  Name: string;
  /**
   * Tags associated with this list.
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * The variable type of the list.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Z_]{1,64}$`
   */
  VariableType?: string;
};
/**
 * Attribute type definition for `AWS::FraudDetector::List`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html#aws-resource-frauddetector-list-return-values}
 */
export type FraudDetectorListAttributes = {
  /**
   * The list ARN.
   */
  Arn: string;
  /**
   * The time when the list was created.
   */
  CreatedTime: string;
  /**
   * The time when the list was last updated.
   */
  LastUpdatedTime: string;
};
/**
 * Type definition for `AWS::FraudDetector::List.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-frauddetector-list-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::FraudDetector::List`.
 * A resource schema for a List in Amazon Fraud Detector.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-list.html}
 */
export class FraudDetectorList extends $Resource<
  "AWS::FraudDetector::List",
  FraudDetectorListProperties,
  FraudDetectorListAttributes
> {
  public static readonly Type = "AWS::FraudDetector::List";
  public static readonly AttributeNames = [
    "Arn" as const,
    "CreatedTime" as const,
    "LastUpdatedTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: FraudDetectorListProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      FraudDetectorList.Type,
      properties,
      FraudDetectorList.AttributeNames,
      options,
    );
  }
}
