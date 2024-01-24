import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DMS::InstanceProfile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html}
 */
export type DMSInstanceProfileProperties = {
  /**
   * The property describes an availability zone of the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  AvailabilityZone?: string;
  /**
   * The optional description of the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be name/arn
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileIdentifier?: string;
  /**
   * The property describes a name for the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileName?: string;
  /**
   * The property describes kms key arn for the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  KmsKeyArn?: string;
  /**
   * The property describes a network type for the instance profile.
   */
  NetworkType?: "IPV4" | "IPV6" | "DUAL";
  /**
   * The property describes the publicly accessible of the instance profile
   */
  PubliclyAccessible?: boolean;
  /**
   * The property describes a subnet group identifier for the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  SubnetGroupIdentifier?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * The property describes vps security groups for the instance profile.
   */
  VpcSecurityGroups?: string[];
};
/**
 * Attribute type definition for `AWS::DMS::InstanceProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html#aws-resource-dms-instanceprofile-return-values}
 */
export type DMSInstanceProfileAttributes = {
  /**
   * The property describes an ARN of the instance profile.
   * @minLength `1`
   * @maxLength `255`
   */
  InstanceProfileArn: string;
  /**
   * The property describes a creating time of the instance profile.
   * @minLength `1`
   * @maxLength `40`
   */
  InstanceProfileCreationTime: string;
};
/**
 * Type definition for `AWS::DMS::InstanceProfile.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-instanceprofile-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DMS::InstanceProfile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-instanceprofile.html}
 */
export class DMSInstanceProfile extends $Resource<
  "AWS::DMS::InstanceProfile",
  DMSInstanceProfileProperties,
  DMSInstanceProfileAttributes
> {
  public static readonly Type = "AWS::DMS::InstanceProfile";
  constructor(
    logicalId: string,
    properties: DMSInstanceProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSInstanceProfile.Type, properties, options);
  }
}
