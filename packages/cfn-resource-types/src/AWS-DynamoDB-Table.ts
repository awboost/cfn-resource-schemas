import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Version: None. Resource Type definition for AWS::DynamoDB::Table
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html}
 */
export type DynamoDBTableProperties = {
  AttributeDefinitions?: AttributeDefinition[];
  BillingMode?: string;
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  DeletionProtectionEnabled?: boolean;
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
  ImportSourceSpecification?: ImportSourceSpecification;
  KeySchema: KeySchema[] | Record<string, any>;
  KinesisStreamSpecification?: KinesisStreamSpecification;
  LocalSecondaryIndexes?: LocalSecondaryIndex[];
  PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
  ProvisionedThroughput?: ProvisionedThroughput;
  SSESpecification?: SSESpecification;
  StreamSpecification?: StreamSpecification;
  TableClass?: string;
  TableName?: string;
  Tags?: Tag[];
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
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html}
 */
export type AttributeDefinition = {
  AttributeName: string;
  AttributeType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ContributorInsightsSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html}
 */
export type ContributorInsightsSpecification = {
  Enabled: boolean;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Csv`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html}
 */
export type Csv = {
  Delimiter?: string;
  HeaderList?: string[];
};
/**
 * Type definition for `AWS::DynamoDB::Table.GlobalSecondaryIndex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html}
 */
export type GlobalSecondaryIndex = {
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  IndexName: string;
  KeySchema: KeySchema[];
  Projection: Projection;
  ProvisionedThroughput?: ProvisionedThroughput;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ImportSourceSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html}
 */
export type ImportSourceSpecification = {
  InputCompressionType?: string;
  InputFormat: string;
  InputFormatOptions?: InputFormatOptions;
  S3BucketSource: S3BucketSource;
};
/**
 * Type definition for `AWS::DynamoDB::Table.InputFormatOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html}
 */
export type InputFormatOptions = {
  Csv?: Csv;
};
/**
 * Type definition for `AWS::DynamoDB::Table.KeySchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html}
 */
export type KeySchema = {
  AttributeName: string;
  KeyType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.KinesisStreamSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html}
 */
export type KinesisStreamSpecification = {
  ApproximateCreationDateTimePrecision?: "MICROSECOND" | "MILLISECOND";
  StreamArn: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.LocalSecondaryIndex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html}
 */
export type LocalSecondaryIndex = {
  IndexName: string;
  KeySchema: KeySchema[];
  Projection: Projection;
};
/**
 * Type definition for `AWS::DynamoDB::Table.PointInTimeRecoverySpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html}
 */
export type PointInTimeRecoverySpecification = {
  PointInTimeRecoveryEnabled?: boolean;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Projection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html}
 */
export type Projection = {
  NonKeyAttributes?: string[];
  ProjectionType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.ProvisionedThroughput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html}
 */
export type ProvisionedThroughput = {
  ReadCapacityUnits: number;
  WriteCapacityUnits: number;
};
/**
 * Type definition for `AWS::DynamoDB::Table.S3BucketSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html}
 */
export type S3BucketSource = {
  S3Bucket: string;
  S3BucketOwner?: string;
  S3KeyPrefix?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.SSESpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html}
 */
export type SSESpecification = {
  KMSMasterKeyId?: string;
  SSEEnabled: boolean;
  SSEType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.StreamSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html}
 */
export type StreamSpecification = {
  StreamViewType: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::DynamoDB::Table.TimeToLiveSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html}
 */
export type TimeToLiveSpecification = {
  AttributeName?: string;
  Enabled: boolean;
};
/**
 * Version: None. Resource Type definition for AWS::DynamoDB::Table
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
