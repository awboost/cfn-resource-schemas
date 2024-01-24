import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::MediaPackage::PackagingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html}
 */
export type MediaPackagePackagingGroupProperties = {
  /**
   * CDN Authorization
   */
  Authorization?: Authorization;
  /**
   * The configuration parameters for egress access logging.
   */
  EgressAccessLogs?: LogConfiguration;
  /**
   * The ID of the PackagingGroup.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `\A[0-9a-zA-Z-_]+\Z`
   */
  Id: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackage::PackagingGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html#aws-resource-mediapackage-packaginggroup-return-values}
 */
export type MediaPackagePackagingGroupAttributes = {
  /**
   * The ARN of the PackagingGroup.
   */
  Arn: string;
  /**
   * The fully qualified domain name for Assets in the PackagingGroup.
   */
  DomainName: string;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingGroup.Authorization`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html}
 */
export type Authorization = {
  /**
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
   */
  CdnIdentifierSecret: string;
  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
   */
  SecretsRoleArn: string;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingGroup.LogConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-logconfiguration.html}
 */
export type LogConfiguration = {
  /**
   * Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.
   * @minLength `1`
   * @maxLength `512`
   * @pattern `\A\/aws\/MediaPackage\/[0-9a-zA-Z-_\/\.#]+\Z`
   */
  LogGroupName?: string;
};
/**
 * Type definition for `AWS::MediaPackage::PackagingGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource schema for AWS::MediaPackage::PackagingGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html}
 */
export class MediaPackagePackagingGroup extends $Resource<
  "AWS::MediaPackage::PackagingGroup",
  MediaPackagePackagingGroupProperties,
  MediaPackagePackagingGroupAttributes
> {
  public static readonly Type = "AWS::MediaPackage::PackagingGroup";
  constructor(
    logicalId: string,
    properties: MediaPackagePackagingGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackagePackagingGroup.Type, properties, options);
  }
}
