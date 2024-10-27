import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::DMS::DataMigration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html}
 */
export type DMSDataMigrationProperties = {
  /**
   * The property describes an ARN of the data migration.
   * @minLength `1`
   * @maxLength `300`
   */
  DataMigrationIdentifier?: string;
  /**
   * The property describes a name to identify the data migration.
   * @minLength `1`
   * @maxLength `300`
   */
  DataMigrationName?: string;
  /**
   * The property describes the settings for the data migration.
   */
  DataMigrationSettings?: DataMigrationSettings;
  /**
   * The property describes the type of migration.
   */
  DataMigrationType: "full-load" | "cdc" | "full-load-and-cdc";
  /**
   * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
   * @minLength `1`
   * @maxLength `255`
   */
  MigrationProjectIdentifier: string;
  /**
   * The property describes Amazon Resource Name (ARN) of the service access role.
   * @minLength `1`
   * @maxLength `300`
   */
  ServiceAccessRoleArn: string;
  /**
   * The property describes the settings for the data migration.
   */
  SourceDataSettings?: SourceDataSettings[];
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::DMS::DataMigration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#aws-resource-dms-datamigration-return-values}
 */
export type DMSDataMigrationAttributes = {
  /**
   * The property describes an ARN of the data migration.
   * @minLength `1`
   * @maxLength `300`
   */
  DataMigrationArn: string;
  /**
   * The property describes the create time of the data migration.
   * @minLength `1`
   * @maxLength `40`
   */
  DataMigrationCreateTime: string;
};
/**
 * Type definition for `AWS::DMS::DataMigration.DataMigrationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-datamigrationsettings.html}
 */
export type DataMigrationSettings = {
  /**
   * The property specifies whether to enable the Cloudwatch log.
   */
  CloudwatchLogsEnabled?: boolean;
  /**
   * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
   * @min `1`
   * @max `50`
   */
  NumberOfJobs?: number;
  /**
   * The property specifies the rules of selecting objects for data migration.
   */
  SelectionRules?: string;
};
/**
 * Type definition for `AWS::DMS::DataMigration.SourceDataSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-sourcedatasettings.html}
 */
export type SourceDataSettings = {
  /**
   * The property is a point in the database engine's log that defines a time where you can begin CDC.
   * @maxLength `40`
   */
  CDCStartPosition?: string;
  /**
   * The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format.
   * @maxLength `40`
   */
  CDCStartTime?: string;
  /**
   * The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format.
   * @maxLength `40`
   */
  CDCStopTime?: string;
  /**
   * The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.
   * @maxLength `255`
   */
  SlotName?: string;
};
/**
 * Type definition for `AWS::DMS::DataMigration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-datamigration-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource schema for AWS::DMS::DataMigration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html}
 */
export class DMSDataMigration extends $Resource<
  "AWS::DMS::DataMigration",
  DMSDataMigrationProperties,
  DMSDataMigrationAttributes
> {
  public static readonly Type = "AWS::DMS::DataMigration";
  constructor(
    logicalId: string,
    properties: DMSDataMigrationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DMSDataMigration.Type, properties, options);
  }
}
