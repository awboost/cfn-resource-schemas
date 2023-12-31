import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::Rekognition::StreamProcessor type is used to create an Amazon Rekognition StreamProcessor that you can use to analyze streaming videos.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html}
 */
export type RekognitionStreamProcessorProperties = {
  /**
   * The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.
   */
  BoundingBoxRegionsOfInterest?: BoundingBox[];
  /**
   * Connected home settings to use on a streaming video. Note that either ConnectedHomeSettings or FaceSearchSettings should be set. Not both
   */
  ConnectedHomeSettings?: ConnectedHomeSettings;
  /**
   * Indicates whether Rekognition is allowed to store the video stream data for model-training.
   */
  DataSharingPreference?: DataSharingPreference;
  /**
   * Face search settings to use on a streaming video. Note that either FaceSearchSettings or ConnectedHomeSettings should be set. Not both
   */
  FaceSearchSettings?: FaceSearchSettings;
  /**
   * The Amazon Kinesis Data Stream stream to which the Amazon Rekognition stream processor streams the analysis results, as part of face search feature.
   */
  KinesisDataStream?: KinesisDataStream;
  /**
   * The Kinesis Video Stream that streams the source video.
   */
  KinesisVideoStream: KinesisVideoStream;
  /**
   * The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket.
   */
  KmsKeyId?: string;
  /**
   * Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[a-zA-Z0-9_.\-]+`
   */
  Name?: string;
  /**
   * The ARN of the SNS notification channel where events of interests are published, as part of connected home feature.
   */
  NotificationChannel?: NotificationChannel;
  /**
   * The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point
   */
  PolygonRegionsOfInterest?: Point[][];
  /**
   * ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic.
   * @maxLength `2048`
   * @pattern `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
   */
  RoleArn: string;
  /**
   * The S3 location in customer's account where inference output & artifacts are stored, as part of connected home feature.
   */
  S3Destination?: S3Destination;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Rekognition::StreamProcessor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html#aws-resource-rekognition-streamprocessor-return-values}
 */
export type RekognitionStreamProcessorAttributes = {
  /**
   * The ARN of the stream processor
   * @maxLength `2048`
   */
  Arn: string;
  /**
   * Current status of the stream processor.
   */
  Status: string;
  /**
   * Detailed status message about the stream processor.
   */
  StatusMessage: string;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.BoundingBox`.
 * A bounding box denoting a region of interest in the frame to be analyzed.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-boundingbox.html}
 */
export type BoundingBox = {
  /**
   * @max `100`
   */
  Height: number;
  /**
   * @max `100`
   */
  Left: number;
  /**
   * @max `100`
   */
  Top: number;
  /**
   * @max `100`
   */
  Width: number;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.ConnectedHomeSettings`.
 * Connected home settings to use on a streaming video. Note that either ConnectedHomeSettings or FaceSearchSettings should be set. Not both
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-connectedhomesettings.html}
 */
export type ConnectedHomeSettings = {
  /**
   * List of labels that need to be detected in the video stream. Current supported values are PERSON, PET, PACKAGE, ALL.
   * @minLength `1`
   */
  Labels: string[];
  /**
   * Minimum object class match confidence score that must be met to return a result for a recognized object.
   * @max `100`
   */
  MinConfidence?: number;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.DataSharingPreference`.
 * Indicates whether Rekognition is allowed to store the video stream data for model-training.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-datasharingpreference.html}
 */
export type DataSharingPreference = {
  /**
   * Flag to enable data-sharing
   */
  OptIn: boolean;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.FaceSearchSettings`.
 * Face search settings to use on a streaming video. Note that either FaceSearchSettings or ConnectedHomeSettings should be set. Not both
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-facesearchsettings.html}
 */
export type FaceSearchSettings = {
  /**
   * The ID of a collection that contains faces that you want to search for.
   * @maxLength `255`
   * @pattern `\A[a-zA-Z0-9_\.\-]+$`
   */
  CollectionId: string;
  /**
   * Minimum face match confidence score percentage that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted.
   * @max `100`
   */
  FaceMatchThreshold?: number;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.KinesisDataStream`.
 * The Amazon Kinesis Data Stream stream to which the Amazon Rekognition stream processor streams the analysis results, as part of face search feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisdatastream.html}
 */
export type KinesisDataStream = {
  /**
   * ARN of the Kinesis Data Stream stream.
   * @maxLength `2048`
   * @pattern `(^arn:([a-z\d-]+):kinesis:([a-z\d-]+):\d{12}:.+$)`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.KinesisVideoStream`.
 * The Kinesis Video Stream that streams the source video.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisvideostream.html}
 */
export type KinesisVideoStream = {
  /**
   * ARN of the Kinesis Video Stream that streams the source video.
   * @maxLength `2048`
   * @pattern `(^arn:([a-z\d-]+):kinesisvideo:([a-z\d-]+):\d{12}:.+$)`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.NotificationChannel`.
 * The ARN of the SNS notification channel where events of interests are published, as part of connected home feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-notificationchannel.html}
 */
export type NotificationChannel = {
  /**
   * ARN of the SNS topic.
   * @maxLength `2048`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.Point`.
 * An (X, Y) cartesian coordinate denoting a point on the frame
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-point.html}
 */
export type Point = {
  /**
   * The X coordinate of the point.
   */
  X: number;
  /**
   * The Y coordinate of the point.
   */
  Y: number;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.S3Destination`.
 * The S3 location in customer's account where inference output & artifacts are stored, as part of connected home feature.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-s3destination.html}
 */
export type S3Destination = {
  /**
   * Name of the S3 bucket.
   * @maxLength `63`
   */
  BucketName: string;
  /**
   * The object key prefix path where the results will be stored. Default is no prefix path
   * @maxLength `256`
   */
  ObjectKeyPrefix?: string;
};
/**
 * Type definition for `AWS::Rekognition::StreamProcessor.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `\A(?!aws:)[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `\A[a-zA-Z0-9+\-=\._\:\/@]+$`
   */
  Value: string;
};
/**
 * The AWS::Rekognition::StreamProcessor type is used to create an Amazon Rekognition StreamProcessor that you can use to analyze streaming videos.


 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html}
 */
export class RekognitionStreamProcessor extends $Resource<
  "AWS::Rekognition::StreamProcessor",
  RekognitionStreamProcessorProperties,
  RekognitionStreamProcessorAttributes
> {
  public static readonly Type = "AWS::Rekognition::StreamProcessor";
  public static readonly AttributeNames = [
    "Arn" as const,
    "Status" as const,
    "StatusMessage" as const,
  ];
  constructor(
    logicalId: string,
    properties: RekognitionStreamProcessorProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      RekognitionStreamProcessor.Type,
      properties,
      RekognitionStreamProcessor.AttributeNames,
      options,
    );
  }
}
