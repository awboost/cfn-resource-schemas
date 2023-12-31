import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::SageMaker::DeviceFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html}
 */
export type SageMakerDeviceFleetProperties = {
  /**
   * Description for the edge device fleet
   * @maxLength `800`
   * @pattern `[\S\s]+`
   */
  Description?: string;
  /**
   * The name of the edge device fleet
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$`
   */
  DeviceFleetName: string;
  /**
   * S3 bucket and an ecryption key id (if available) to store outputs for the fleet
   */
  OutputConfig: EdgeOutputConfig;
  /**
   * Role associated with the device fleet
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn: string;
  /**
   * Associate tags with the resource
   */
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::SageMaker::DeviceFleet.EdgeOutputConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html}
 */
export type EdgeOutputConfig = {
  /**
   * The KMS key id used for encryption on the S3 bucket
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `[a-zA-Z0-9:_-]+`
   */
  KmsKeyId?: string;
  /**
   * The Amazon Simple Storage (S3) bucket URI
   * @maxLength `1024`
   * @pattern `^s3://([^/]+)/?(.*)$`
   */
  S3OutputLocation: string;
};
/**
 * Type definition for `AWS::SageMaker::DeviceFleet.Tag`.
 * Key-value pair to associate as a tag for the resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^((?!aws:)[\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::SageMaker::DeviceFleet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html}
 */
export class SageMakerDeviceFleet extends $Resource<
  "AWS::SageMaker::DeviceFleet",
  SageMakerDeviceFleetProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::SageMaker::DeviceFleet";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SageMakerDeviceFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SageMakerDeviceFleet.Type,
      properties,
      SageMakerDeviceFleet.AttributeNames,
      options,
    );
  }
}
