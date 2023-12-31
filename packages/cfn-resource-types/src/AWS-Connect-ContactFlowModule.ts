import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::ContactFlowModule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html}
 */
export type ConnectContactFlowModuleProperties = {
  /**
   * The content of the contact flow module in JSON format.
   * @minLength `1`
   * @maxLength `256000`
   */
  Content: string;
  /**
   * The description of the contact flow module.
   * @maxLength `500`
   * @pattern `.*\S.*`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance (ARN).
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the contact flow module.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * The state of the contact flow module.
   * @maxLength `500`
   */
  State?: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::ContactFlowModule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html#aws-resource-connect-contactflowmodule-return-values}
 */
export type ConnectContactFlowModuleAttributes = {
  /**
   * The identifier of the contact flow module (ARN).
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*flow-module/[-a-zA-Z0-9]*$`
   */
  ContactFlowModuleArn: string;
  /**
   * The status of the contact flow module.
   * @maxLength `500`
   */
  Status: string;
};
/**
 * Type definition for `AWS::Connect::ContactFlowModule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-contactflowmodule-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::ContactFlowModule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowmodule.html}
 */
export class ConnectContactFlowModule extends $Resource<
  "AWS::Connect::ContactFlowModule",
  ConnectContactFlowModuleProperties,
  ConnectContactFlowModuleAttributes
> {
  public static readonly Type = "AWS::Connect::ContactFlowModule";
  constructor(
    logicalId: string,
    properties: ConnectContactFlowModuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectContactFlowModule.Type, properties, options);
  }
}
