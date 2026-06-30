import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityAgent::SecurityRequirementPack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-securityrequirementpack.html}
 */
export type SecurityAgentSecurityRequirementPackProperties = {
  /**
   * Description of the pack
   * @maxLength `500`
   */
  Description?: string;
  /**
   * KMS key for client-side encryption of pack contents
   * @maxLength `2048`
   */
  KmsKeyId?: string;
  /**
   * Name of the security requirement pack
   * @minLength `1`
   * @maxLength `120`
   */
  Name: string;
  /**
   * Security requirements within this pack
   */
  SecurityRequirements?: SecurityRequirement[];
  /**
   * Whether the pack is enabled or disabled
   */
  Status?: "ENABLED" | "DISABLED";
  /**
   * Tags for the security requirement pack
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SecurityAgent::SecurityRequirementPack`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-securityrequirementpack.html#aws-resource-securityagent-securityrequirementpack-return-values}
 */
export type SecurityAgentSecurityRequirementPackAttributes = {
  /**
   * Unique identifier of the security requirement pack
   * @minLength `8`
   * @maxLength `64`
   * @pattern `^(srp)-(am|cm)-[a-zA-Z0-9\-]+$`
   */
  PackId: string;
};
/**
 * Type definition for `AWS::SecurityAgent::SecurityRequirementPack.SecurityRequirement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-securityrequirementpack-securityrequirement.html}
 */
export type SecurityRequirement = {
  /**
   * Description of the security requirement
   * @maxLength `500`
   */
  Description: string;
  /**
   * Security domain this requirement belongs to
   * @maxLength `10000`
   */
  Domain: string;
  /**
   * How to evaluate compliance with this requirement
   * @maxLength `10000`
   */
  Evaluation: string;
  /**
   * Name of the security requirement
   * @maxLength `80`
   */
  Name: string;
  /**
   * How to remediate non-compliance
   * @maxLength `10000`
   */
  Remediation?: string;
};
/**
 * Type definition for `AWS::SecurityAgent::SecurityRequirementPack.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-securityrequirementpack-tag.html}
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
 * Resource Type definition for AWS::SecurityAgent::SecurityRequirementPack
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-securityrequirementpack.html}
 */
export class SecurityAgentSecurityRequirementPack extends $Resource<
  "AWS::SecurityAgent::SecurityRequirementPack",
  SecurityAgentSecurityRequirementPackProperties,
  SecurityAgentSecurityRequirementPackAttributes
> {
  public static readonly Type = "AWS::SecurityAgent::SecurityRequirementPack";
  constructor(
    logicalId: string,
    properties: SecurityAgentSecurityRequirementPackProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecurityAgentSecurityRequirementPack.Type,
      properties,
      options,
    );
  }
}
