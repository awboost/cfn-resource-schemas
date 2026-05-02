import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource definition for AWS::BedrockAgentCore::BrowserCustom
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browsercustom.html}
 */
export type BedrockAgentCoreBrowserCustomProperties = {
  /**
   * Browser signing configuration.
   */
  BrowserSigning?: BrowserSigning;
  /**
   * List of root CA certificates in PEM format.
   * @minLength `0`
   * @maxLength `10`
   */
  Certificates?: Certificate[];
  /**
   * The description of the browser.
   */
  Description?: string;
  /**
   * A list of enterprise policy files for the browser.
   * @minLength `0`
   * @maxLength `10`
   */
  EnterprisePolicies?: BrowserEnterprisePolicy[];
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.
   * @pattern `^arn:(aws(?:-cn|-us-gov|-iso(?:-[bef])?)?):iam::[0-9]{12}:role/.+$`
   */
  ExecutionRoleArn?: string;
  /**
   * The name of the browser.
   */
  Name: string;
  /**
   * Network configuration for browser.
   */
  NetworkConfiguration: BrowserNetworkConfiguration;
  /**
   * Recording configuration for browser.
   */
  RecordingConfig?: RecordingConfig;
  /**
   * A map of tag keys and values
   */
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::BedrockAgentCore::BrowserCustom`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browsercustom.html#aws-resource-bedrockagentcore-browsercustom-return-values}
 */
export type BedrockAgentCoreBrowserCustomAttributes = {
  /**
   * The ARN of a Browser resource.
   * @pattern `^arn:(aws(?:-cn|-us-gov|-iso(?:-[bef])?)?):bedrock-agentcore:[a-z0-9-]+:(aws|[0-9]{12}):browser(-custom)?\/(aws\.browser\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  BrowserArn: string;
  /**
   * The id of the browser.
   * @pattern `^(aws\.browser\.v1|[a-zA-Z][a-zA-Z0-9_]{0,47}-[a-zA-Z0-9]{10})$`
   */
  BrowserId: string;
  /**
   * Timestamp when the browser was created.
   */
  CreatedAt: string;
  /**
   * The reason for failure if the browser creation or operation failed.
   */
  FailureReason: string;
  /**
   * Timestamp when the browser was last updated.
   */
  LastUpdatedAt: string;
  /**
   * Status of browser.
   */
  Status: BrowserStatus;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserEnterprisePolicy`.
 * Browser enterprise policy configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browserenterprisepolicy.html}
 */
export type BrowserEnterprisePolicy = {
  /**
   * The S3 location of the enterprise policy file.
   */
  Location: S3Location;
  /**
   * The type of browser enterprise policy.
   */
  Type: BrowserEnterprisePolicyType;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserEnterprisePolicyType`.
 * The type of browser enterprise policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browserenterprisepolicytype.html}
 */
export type BrowserEnterprisePolicyType = "MANAGED" | "RECOMMENDED";
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserNetworkConfiguration`.
 * Network configuration for browser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browsernetworkconfiguration.html}
 */
export type BrowserNetworkConfiguration = {
  /**
   * Network modes supported by browser
   */
  NetworkMode: BrowserNetworkMode;
  /**
   * Network mode configuration for VPC
   */
  VpcConfig?: VpcConfig;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserNetworkMode`.
 * Network modes supported by browser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browsernetworkmode.html}
 */
export type BrowserNetworkMode = "PUBLIC" | "VPC";
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserSigning`.
 * Browser signing configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browsersigning.html}
 */
export type BrowserSigning = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.BrowserStatus`.
 * Status of browser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-browserstatus.html}
 */
export type BrowserStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "READY"
  | "DELETING"
  | "DELETE_FAILED"
  | "DELETED";
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.Certificate`.
 * A root CA certificate configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-certificate.html}
 */
export type Certificate = {
  /**
   * Certificate location in Secrets Manager.
   */
  CertificateLocation: CertificateLocation;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.CertificateLocation`.
 * Certificate location in Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-certificatelocation.html}
 */
export type CertificateLocation = {
  /**
   * Secrets Manager secret ARN.
   * @pattern `^arn:(aws(?:-cn|-us-gov|-iso(?:-[bef])?)?):secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=.@-]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.RecordingConfig`.
 * Recording configuration for browser
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-recordingconfig.html}
 */
export type RecordingConfig = {
  Enabled?: boolean;
  /**
   * S3 Location Configuration
   */
  S3Location?: S3Location;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.S3Location`.
 * S3 Location Configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-s3location.html}
 */
export type S3Location = {
  /**
   * @pattern `^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$`
   */
  Bucket: string;
  /**
   * @minLength `1`
   */
  Prefix: string;
};
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.TagsMap`.
 * A map of tag keys and values
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Type definition for `AWS::BedrockAgentCore::BrowserCustom.VpcConfig`.
 * Network mode configuration for VPC
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrockagentcore-browsercustom-vpcconfig.html}
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
 * Resource definition for AWS::BedrockAgentCore::BrowserCustom
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrockagentcore-browsercustom.html}
 */
export class BedrockAgentCoreBrowserCustom extends $Resource<
  "AWS::BedrockAgentCore::BrowserCustom",
  BedrockAgentCoreBrowserCustomProperties,
  BedrockAgentCoreBrowserCustomAttributes
> {
  public static readonly Type = "AWS::BedrockAgentCore::BrowserCustom";
  constructor(
    logicalId: string,
    properties: BedrockAgentCoreBrowserCustomProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockAgentCoreBrowserCustom.Type, properties, options);
  }
}
