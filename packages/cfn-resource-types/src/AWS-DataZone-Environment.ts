import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::Environment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html}
 */
export type DataZoneEnvironmentProperties = {
  /**
   * The description of the Amazon DataZone environment.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The identifier of the Amazon DataZone domain in which the environment would be created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The ID of the environment profile with which the Amazon DataZone environment would be created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentProfileIdentifier: string;
  /**
   * The glossary terms that can be used in the Amazon DataZone environment.
   * @minLength `1`
   * @maxLength `20`
   */
  GlossaryTerms?: string[];
  /**
   * The name of the environment.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  /**
   * The ID of the Amazon DataZone project in which the environment would be created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectIdentifier: string;
  /**
   * The user parameters of the Amazon DataZone environment.
   */
  UserParameters?: EnvironmentParameter[];
};
/**
 * Attribute type definition for `AWS::DataZone::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html#aws-resource-datazone-environment-return-values}
 */
export type DataZoneEnvironmentAttributes = {
  /**
   * The AWS account in which the Amazon DataZone environment is created.
   * @pattern `^\d{12}$`
   */
  AwsAccountId: string;
  /**
   * The AWS region in which the Amazon DataZone environment is created.
   * @pattern `^[a-z]{2}-[a-z]{4,10}-\d$`
   */
  AwsAccountRegion: string;
  /**
   * The timestamp of when the environment was created.
   */
  CreatedAt: string;
  /**
   * The Amazon DataZone user who created the environment.
   */
  CreatedBy: string;
  /**
   * The identifier of the Amazon DataZone domain in which the environment is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the blueprint with which the Amazon DataZone environment was created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentBlueprintId: string;
  /**
   * The ID of the environment profile with which the Amazon DataZone environment was created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentProfileId: string;
  /**
   * The ID of the Amazon DataZone environment.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * The ID of the Amazon DataZone project in which the environment is created.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectId: string;
  /**
   * The provider of the Amazon DataZone environment.
   */
  Provider: string;
  /**
   * The status of the Amazon DataZone environment.
   */
  Status: EnvironmentStatus;
  /**
   * The timestamp of when the environment was updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::DataZone::Environment.EnvironmentParameter`.
 * The parameter details of an environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environment-environmentparameter.html}
 */
export type EnvironmentParameter = {
  /**
   * The name of an environment parameter.
   */
  Name?: string;
  /**
   * The value of an environment parameter.
   */
  Value?: string;
};
/**
 * Type definition for `AWS::DataZone::Environment.EnvironmentStatus`.
 * The status of the Amazon DataZone environment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-environment-environmentstatus.html}
 */
export type EnvironmentStatus =
  | "ACTIVE"
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "DELETE_FAILED"
  | "VALIDATION_FAILED"
  | "SUSPENDED"
  | "DISABLED"
  | "EXPIRED"
  | "DELETED"
  | "INACCESSIBLE";
/**
 * Definition of AWS::DataZone::Environment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environment.html}
 */
export class DataZoneEnvironment extends $Resource<
  "AWS::DataZone::Environment",
  DataZoneEnvironmentProperties,
  DataZoneEnvironmentAttributes
> {
  public static readonly Type = "AWS::DataZone::Environment";
  constructor(
    logicalId: string,
    properties: DataZoneEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneEnvironment.Type, properties, options);
  }
}
