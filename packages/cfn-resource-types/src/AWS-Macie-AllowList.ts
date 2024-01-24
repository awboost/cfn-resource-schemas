import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Macie::AllowList`.
 * Macie AllowList resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html}
 */
export type MacieAllowListProperties = {
  /**
   * AllowList criteria.
   */
  Criteria: Criteria;
  /**
   * Description of AllowList.
   */
  Description?: string;
  /**
   * Name of AllowList.
   */
  Name: string;
  /**
   * A collection of tags associated with a resource
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Macie::AllowList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#aws-resource-macie-allowlist-return-values}
 */
export type MacieAllowListAttributes = {
  /**
   * AllowList ARN.
   */
  Arn: string;
  /**
   * AllowList ID.
   */
  Id: string;
  /**
   * AllowList status.
   */
  Status: Status;
};
/**
 * Type definition for `AWS::Macie::AllowList.Criteria`.
 * The regex or s3 object to use for the AllowList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-criteria.html}
 */
export type Criteria =
  | {
      /**
       * The S3 object key for the AllowList.
       */
      Regex: string;
    }
  | {
      /**
       * The S3 location for the AllowList.
       */
      S3WordsList: S3WordsList;
    };
/**
 * Type definition for `AWS::Macie::AllowList.S3WordsList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-s3wordslist.html}
 */
export type S3WordsList = {
  BucketName: string;
  ObjectKey: string;
};
/**
 * Type definition for `AWS::Macie::AllowList.Status`.
 * The status for the AllowList
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-status.html}
 */
export type Status =
  | "OK"
  | "S3_OBJECT_NOT_FOUND"
  | "S3_USER_ACCESS_DENIED"
  | "S3_OBJECT_ACCESS_DENIED"
  | "S3_THROTTLED"
  | "S3_OBJECT_OVERSIZE"
  | "S3_OBJECT_EMPTY"
  | "UNKNOWN_ERROR";
/**
 * Type definition for `AWS::Macie::AllowList.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   */
  Key: string;
  /**
   * The tag's value.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Macie::AllowList`.
 * Macie AllowList resource schema
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html}
 */
export class MacieAllowList extends $Resource<
  "AWS::Macie::AllowList",
  MacieAllowListProperties,
  MacieAllowListAttributes
> {
  public static readonly Type = "AWS::Macie::AllowList";
  constructor(
    logicalId: string,
    properties: MacieAllowListProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MacieAllowList.Type, properties, options);
  }
}
