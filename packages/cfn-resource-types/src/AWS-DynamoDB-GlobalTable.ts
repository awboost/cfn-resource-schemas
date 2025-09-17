import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html}
 */
export type DynamoDBGlobalTableProperties = {
  /**
   * @minLength `1`
   */
  AttributeDefinitions: AttributeDefinition[];
  BillingMode?: string;
  GlobalSecondaryIndexes?: GlobalSecondaryIndex[];
  GlobalTableSettingsReplicationMode?: "ENABLED" | "DISABLED";
  GlobalTableSourceArn?: string;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  GlobalTableWitnesses?: GlobalTableWitness[];
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  KeySchema: KeySchema[];
  LocalSecondaryIndexes?: LocalSecondaryIndex[];
  MultiRegionConsistency?: "EVENTUAL" | "STRONG";
  /**
   * @minLength `1`
   */
  Replicas: ReplicaSpecification[];
  SSESpecification?: SSESpecification;
  StreamSpecification?: StreamSpecification;
  TableName?: string;
  TimeToLiveSpecification?: TimeToLiveSpecification;
  WarmThroughput?: WarmThroughput;
  WriteOnDemandThroughputSettings?: WriteOnDemandThroughputSettings;
  WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
};
/**
 * Attribute type definition for `AWS::DynamoDB::GlobalTable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#aws-resource-dynamodb-globaltable-return-values}
 */
export type DynamoDBGlobalTableAttributes = {
  Arn: string;
  StreamArn: string;
  TableId: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.AttributeDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html}
 */
export type AttributeDefinition = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  AttributeName: string;
  AttributeType: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.CapacityAutoScalingSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html}
 */
export type CapacityAutoScalingSettings = {
  /**
   * @min `1`
   */
  MaxCapacity: number;
  /**
   * @min `1`
   */
  MinCapacity: number;
  /**
   * @min `1`
   */
  SeedCapacity?: number;
  TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ContributorInsightsSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-contributorinsightsspecification.html}
 */
export type ContributorInsightsSpecification = {
  Enabled: boolean;
  Mode?: "ACCESSED_AND_THROTTLED_KEYS" | "THROTTLED_KEYS";
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.GlobalSecondaryIndex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html}
 */
export type GlobalSecondaryIndex = {
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  IndexName: string;
  /**
   * @minLength `1`
   * @maxLength `2`
   */
  KeySchema: KeySchema[];
  Projection: Projection;
  WarmThroughput?: WarmThroughput;
  WriteOnDemandThroughputSettings?: WriteOnDemandThroughputSettings;
  WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.GlobalTableWitness`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globaltablewitness.html}
 */
export type GlobalTableWitness = {
  Region?: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.KeySchema`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html}
 */
export type KeySchema = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  AttributeName: string;
  KeyType: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.KinesisStreamSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html}
 */
export type KinesisStreamSpecification = {
  ApproximateCreationDateTimePrecision?: "MICROSECOND" | "MILLISECOND";
  StreamArn: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.LocalSecondaryIndex`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html}
 */
export type LocalSecondaryIndex = {
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  IndexName: string;
  /**
   * @maxLength `2`
   */
  KeySchema: KeySchema[];
  Projection: Projection;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.PointInTimeRecoverySpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html}
 */
export type PointInTimeRecoverySpecification = {
  PointInTimeRecoveryEnabled?: boolean;
  /**
   * @min `1`
   * @max `35`
   */
  RecoveryPeriodInDays?: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.Projection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html}
 */
export type Projection = {
  /**
   * @maxLength `20`
   */
  NonKeyAttributes?: string[];
  ProjectionType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReadOnDemandThroughputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readondemandthroughputsettings.html}
 */
export type ReadOnDemandThroughputSettings = {
  /**
   * @min `1`
   */
  MaxReadRequestUnits?: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReadProvisionedThroughputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html}
 */
export type ReadProvisionedThroughputSettings = {
  ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
  /**
   * @min `1`
   */
  ReadCapacityUnits?: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReplicaGlobalSecondaryIndexSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html}
 */
export type ReplicaGlobalSecondaryIndexSpecification = {
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  /**
   * @minLength `3`
   * @maxLength `255`
   */
  IndexName: string;
  ReadOnDemandThroughputSettings?: ReadOnDemandThroughputSettings;
  ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReplicaSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html}
 */
export type ReplicaSpecification = {
  ContributorInsightsSpecification?: ContributorInsightsSpecification;
  DeletionProtectionEnabled?: boolean;
  GlobalSecondaryIndexes?: ReplicaGlobalSecondaryIndexSpecification[];
  KinesisStreamSpecification?: KinesisStreamSpecification;
  PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
  ReadOnDemandThroughputSettings?: ReadOnDemandThroughputSettings;
  ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
  Region: string;
  ReplicaStreamSpecification?: ReplicaStreamSpecification;
  ResourcePolicy?: ResourcePolicy;
  SSESpecification?: ReplicaSSESpecification;
  TableClass?: string;
  Tags?: Tag[];
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReplicaSSESpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicassespecification.html}
 */
export type ReplicaSSESpecification = {
  KMSMasterKeyId: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ReplicaStreamSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicastreamspecification.html}
 */
export type ReplicaStreamSpecification = {
  ResourcePolicy: ResourcePolicy;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.ResourcePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-resourcepolicy.html}
 */
export type ResourcePolicy = {
  PolicyDocument: Record<string, any>;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.SSESpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html}
 */
export type SSESpecification = {
  SSEEnabled: boolean;
  SSEType?: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.StreamSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-streamspecification.html}
 */
export type StreamSpecification = {
  StreamViewType: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.TargetTrackingScalingPolicyConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html}
 */
export type TargetTrackingScalingPolicyConfiguration = {
  DisableScaleIn?: boolean;
  /**
   * @min `0`
   */
  ScaleInCooldown?: number;
  /**
   * @min `0`
   */
  ScaleOutCooldown?: number;
  TargetValue: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.TimeToLiveSpecification`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html}
 */
export type TimeToLiveSpecification = {
  AttributeName?: string;
  Enabled: boolean;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.WarmThroughput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-warmthroughput.html}
 */
export type WarmThroughput = {
  /**
   * @min `1`
   */
  ReadUnitsPerSecond?: number;
  /**
   * @min `1`
   */
  WriteUnitsPerSecond?: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.WriteOnDemandThroughputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeondemandthroughputsettings.html}
 */
export type WriteOnDemandThroughputSettings = {
  /**
   * @min `1`
   */
  MaxWriteRequestUnits?: number;
};
/**
 * Type definition for `AWS::DynamoDB::GlobalTable.WriteProvisionedThroughputSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html}
 */
export type WriteProvisionedThroughputSettings = {
  WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
};
/**
 * Version: None. Resource Type definition for AWS::DynamoDB::GlobalTable
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html}
 */
export class DynamoDBGlobalTable extends $Resource<
  "AWS::DynamoDB::GlobalTable",
  DynamoDBGlobalTableProperties,
  DynamoDBGlobalTableAttributes
> {
  public static readonly Type = "AWS::DynamoDB::GlobalTable";
  constructor(
    logicalId: string,
    properties: DynamoDBGlobalTableProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DynamoDBGlobalTable.Type, properties, options);
  }
}
