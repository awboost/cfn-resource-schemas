import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::BedrockAgentCore::WorkloadIdentity Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-workloadidentity.html}
 */
export type BedrockAgentCoreWorkloadIdentityProperties = {
  /**
   * The list of allowed OAuth2 return URLs for resources associated with this workload identity.
   */
  AllowedResourceOauth2ReturnUrls?: string[];
  /**
   * The name of the workload identity. The name must be unique within your account.
   * @minLength `3`
   * @maxLength `255`
   * @pattern `[A-Za-z0-9_.-]+`
   */
  Name: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::WorkloadIdentity`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-workloadidentity.html#aws-resource-bedrockagentcore-workloadidentity-return-values}
 */
export type BedrockAgentCoreWorkloadIdentityAttributes = {
  /**
   * The timestamp when the workload identity was created.
   */
  CreatedTime: number;
  /**
   * The timestamp when the workload identity was last updated.
   */
  LastUpdatedTime: number;
  /**
   * The Amazon Resource Name (ARN) of the workload identity.
   * @minLength `1`
   * @maxLength `1024`
   */
  WorkloadIdentityArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::WorkloadIdentity.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-workloadidentity-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::BedrockAgentCore::WorkloadIdentity Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-workloadidentity.html}
 */
export class BedrockAgentCoreWorkloadIdentity extends $Resource<
  "AWS::BedrockAgentCore::WorkloadIdentity",
  BedrockAgentCoreWorkloadIdentityProperties,
  BedrockAgentCoreWorkloadIdentityAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::WorkloadIdentity";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreWorkloadIdentityProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BedrockAgentCoreWorkloadIdentity.Type,
      properties,
      options,
    );
  }
}
