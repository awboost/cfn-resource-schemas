import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DevOpsAgent::AgentSpace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-agentspace.html}
 */
export type DevOpsAgentAgentSpaceProperties = {
  /**
   * The description of the AgentSpace.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The ARN of the KMS key to use for encryption.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyArn?: string;
  /**
   * The name of the AgentSpace.
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  OperatorApp?: OperatorApp;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DevOpsAgent::AgentSpace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-agentspace.html#aws-resource-devopsagent-agentspace-return-values}
 */
export type DevOpsAgentAgentSpaceAttributes = {
  /**
   * The unique identifier of the AgentSpace
   * @minLength `1`
   * @maxLength `255`
   */
  AgentSpaceId: string;
  /**
   * The Amazon Resource Name (ARN) of the AgentSpace.
   */
  Arn: string;
  /**
   * The timestamp when the resource was created.
   */
  CreatedAt: string;
  OperatorApp: {
    Iam: {
      CreatedAt: string;
      UpdatedAt: string;
    };
    Idc: {
      CreatedAt: string;
      IdcApplicationArn: string;
      UpdatedAt: string;
    };
  };
  /**
   * The timestamp when the resource was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::AgentSpace.IamAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-agentspace-iamauthconfiguration.html}
 */
export type IamAuthConfiguration = {
  OperatorAppRoleArn: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::AgentSpace.IdcAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-agentspace-idcauthconfiguration.html}
 */
export type IdcAuthConfiguration = {
  IdcInstanceArn: string;
  OperatorAppRoleArn: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::AgentSpace.OperatorApp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-agentspace-operatorapp.html}
 */
export type OperatorApp = {
  Iam?: IamAuthConfiguration;
  Idc?: IdcAuthConfiguration;
};
/**
 * Type definition for `AWS::DevOpsAgent::AgentSpace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-agentspace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::DevOpsAgent::AgentSpace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-agentspace.html}
 */
export class DevOpsAgentAgentSpace extends $Resource<
  "AWS::DevOpsAgent::AgentSpace",
  DevOpsAgentAgentSpaceProperties,
  DevOpsAgentAgentSpaceAttributes
> {
  public static readonly Type = "AWS::DevOpsAgent::AgentSpace";
  constructor(
    logicalId: string,
    properties: DevOpsAgentAgentSpaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevOpsAgentAgentSpace.Type, properties, options);
  }
}
