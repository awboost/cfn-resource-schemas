import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html}
 */
export type S3AccessGrantsLocationProperties = {
  /**
   * The Amazon Resource Name (ARN) of the access grant location's associated IAM role.
   */
  IamRoleArn?: string;
  /**
   * Descriptor for where the location actually points
   */
  LocationScope?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3::AccessGrantsLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#aws-resource-s3-accessgrantslocation-return-values}
 */
export type S3AccessGrantsLocationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified Access Grants location.
   */
  AccessGrantsLocationArn: string;
  /**
   * The unique identifier for the specified Access Grants location.
   */
  AccessGrantsLocationId: string;
};
/**
 * Type definition for `AWS::S3::AccessGrantsLocation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrantslocation-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html}
 */
export class S3AccessGrantsLocation extends $Resource<
  "AWS::S3::AccessGrantsLocation",
  S3AccessGrantsLocationProperties,
  S3AccessGrantsLocationAttributes
> {
  public static readonly Type = "AWS::S3::AccessGrantsLocation";
  constructor(
    logicalId: string,
    properties: S3AccessGrantsLocationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3AccessGrantsLocation.Type, properties, options);
  }
}
