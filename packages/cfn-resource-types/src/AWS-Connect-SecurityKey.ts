import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::SecurityKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html}
 */
export type ConnectSecurityKeyProperties = {
  /**
   * Amazon Connect instance identifier
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceId: string;
  /**
   * A valid security key in PEM format.
   * @minLength `1`
   * @maxLength `1024`
   */
  Key: string;
};
/**
 * Attribute type definition for `AWS::Connect::SecurityKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html#aws-resource-connect-securitykey-return-values}
 */
export type ConnectSecurityKeyAttributes = {
  /**
   * An associationID is automatically generated when a storage config is associated with an instance
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-a-z0-9]*$`
   */
  AssociationId: string;
};
/**
 * Resource Type definition for AWS::Connect::SecurityKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html}
 */
export class ConnectSecurityKey extends $Resource<
  "AWS::Connect::SecurityKey",
  ConnectSecurityKeyProperties,
  ConnectSecurityKeyAttributes
> {
  public static readonly Type = "AWS::Connect::SecurityKey";
  constructor(
    logicalId: string,
    properties: ConnectSecurityKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectSecurityKey.Type, properties, options);
  }
}
