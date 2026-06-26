import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Personalize::DataDeletionJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datadeletionjob.html}
 */
export type PersonalizeDataDeletionJobProperties = {
  /**
   * The Amazon S3 bucket that contains the list of userIds to delete.
   */
  DataSource?: DataSource;
  /**
   * The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to delete records from.
   * @maxLength `256`
   * @pattern `^arn:([a-z\d-]+):personalize:.*:.*:.+$`
   */
  DatasetGroupArn?: string;
  /**
   * The name for the data deletion job.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9\-_]*$`
   */
  JobName?: string;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source.
   * @maxLength `256`
   * @pattern `^arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   */
  RoleArn?: string;
};
/**
 * Attribute type definition for `AWS::Personalize::DataDeletionJob`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datadeletionjob.html#aws-resource-personalize-datadeletionjob-return-values}
 */
export type PersonalizeDataDeletionJobAttributes = {
  /**
   * The creation date and time of the data deletion job.
   */
  CreationDateTime: string;
  /**
   * The Amazon Resource Name (ARN) of the data deletion job.
   * @maxLength `256`
   * @pattern `^arn:([a-z\d-]+):personalize:.*:.*:.+$`
   */
  DataDeletionJobArn: string;
  /**
   * The date and time the data deletion job was last updated.
   */
  LastUpdatedDateTime: string;
  /**
   * The status of the data deletion job.
   * @maxLength `256`
   */
  Status: string;
};
/**
 * Type definition for `AWS::Personalize::DataDeletionJob.DataSource`.
 * The Amazon S3 bucket that contains the list of userIds to delete.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-personalize-datadeletionjob-datasource.html}
 */
export type DataSource = {
  /**
   * The path to the Amazon S3 bucket where the data is stored.
   * @maxLength `256`
   * @pattern `^(s3|http|https)://.+$`
   */
  DataLocation?: string;
};
/**
 * Resource Type definition for AWS::Personalize::DataDeletionJob
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-datadeletionjob.html}
 */
export class PersonalizeDataDeletionJob extends $Resource<
  "AWS::Personalize::DataDeletionJob",
  PersonalizeDataDeletionJobProperties,
  PersonalizeDataDeletionJobAttributes
> {
  public static readonly Type = "AWS::Personalize::DataDeletionJob";
  constructor(
    logicalId: string,
    properties: PersonalizeDataDeletionJobProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PersonalizeDataDeletionJob.Type, properties, options);
  }
}
