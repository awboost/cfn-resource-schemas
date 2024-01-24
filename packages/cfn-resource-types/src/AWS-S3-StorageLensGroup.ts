import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::S3::StorageLensGroup resource is an Amazon S3 resource type that you can use to create Storage Lens Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html}
 */
export type S3StorageLensGroupProperties = {
  /**
   * Sets the Storage Lens Group filter.
   */
  Filter: Filter;
  /**
   * The name that identifies the Amazon S3 Storage Lens Group.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9\-_]+$`
   */
  Name: string;
  /**
   * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3::StorageLensGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#aws-resource-s3-storagelensgroup-return-values}
 */
export type S3StorageLensGroupAttributes = {
  /**
   * The ARN for the Amazon S3 Storage Lens Group.
   */
  StorageLensGroupArn: string;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.And`.
 * The Storage Lens group will include objects that match all of the specified filter values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html}
 */
export type And = {
  /**
   * Filter to match any of the specified prefixes.
   */
  MatchAnyPrefix?: string[];
  /**
   * Filter to match any of the specified suffixes.
   */
  MatchAnySuffix?: string[];
  /**
   * Filter to match any of the specified object tags.
   */
  MatchAnyTag?: Tag[];
  /**
   * Filter to match all of the specified values for the minimum and maximum object age.
   */
  MatchObjectAge?: MatchObjectAge;
  /**
   * Filter to match all of the specified values for the minimum and maximum object size.
   */
  MatchObjectSize?: MatchObjectSize;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.Filter`.
 * Sets the Storage Lens Group filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html}
 */
export type Filter = {
  /**
   * The Storage Lens group will include objects that match all of the specified filter values.
   */
  And?: And;
  /**
   * Filter to match any of the specified prefixes.
   */
  MatchAnyPrefix?: string[];
  /**
   * Filter to match any of the specified suffixes.
   */
  MatchAnySuffix?: string[];
  /**
   * Filter to match any of the specified object tags.
   */
  MatchAnyTag?: Tag[];
  /**
   * Filter to match all of the specified values for the minimum and maximum object age.
   */
  MatchObjectAge?: MatchObjectAge;
  /**
   * Filter to match all of the specified values for the minimum and maximum object size.
   */
  MatchObjectSize?: MatchObjectSize;
  /**
   * The Storage Lens group will include objects that match any of the specified filter values.
   */
  Or?: Or;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.MatchObjectAge`.
 * Filter to match all of the specified values for the minimum and maximum object age.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectage.html}
 */
export type MatchObjectAge = {
  /**
   * Minimum object age to which the rule applies.
   * @min `1`
   */
  DaysGreaterThan?: number;
  /**
   * Maximum object age to which the rule applies.
   * @min `1`
   */
  DaysLessThan?: number;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.MatchObjectSize`.
 * Filter to match all of the specified values for the minimum and maximum object size.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectsize.html}
 */
export type MatchObjectSize = {
  /**
   * Minimum object size to which the rule applies.
   * @min `1`
   */
  BytesGreaterThan?: number;
  /**
   * Maximum object size to which the rule applies.
   * @min `1`
   */
  BytesLessThan?: number;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.Or`.
 * The Storage Lens group will include objects that match any of the specified filter values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html}
 */
export type Or = {
  /**
   * Filter to match any of the specified prefixes.
   */
  MatchAnyPrefix?: string[];
  /**
   * Filter to match any of the specified suffixes.
   */
  MatchAnySuffix?: string[];
  /**
   * Filter to match any of the specified object tags.
   */
  MatchAnyTag?: Tag[];
  /**
   * Filter to match all of the specified values for the minimum and maximum object age.
   */
  MatchObjectAge?: MatchObjectAge;
  /**
   * Filter to match all of the specified values for the minimum and maximum object size.
   */
  MatchObjectSize?: MatchObjectSize;
};
/**
 * Type definition for `AWS::S3::StorageLensGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::S3::StorageLensGroup resource is an Amazon S3 resource type that you can use to create Storage Lens Group.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html}
 */
export class S3StorageLensGroup extends $Resource<
  "AWS::S3::StorageLensGroup",
  S3StorageLensGroupProperties,
  S3StorageLensGroupAttributes
> {
  public static readonly Type = "AWS::S3::StorageLensGroup";
  constructor(
    logicalId: string,
    properties: S3StorageLensGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, S3StorageLensGroup.Type, properties, options);
  }
}
