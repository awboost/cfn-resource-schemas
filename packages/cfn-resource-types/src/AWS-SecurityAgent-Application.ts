import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecurityAgent::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-application.html}
 */
export type SecurityAgentApplicationProperties = {
  /**
   * Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
   * @minLength `0`
   * @maxLength `2048`
   */
  DefaultKmsKeyId?: string;
  IdCConfiguration?: IdCConfiguration;
  RoleArn?: string;
  /**
   * Tags for the application
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SecurityAgent::Application`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-application.html#aws-resource-securityagent-application-return-values}
 */
export type SecurityAgentApplicationAttributes = {
  ApplicationId: string;
  ApplicationName: string;
  Domain: string;
  IdCConfiguration: {
    IdCApplicationArn: string;
  };
};
/**
 * Type definition for `AWS::SecurityAgent::Application.IdCConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-application-idcconfiguration.html}
 */
export type IdCConfiguration = {
  IdCInstanceArn?: string;
};
/**
 * Type definition for `AWS::SecurityAgent::Application.Tag`.
 * A key-value pair to associate with a resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-securityagent-application-tag.html}
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
 * Resource Type definition for AWS::SecurityAgent::Application
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityagent-application.html}
 */
export class SecurityAgentApplication extends $Resource<
  "AWS::SecurityAgent::Application",
  SecurityAgentApplicationProperties,
  SecurityAgentApplicationAttributes
> {
  public static readonly Type = "AWS::SecurityAgent::Application";
  constructor(
    logicalId: string,
    properties: SecurityAgentApplicationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecurityAgentApplication.Type, properties, options);
  }
}
