import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53Profiles::ProfileAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html}
 */
export type Route53ProfilesProfileAssociationProperties = {
  /**
   * The Amazon Resource Name (ARN) of the profile association.
   */
  Arn?: string;
  /**
   * The name of an association between a  Profile and a VPC.
   */
  Name: string;
  /**
   * The ID of the  profile that you associated with the resource that is specified by ResourceId.
   */
  ProfileId: string;
  /**
   * The resource that you associated the  profile with.
   */
  ResourceId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Profiles::ProfileAssociation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#aws-resource-route53profiles-profileassociation-return-values}
 */
export type Route53ProfilesProfileAssociationAttributes = {
  /**
   * Primary Identifier for  Profile Association
   */
  Id: string;
};
/**
 * Type definition for `AWS::Route53Profiles::ProfileAssociation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53profiles-profileassociation-tag.html}
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
 * Resource Type definition for AWS::Route53Profiles::ProfileAssociation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html}
 */
export class Route53ProfilesProfileAssociation extends $Resource<
  "AWS::Route53Profiles::ProfileAssociation",
  Route53ProfilesProfileAssociationProperties,
  Route53ProfilesProfileAssociationAttributes
> {
  public static readonly Type = "AWS::Route53Profiles::ProfileAssociation";
  constructor(
    logicalId: string,
    properties: Route53ProfilesProfileAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      Route53ProfilesProfileAssociation.Type,
      properties,
      options,
    );
  }
}
