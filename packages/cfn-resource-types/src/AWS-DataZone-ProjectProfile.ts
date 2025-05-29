import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::DataZone::ProjectProfile Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html}
 */
export type DataZoneProjectProfileProperties = {
  AllowedDesignations?: DesignationConfiguration[];
  ChangeLog?: string;
  /**
   * @maxLength `2048`
   */
  Description?: string;
  /**
   * @pattern `^dzd[_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitIdentifier?: string;
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  ProjectScopes?: ProjectScope[];
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
   * @pattern `^dzd[_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitId: string;
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
 * Type definition for `AWS::DataZone::ProjectProfile.DesignationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-designationconfiguration.html}
 */
export type DesignationConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DesignationId: string;
};
/**
 * Type definition for `AWS::DataZone::ProjectProfile.ProjectScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-projectprofile-projectscope.html}
 */
export type ProjectScope = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\w -]+$`
   */
  Name: string;
  Policy?: string;
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
