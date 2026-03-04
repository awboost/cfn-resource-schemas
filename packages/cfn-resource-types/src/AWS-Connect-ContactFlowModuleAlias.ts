import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::ContactFlowModuleAlias`.
 * Resource Type definition for ContactFlowModuleAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodulealias.html}
 */
export type ConnectContactFlowModuleAliasProperties = {
  /**
   * The identifier of the contact flow module (ARN) this alias is tied to.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/flow-module/[-a-zA-Z0-9]+$`
   */
  ContactFlowModuleId: string;
  /**
   * The version number of the contact flow module this alias points to.
   * @min `1`
   */
  ContactFlowModuleVersion: number;
  /**
   * The description of the alias.
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The name of the alias.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^([$0-9a-zA-Z][_-]?)+$`
   */
  Name: string;
};
/**
 * Attribute type definition for `AWS::Connect::ContactFlowModuleAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodulealias.html#aws-resource-connect-contactflowmodulealias-return-values}
 */
export type ConnectContactFlowModuleAliasAttributes = {
  /**
   * The unique identifier of the alias.
   * @minLength `1`
   * @maxLength `500`
   */
  AliasId: string;
  /**
   * The identifier of the contact flow module alias (ARN). This is constructed from the ContactFlowModuleArn and AliasId.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/flow-module/[-a-zA-Z0-9]+:[-a-zA-Z0-9]+$`
   */
  ContactFlowModuleAliasARN: string;
};
/**
 * Resource type definition for `AWS::Connect::ContactFlowModuleAlias`.
 * Resource Type definition for ContactFlowModuleAlias
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodulealias.html}
 */
export class ConnectContactFlowModuleAlias extends $Resource<
  "AWS::Connect::ContactFlowModuleAlias",
  ConnectContactFlowModuleAliasProperties,
  ConnectContactFlowModuleAliasAttributes
> {
  public static readonly Type = "AWS::Connect::ContactFlowModuleAlias";
  constructor(
    logicalId: string,
    properties: ConnectContactFlowModuleAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectContactFlowModuleAlias.Type, properties, options);
  }
}
