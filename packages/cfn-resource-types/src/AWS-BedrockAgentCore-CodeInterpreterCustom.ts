import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource definition for AWS::BedrockAgentCore::CodeInterpreterCustom
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-codeinterpretercustom.html}
 */
export type BedrockAgentCoreCodeInterpreterCustomProperties = {
  /**
   * The description of the code interpreter.
   */
  Description?: string;
  /**
   * The ARN of the IAM role that the code interpreter uses to access resources.
   * @pattern `^arn:aws(-[a-z]+)*:iam::[0-9]{12}:role/.+$`
   */
  ExecutionRoleArn?: string;
  /**
   * The name of the code interpreter.
   */
  Name: string;
  /**
   * Network configuration for code interpreter.
   */
  NetworkConfiguration: CodeInterpreterNetworkConfiguration;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-codeinterpretercustom.html#aws-resource-bedrockagentcore-codeinterpretercustom-return-values}
 */
export type BedrockAgentCoreCodeInterpreterCustomAttributes = {
  /**
   * The ARN of a CodeInterpreter resource.
   * @pattern `^arn:aws(-[^:]+)?:bedrock-agentcore:[a-z0-9-]+:(aws|[0-9]{12}):code-interpreter(-custom)?\/(aws\.codeinterpreter\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  CodeInterpreterArn: string;
  /**
   * The id of the code interpreter.
   * @pattern `^(aws\.codeinterpreter\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  CodeInterpreterId: string;
  /**
   * Timestamp when the code interpreter was created.
   */
  CreatedAt: string;
  /**
   * The reason for failure if the code interpreter creation or operation failed.
   */
  FailureReason: string;
  /**
   * Timestamp when the code interpreter was last updated.
   */
  LastUpdatedAt: string;
  /**
   * Status of code interpreter.
   */
  Status: CodeInterpreterStatus;
};
/**
 * Type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom.CodeInterpreterNetworkConfiguration`.
 * Network configuration for code interpreter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-codeinterpretercustom-codeinterpreternetworkconfiguration.html}
 */
export type CodeInterpreterNetworkConfiguration = {
  /**
   * Network modes supported by code interpreter
   */
  NetworkMode: CodeInterpreterNetworkMode;
  /**
   * Network mode configuration for VPC
   */
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom.CodeInterpreterNetworkMode`.
 * Network modes supported by code interpreter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-codeinterpretercustom-codeinterpreternetworkmode.html}
 */
export type CodeInterpreterNetworkMode = "PUBLIC" | "SANDBOX" | "VPC";
/**
 * Type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom.CodeInterpreterStatus`.
 * Status of Code interpreter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-codeinterpretercustom-codeinterpreterstatus.html}
 */
export type CodeInterpreterStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-codeinterpretercustom-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::CodeInterpreterCustom.VpcConfig`.
 * Network mode configuration for VPC
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-codeinterpretercustom-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * Security groups for VPC
   * @minLength `1`
   * @maxLength `16`
   */
  SecurityGroups: string[];
  /**
   * Subnets for VPC
   * @minLength `1`
   * @maxLength `16`
   */
  Subnets: string[];
};
/**
 * Resource definition for AWS::BedrockAgentCore::CodeInterpreterCustom
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-codeinterpretercustom.html}
 */
export class BedrockAgentCoreCodeInterpreterCustom extends $Resource<
  "AWS::BedrockAgentCore::CodeInterpreterCustom",
  BedrockAgentCoreCodeInterpreterCustomProperties,
  BedrockAgentCoreCodeInterpreterCustomAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::CodeInterpreterCustom";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreCodeInterpreterCustomProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreCodeInterpreterCustom.Type,
      properties,
      options,
    );
  }
}
