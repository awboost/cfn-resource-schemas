import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Schema for AWS::CodeConnections::Connection resource which can be used to connect external source providers with other AWS services (i.e. AWS CodePipeline)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html}
 */
export type CodeConnectionsConnectionProperties = {
  /**
   * The name of the connection. Connection names must be unique in an AWS user account.
   * @minLength `1`
   * @maxLength `32`
   */
  ConnectionName: string;
  /**
   * The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
   */
  HostArn?: string;
  /**
   * The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
   */
  ProviderType?: string;
  /**
   * Specifies the tags applied to a connection.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CodeConnections::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#aws-resource-codeconnections-connection-return-values}
 */
export type CodeConnectionsConnectionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.
   * @minLength `0`
   * @maxLength `256`
   * @pattern `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
   */
  ConnectionArn: string;
  /**
   * The current status of the connection.
   */
  ConnectionStatus: string;
  /**
   * The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
   * @minLength `12`
   * @maxLength `12`
   * @pattern `[0-9]{12}`
   */
  OwnerAccountId: string;
};
/**
 * Type definition for `AWS::CodeConnections::Connection.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeconnections-connection-tag.html}
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
 * Schema for AWS::CodeConnections::Connection resource which can be used to connect external source providers with other AWS services (i.e. AWS CodePipeline)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html}
 */
export class CodeConnectionsConnection extends $Resource<
  "AWS::CodeConnections::Connection",
  CodeConnectionsConnectionProperties,
  CodeConnectionsConnectionAttributes
> {
  public static readonly Type = "AWS::CodeConnections::Connection";
  constructor(
    logicalId: string,
    properties: CodeConnectionsConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CodeConnectionsConnection.Type, properties, options);
  }
}
