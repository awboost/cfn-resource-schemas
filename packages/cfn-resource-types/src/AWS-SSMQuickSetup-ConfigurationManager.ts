import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SSMQuickSetup::ConfigurationManager Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html}
 */
export type SSMQuickSetupConfigurationManagerProperties = {
  ConfigurationDefinitions: ConfigurationDefinition[];
  /**
   * @pattern `^.{0,512}$`
   */
  Description?: string;
  /**
   * @pattern `^[ A-Za-z0-9_-]{1,50}$`
   */
  Name?: string;
  Tags?: TagsMap;
};
/**
 * Attribute type definition for `AWS::SSMQuickSetup::ConfigurationManager`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#aws-resource-ssmquicksetup-configurationmanager-return-values}
 */
export type SSMQuickSetupConfigurationManagerAttributes = {
  ConfigurationDefinitions: {
    id: string;
  }[];
  CreatedAt: string;
  LastModifiedAt: string;
  ManagerArn: string;
  StatusSummaries: {
    LastUpdatedAt: string;
    Status: Status;
    StatusDetails: Record<string, string>;
    StatusMessage: string;
    StatusType: StatusType;
  }[];
};
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.ConfigurationDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html}
 */
export type ConfigurationDefinition = {
  LocalDeploymentAdministrationRoleArn?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  LocalDeploymentExecutionRoleName?: string;
  Parameters: ConfigurationParametersMap;
  /**
   * @pattern `^[a-zA-Z0-9_\-.:/]{3,200}$`
   */
  Type: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  TypeVersion?: string;
};
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.ConfigurationParametersMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-configurationparametersmap.html}
 */
export type ConfigurationParametersMap = Record<string, string>;
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-status.html}
 */
export type Status =
  | "INITIALIZING"
  | "DEPLOYING"
  | "SUCCEEDED"
  | "DELETING"
  | "STOPPING"
  | "FAILED"
  | "STOPPED"
  | "DELETE_FAILED"
  | "STOP_FAILED"
  | "NONE";
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.StatusDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statusdetails.html}
 */
export type StatusDetails = Record<string, string>;
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.StatusSummary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statussummary.html}
 */
export type StatusSummary = {
  LastUpdatedAt: string;
  Status?: Status;
  StatusDetails?: StatusDetails;
  StatusMessage?: string;
  StatusType: StatusType;
};
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.StatusType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-statustype.html}
 */
export type StatusType = "Deployment" | "AsyncExecutions";
/**
 * Type definition for `AWS::SSMQuickSetup::ConfigurationManager.TagsMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmquicksetup-configurationmanager-tagsmap.html}
 */
export type TagsMap = Record<string, string>;
/**
 * Definition of AWS::SSMQuickSetup::ConfigurationManager Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html}
 */
export class SSMQuickSetupConfigurationManager extends $Resource<
  "AWS::SSMQuickSetup::ConfigurationManager",
  SSMQuickSetupConfigurationManagerProperties,
  SSMQuickSetupConfigurationManagerAttributes
> {
  public static readonly Type = "AWS::SSMQuickSetup::ConfigurationManager";
  constructor(
    logicalId: string,
    properties: SSMQuickSetupConfigurationManagerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMQuickSetupConfigurationManager.Type,
      properties,
      options,
    );
  }
}
