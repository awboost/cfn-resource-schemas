import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::ContactFlowModuleVersion`.
 * Resource Type definition for ContactFlowModuleVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmoduleversion.html}
 */
export type ConnectContactFlowModuleVersionProperties = {
  /**
   * The identifier of the contact flow module (ARN) this version is tied to.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/flow-module/[-a-zA-Z0-9]+$`
   */
  ContactFlowModuleId: string;
  /**
   * The description of the version.
   * @maxLength `500`
   */
  Description?: string;
};
/**
 * Attribute type definition for `AWS::Connect::ContactFlowModuleVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmoduleversion.html#aws-resource-connect-contactflowmoduleversion-return-values}
 */
export type ConnectContactFlowModuleVersionAttributes = {
  /**
   * The identifier of the contact flow module version (ARN).
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/flow-module/[-a-zA-Z0-9]+:[0-9]+$`
   */
  ContactFlowModuleVersionARN: string;
  /**
   * Indicates the checksum value of the latest published flow module content
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9]{64}$`
   */
  FlowModuleContentSha256: string;
  /**
   * The version number of this revision
   */
  Version: number;
};
/**
 * Resource type definition for `AWS::Connect::ContactFlowModuleVersion`.
 * Resource Type definition for ContactFlowModuleVersion
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmoduleversion.html}
 */
export class ConnectContactFlowModuleVersion extends $Resource<
  "AWS::Connect::ContactFlowModuleVersion",
  ConnectContactFlowModuleVersionProperties,
  ConnectContactFlowModuleVersionAttributes
> {
  public static readonly Type = "AWS::Connect::ContactFlowModuleVersion";
  constructor(
    logicalId: string,
    properties: ConnectContactFlowModuleVersionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectContactFlowModuleVersion.Type, properties, options);
  }
}
