import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::EnvironmentProfile`.
 * AWS Datazone Environment Profile is pre-configured set of resources and blueprints that provide reusable templates for creating environments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html}
 */
export type DataZoneEnvironmentProfileProperties = {
  /**
   * The AWS account in which the Amazon DataZone environment is created.
   * @pattern `^\d{12}$`
   */
  AwsAccountId: string;
  /**
   * The AWS region in which this environment profile is created.
   * @pattern `^[a-z]{2}-[a-z]{4,10}-\d$`
   */
  AwsAccountRegion: string;
  /**
   * The description of this Amazon DataZone environment profile.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The ID of the Amazon DataZone domain in which this environment profile is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The ID of the blueprint with which this environment profile is created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintIdentifier: string;
  /**
   * The name of this Amazon DataZone environment profile.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  /**
   * The identifier of the project in which to create the environment profile.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectIdentifier: string;
  /**
   * The user parameters of this Amazon DataZone environment profile.
   */
  UserParameters?: EnvironmentParameter[];
};
/**
 * Attribute type definition for `AWS::DataZone::EnvironmentProfile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html#aws-resource-datazone-environmentprofile-return-values}
 */
export type DataZoneEnvironmentProfileAttributes = {
  /**
   * The timestamp of when this environment profile was created.
   */
  CreatedAt: string;
  /**
   * The Amazon DataZone user who created this environment profile.
   */
  CreatedBy: string;
  /**
   * The ID of the Amazon DataZone domain in which this environment profile is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the blueprint with which this environment profile is created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintId: string;
  /**
   * The ID of this Amazon DataZone environment profile.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * The identifier of the project in which to create the environment profile.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectId: string;
  /**
   * The timestamp of when this environment profile was updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DataZone::EnvironmentProfile.EnvironmentParameter`.
 * The parameter details of an environment profile.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environmentprofile-environmentparameter.html}
 */
export type EnvironmentParameter = {
  /**
   * The name of an environment profile parameter.
   */
  Name?: string;
  /**
   * The value of an environment profile parameter.
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::DataZone::EnvironmentProfile`.
 * AWS Datazone Environment Profile is pre-configured set of resources and blueprints that provide reusable templates for creating environments.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentprofile.html}
 */
export class DataZoneEnvironmentProfile extends $Resource<
  "AWS::DataZone::EnvironmentProfile",
  DataZoneEnvironmentProfileProperties,
  DataZoneEnvironmentProfileAttributes
> {
  public static readonly Type = "AWS::DataZone::EnvironmentProfile";
  constructor(
    logicalId: string,
    properties: DataZoneEnvironmentProfileProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneEnvironmentProfile.Type, properties, options);
  }
}
