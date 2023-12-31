import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type Definition for AWS::S3Outposts::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html}
 */
export type S3OutpostsAccessPointProperties = {
  /**
   * The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/bucket\/[^:]+$`
   */
  Bucket: string;
  /**
   * A name for the AccessPoint.
   * @minLength `3`
   * @maxLength `50`
   * @pattern `^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$`
   */
  Name: string;
  /**
   * The access point policy associated with this access point.
   */
  Policy?: Record<string, any>;
  /**
   * Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.
   */
  VpcConfiguration: VpcConfiguration;
};
/**
 * Attribute type definition for `AWS::S3Outposts::AccessPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#aws-resource-s3outposts-accesspoint-return-values}
 */
export type S3OutpostsAccessPointAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified AccessPoint.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/accesspoint\/[^:]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::S3Outposts::AccessPoint.VpcConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  /**
   * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
   * @minLength `1`
   * @maxLength `1024`
   */
  VpcId?: string;
};
/**
 * Resource Type Definition for AWS::S3Outposts::AccessPoint
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html}
 */
export class S3OutpostsAccessPoint extends $Resource<
  "AWS::S3Outposts::AccessPoint",
  S3OutpostsAccessPointProperties,
  S3OutpostsAccessPointAttributes
> {
  public static readonly Type = "AWS::S3Outposts::AccessPoint";
  constructor(
    logicalId: string,
    properties: S3OutpostsAccessPointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3OutpostsAccessPoint.Type, properties, options);
  }
}
