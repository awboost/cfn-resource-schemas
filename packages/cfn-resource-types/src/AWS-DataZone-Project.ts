import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
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
};
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
