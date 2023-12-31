import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::SecurityProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html}
 */
export type ConnectSecurityProfileProperties = {
  /**
   * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
   * @maxLength `2`
   */
  AllowedAccessControlTags?: Tag[];
  /**
   * The description of the security profile.
   * @minLength `0`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * Permissions assigned to the security profile.
   * @maxLength `500`
   */
  Permissions?: string[];
  /**
   * The name of the security profile.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[ a-zA-Z0-9_@-]+$`
   */
  SecurityProfileName: string;
  /**
   * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
   * @maxLength `10`
   */
  TagRestrictedResources?: string[];
  /**
   * The tags used to organize, track, or control access for this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::SecurityProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html#aws-resource-connect-securityprofile-return-values}
 */
export type ConnectSecurityProfileAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the security profile.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*security-profile/[-a-zA-Z0-9]*$`
   */
  SecurityProfileArn: string;
};
/**
 * Type definition for `AWS::Connect::SecurityProfile.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
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
 * Resource Type definition for AWS::Connect::SecurityProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html}
 */
export class ConnectSecurityProfile extends $Resource<
  "AWS::Connect::SecurityProfile",
  ConnectSecurityProfileProperties,
  ConnectSecurityProfileAttributes
> {
  public static readonly Type = "AWS::Connect::SecurityProfile";
  constructor(
    logicalId: string,
    properties: ConnectSecurityProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectSecurityProfile.Type, properties, options);
  }
}
