import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SSMGuiConnect::Preferences Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html}
 */
export type SSMGuiConnectPreferencesProperties = {
  /**
   * The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.
   */
  ConnectionRecordingPreferences?: {
    /**
     * The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same AWS Region as the node you start an RDP connection to.
     * @minLength `1`
     * @maxLength `2048`
     */
    KMSKeyArn: string;
    /**
     * Determines where recordings of RDP connections are stored.
     */
    RecordingDestinations: RecordingDestinations;
  };
};
/**
 * Attribute type definition for `AWS::SSMGuiConnect::Preferences`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#aws-resource-ssmguiconnect-preferences-return-values}
 */
export type SSMGuiConnectPreferencesAttributes = {
  /**
   * The AWS Account Id that the preference is associated with, used as the unique identifier for this resource.
   * @pattern `\d{12}`
   */
  AccountId: string;
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.RecordingDestinations`.
 * Determines where recordings of RDP connections are stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-recordingdestinations.html}
 */
export type RecordingDestinations = {
  /**
   * The S3 bucket where RDP connection recordings are stored.
   * @minLength `1`
   * @maxLength `1`
   */
  S3Buckets: S3Bucket[];
};
/**
 * Type definition for `AWS::SSMGuiConnect::Preferences.S3Bucket`.
 * The S3 bucket where RDP connection recordings are stored.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmguiconnect-preferences-s3bucket.html}
 */
export type S3Bucket = {
  /**
   * The name of the S3 bucket where RDP connection recordings are stored.
   * @pattern `(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)`
   */
  BucketName: string;
  /**
   * The AWS account number that owns the S3 bucket.
   * @pattern `^[0-9]{12}$`
   */
  BucketOwner: string;
};
/**
 * Definition of AWS::SSMGuiConnect::Preferences Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html}
 */
export class SSMGuiConnectPreferences extends $Resource<
  "AWS::SSMGuiConnect::Preferences",
  SSMGuiConnectPreferencesProperties,
  SSMGuiConnectPreferencesAttributes
> {
  public static readonly Type = "AWS::SSMGuiConnect::Preferences";
  constructor(
    logicalId: string,
    properties: SSMGuiConnectPreferencesProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SSMGuiConnectPreferences.Type, properties, options);
  }
}
