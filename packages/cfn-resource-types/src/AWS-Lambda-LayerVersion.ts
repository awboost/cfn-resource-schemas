import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lambda::LayerVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html}
 */
export type LambdaLayerVersionProperties = {
  /**
   * A list of compatible instruction set architectures.
   */
  CompatibleArchitectures?: string[];
  /**
   * A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.
   */
  CompatibleRuntimes?: string[];
  /**
   * The function layer archive.
   */
  Content: Content;
  /**
   * The description of the version.
   */
  Description?: string;
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   */
  LayerName?: string;
  /**
   * The layer's software license.
   */
  LicenseInfo?: string;
};
/**
 * Attribute type definition for `AWS::Lambda::LayerVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#aws-resource-lambda-layerversion-return-values}
 */
export type LambdaLayerVersionAttributes = {
  LayerVersionArn: string;
};
/**
 * Type definition for `AWS::Lambda::LayerVersion.Content`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html}
 */
export type Content = {
  /**
   * The Amazon S3 bucket of the layer archive.
   */
  S3Bucket: string;
  /**
   * The Amazon S3 key of the layer archive.
   */
  S3Key: string;
  /**
   * For versioned objects, the version of the layer archive object to use.
   */
  S3ObjectVersion?: string;
};
/**
 * Resource Type definition for AWS::Lambda::LayerVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html}
 */
export class LambdaLayerVersion extends $Resource<
  "AWS::Lambda::LayerVersion",
  LambdaLayerVersionProperties,
  LambdaLayerVersionAttributes
> {
  public static readonly Type = "AWS::Lambda::LayerVersion";
  public static readonly AttributeNames = ["LayerVersionArn" as const];
  constructor(
    logicalId: string,
    properties: LambdaLayerVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LambdaLayerVersion.Type,
      properties,
      LambdaLayerVersion.AttributeNames,
      options,
    );
  }
}
