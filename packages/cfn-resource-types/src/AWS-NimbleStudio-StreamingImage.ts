import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::NimbleStudio::StreamingImage
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html}
 */
export type NimbleStudioStreamingImageProperties = {
  Description?: string;
  Ec2ImageId: string;
  EncryptionConfigurationKeyArn?: string;
  EncryptionConfigurationKeyType?: string;
  Name: string;
  StudioId: string;
  Tags?: Record<string, string>;
};
/**
 * Attribute type definition for `AWS::NimbleStudio::StreamingImage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-streamingimage.html#aws-resource-nimblestudio-streamingimage-return-values}
 */
export type NimbleStudioStreamingImageAttributes = {
  EncryptionConfiguration: {
    KeyArn: string;
    KeyType: string;
  };
  EulaIds: string[];
  Owner: string;
  Platform: string;
  StreamingImageId: string;
};
/**
 * Resource Type definition for AWS::NimbleStudio::StreamingImage
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
