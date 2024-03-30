import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::AgentAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html}
 */
export type BedrockAgentAliasProperties = {
  /**
   * Name for a resource.
   * @pattern `^([0-9a-zA-Z][_-]?){1,100}$`
   */
  AgentAliasName: string;
  /**
   * Identifier for a resource.
   * @pattern `^[0-9a-zA-Z]{10}$`
   */
  AgentId: string;
  /**
   * Description of the Resource.
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * Routing configuration for an Agent alias.
   * @maxLength `1`
   */
  RoutingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::Bedrock::AgentAlias`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#aws-resource-bedrock-agentalias-return-values}
 */
export type BedrockAgentAliasAttributes = {
  /**
   * Arn representation of the Agent Alias.
   * @maxLength `2048`
   * @pattern `^arn:aws(|-cn|-us-gov):bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
   */
  AgentAliasArn: string;
  /**
   * The list of history events for an alias for an Agent.
   * @maxLength `10`
   */
  AgentAliasHistoryEvents: {
    /**
     * Time Stamp.
     */
    EndDate: string;
    /**
     * Routing configuration for an Agent alias.
     * @maxLength `1`
     */
    RoutingConfiguration: {
      /**
       * Agent Version.
       * @minLength `1`
       * @maxLength `5`
       * @pattern `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
       */
      AgentVersion: string;
    }[];
    /**
     * Time Stamp.
     */
    StartDate: string;
  }[];
  /**
   * Id for an Agent Alias generated at the server side.
   * @minLength `10`
   * @maxLength `10`
   * @pattern `^(\bTSTALIASID\b|[0-9a-zA-Z]+)$`
   */
  AgentAliasId: string;
  /**
   * The statuses an Agent Alias can be in.
   */
  AgentAliasStatus: AgentAliasStatus;
  /**
   * Time Stamp.
   */
  CreatedAt: string;
  /**
   * Time Stamp.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::Bedrock::AgentAlias.AgentAliasHistoryEvent`.
 * History event for an alias for an Agent.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliashistoryevent.html}
 */
export type AgentAliasHistoryEvent = {
  /**
   * Time Stamp.
   */
  EndDate?: string;
  /**
   * Routing configuration for an Agent alias.
   * @maxLength `1`
   */
  RoutingConfiguration?: AgentAliasRoutingConfigurationListItem[];
  /**
   * Time Stamp.
   */
  StartDate?: string;
};
/**
 * Type definition for `AWS::Bedrock::AgentAlias.AgentAliasRoutingConfigurationListItem`.
 * Details about the routing configuration for an Agent alias.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html}
 */
export type AgentAliasRoutingConfigurationListItem = {
  /**
   * Agent Version.
   * @minLength `1`
   * @maxLength `5`
   * @pattern `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
   */
  AgentVersion: string;
};
/**
 * Type definition for `AWS::Bedrock::AgentAlias.AgentAliasStatus`.
 * The statuses an Agent Alias can be in.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-agentaliasstatus.html}
 */
export type AgentAliasStatus =
  | "CREATING"
  | "PREPARED"
  | "FAILED"
  | "UPDATING"
  | "DELETING";
/**
 * Type definition for `AWS::Bedrock::AgentAlias.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-agentalias-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Definition of AWS::Bedrock::AgentAlias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html}
 */
export class BedrockAgentAlias extends $Resource<
  "AWS::Bedrock::AgentAlias",
  BedrockAgentAliasProperties,
  BedrockAgentAliasAttributes
> {
  public static readonly Type = "AWS::Bedrock::AgentAlias";
  constructor(
    logicalId: string,
    properties: BedrockAgentAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentAlias.Type, properties, options);
  }
}
