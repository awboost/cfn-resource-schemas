import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::ProjectProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html}
 */
export type DataZoneProjectProfileProperties = {
  /**
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * @pattern `^dzd[_-][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitIdentifier?: string;
  EnvironmentConfigurations?: EnvironmentConfiguration[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  Status?: Status;
};
/**
 * Attribute type definition for `AWS::DataZone::ProjectProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#aws-resource-datazone-projectprofile-return-values}
 */
export type DataZoneProjectProfileAttributes = {
  CreatedAt: string;
  CreatedBy: string;
  /**
   * @pattern `^dzd[_-][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitId: string;
  EnvironmentConfigurations: {
    ConfigurationParameters: {
      ResolvedParameters: {
        IsEditable: boolean;
        /**
         * @pattern `^[a-zA-Z_][a-zA-Z0-9_]*$`
         */
        Name: string;
        Value: string;
      }[];
    };
    /**
     * @pattern `^[a-zA-Z0-9_-]{1,36}$`
     */
    Id: string;
  }[];
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Identifier: string;
  LastUpdatedAt: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.AwsAccount`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-awsaccount.html}
 */
export type AwsAccount = {
  /**
   * @pattern `^\d{12}$`
   */
  AwsAccountId: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.DeploymentMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-deploymentmode.html}
 */
export type DeploymentMode = "ON_CREATE" | "ON_DEMAND";
/**
 * Type definition for `AWS::DataZone::ProjectProfile.EnvironmentConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-environmentconfiguration.html}
 */
export type EnvironmentConfiguration = {
  AwsAccount?: AwsAccount;
  AwsRegion: Region;
  ConfigurationParameters?: EnvironmentConfigurationParametersDetails;
  DeploymentMode?: DeploymentMode;
  /**
   * @min `0`
   * @max `16`
   */
  DeploymentOrder?: number;
  /**
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintId: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.EnvironmentConfigurationParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-environmentconfigurationparameter.html}
 */
export type EnvironmentConfigurationParameter = {
  IsEditable?: boolean;
  /**
   * @pattern `^[a-zA-Z_][a-zA-Z0-9_]*$`
   */
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.EnvironmentConfigurationParametersDetails`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-environmentconfigurationparametersdetails.html}
 */
export type EnvironmentConfigurationParametersDetails = {
  ParameterOverrides?: EnvironmentConfigurationParameter[];
  /**
   * @minLength `1`
   * @maxLength `2048`
   */
  SsmPath?: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.Region`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-region.html}
 */
export type Region = {
  /**
   * @minLength `4`
   * @maxLength `16`
   * @pattern `^[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]$`
   */
  RegionName: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.Status`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-status.html}
 */
export type Status = "ENABLED" | "DISABLED";
/**
 * Definition of AWS::DataZone::ProjectProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html}
 */
export class DataZoneProjectProfile extends $Resource<
  "AWS::DataZone::ProjectProfile",
  DataZoneProjectProfileProperties,
  DataZoneProjectProfileAttributes
> {
  public static readonly Type = "AWS::DataZone::ProjectProfile";
  constructor(
    logicalId: string,
    properties: DataZoneProjectProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneProjectProfile.Type, properties, options);
  }
}
