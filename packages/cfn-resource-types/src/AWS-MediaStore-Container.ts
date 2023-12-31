import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaStore::Container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html}
 */
export type MediaStoreContainerProperties = {
  AccessLoggingEnabled?: boolean;
  ContainerName: string;
  CorsPolicy?: CorsRule[];
  LifecyclePolicy?: string;
  MetricPolicy?: MetricPolicy;
  Policy?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaStore::Container`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#aws-resource-mediastore-container-return-values}
 */
export type MediaStoreContainerAttributes = {
  Endpoint: string;
  Id: string;
};
/**
 * Type definition for `AWS::MediaStore::Container.CorsRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html}
 */
export type CorsRule = {
  AllowedHeaders?: string[];
  AllowedMethods?: string[];
  AllowedOrigins?: string[];
  ExposeHeaders?: string[];
  MaxAgeSeconds?: number;
};
/**
 * Type definition for `AWS::MediaStore::Container.MetricPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html}
 */
export type MetricPolicy = {
  ContainerLevelMetrics: string;
  MetricPolicyRules?: MetricPolicyRule[];
};
/**
 * Type definition for `AWS::MediaStore::Container.MetricPolicyRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html}
 */
export type MetricPolicyRule = {
  ObjectGroup: string;
  ObjectGroupName: string;
};
/**
 * Type definition for `AWS::MediaStore::Container.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::MediaStore::Container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html}
 */
export class MediaStoreContainer extends $Resource<
  "AWS::MediaStore::Container",
  MediaStoreContainerProperties,
  MediaStoreContainerAttributes
> {
  public static readonly Type = "AWS::MediaStore::Container";
  constructor(
    logicalId: string,
    properties: MediaStoreContainerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaStoreContainer.Type, properties, options);
  }
}
