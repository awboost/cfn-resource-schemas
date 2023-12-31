import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Use the AWS::IoT::RoleAlias resource to declare an AWS IoT RoleAlias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html}
 */
export type IoTRoleAliasProperties = {
  /**
   * @min `900`
   * @max `43200`
   */
  CredentialDurationSeconds?: number;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w=,@-]+`
   */
  RoleAlias?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   */
  RoleArn: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoT::RoleAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html#aws-resource-iot-rolealias-return-values}
 */
export type IoTRoleAliasAttributes = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `[\w=,@-]+`
   */
  RoleAliasArn: string;
};
/**
 * Type definition for `AWS::IoT::RoleAlias.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-rolealias-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Use the AWS::IoT::RoleAlias resource to declare an AWS IoT RoleAlias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-rolealias.html}
 */
export class IoTRoleAlias extends $Resource<
  "AWS::IoT::RoleAlias",
  IoTRoleAliasProperties,
  IoTRoleAliasAttributes
> {
  public static readonly Type = "AWS::IoT::RoleAlias";
  public static readonly AttributeNames = ["RoleAliasArn" as const];
  constructor(
    logicalId: string,
    properties: IoTRoleAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTRoleAlias.Type,
      properties,
      IoTRoleAlias.AttributeNames,
      options,
    );
  }
}
