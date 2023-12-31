import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource schema for AWS::DataSync::Agent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export type DataSyncAgentProperties = {
  /**
   * Activation key of the Agent.
   * @maxLength `29`
   * @pattern `[A-Z0-9]{5}(-[A-Z0-9]{5}){4}`
   */
  ActivationKey?: string;
  /**
   * The name configured for the agent. Text reference used to identify the agent in the console.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  AgentName?: string;
  /**
   * The ARNs of the security group used to protect your data transfer task subnets.
   */
  SecurityGroupArns?: string[];
  /**
   * The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
   */
  SubnetArns?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The ID of the VPC endpoint that the agent has access to.
   * @pattern `^vpce-[0-9a-f]{17}$`
   */
  VpcEndpointId?: string;
};
/**
 * Attribute type definition for `AWS::DataSync::Agent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#aws-resource-datasync-agent-return-values}
 */
export type DataSyncAgentAttributes = {
  /**
   * The DataSync Agent ARN.
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$`
   */
  AgentArn: string;
  /**
   * The service endpoints that the agent will connect to.
   */
  EndpointType: "FIPS" | "PUBLIC" | "PRIVATE_LINK";
};
/**
 * Type definition for `AWS::DataSync::Agent.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-agent-tag.html}
 */
export type Tag = {
  /**
   * The key for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:/-]+$`
   */
  Key: string;
  /**
   * The value for an AWS resource tag.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s+=._:@/-]+$`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DataSync::Agent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export class DataSyncAgent extends $Resource<
  "AWS::DataSync::Agent",
  DataSyncAgentProperties,
  DataSyncAgentAttributes
> {
  public static readonly Type = "AWS::DataSync::Agent";
  public static readonly AttributeNames = [
    "AgentArn" as const,
    "EndpointType" as const,
  ];
  constructor(
    logicalId: string,
    properties: DataSyncAgentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataSyncAgent.Type,
      properties,
      DataSyncAgent.AttributeNames,
      options,
    );
  }
}
