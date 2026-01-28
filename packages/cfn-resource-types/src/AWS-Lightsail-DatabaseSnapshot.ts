import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Lightsail::DatabaseSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-databasesnapshot.html}
 */
export type LightsailDatabaseSnapshotProperties = {
  /**
   * The name of the database on which to base your new snapshot.
   * @pattern `^\w[\w\-]*\w$`
   */
  RelationalDatabaseName: string;
  /**
   * The name for your new database snapshot.
   * @minLength `2`
   * @maxLength `255`
   * @pattern `^\w[\w\-]*\w$`
   */
  RelationalDatabaseSnapshotName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::DatabaseSnapshot`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-databasesnapshot.html#aws-resource-lightsail-databasesnapshot-return-values}
 */
export type LightsailDatabaseSnapshotAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the database snapshot.
   * @pattern `.*\S.*`
   */
  Arn: string;
  /**
   * The timestamp when the database snapshot was created.
   */
  CreatedAt: string;
  /**
   * The software of the database snapshot (for example, MySQL).
   * @pattern `.*\S.*`
   */
  Engine: string;
  /**
   * The database engine version for the database snapshot (for example, 5.7.23).
   * @pattern `.*\S.*`
   */
  EngineVersion: string;
  /**
   * The Amazon Resource Name (ARN) of the database from which the database snapshot was created.
   * @pattern `.*\S.*`
   */
  FromRelationalDatabaseArn: string;
  /**
   * The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.
   */
  FromRelationalDatabaseBlueprintId: string;
  /**
   * The bundle ID of the database from which the database snapshot was created.
   */
  FromRelationalDatabaseBundleId: string;
  /**
   * The name of the source database from which the database snapshot was created.
   * @pattern `.*\S.*`
   */
  FromRelationalDatabaseName: string;
  /**
   * The Region name and Availability Zone where the database snapshot is located.
   */
  Location: {
    /**
     * The Availability Zone where the database snapshot was created.
     */
    AvailabilityZone: string;
    /**
     * The AWS Region where the database snapshot was created.
     */
    RegionName: string;
  };
  /**
   * The name of the database snapshot.
   * @pattern `^\w[\w\-]*\w$`
   */
  Name: string;
  /**
   * The Lightsail resource type.
   */
  ResourceType: "RelationalDatabaseSnapshot";
  /**
   * The size of the disk in GB (for example, 32) for the database snapshot.
   */
  SizeInGb: number;
  /**
   * The state of the database snapshot.
   * @pattern `.*\S.*`
   */
  State: string;
  /**
   * The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.
   */
  SupportCode: string;
};
/**
 * Type definition for `AWS::Lightsail::DatabaseSnapshot.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-databasesnapshot-tag.html}
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
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::DatabaseSnapshot
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-databasesnapshot.html}
 */
export class LightsailDatabaseSnapshot extends $Resource<
  "AWS::Lightsail::DatabaseSnapshot",
  LightsailDatabaseSnapshotProperties,
  LightsailDatabaseSnapshotAttributes
> {
  public static readonly Type = "AWS::Lightsail::DatabaseSnapshot";
  constructor(
    logicalId: string,
    properties: LightsailDatabaseSnapshotProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LightsailDatabaseSnapshot.Type, properties, options);
  }
}
