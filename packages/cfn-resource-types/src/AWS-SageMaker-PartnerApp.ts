import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SageMaker::PartnerApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html}
 */
export type SageMakerPartnerAppProperties = {
  /**
   * A collection of settings that specify the maintenance schedule for the PartnerApp.
   */
  ApplicationConfig?: PartnerAppConfig;
  /**
   * The Auth type of PartnerApp.
   */
  AuthType: "IAM";
  /**
   * The client token for the PartnerApp.
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  ClientToken?: string;
  /**
   * Enables IAM Session based Identity for PartnerApp.
   */
  EnableIamSessionBasedIdentity?: boolean;
  /**
   * The execution role for the user.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  ExecutionRoleArn: string;
  /**
   * A collection of settings that specify the maintenance schedule for the PartnerApp.
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig;
  /**
   * A name for the PartnerApp.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9]+`
   */
  Name: string;
  /**
   * A list of tags to apply to the PartnerApp.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The tier of the PartnerApp.
   * @minLength `1`
   * @maxLength `64`
   */
  Tier: string;
  /**
   * The type of PartnerApp.
   */
  Type: "lakera-guard" | "comet" | "deepchecks-llm-evaluation" | "fiddler";
};
/**
 * Attribute type definition for `AWS::SageMaker::PartnerApp`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html#aws-resource-sagemaker-partnerapp-return-values}
 */
export type SageMakerPartnerAppAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the created PartnerApp.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:partner-app/app-[A-Z0-9]{12}$`
   */
  Arn: string;
  /**
   * The AppServerUrl based on app and account-info.
   * @maxLength `2048`
   */
  BaseUrl: string;
};
/**
 * Type definition for `AWS::SageMaker::PartnerApp.PartnerAppConfig`.
 * A collection of configuration settings for the PartnerApp.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappconfig.html}
 */
export type PartnerAppConfig = {
  /**
   * A list of users with administrator privileges for the PartnerApp.
   * @minLength `0`
   * @maxLength `5`
   */
  AdminUsers?: string[];
  /**
   * A list of arguments to pass to the PartnerApp.
   */
  Arguments?: Record<string, string>;
};
/**
 * Type definition for `AWS::SageMaker::PartnerApp.PartnerAppMaintenanceConfig`.
 * A collection of settings that specify the maintenance schedule for the PartnerApp.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-partnerappmaintenanceconfig.html}
 */
export type PartnerAppMaintenanceConfig = {
  /**
   * The maintenance window start day and time for the PartnerApp.
   * @maxLength `9`
   * @pattern `(Mon|Tue|Wed|Thu|Fri|Sat|Sun):([01]\d|2[0-3]):([0-5]\d)`
   */
  MaintenanceWindowStart: string;
};
/**
 * Type definition for `AWS::SageMaker::PartnerApp.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-partnerapp-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SageMaker::PartnerApp
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-partnerapp.html}
 */
export class SageMakerPartnerApp extends $Resource<
  "AWS::SageMaker::PartnerApp",
  SageMakerPartnerAppProperties,
  SageMakerPartnerAppAttributes
> {
  public static readonly Type = "AWS::SageMaker::PartnerApp";
  constructor(
    logicalId: string,
    properties: SageMakerPartnerAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SageMakerPartnerApp.Type, properties, options);
  }
}
