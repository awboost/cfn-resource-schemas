import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The ``AWS::DynamoDB::Table`` resource creates a DDB table. For more information, see [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html) in the *API Reference*.
 You should be aware of the following behaviors when working with DDB tables:
  +  CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see [DynamoDB Table with a DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB_Table_with_a_DependsOn_Attribute).
  
   Our guidance is to use the latest schema documented here for y
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html}
 */
export type DynamoDBTableProperties = {
  /**
     * A list of attributes that describe the key schema for the table and indexes.
     This property is required to create a DDB table.
     Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.
     */
  AttributeDefinitions?: AttributeDefinition[];
  /**
     * Specify how you are charged for read and write throughput and how you manage capacity.
     Valid values include:
      +   ``PROVISIONED`` - We recommend using ``PROVISIONED`` for predictable workloads. ``PROVISIONED`` sets the billing mode to [Provisioned Mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual).
      +   ``PAY_PER_REQUEST`` - We recommend using ``PAY_PER_REQUEST`` for unpredictable workloads. ``PAY_PER_REQUEST`` sets the billing mode to [On-Demand Mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand).
      
     If not specified, the default is ``PROVISIONED``.
     */
  BillingMode?: string;
  /**
   * The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
   */
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  /**
   * Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.
   */
  DeletionProtectionEnabled?: boolean;
  /**
     * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
      If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ``ACTIVE``. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
     If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
     Updates are not supported. The following are exceptions:
      +  If you update either the contributor insights specification or the provisioned throughput value
     */
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
  /**
     * Specifies the properties of data being imported from the S3 bucket source to the table.
      If you specify the ``ImportSourceSpecification`` property, and also specify either the ``StreamSpecification``, the ``TableClass`` property, or the ``DeletionProtectionEnabled`` property, the IAM entity creating/updating stack must have ``UpdateTable`` permission.
     */
  ImportSourceSpecification?: ImportSourceSpecification;
  /**
   * Specifies the attributes that make up the primary key for the table. The attributes in the ``KeySchema`` property must also be defined in the ``AttributeDefinitions`` property.
   */
  KeySchema: KeySchema[] | Record<string, any>;
  /**
   * The Kinesis Data Streams configuration for the specified table.
   */
  KinesisStreamSpecification?: KinesisStreamSpecification;
  /**
   * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
   */
  LocalSecondaryIndexes?: LocalSecondaryIndex[];
  /**
   * The settings used to enable point in time recovery.
   */
  PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
  /**
     * Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
     If you set ``BillingMode`` as ``PROVISIONED``, you must specify this property. If you set ``BillingMode`` as ``PAY_PER_REQUEST``, you cannot specify this property.
     */
  ProvisionedThroughput?: ProvisionedThroughput;
  /**
   * Specifies the settings to enable server-side encryption.
   */
  SSESpecification?: SSESpecification;
  /**
   * The settings for the DDB table stream, which capture changes to items stored in the table.
   */
  StreamSpecification?: StreamSpecification;
  /**
   * The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.
   */
  TableClass?: string;
  /**
     * A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
      If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     */
  TableName?: string;
  /**
     * An array of key-value pairs to apply to this resource.
     For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     */
  Tags?: Tag[];
  /**
     * Specifies the Time to Live (TTL) settings for the table.
      For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
     */
  TimeToLiveSpecification?: TimeToLiveSpecification;
};
/**
 * Attribute type definition for `AWS::DynamoDB::Table`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table-return-values}
 */
export type DynamoDBTableAttributes = {
  Arn: string;
  StreamArn: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.AttributeDefinition`.
 * Represents an attribute for describing the key schema for the table and indexes.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html}
 */
export type AttributeDefinition = {
  /**
   * A name for the attribute.
   */
  AttributeName: string;
  /**
     * The data type for the attribute, where:
      +   ``S`` - the attribute is of type String
      +   ``N`` - the attribute is of type Number
      +   ``B`` - the attribute is of type Binary
     */
  AttributeType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ContributorInsightsSpecification`.
 * The settings used to enable or disable CloudWatch Contributor Insights.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html}
 */
