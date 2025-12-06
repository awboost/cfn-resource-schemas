import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::IdentityCenterConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-identitycenterconfiguration.html}
 */
export type GlueIdentityCenterConfigurationProperties = {
  /**
   * The IAM identity center instance arn
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
   */
  InstanceArn: string;
  /**
   * The downstream scopes that Glue identity center configuration can access
   */
  Scopes?: string[];
  /**
   * Enable or disable user background sessions for Glue Identity Center
   */
  UserBackgroundSessionsEnabled?: boolean;
};
/**
 * Attribute type definition for `AWS::Glue::IdentityCenterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-identitycenterconfiguration.html#aws-resource-glue-identitycenterconfiguration-return-values}
 */
export type GlueIdentityCenterConfigurationAttributes = {
  /**
   * The identifier for the specified AWS account.
   */
  AccountId: string;
  /**
   * The Glue IAM identity center application arn
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
   */
  ApplicationArn: string;
};
/**
 * Resource Type definition for AWS::Glue::IdentityCenterConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-identitycenterconfiguration.html}
 */
export class GlueIdentityCenterConfiguration extends $Resource<
  "AWS::Glue::IdentityCenterConfiguration",
  GlueIdentityCenterConfigurationProperties,
  GlueIdentityCenterConfigurationAttributes
> {
  public static readonly Type = "AWS::Glue::IdentityCenterConfiguration";
  constructor(
    logicalId: string,
    properties: GlueIdentityCenterConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueIdentityCenterConfiguration.Type, properties, options);
  }
}
