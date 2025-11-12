import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::SecurityProfile
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securityprofile.html}
 */
export type ConnectSecurityProfileProperties = {
  /**
   * The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.
   * @minLength `0`
   * @maxLength `127`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  AllowedAccessControlHierarchyGroupId?: string;
  /**
   * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
   * @maxLength `2`
   */
  AllowedAccessControlTags?: Tag[];
  /**
   * A list of third-party applications that the security profile will give access to.
   * @maxLength `10`
   */
  Applications?: Application[];
  /**
   * The description of the security profile.
   * @minLength `0`
   * @maxLength `250`
   */
  Description?: string;
  GranularAccessControlConfiguration?: {
    /**
     * Defines the access control configuration for data tables.
     */
    DataTableAccessControlConfiguration?: DataTableAccessControlConfiguration;
  };
  /**
   * The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.
   * @maxLength `10`
   */
  HierarchyRestrictedResources?: string[];
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
   * The AWS Region where this resource was last modified.
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  /**
   * The timestamp when this resource was last modified.
   */
  LastModifiedTime: number;
  /**
   * The Amazon Resource Name (ARN) for the security profile.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*security-profile/[-a-zA-Z0-9]*$`
   */
  SecurityProfileArn: string;
};
/**
 * Type definition for `AWS::Connect::SecurityProfile.Application`.
 * A third-party application's metadata.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-application.html}
 */
export type Application = {
  /**
   * The permissions that the agent is granted on the application
   * @maxLength `10`
   */
  ApplicationPermissions: string[];
  /**
   * Namespace of the application that you want to give access to.
   * @minLength `1`
   * @maxLength `128`
   */
  Namespace: string;
};
/**
 * Type definition for `AWS::Connect::SecurityProfile.DataTableAccessControlConfiguration`.
 * Defines the access control configuration for data tables.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-datatableaccesscontrolconfiguration.html}
 */
export type DataTableAccessControlConfiguration = {
  /**
   * Contains the configuration for record-based access control.
   */
  PrimaryAttributeAccessControlConfiguration?: PrimaryAttributeAccessControlConfigurationItem;
};
/**
 * Type definition for `AWS::Connect::SecurityProfile.PrimaryAttributeAccessControlConfigurationItem`.
 * Contains the configuration for record-based access control.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-primaryattributeaccesscontrolconfigurationitem.html}
 */
export type PrimaryAttributeAccessControlConfigurationItem = {
  /**
   * An array of PrimaryAttributeValue objects.
   * @minLength `1`
   * @maxLength `5`
   */
  PrimaryAttributeValues: PrimaryAttributeValue[];
};
/**
 * Type definition for `AWS::Connect::SecurityProfile.PrimaryAttributeValue`.
 * An object defining the access control for a specific attribute and its values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-securityprofile-primaryattributevalue.html}
 */
export type PrimaryAttributeValue = {
  /**
   * Specifies the type of access granted. Currently, only "ALLOW" is supported
   */
  AccessType: "ALLOW";
  /**
   * The name of the primary attribute.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^(?!aws:|connect:)[\p{L}\p{Z}\p{N}\-_.:=@'|]+$`
   */
  AttributeName: string;
  /**
   * An array of allowed primary values for the specified primary attribute.
   * @minLength `1`
   * @maxLength `2`
   */
  Values: string[];
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