export type ContributorInsightsSpecification = {
  /**
   * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
   */
  Enabled: boolean;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Csv`.
 * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html}
 */
export type Csv = {
  /**
   * The delimiter used for separating items in the CSV file being imported.
   */
  Delimiter?: string;
  /**
   * List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
   */
  HeaderList?: string[];
};
/**
 * Type definition for `AWS::DynamoDB::Table.GlobalSecondaryIndex`.
 * Represents the properties of a global secondary index.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html}
 */
export type GlobalSecondaryIndex = {
  /**
   * The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
   */
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  /**
   * The name of the global secondary index. The name must be unique among all other indexes on this table.
   */
  IndexName: string;
  /**
     * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
      +   ``HASH`` - partition key
      +   ``RANGE`` - sort key
      
      The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
  KeySchema: KeySchema[];
  /**
   * Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   */
  Projection: Projection;
  /**
     * Represents the provisioned throughput settings for the specified global secondary index.
     For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
     */
  ProvisionedThroughput?: ProvisionedThroughput;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ImportSourceSpecification`.
 * Specifies the properties of data being imported from the S3 bucket source to the table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html}
 */
export type ImportSourceSpecification = {
  /**
   * Type of compression to be used on the input coming from the imported table.
   */
  InputCompressionType?: string;
  /**
   * The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.
   */
  InputFormat: string;
  /**
   * Additional properties that specify how the input is formatted,
   */
  InputFormatOptions?: InputFormatOptions;
  /**
   * The S3 bucket that provides the source for the import.
   */
  S3BucketSource: S3BucketSource;
};
/**
 * Type definition for `AWS::DynamoDB::Table.InputFormatOptions`.
 * The format options for the data that was imported into the target table. There is one value, CsvOption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html}
 */
export type InputFormatOptions = {
  /**
   * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
   */
  Csv?: Csv;
};
/**
 * Type definition for `AWS::DynamoDB::Table.KeySchema`.
 * Represents *a single element* of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 A ``KeySchemaElement`` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one ``KeySchemaElement`` (for the partition key). A composite primary key would require one ``KeySchemaElement`` for the partition key, and another ``KeySchemaElement`` for the sort key.
 A ``KeySchemaElement`` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html}
 */
