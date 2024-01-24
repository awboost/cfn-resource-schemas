import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::ContactFlow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html}
 */
export type ConnectContactFlowProperties = {
  /**
   * The content of the contact flow in JSON format.
   * @minLength `1`
   * @maxLength `256000`
   */
  Content: string;
  /**
   * The description of the contact flow.
   * @maxLength `500`
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
   * The name of the contact flow.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * The state of the contact flow.
   */
  State?: "ACTIVE" | "ARCHIVED";
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of the contact flow.
   */
  Type:
    | "CONTACT_FLOW"
    | "CUSTOMER_QUEUE"
    | "CUSTOMER_HOLD"
    | "CUSTOMER_WHISPER"
    | "AGENT_HOLD"
    | "AGENT_WHISPER"
    | "OUTBOUND_WHISPER"
    | "AGENT_TRANSFER"
    | "QUEUE_TRANSFER";
};
/**
 * Attribute type definition for `AWS::Connect::ContactFlow`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html#aws-resource-connect-contactflow-return-values}
 */
export type ConnectContactFlowAttributes = {
  /**
   * The identifier of the contact flow (ARN).
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn: string;
};
/**
 * Type definition for `AWS::Connect::ContactFlow.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-contactflow-tag.html}
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
   * The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::ContactFlow
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflow.html}
 */
export class ConnectContactFlow extends $Resource<
  "AWS::Connect::ContactFlow",
  ConnectContactFlowProperties,
  ConnectContactFlowAttributes
> {
  public static readonly Type = "AWS::Connect::ContactFlow";
  constructor(
    logicalId: string,
    properties: ConnectContactFlowProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectContactFlow.Type, properties, options);
  }
}
