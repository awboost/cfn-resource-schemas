import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html}
 */
export type S3AccessGrantProperties = {
  /**
   * The configuration options of the grant location, which is the S3 path to the data to which you are granting access.
   */
  AccessGrantsLocationConfiguration?: AccessGrantsLocationConfiguration;
  /**
   * The custom S3 location to be accessed by the grantee
   */
  AccessGrantsLocationId: string;
  /**
   * The ARN of the application grantees will use to access the location
   */
  ApplicationArn?: string;
  /**
   * The principal who will be granted permission to access S3.
   */
  Grantee: Grantee;
  /**
   * The level of access to be afforded to the grantee
   */
  Permission: "READ" | "WRITE" | "READWRITE";
  /**
   * The type of S3SubPrefix.
   */
  S3PrefixType?: "Object";
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3::AccessGrant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#aws-resource-s3-accessgrant-return-values}
 */
export type S3AccessGrantAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified access grant.
   */
  AccessGrantArn: string;
  /**
   * The ID assigned to this access grant.
   */
  AccessGrantId: string;
  /**
   * The S3 path of the data to which you are granting access. It is a combination of the S3 path of the registered location and the subprefix.
   */
  GrantScope: string;
};
/**
 * Type definition for `AWS::S3::AccessGrant.AccessGrantsLocationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-accessgrantslocationconfiguration.html}
 */
export type AccessGrantsLocationConfiguration = {
  /**
   * The S3 sub prefix of a registered location in your S3 Access Grants instance
   */
  S3SubPrefix: string;
};
/**
 * Type definition for `AWS::S3::AccessGrant.Grantee`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-grantee.html}
 */
export type Grantee = {
  /**
   * The unique identifier of the Grantee
   */
  GranteeIdentifier: string;
  /**
   * Configures the transfer acceleration state for an Amazon S3 bucket.
   */
  GranteeType: "IAM" | "DIRECTORY_USER" | "DIRECTORY_GROUP";
};
/**
 * Type definition for `AWS::S3::AccessGrant.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html}
 */
export class S3AccessGrant extends $Resource<
  "AWS::S3::AccessGrant",
  S3AccessGrantProperties,
  S3AccessGrantAttributes
> {
  public static readonly Type = "AWS::S3::AccessGrant";
  constructor(
    logicalId: string,
    properties: S3AccessGrantProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3AccessGrant.Type, properties, options);
  }
}
