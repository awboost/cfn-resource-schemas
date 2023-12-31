import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::ImageBuilder::Component
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html}
 */
export type ImageBuilderComponentProperties = {
  /**
   * The change description of the component.
   */
  ChangeDescription?: string;
  /**
   * The data of the component.
   * @minLength `1`
   * @maxLength `16000`
   */
  Data?: string;
  /**
   * The description of the component.
   */
  Description?: string;
  /**
   * The KMS key identifier used to encrypt the component.
   */
  KmsKeyId?: string;
  /**
   * The name of the component.
   */
  Name: string;
  /**
   * The platform of the component.
   */
  Platform: "Windows" | "Linux";
  /**
   * The operating system (OS) version supported by the component.
   */
  SupportedOsVersions?: string[];
  /**
   * The tags associated with the component.
   */
  Tags?: Record<string, string>;
  /**
   * The uri of the component.
   */
  Uri?: string;
  /**
   * The version of the component.
   */
  Version: string;
};
/**
 * Attribute type definition for `AWS::ImageBuilder::Component`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html#aws-resource-imagebuilder-component-return-values}
 */
export type ImageBuilderComponentAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the component.
   */
  Arn: string;
  /**
   * The encryption status of the component.
   */
  Encrypted: boolean;
  /**
   * The type of the component denotes whether the component is used to build the image or only to test it.
   */
  Type: "BUILD" | "TEST";
};
/**
 * Resource schema for AWS::ImageBuilder::Component
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-component.html}
 */
export class ImageBuilderComponent extends $Resource<
  "AWS::ImageBuilder::Component",
  ImageBuilderComponentProperties,
  ImageBuilderComponentAttributes
> {
  public static readonly Type = "AWS::ImageBuilder::Component";
  constructor(
    logicalId: string,
    properties: ImageBuilderComponentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ImageBuilderComponent.Type, properties, options);
  }
}
