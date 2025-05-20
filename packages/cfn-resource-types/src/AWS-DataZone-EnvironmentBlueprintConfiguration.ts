import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::EnvironmentBlueprintConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html}
 */
export type DataZoneEnvironmentBlueprintConfigurationProperties = {
  /**
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * @minLength `0`
   */
  EnabledRegions: string[];
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintIdentifier: string;
  /**
   * @pattern `^arn:aws[^:]*:iam::(aws|\d{12}):policy/[\w+=,.@-]*$`
   */
  EnvironmentRolePermissionBoundary?: string;
  /**
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  ManageAccessRoleArn?: string;
  ProvisioningConfigurations?: ProvisioningConfiguration[];
  /**
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  ProvisioningRoleArn?: string;
  RegionalParameters?: RegionalParameter[];
};
/**
 * Attribute type definition for `AWS::DataZone::EnvironmentBlueprintConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#aws-resource-datazone-environmentblueprintconfiguration-return-values}
 */
export type DataZoneEnvironmentBlueprintConfigurationAttributes = {
  CreatedAt: string;
  /**
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintId: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DataZone::EnvironmentBlueprintConfiguration.LakeFormationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-lakeformationconfiguration.html}
 */
export type LakeFormationConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `20`
   */
  LocationRegistrationExcludeS3Locations?: string[];
  /**
   * @pattern `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
   */
  LocationRegistrationRole?: string;
};
/**
 * Type definition for `AWS::DataZone::EnvironmentBlueprintConfiguration.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-parameter.html}
 */
export type Parameter = Record<string, string>;
/**
 * Type definition for `AWS::DataZone::EnvironmentBlueprintConfiguration.ProvisioningConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-provisioningconfiguration.html}
 */
export type ProvisioningConfiguration = {
  LakeFormationConfiguration: LakeFormationConfiguration;
};
/**
 * Type definition for `AWS::DataZone::EnvironmentBlueprintConfiguration.RegionalParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html}
 */
export type RegionalParameter = {
  Parameters?: Parameter;
  /**
   * @pattern `^[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]$`
   */
  Region?: string;
};
/**
 * Definition of AWS::DataZone::EnvironmentBlueprintConfiguration Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html}
 */
export class DataZoneEnvironmentBlueprintConfiguration extends $Resource<
  "AWS::DataZone::EnvironmentBlueprintConfiguration",
  DataZoneEnvironmentBlueprintConfigurationProperties,
  DataZoneEnvironmentBlueprintConfigurationAttributes
> {
  public static readonly Type =
    "AWS::DataZone::EnvironmentBlueprintConfiguration";
  constructor(
    logicalId: string,
    properties: DataZoneEnvironmentBlueprintConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      DataZoneEnvironmentBlueprintConfiguration.Type,
      properties,
      options,
    );
  }
}
