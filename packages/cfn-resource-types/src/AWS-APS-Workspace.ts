import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::APS::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html}
 */
export type APSWorkspaceProperties = {
  /**
   * The AMP Workspace alert manager definition data
   */
  AlertManagerDefinition?: string;
  /**
   * AMP Workspace alias.
   * @minLength `0`
   * @maxLength `100`
   */
  Alias?: string;
  /**
   * KMS Key ARN used to encrypt and decrypt AMP workspace data.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:kms:[-a-z0-9]+:[0-9]{12}:key/.+$`
   */
  KmsKeyArn?: string;
  /**
   * Logging configuration
   */
  LoggingConfiguration?: LoggingConfiguration;
  /**
   * Query logging configuration
   */
  QueryLoggingConfiguration?: QueryLoggingConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  /**
   * Workspace configuration
   */
  WorkspaceConfiguration?: WorkspaceConfiguration;
};
/**
 * Attribute type definition for `AWS::APS::Workspace`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#aws-resource-aps-workspace-return-values}
 */
export type APSWorkspaceAttributes = {
  /**
   * Workspace arn.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * AMP Workspace prometheus endpoint
   */
  PrometheusEndpoint: string;
  /**
   * Required to identify a specific APS Workspace.
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}$`
   */
  WorkspaceId: string;
};
/**
 * Type definition for `AWS::APS::Workspace.CloudWatchLogDestination`.
 * Represents a cloudwatch logs destination for query logging
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-cloudwatchlogdestination.html}
 */
export type CloudWatchLogDestination = {
  /**
   * The ARN of the CloudWatch Logs log group
   * @minLength `0`
   * @maxLength `512`
   */
  LogGroupArn: string;
};
/**
 * Type definition for `AWS::APS::Workspace.Label`.
 * Series label
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-label.html}
 */
export type Label = {
  /**
   * Name of the label
   * @minLength `1`
   * @pattern `^[a-zA-Z_][a-zA-Z0-9_]*$`
   */
  Name: string;
  /**
   * Value of the label
   * @minLength `1`
   */
  Value: string;
};
/**
 * Type definition for `AWS::APS::Workspace.LimitsPerLabelSet`.
 * Label set and its associated limits
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-limitsperlabelset.html}
 */
export type LimitsPerLabelSet = {
  /**
   * An array of series labels
   * @minLength `0`
   */
  LabelSet: Label[];
  /**
   * Limits that can be applied to a label set
   */
  Limits: LimitsPerLabelSetEntry;
};
/**
 * Type definition for `AWS::APS::Workspace.LimitsPerLabelSetEntry`.
 * Limits that can be applied to a label set
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-limitsperlabelsetentry.html}
 */
export type LimitsPerLabelSetEntry = {
  /**
   * The maximum number of active series that can be ingested for this label set
   * @min `0`
   */
  MaxSeries?: number;
};
/**
 * Type definition for `AWS::APS::Workspace.LoggingConfiguration`.
 * Logging configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * CloudWatch log group ARN
   * @minLength `0`
   * @maxLength `512`
   */
  LogGroupArn?: string;
};
/**
 * Type definition for `AWS::APS::Workspace.LoggingDestination`.
 * Destinations for query logging
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingdestination.html}
 */
export type LoggingDestination = {
  /**
   * Represents a cloudwatch logs destination for query logging
   */
  CloudWatchLogs: CloudWatchLogDestination;
  /**
   * Filters for logging
   */
  Filters: LoggingFilter;
};
/**
 * Type definition for `AWS::APS::Workspace.LoggingFilter`.
 * Filters for logging
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingfilter.html}
 */
export type LoggingFilter = {
  /**
   * Query logs with QSP above this limit are vended
   * @min `0`
   */
  QspThreshold: number;
};
/**
 * Type definition for `AWS::APS::Workspace.QueryLoggingConfiguration`.
 * Query logging configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-queryloggingconfiguration.html}
 */
export type QueryLoggingConfiguration = {
  /**
   * The destinations configuration for query logging
   * @minLength `1`
   * @maxLength `1`
   */
  Destinations: LoggingDestination[];
};
/**
 * Type definition for `AWS::APS::Workspace.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-tag.html}
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
 * Type definition for `AWS::APS::Workspace.WorkspaceConfiguration`.
 * Workspace configuration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-workspaceconfiguration.html}
 */
export type WorkspaceConfiguration = {
  /**
   * An array of label set and associated limits
   * @minLength `0`
   */
  LimitsPerLabelSets?: LimitsPerLabelSet[];
  /**
   * How many days that metrics are retained in the workspace
   * @min `1`
   */
  RetentionPeriodInDays?: number;
};
/**
 * Resource Type definition for AWS::APS::Workspace
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html}
 */
export class APSWorkspace extends $Resource<
  "AWS::APS::Workspace",
  APSWorkspaceProperties,
  APSWorkspaceAttributes
> {
  public static readonly Type = "AWS::APS::Workspace";
  constructor(
    logicalId: string,
    properties: APSWorkspaceProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, APSWorkspace.Type, properties, options);
  }
}
