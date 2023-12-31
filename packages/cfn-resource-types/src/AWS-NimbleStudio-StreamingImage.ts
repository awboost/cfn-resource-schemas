import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::NimbleStudio::StreamingImage`.
 * Represents a streaming session machine image that can be used to launch a streaming session
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html}
 */
export type NimbleStudioStreamingImageProperties = {
  /**
   * <p>A human-readable description of the streaming image.</p>
   * @minLength `0`
   * @maxLength `256`
   */
  Description?: string;
  /**
   * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
   * @pattern `^ami-[0-9A-z]+$`
   */
  Ec2ImageId: string;
  /**
   * <p>A friendly name for a streaming image resource.</p>
   * @minLength `0`
   * @maxLength `64`
   */
  Name: string;
  /**
   * <p>The studioId. </p>
   */
  StudioId: string;
  Tags?: Tags;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::StreamingImage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#aws-resource-nimblestudio-streamingimage-return-values}
 */
export type NimbleStudioStreamingImageAttributes = {
  /**
   * <p>TODO</p>
   */
  EncryptionConfiguration: {};
  /**
   * <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
   */
  EulaIds: string[];
  /**
   * <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that are provided by Amazon Nimble Studio.</p>
   */
  Owner: string;
  /**
   * <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
   * @pattern `^[a-zA-Z]*$`
   */
  Platform: string;
  StreamingImageId: string;
};
/**
 * Type definition for `AWS::NimbleStudio::StreamingImage.StreamingImageEncryptionConfiguration`.
 * <p>TODO</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfiguration.html}
 */
export type StreamingImageEncryptionConfiguration = {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   * @minLength `4`
   * @pattern `^arn:.*`
   */
  KeyArn?: string;
  /**
   * <p/>
   */
  KeyType: StreamingImageEncryptionConfigurationKeyType;
};
/**
 * Type definition for `AWS::NimbleStudio::StreamingImage.StreamingImageEncryptionConfigurationKeyType`.
 * <p/>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-streamingimageencryptionconfigurationkeytype.html}
 */
export type StreamingImageEncryptionConfigurationKeyType =
  "CUSTOMER_MANAGED_KEY";
/**
 * Type definition for `AWS::NimbleStudio::StreamingImage.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-streamingimage-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Resource type definition for `AWS::NimbleStudio::StreamingImage`.
 * Represents a streaming session machine image that can be used to launch a streaming session
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html}
 */
export class NimbleStudioStreamingImage extends $Resource<
  "AWS::NimbleStudio::StreamingImage",
  NimbleStudioStreamingImageProperties,
  NimbleStudioStreamingImageAttributes
> {
  public static readonly Type = "AWS::NimbleStudio::StreamingImage";
  constructor(
    logicalId: string,
    properties: NimbleStudioStreamingImageProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, NimbleStudioStreamingImage.Type, properties, options);
  }
}
