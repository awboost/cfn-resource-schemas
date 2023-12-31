import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::S3::AccessGrantsInstance resource is an Amazon S3 resource type that hosts Access Grants and their associated locations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html}
 */
export type S3AccessGrantsInstanceProperties = {
  /**
   * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
   */
  IdentityCenterArn?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::S3::AccessGrantsInstance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html#aws-resource-s3-accessgrantsinstance-return-values}
 */
export type S3AccessGrantsInstanceAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the specified Access Grants instance.
   */
  AccessGrantsInstanceArn: string;
  /**
   * A unique identifier for the specified access grants instance.
   */
  AccessGrantsInstanceId: string;
};
/**
 * Type definition for `AWS::S3::AccessGrantsInstance.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrantsinstance-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * The AWS::S3::AccessGrantsInstance resource is an Amazon S3 resource type that hosts Access Grants and their associated locations
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html}
 */
export class S3AccessGrantsInstance extends $Resource<
  "AWS::S3::AccessGrantsInstance",
  S3AccessGrantsInstanceProperties,
  S3AccessGrantsInstanceAttributes
> {
  public static readonly Type = "AWS::S3::AccessGrantsInstance";
  public static readonly AttributeNames = [
    "AccessGrantsInstanceArn" as const,
    "AccessGrantsInstanceId" as const,
  ];
  constructor(
    logicalId: string,
    properties: S3AccessGrantsInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      S3AccessGrantsInstance.Type,
      properties,
      S3AccessGrantsInstance.AttributeNames,
      options,
    );
  }
}
