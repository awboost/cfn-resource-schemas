import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::DevOpsAgent::Association defining how the AgentSpace interacts with external services like GitHub, Slack, AWS accounts, and others.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-association.html}
 */
export type DevOpsAgentAssociationProperties = {
  /**
   * The unique identifier of the AgentSpace
   * @minLength `1`
   * @maxLength `255`
   */
  AgentSpaceId: string;
  /**
   * The configuration that directs how AgentSpace interacts with the given service
   */
  Configuration: ServiceConfiguration;
  /**
   * The identifier for the associated service
   * @minLength `1`
   * @maxLength `255`
   */
  ServiceId: string;
};
/**
 * Attribute type definition for `AWS::DevOpsAgent::Association`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-association.html#aws-resource-devopsagent-association-return-values}
 */
export type DevOpsAgentAssociationAttributes = {
  /**
   * The unique identifier of the association
   * @minLength `1`
   * @maxLength `255`
   */
  AssociationId: string;
  /**
   * The timestamp when the association was created
   */
  CreatedAt: string;
  /**
   * The timestamp when the association was last updated
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.AWSConfiguration`.
 * AWS association for 'monitor' account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-awsconfiguration.html}
 */
export type AWSConfiguration = {
  /**
   * AWS Account Id corresponding to provided resources
   * @pattern `\d{12}`
   */
  AccountId: string;
  /**
   * Account Type 'monitor' for DevOpsAgent monitoring
   */
  AccountType: "monitor";
  /**
   * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
   */
  AssumableRoleArn: string;
  /**
   * List of AWS resources
   */
  Resources?: AWSResource[];
  /**
   * List of AWS tags as key-value pairs
   */
  Tags?: KeyValuePair[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.AWSResource`.
 * AWS resource definition
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-awsresource.html}
 */
export type AWSResource = {
  /**
   * The Amazon Resource Name (ARN) of the resource
   */
  ResourceArn: string;
  /**
   * Additional metadata for the resource
   */
  ResourceMetadata?: Record<string, any>;
  /**
   * Resource type
   */
  ResourceType?:
    | "AWS::CloudFormation::Stack"
    | "AWS::ECR::Repository"
    | "AWS::S3::Bucket"
    | "AWS::S3::Object";
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.DynatraceConfiguration`.
 * Dynatrace monitoring configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-dynatraceconfiguration.html}
 */
export type DynatraceConfiguration = {
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * Dynatrace environment id
   */
  EnvId: string;
  /**
   * List of Dynatrace resources to monitor
   */
  Resources?: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.EventChannelConfiguration`.
 * EventChannelconfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-eventchannelconfiguration.html}
 */
export type EventChannelConfiguration = {
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.GitHubConfiguration`.
 * GitHub repository integration configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-githubconfiguration.html}
 */
export type GitHubConfiguration = {
  /**
   * Repository owner
   */
  Owner: string;
  /**
   * Type of repository owner
   */
  OwnerType: "organization" | "user";
  /**
   * Associated Github repo ID
   */
  RepoId: string;
  /**
   * Associated Github repo name
   */
  RepoName: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.GitLabConfiguration`.
 * GitLab project integration configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-gitlabconfiguration.html}
 */
export type GitLabConfiguration = {
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * GitLab instance identifier
   */
  InstanceIdentifier?: string;
  /**
   * GitLab numeric project ID
   */
  ProjectId: string;
  /**
   * Full GitLab project path (e.g., namespace/project-name)
   */
  ProjectPath: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.KeyValuePair`.
 * A key-value pair for tags
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-keyvaluepair.html}
 */
export type KeyValuePair = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.MCPServerConfiguration`.
 * MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-mcpserverconfiguration.html}
 */
export type MCPServerConfiguration = {
  /**
   * The description of the MCP server
   */
  Description?: string;
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * The name of the MCP server
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
  /**
   * List of MCP tools that can be used with the association
   */
  Tools: string[];
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.MCPServerDatadogConfiguration`.
 * Datadog MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-mcpserverdatadogconfiguration.html}
 */
export type MCPServerDatadogConfiguration = {
  /**
   * The description of the MCP server
   */
  Description?: string;
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * The name of the MCP server
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.MCPServerNewRelicConfiguration`.
 * NewRelic MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-mcpservernewrelicconfiguration.html}
 */
export type MCPServerNewRelicConfiguration = {
  /**
   * New Relic Account ID
   * @minLength `6`
   * @pattern `^[0-9]+$`
   */
  AccountId: string;
  /**
   * MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/)
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.MCPServerSplunkConfiguration`.
 * Splunk MCP server configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-mcpserversplunkconfiguration.html}
 */
export type MCPServerSplunkConfiguration = {
  /**
   * The description of the MCP server
   */
  Description?: string;
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * MCP server endpoint URL
   * @pattern `^https://[a-zA-Z0-9.-]+(?::[0-9]+)?(?:/.*)?$`
   */
  Endpoint: string;
  /**
   * The name of the MCP server
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.ServiceConfiguration`.
 * The configuration that directs how AgentSpace interacts with the given service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-serviceconfiguration.html}
 */
export type ServiceConfiguration =
  | {
      /**
       * AWS association for 'source' account
       */
      SourceAws: SourceAwsConfiguration;
    }
  | {
      /**
       * AWS association for 'monitor' account
       */
      Aws: AWSConfiguration;
    }
  | {
      /**
       * GitHub repository integration configuration
       */
      GitHub: GitHubConfiguration;
    }
  | {
      /**
       * Slack workspace integration configuration
       */
      Slack: SlackConfiguration;
    }
  | {
      /**
       * Dynatrace monitoring configuration
       */
      Dynatrace: DynatraceConfiguration;
    }
  | {
      /**
       * ServiceNow integration configuration
       */
      ServiceNow: ServiceNowConfiguration;
    }
  | {
      /**
       * MCP server configuration
       */
      MCPServer: MCPServerConfiguration;
    }
  | {
      /**
       * GitLab project integration configuration
       */
      GitLab: GitLabConfiguration;
    }
  | {
      /**
       * Datadog MCP server configuration
       */
      MCPServerDatadog: MCPServerDatadogConfiguration;
    }
  | {
      /**
       * Splunk MCP server configuration
       */
      MCPServerSplunk: MCPServerSplunkConfiguration;
    }
  | {
      /**
       * NewRelic MCP server configuration
       */
      MCPServerNewRelic: MCPServerNewRelicConfiguration;
    }
  | {
      /**
       * EventChannelconfiguration
       */
      EventChannel: EventChannelConfiguration;
    };
/**
 * Type definition for `AWS::DevOpsAgent::Association.ServiceNowConfiguration`.
 * ServiceNow integration configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-servicenowconfiguration.html}
 */
export type ServiceNowConfiguration = {
  /**
   * When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service
   */
  EnableWebhookUpdates?: boolean;
  /**
   * ServiceNow instance ID
   */
  InstanceId?: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.SlackChannel`.
 * Slack channel configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-slackchannel.html}
 */
export type SlackChannel = {
  /**
   * Slack channel ID
   * @minLength `8`
   * @maxLength `16`
   * @pattern `^[CGD][A-Z0-9]+$`
   */
  ChannelId: string;
  /**
   * Slack channel name
   */
  ChannelName?: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.SlackConfiguration`.
 * Slack workspace integration configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-slackconfiguration.html}
 */
export type SlackConfiguration = {
  /**
   * Transmission targets for agent notifications
   */
  TransmissionTarget: SlackTransmissionTarget;
  /**
   * Associated Slack workspace ID
   * @pattern `^[TE][A-Z0-9]+$`
   */
  WorkspaceId: string;
  /**
   * Associated Slack workspace name
   */
  WorkspaceName: string;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.SlackTransmissionTarget`.
 * Transmission targets for agent notifications
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-slacktransmissiontarget.html}
 */
export type SlackTransmissionTarget = {
  /**
   * Destination for IncidentResponse agent.
   */
  IncidentResponseTarget: SlackChannel;
};
/**
 * Type definition for `AWS::DevOpsAgent::Association.SourceAwsConfiguration`.
 * AWS association for 'source' account
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsagent-association-sourceawsconfiguration.html}
 */
export type SourceAwsConfiguration = {
  /**
   * AWS Account Id corresponding to provided resources
   * @pattern `\d{12}`
   */
  AccountId: string;
  /**
   * Account Type 'source' for DevOpsAgent monitoring
   */
  AccountType: "source";
  /**
   * Role ARN to be assumed by DevOpsAgent to operate on behalf of customer
   */
  AssumableRoleArn: string;
  /**
   * List of AWS resources
   */
  Resources?: AWSResource[];
  /**
   * List of AWS tags as key-value pairs
   */
  Tags?: KeyValuePair[];
};
/**
 * Resource Type definition for AWS::DevOpsAgent::Association defining how the AgentSpace interacts with external services like GitHub, Slack, AWS accounts, and others.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsagent-association.html}
 */
export class DevOpsAgentAssociation extends $Resource<
  "AWS::DevOpsAgent::Association",
  DevOpsAgentAssociationProperties,
  DevOpsAgentAssociationAttributes
> {
  public static readonly Type = "AWS::DevOpsAgent::Association";
  constructor(
    logicalId: string,
    properties: DevOpsAgentAssociationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DevOpsAgentAssociation.Type, properties, options);
  }
}
