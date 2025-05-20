import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::Project`.
 * Amazon DataZone projects are business use case–based groupings of people, assets (data), and tools used to simplify access to the AWS analytics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html}
 */
export type DataZoneProjectProperties = {
  /**
   * The description of the Amazon DataZone project.
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * The ID of the Amazon DataZone domain in which this project is created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  /**
   * The ID of the domain unit.
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitId?: string;
  /**
   * The glossary terms that can be used in this Amazon DataZone project.
   * @minLength `1`
   * @maxLength `20`
   */
  GlossaryTerms?: string[];
  /**
   * The name of the Amazon DataZone project.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  /**
   * The project profile ID.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectProfileId?: string;
  /**
   * The project profile version to which the project should be updated. You can only specify the following string for this parameter: latest.
   */
  ProjectProfileVersion?: string;
  /**
   * The user parameters of the project.
   */
  UserParameters?: EnvironmentConfigurationUserParameter[];
};
/**
 * Attribute type definition for `AWS::DataZone::Project`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html#aws-resource-datazone-project-return-values}
 */
export type DataZoneProjectAttributes = {
  /**
   * The timestamp of when the project was created.
   */
  CreatedAt: string;
  /**
   * The Amazon DataZone user who created the project.
   */
  CreatedBy: string;
  /**
   * The identifier of the Amazon DataZone domain in which the project was created.
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * The ID of the Amazon DataZone project.
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  Id: string;
  /**
   * The timestamp of when the project was last updated.
   */
  LastUpdatedAt: string;
  /**
   * The status of the project.
   */
  ProjectStatus: ProjectStatus;
};
/**
 * Type definition for `AWS::DataZone::Project.EnvironmentConfigurationUserParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-project-environmentconfigurationuserparameter.html}
 */
export type EnvironmentConfigurationUserParameter = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  EnvironmentConfigurationName?: string;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  EnvironmentId?: string;
  EnvironmentParameters?: EnvironmentParameter[];
};
/**
 * Type definition for `AWS::DataZone::Project.EnvironmentParameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-project-environmentparameter.html}
 */
export type EnvironmentParameter = {
  Name?: string;
  Value?: string;
};
/**
 * Type definition for `AWS::DataZone::Project.ProjectStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-project-projectstatus.html}
 */
export type ProjectStatus =
  | "ACTIVE"
  | "MOVING"
  | "DELETING"
  | "DELETE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED";
/**
 * Resource type definition for `AWS::DataZone::Project`.
 * Amazon DataZone projects are business use case–based groupings of people, assets (data), and tools used to simplify access to the AWS analytics.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-project.html}
 */
export class DataZoneProject extends $Resource<
  "AWS::DataZone::Project",
  DataZoneProjectProperties,
  DataZoneProjectAttributes
> {
  public static readonly Type = "AWS::DataZone::Project";
  constructor(
    logicalId: string,
    properties: DataZoneProjectProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZoneProject.Type, properties, options);
  }
}
