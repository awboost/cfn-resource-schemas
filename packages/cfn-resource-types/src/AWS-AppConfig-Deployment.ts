import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::AppConfig::Deployment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html}
 */
export type AppConfigDeploymentProperties = {
  /**
   * The application ID.
   */
  ApplicationId: string;
  /**
   * The configuration profile ID.
   */
  ConfigurationProfileId: string;
  /**
   * The configuration version to deploy. If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.
   */
  ConfigurationVersion: string;
  /**
   * The deployment strategy ID.
   */
  DeploymentStrategyId: string;
  /**
   * A description of the deployment.
   */
  Description?: string;
  DynamicExtensionParameters?: DynamicExtensionParameters[];
  /**
   * The environment ID.
   */
  EnvironmentId: string;
  /**
   * The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
   * @pattern `^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}|alias/[a-zA-Z0-9/_-]{1,250}|arn:aws[a-zA-Z-]*:kms:((eusc-)?[a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(key/[0-9a-f-]{36}|alias/[a-zA-Z0-9/_-]{1,250})$`
   */
  KmsKeyIdentifier?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppConfig::Deployment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#aws-resource-appconfig-deployment-return-values}
 */
export type AppConfigDeploymentAttributes = {
  /**
   * The sequence number of the deployment.
   */
  DeploymentNumber: string;
  /**
   * The state of the deployment.
   */
  State:
    | "BAKING"
    | "VALIDATING"
    | "DEPLOYING"
    | "COMPLETE"
    | "ROLLING_BACK"
    | "ROLLED_BACK"
    | "REVERTED";
};
/**
 * Type definition for `AWS::AppConfig::Deployment.DynamicExtensionParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-dynamicextensionparameters.html}
 */
export type DynamicExtensionParameters = {
  ExtensionReference?: string;
  ParameterName?: string;
  ParameterValue?: string;
};
/**
 * Type definition for `AWS::AppConfig::Deployment.Tag`.
 * Metadata to assign to the deployment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-deployment-tag.html}
 */
export type Tag = {
  /**
   * The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
   */
  Key?: string;
  /**
   * The tag value can be up to 256 characters.
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::AppConfig::Deployment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html}
 */
export class AppConfigDeployment extends $Resource<
  "AWS::AppConfig::Deployment",
  AppConfigDeploymentProperties,
  AppConfigDeploymentAttributes
> {
  public static readonly Type = "AWS::AppConfig::Deployment";
  constructor(
    logicalId: string,
    properties: AppConfigDeploymentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppConfigDeployment.Type, properties, options);
  }
}
