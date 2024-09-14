import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::AgentStatus
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html}
 */
export type ConnectAgentStatusProperties = {
  /**
   * The description of the status.
   * @minLength `1`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The display order of the status.
   * @min `1`
   * @max `50`
   */
  DisplayOrder?: number;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the status.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * A number indicating the reset order of the agent status.
   */
  ResetOrderNumber?: boolean;
  /**
   * The state of the status.
   */
  State: "ENABLED" | "DISABLED";
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The type of agent status.
   */
  Type?: "ROUTABLE" | "CUSTOM" | "OFFLINE";
};
/**
 * Attribute type definition for `AWS::Connect::AgentStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#aws-resource-connect-agentstatus-return-values}
 */
export type ConnectAgentStatusAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the agent status.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-state/[-a-zA-Z0-9]*$`
   */
  AgentStatusArn: string;
  /**
   * Last modified region.
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  /**
   * Last modified time.
   */
  LastModifiedTime: number;
};
/**
 * Type definition for `AWS::Connect::AgentStatus.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-agentstatus-tag.html}
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
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::AgentStatus
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html}
 */
export class ConnectAgentStatus extends $Resource<
  "AWS::Connect::AgentStatus",
  ConnectAgentStatusProperties,
  ConnectAgentStatusAttributes
> {
  public static readonly Type = "AWS::Connect::AgentStatus";
  constructor(
    logicalId: string,
    properties: ConnectAgentStatusProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectAgentStatus.Type, properties, options);
  }
}
