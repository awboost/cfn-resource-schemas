import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::Comprehend::Flywheel resource creates an Amazon Comprehend Flywheel that enables customer to train their model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html}
 */
export type ComprehendFlywheelProperties = {
  /**
   * @maxLength `256`
   * @pattern `arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:(document-classifier|entity-recognizer)/[a-zA-Z0-9](-*[a-zA-Z0-9])*(/version/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?`
   */
  ActiveModelArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+`
   */
  DataAccessRoleArn: string;
  /**
   * @maxLength `512`
   * @pattern `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   */
  DataLakeS3Uri: string;
  DataSecurityConfig?: DataSecurityConfig;
  /**
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   */
  FlywheelName: string;
  ModelType?: "DOCUMENT_CLASSIFIER" | "ENTITY_RECOGNIZER";
  Tags?: Tag[];
  TaskConfig?: TaskConfig;
};
/**
 * Attribute type definition for `AWS::Comprehend::Flywheel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html#aws-resource-comprehend-flywheel-return-values}
 */
export type ComprehendFlywheelAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:flywheel/[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.DataSecurityConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html}
 */
export type DataSecurityConfig = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  DataLakeKmsKeyId?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  ModelKmsKeyId?: string;
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  VolumeKmsKeyId?: string;
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.DocumentClassificationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html}
 */
export type DocumentClassificationConfig = {
  /**
   * @maxLength `1000`
   */
  Labels?: string[];
  Mode: "MULTI_CLASS" | "MULTI_LABEL";
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.EntityRecognitionConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entityrecognitionconfig.html}
 */
export type EntityRecognitionConfig = {
  /**
   * @minLength `1`
   * @maxLength `25`
   */
  EntityTypes?: EntityTypesListItem[];
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.EntityTypesListItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entitytypeslistitem.html}
 */
export type EntityTypesListItem = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^(?![^\n\r\t,]*\\n|\\r|\\t)[^\n\r\t,]+$`
   */
  Type: string;
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.TaskConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html}
 */
export type TaskConfig = {
  DocumentClassificationConfig?: DocumentClassificationConfig;
  EntityRecognitionConfig?: EntityRecognitionConfig;
  LanguageCode: "en" | "es" | "fr" | "it" | "de" | "pt";
};
/**
 * Type definition for `AWS::Comprehend::Flywheel.VpcConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  SecurityGroupIds: string[];
  /**
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * The AWS::Comprehend::Flywheel resource creates an Amazon Comprehend Flywheel that enables customer to train their model.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html}
 */
export class ComprehendFlywheel extends $Resource<
  "AWS::Comprehend::Flywheel",
  ComprehendFlywheelProperties,
  ComprehendFlywheelAttributes
> {
  public static readonly Type = "AWS::Comprehend::Flywheel";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: ComprehendFlywheelProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ComprehendFlywheel.Type,
      properties,
      ComprehendFlywheel.AttributeNames,
      options,
    );
  }
}
