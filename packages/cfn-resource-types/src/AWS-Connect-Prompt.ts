import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::Prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html}
 */
export type ConnectPromptProperties = {
  /**
   * The description of the prompt.
   * @minLength `1`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the prompt.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * S3 URI of the customer's audio file for creating prompts resource..
   * @minLength `1`
   * @maxLength `2000`
   * @pattern `s3://\S+/.+|https://\S+\.s3\.\S+\.amazonaws\.com/\S+`
   */
  S3Uri?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::Prompt`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html#aws-resource-connect-prompt-return-values}
 */
export type ConnectPromptAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the prompt.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*prompt/[-a-zA-Z0-9]*$`
   */
  PromptArn: string;
};
/**
 * Type definition for `AWS::Connect::Prompt.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-prompt-tag.html}
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
 * Resource Type definition for AWS::Connect::Prompt
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-prompt.html}
 */
export class ConnectPrompt extends $Resource<
  "AWS::Connect::Prompt",
  ConnectPromptProperties,
  ConnectPromptAttributes
> {
  public static readonly Type = "AWS::Connect::Prompt";
  constructor(
    logicalId: string,
    properties: ConnectPromptProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectPrompt.Type, properties, options);
  }
}
