import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Kendra::Faq`.
 * A Kendra FAQ resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html}
 */
export type KendraFaqProperties = {
  /**
   * FAQ description
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * FAQ file format
   */
  FileFormat?: FileFormat;
  /**
   * Index ID
   * @minLength `36`
   * @maxLength `36`
   */
  IndexId: string;
  /**
   * FAQ name
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * FAQ role ARN
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   */
  RoleArn: string;
  /**
   * FAQ S3 path
   */
  S3Path: S3Path;
  /**
   * Tags for labeling the FAQ
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Kendra::Faq`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#aws-resource-kendra-faq-return-values}
 */
export type KendraFaqAttributes = {
  /**
   * @maxLength `1000`
   */
  Arn: string;
  /**
   * Unique ID of the FAQ
   * @minLength `1`
   * @maxLength `100`
   */
  Id: string;
};
/**
 * Type definition for `AWS::Kendra::Faq.FileFormat`.
 * Format of the input file
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-fileformat.html}
 */
export type FileFormat = "CSV" | "CSV_WITH_HEADER" | "JSON";
/**
 * Type definition for `AWS::Kendra::Faq.S3Path`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-s3path.html}
 */
export type S3Path = {
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   */
  Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
};
/**
 * Type definition for `AWS::Kendra::Faq.Tag`.
 * A label for tagging Kendra resources
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-faq-tag.html}
 */
export type Tag = {
  /**
   * A string used to identify this tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * A string containing the value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Kendra::Faq`.
 * A Kendra FAQ resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html}
 */
export class KendraFaq extends $Resource<
  "AWS::Kendra::Faq",
  KendraFaqProperties,
  KendraFaqAttributes
> {
  public static readonly Type = "AWS::Kendra::Faq";
  constructor(
    logicalId: string,
    properties: KendraFaqProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KendraFaq.Type, properties, options);
  }
}
