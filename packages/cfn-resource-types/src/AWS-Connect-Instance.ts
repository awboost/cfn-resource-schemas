import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html}
 */
export type ConnectInstanceProperties = {
  /**
   * The attributes for the instance.
   */
  Attributes: Attributes;
  /**
   * Existing directoryId user wants to map to the new Connect instance.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^d-[0-9a-f]{10}$`
   */
  DirectoryId?: string;
  /**
   * Specifies the type of directory integration for new instance.
   */
  IdentityManagementType: "SAML" | "CONNECT_MANAGED" | "EXISTING_DIRECTORY";
  /**
   * Alias of the new directory created as part of new instance creation.
   * @minLength `1`
   * @maxLength `62`
   * @pattern `^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*$`
   */
  InstanceAlias?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::Instance`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#aws-resource-connect-instance-return-values}
 */
export type ConnectInstanceAttributes = {
  /**
   * An instanceArn is automatically generated on creation based on instanceId.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  Arn: string;
  /**
   * Timestamp of instance creation logged as part of instance creation.
   */
  CreatedTime: string;
  /**
   * An instanceId is automatically generated on creation and assigned as the unique identifier.
   */
  Id: string;
  /**
   * Specifies the creation status of new instance.
   */
  InstanceStatus: "CREATION_IN_PROGRESS" | "CREATION_FAILED" | "ACTIVE";
  /**
   * Service linked role created as part of instance creation.
   */
  ServiceRole: string;
};
/**
 * Type definition for `AWS::Connect::Instance.Attributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-attributes.html}
 */
export type Attributes = {
  /**
   * Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.
   */
  AutoResolveBestVoices?: boolean;
  /**
   * Boolean flag which enables CONTACT_LENS on an instance.
   */
  ContactLens?: boolean;
  /**
   * Boolean flag which enables CONTACTFLOW_LOGS on an instance.
   */
  ContactflowLogs?: boolean;
  /**
   * Boolean flag which enables EARLY_MEDIA on an instance.
   */
  EarlyMedia?: boolean;
  /**
   * Mandatory element which enables inbound calls on new instance.
   */
  InboundCalls: boolean;
  /**
   * Mandatory element which enables outbound calls on new instance.
   */
  OutboundCalls: boolean;
  /**
   * Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.
   */
  UseCustomTTSVoices?: boolean;
};
/**
 * Type definition for `AWS::Connect::Instance.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-instance-tag.html}
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
 * Resource Type definition for AWS::Connect::Instance
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html}
 */
export class ConnectInstance extends $Resource<
  "AWS::Connect::Instance",
  ConnectInstanceProperties,
  ConnectInstanceAttributes
> {
  public static readonly Type = "AWS::Connect::Instance";
  constructor(
    logicalId: string,
    properties: ConnectInstanceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectInstance.Type, properties, options);
  }
}
