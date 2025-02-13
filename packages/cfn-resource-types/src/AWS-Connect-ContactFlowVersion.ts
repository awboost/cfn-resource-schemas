import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::ContactFlowVersion`.
 * Resource Type Definition for ContactFlowVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html}
 */
export type ConnectContactFlowVersionProperties = {
  /**
   * The ARN of the contact flow this version is tied to.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/contact-flow/[-a-zA-Z0-9]+$`
   */
  ContactFlowId: string;
  /**
   * The description of the version.
   * @maxLength `500`
   */
  Description?: string;
};
/**
 * Attribute type definition for `AWS::Connect::ContactFlowVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html#aws-resource-connect-contactflowversion-return-values}
 */
export type ConnectContactFlowVersionAttributes = {
  /**
   * The identifier of the contact flow version (ARN).
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/contact-flow/[-a-zA-Z0-9]+:[0-9]+$`
   */
  ContactFlowVersionARN: string;
  /**
   * Indicates the checksum value of the latest published flow content
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]{64}$`
   */
  FlowContentSha256: string;
  /**
   * The version number of this revision
   */
  Version: number;
};
/**
 * Resource type definition for `AWS::Connect::ContactFlowVersion`.
 * Resource Type Definition for ContactFlowVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html}
 */
export class ConnectContactFlowVersion extends $Resource<
  "AWS::Connect::ContactFlowVersion",
  ConnectContactFlowVersionProperties,
  ConnectContactFlowVersionAttributes
> {
  public static readonly Type = "AWS::Connect::ContactFlowVersion";
  constructor(
    logicalId: string,
    properties: ConnectContactFlowVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectContactFlowVersion.Type, properties, options);
  }
}
