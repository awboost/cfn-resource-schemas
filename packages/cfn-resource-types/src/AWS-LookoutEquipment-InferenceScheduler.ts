import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::LookoutEquipment::InferenceScheduler`.
 * Resource schema for LookoutEquipment InferenceScheduler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html}
 */
export type LookoutEquipmentInferenceSchedulerProperties = {
  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts.
   * @min `0`
   * @max `60`
   */
  DataDelayOffsetInMinutes?: number;
  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   */
  DataInputConfiguration: {
    /**
     * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
     */
    InferenceInputNameConfiguration?: InputNameConfiguration;
    /**
     * Indicates the difference between your time zone and Greenwich Mean Time (GMT).
     * @pattern `^(\+|\-)[0-9]{2}\:[0-9]{2}$`
     */
    InputTimeZoneOffset?: string;
    /**
     * Specifies configuration information for the input data for the inference, including input data S3 location.
     */
    S3InputConfiguration: S3InputConfiguration;
  };
  /**
   * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
   */
  DataOutputConfiguration: {
    /**
     * The ID number for the AWS KMS key used to encrypt the inference output.
     * @minLength `1`
     * @maxLength `2048`
     * @pattern `^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,2048}$`
     */
    KmsKeyId?: string;
    /**
     * Specifies configuration information for the output results from the inference, including output S3 location.
     */
    S3OutputConfiguration: S3OutputConfiguration;
  };
  /**
   * How often data is uploaded to the source S3 bucket for the input data.
   */
  DataUploadFrequency: "PT5M" | "PT10M" | "PT15M" | "PT30M" | "PT1H";
  /**
   * The name of the inference scheduler being created.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[0-9a-zA-Z_-]{1,200}$`
   */
  InferenceSchedulerName?: string;
  /**
   * The name of the previously trained ML model being used to create the inference scheduler.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[0-9a-zA-Z_-]{1,200}$`
   */
  ModelName: string;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+`
   */
  RoleArn: string;
  /**
   * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,2048}$`
   */
  ServerSideKmsKeyId?: string;
  /**
   * Any tags associated with the inference scheduler.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::LookoutEquipment::InferenceScheduler`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#aws-resource-lookoutequipment-inferencescheduler-return-values}
 */
export type LookoutEquipmentInferenceSchedulerAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being created.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\-]*:[0-9]{12}:inference-scheduler\/.+`
   */
  InferenceSchedulerArn: string;
};
/**
 * Type definition for `AWS::LookoutEquipment::InferenceScheduler.InputNameConfiguration`.
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html}
 */
export type InputNameConfiguration = {
  /**
   * Indicates the delimiter character used between items in the data.
   * @minLength `0`
   * @maxLength `1`
   * @pattern `^(\-|\_|\s)?$`
   */
  ComponentTimestampDelimiter?: string;
  /**
   * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
   * @pattern `^EPOCH|yyyy-MM-dd-HH-mm-ss|yyyyMMddHHmmss$`
   */
  TimestampFormat?: string;
};
/**
 * Type definition for `AWS::LookoutEquipment::InferenceScheduler.S3InputConfiguration`.
 * Specifies configuration information for the input data for the inference, including input data S3 location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html}
 */
export type S3InputConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::LookoutEquipment::InferenceScheduler.S3OutputConfiguration`.
 * Specifies configuration information for the output results from the inference, including output S3 location.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html}
 */
export type S3OutputConfiguration = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  Prefix?: string;
};
/**
 * Type definition for `AWS::LookoutEquipment::InferenceScheduler.Tag`.
 * A tag is a key-value pair that can be added to a resource as metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-tag.html}
 */
export type Tag = {
  /**
   * The key for the specified tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the specified tag.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `[\s\w+-=\.:/@]*`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::LookoutEquipment::InferenceScheduler`.
 * Resource schema for LookoutEquipment InferenceScheduler.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html}
 */
export class LookoutEquipmentInferenceScheduler extends $Resource<
  "AWS::LookoutEquipment::InferenceScheduler",
  LookoutEquipmentInferenceSchedulerProperties,
  LookoutEquipmentInferenceSchedulerAttributes
> {
  public static readonly Type = "AWS::LookoutEquipment::InferenceScheduler";
  constructor(
    logicalId: string,
    properties: LookoutEquipmentInferenceSchedulerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LookoutEquipmentInferenceScheduler.Type,
      properties,
      options,
    );
  }
}