export type KeySchema = {
  /**
   * The name of a key attribute.
   */
  AttributeName: string;
  /**
     * The role that this key attribute will assume:
      +   ``HASH`` - partition key
      +   ``RANGE`` - sort key
      
      The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
  KeyType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.KinesisStreamSpecification`.
 * The Kinesis Data Streams configuration for the specified table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html}
 */
export type KinesisStreamSpecification = {
  /**
   * The precision for the time and date that the stream was created.
   */
  ApproximateCreationDateTimePrecision?: "MICROSECOND" | "MILLISECOND";
  /**
     * The ARN for a specific Kinesis data stream.
     Length Constraints: Minimum length of 37. Maximum length of 1024.
     */
  StreamArn: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.LocalSecondaryIndex`.
 * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html}
 */
export type LocalSecondaryIndex = {
  /**
   * The name of the local secondary index. The name must be unique among all other indexes on this table.
   */
  IndexName: string;
  /**
     * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
      +   ``HASH`` - partition key
      +   ``RANGE`` - sort key
      
      The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
     The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
     */
  KeySchema: KeySchema[];
  /**
   * Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
   */
  Projection: Projection;
};
/**
 * Type definition for `AWS::DynamoDB::Table.PointInTimeRecoverySpecification`.
 * The settings used to enable point in time recovery.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html}
 */
export type PointInTimeRecoverySpecification = {
  /**
   * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
   */
  PointInTimeRecoveryEnabled?: boolean;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Projection`.
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html}
 */
export type Projection = {
  /**
     * Represents the non-key attribute names which will be projected into the index.
     For local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
     */
  NonKeyAttributes?: string[];
  /**
     * The set of attributes that are projected into the index:
      +   ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.
      +   ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
      +   ``ALL`` - All of the table attributes are projected into the index.
     */
  ProjectionType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ProvisionedThroughput`.
 * Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. For more information about the contents of a provisioned throughput structure, see [Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html}
 */
export type ProvisionedThroughput = {
  /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
     If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
     */
  ReadCapacityUnits: number;
  /**
     * The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
     If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
     */
  WriteCapacityUnits: number;
};
/**
 * Type definition for `AWS::DynamoDB::Table.S3BucketSource`.
 * The S3 bucket that is being imported from.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html}
 */
export type S3BucketSource = {
  /**
   * The S3 bucket that is being imported from.
   */
  S3Bucket: string;
  /**
   * The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
   */
  S3BucketOwner?: string;
  /**
   * The key prefix shared by all S3 Objects that are being imported.
   */
  S3KeyPrefix?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.SSESpecification`.
 * Represents the settings used to enable server-side encryption.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html}
 */
export type SSESpecification = {
  /**
   * The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key ``alias/aws/dynamodb``.
   */
  KMSMasterKeyId?: string;
  /**
   * Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to ``KMS`` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
   */
  SSEEnabled: boolean;
  /**
     * Server-side encryption type. The only supported value is:
      +   ``KMS`` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).
     */
  SSEType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.StreamSpecification`.
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html}
 */
export type StreamSpecification = {
  /**
     * When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. Valid values for ``StreamViewType`` are:
      +   ``KEYS_ONLY`` - Only the key attributes of the modified item are written to the stream.
      +   ``NEW_IMAGE`` - The entire item, as it appears after it was modified, is written to the stream.
      +   ``OLD_IMAGE`` - The entire item, as it appeared before it was modified, is written to the stream.
      +   ``NEW_AND_OLD_IMAGES`` - Both the new and the old item images of the item are written to the stream.
     */
  StreamViewType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Tag`.
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
  AWS-assigned tag names and values are automatically assigned the ``aws:`` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix ``user:`` in the Cost Allocation Report. You cannot backdate the application of a tag.
 For an overview on tagging DynamoDB resources, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html) in the *Amazon DynamoDB Developer Guide*.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-tag.html}
 */
export type Tag = {
  /**
   * The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   */
  Key: string;
  /**
   * The value of the tag. Tag values are case-sensitive and can be null.
   */
  Value: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.TimeToLiveSpecification`.
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html}
 */
export type TimeToLiveSpecification = {
  /**
     * The name of the TTL attribute used to store the expiration time for items in the table.
       + The ``AttributeName`` property is required when enabling the TTL, or when TTL is already enabled.
      +  To update this property, you must first disable TTL and then enable TTL with the new attribute name.
     */
  AttributeName?: string;
  /**
   * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
   */
  Enabled: boolean;
};
/**
 * The ``AWS::DynamoDB::Table`` resource creates a DDB table. For more information, see [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html) in the *API Reference*.
 You should be aware of the following behaviors when working with DDB tables:
  +  CFNlong typically creates DDB tables in parallel. However, if your template includes multiple DDB tables with indexes, you must declare dependencies so that the tables are created sequentially. DDBlong limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DDB returns an error and the stack operation fails. For an example, see [DynamoDB Table with a DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB_Table_with_a_DependsOn_Attribute).
  
   Our guidance is to use the latest schema documented here for y
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html}
 */
export class DynamoDBTable extends $Resource<
  "AWS::DynamoDB::Table",
  DynamoDBTableProperties,
  DynamoDBTableAttributes
> {
  public static readonly Type = "AWS::DynamoDB::Table";
  constructor(
    logicalId: string,
    properties: DynamoDBTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DynamoDBTable.Type, properties, options);
  }
}
