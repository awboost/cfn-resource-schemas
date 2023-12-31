import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * The AWS::Timestream::Table resource creates a Timestream Table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html}
 */
export type TimestreamTableProperties = {
  /**
   * The name for the database which the table to be created belongs to.
   * @pattern `^[a-zA-Z0-9_.-]{3,256}$`
   */
  DatabaseName: string;
  /**
   * The properties that determine whether magnetic store writes are enabled.
   */
  MagneticStoreWriteProperties?: {
    /**
     * Boolean flag indicating whether magnetic store writes are enabled.
     */
    EnableMagneticStoreWrites: boolean;
    /**
     * Location to store information about records that were asynchronously rejected during magnetic store writes.
     */
    MagneticStoreRejectedDataLocation?: {
      /**
       * S3 configuration for location to store rejections from magnetic store writes
       */
      S3Configuration?: {
        /**
         * The bucket name used to store the data.
         */
        BucketName: string;
        /**
         * Either SSE_KMS or SSE_S3.
         */
        EncryptionOption: string;
        /**
         * Must be provided if SSE_KMS is specified as the encryption option
         */
        KmsKeyId?: string;
        /**
         * String used to prefix all data in the bucket.
         */
        ObjectKeyPrefix?: string;
      };
    };
  };
  /**
   * The retention duration of the memory store and the magnetic store.
   */
  RetentionProperties?: {
    /**
     * The duration for which data must be stored in the magnetic store.
     */
    MagneticStoreRetentionPeriodInDays?: string;
    /**
     * The duration for which data must be stored in the memory store.
     */
    MemoryStoreRetentionPeriodInHours?: string;
  };
  /**
   * A Schema specifies the expected data model of the table.
   */
  Schema?: {
    /**
     * A list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
     * @minLength `1`
     */
    CompositePartitionKey?: PartitionKey[];
  };
  /**
   * The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
   * @pattern `^[a-zA-Z0-9_.-]{3,256}$`
   */
  TableName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Timestream::Table`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#aws-resource-timestream-table-return-values}
 */
export type TimestreamTableAttributes = {
  Arn: string;
  /**
   * The table name exposed as a read-only attribute.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Timestream::Table.PartitionKey`.
 * An attribute used in partitioning data in a table. There are two types of partition keys: dimension keys and measure keys. A dimension key partitions data on a dimension name, while a measure key partitions data on the measure name.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html}
 */
export type PartitionKey = {
  /**
   * The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
   */
  EnforcementInRecord?: PartitionKeyEnforcementLevel;
  /**
   * The name of the attribute used for a dimension key.
   * @minLength `1`
   * @maxLength `2048`
   */
  Name?: string;
  /**
   * The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
   */
  Type: PartitionKeyType;
};
/**
 * Type definition for `AWS::Timestream::Table.PartitionKeyEnforcementLevel`.
 * The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkeyenforcementlevel.html}
 */
export type PartitionKeyEnforcementLevel = "REQUIRED" | "OPTIONAL";
/**
 * Type definition for `AWS::Timestream::Table.PartitionKeyType`.
 * The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkeytype.html}
 */
export type PartitionKeyType = "DIMENSION" | "MEASURE";
/**
 * Type definition for `AWS::Timestream::Table.Tag`.
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * The AWS::Timestream::Table resource creates a Timestream Table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html}
 */
export class TimestreamTable extends $Resource<
  "AWS::Timestream::Table",
  TimestreamTableProperties,
  TimestreamTableAttributes
> {
  public static readonly Type = "AWS::Timestream::Table";
  public static readonly AttributeNames = ["Arn" as const, "Name" as const];
  constructor(
    logicalId: string,
    properties: TimestreamTableProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      TimestreamTable.Type,
      properties,
      TimestreamTable.AttributeNames,
      options,
    );
  }
}
