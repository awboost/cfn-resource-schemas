import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityAgent::AgentSpace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-agentspace.html}
 */
export type SecurityAgentAgentSpaceProperties = {
  /**
   * AWS resource configuration
   */
  AwsResources?: AWSResources;
  /**
   * Details of code review settings
   */
  CodeReviewSettings?: CodeReviewSettings;
  /**
   * Description of the agent space
   */
  Description?: string;
  /**
   * Integrated Resources configuration
   */
  IntegratedResources?: IntegratedResource[];
  /**
   * Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
   * @minLength `1`
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * Name of the agent space
   */
  Name: string;
  /**
   * Tags for the agent space
   */
  Tags?: Tag[];
  /**
   * List of target domain identifiers registered with the agent space
   */
  TargetDomainIds?: string[];
};
/**
 * Attribute type definition for `AWS::SecurityAgent::AgentSpace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-agentspace.html#aws-resource-securityagent-agentspace-return-values}
 */
export type SecurityAgentAgentSpaceAttributes = {
  /**
   * Unique identifier of the agent space
   */
  AgentSpaceId: string;
  /**
   * Timestamp when the agent space was created
   */
  CreatedAt: string;
  /**
   * Timestamp when the agent space was last updated
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.AWSResources`.
 * AWS resource configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-awsresources.html}
 */
export type AWSResources = {
  /**
   * IAM role ARNs
   */
  IamRoles?: string[];
  /**
   * Lambda function ARNs used to retrieve tester credentials for pentests
   */
  LambdaFunctionArns?: string[];
  /**
   * CloudWatch log group ARNs
   */
  LogGroups?: string[];
  /**
   * S3 bucket ARNs
   */
  S3Buckets?: string[];
  /**
   * SecretsManager secret ARNs used to store tester credentials for pentests
   */
  SecretArns?: string[];
  /**
   * VPC configurations
   */
  Vpcs?: VpcConfig[];
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.CodeReviewSettings`.
 * Details of code review settings
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-codereviewsettings.html}
 */
export type CodeReviewSettings = {
  /**
   * Whether Controls are utilized for code review analysis
   */
  ControlsScanning: boolean;
  /**
   * Whether general purpose analysis is performed for code review
   */
  GeneralPurposeScanning: boolean;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.GitHubCapabilitiesResource`.
 * GitHub repository capabilities
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-githubcapabilitiesresource.html}
 */
export type GitHubCapabilitiesResource = {
  /**
   * Enables Code Review in the repository
   */
  LeaveComments: boolean;
  /**
   * Enables creation of pull requests with automated fixes
   */
  RemediateCode: boolean;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.GitHubRepositoryResource`.
 * GitHub repository details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-githubrepositoryresource.html}
 */
export type GitHubRepositoryResource = {
  /**
   * GitHub repository name
   */
  Name: string;
  /**
   * GitHub repository owner (user or organization)
   */
  Owner: string;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.IntegratedResource`.
 * Integrated Resource details
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-integratedresource.html}
 */
export type IntegratedResource = {
  /**
   * Unique identifier of the Provider Integration
   */
  Integration: string;
  /**
   * List of selected Resources from the Integration
   */
  ProviderResources: ProviderResource[];
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.ProviderResource`.
 * Selected Resource (eg: Code Repository) from an Integration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-providerresource.html}
 */
export type ProviderResource = {
  /**
   * GitHub repository capabilities
   */
  GitHubCapabilities?: GitHubCapabilitiesResource;
  /**
   * GitHub repository details
   */
  GitHubRepository?: GitHubRepositoryResource;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SecurityAgent::AgentSpace.VpcConfig`.
 * Customer VPC configuration that the security testing environment accesses
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-agentspace-vpcconfig.html}
 */
export type VpcConfig = {
  /**
   * List of security group ARNs in the customer VPC
   */
  SecurityGroupArns?: string[];
  /**
   * List of subnet ARNs in the customer VPC
   */
  SubnetArns?: string[];
  /**
   * ARN of the customer VPC
   */
  VpcArn?: string;
};
/**
 * Resource Type definition for AWS::SecurityAgent::AgentSpace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-agentspace.html}
 */
export class SecurityAgentAgentSpace extends $Resource<
  "AWS::SecurityAgent::AgentSpace",
  SecurityAgentAgentSpaceProperties,
  SecurityAgentAgentSpaceAttributes
> {
  public static readonly Type = "AWS::SecurityAgent::AgentSpace";
  constructor(
    logicalId: string,
    properties: SecurityAgentAgentSpaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityAgentAgentSpace.Type, properties, options);
  }
}
