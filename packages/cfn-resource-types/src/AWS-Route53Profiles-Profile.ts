import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Route53Profiles::Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html}
 */
export type Route53ProfilesProfileProperties = {
  /**
   * The name of the profile.
   * @minLength `1`
   * @maxLength `64`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Route53Profiles::Profile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html#aws-resource-route53profiles-profile-return-values}
 */
export type Route53ProfilesProfileAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the resolver profile.
   */
  Arn: string;
  /**
   * The id of the creator request
   * @minLength `1`
   * @maxLength `64`
   */
  ClientToken: string;
  /**
   * The ID of the profile.
   */
  Id: string;
};
/**
 * Type definition for `AWS::Route53Profiles::Profile.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53profiles-profile-tag.html}
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
 * Resource Type definition for AWS::Route53Profiles::Profile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profile.html}
 */
export class Route53ProfilesProfile extends $Resource<
  "AWS::Route53Profiles::Profile",
  Route53ProfilesProfileProperties,
  Route53ProfilesProfileAttributes
> {
  public static readonly Type = "AWS::Route53Profiles::Profile";
  constructor(
    logicalId: string,
    properties: Route53ProfilesProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, Route53ProfilesProfile.Type, properties, options);
  }
}
