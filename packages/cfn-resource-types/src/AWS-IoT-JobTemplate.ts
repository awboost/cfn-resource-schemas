import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IoT::JobTemplate. Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/job-templates.html}
 */
export type IoTJobTemplateProperties = {
  /**
   * The criteria that determine when and how a job abort takes place.
   */
  AbortConfig?: {
    /**
     * @minLength `1`
     */
    CriteriaList: AbortCriteria[];
  };
  /**
   * A description of the Job Template.
   * @maxLength `2028`
   * @pattern `[^\p{C}]+`
   */
  Description: string;
  DestinationPackageVersions?: string[];
  /**
   * The job document. Required if you don't specify a value for documentSource.
   * @maxLength `32768`
   */
  Document?: string;
  /**
   * An S3 link to the job document to use in the template. Required if you don't specify a value for document.
   * @minLength `1`
   * @maxLength `1350`
   */
  DocumentSource?: string;
  /**
   * Optional for copying a JobTemplate from a pre-existing Job configuration.
   */
  JobArn?: string;
  JobExecutionsRetryConfig?: {
    /**
     * @minLength `1`
     * @maxLength `2`
     */
    RetryCriteriaList?: RetryCriteria[];
  };
  /**
   * Allows you to create a staged rollout of a job.
   */
  JobExecutionsRolloutConfig?: {
    /**
     * The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.
     */
    ExponentialRolloutRate?: ExponentialRolloutRate;
    /**
     * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
     * @min `1`
     */
    MaximumPerMinute?: number;
  };
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[a-zA-Z0-9_-]+`
   */
  JobTemplateId: string;
  MaintenanceWindows?: MaintenanceWindow[];
  /**
   * Configuration for pre-signed S3 URLs.
   */
  PresignedUrlConfig?: {
    /**
     * How number (in seconds) pre-signed URLs are valid.
     * @min `60`
     * @max `3600`
     */
    ExpiresInSec?: number;
    /**
     * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
     * @minLength `20`
     * @maxLength `2048`
     */
    RoleArn: string;
  };
  /**
   * Metadata that can be used to manage the JobTemplate.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * Specifies the amount of time each device has to finish its execution of the job.
   */
  TimeoutConfig?: {
    /**
     * Specifies the amount of time, in minutes, this device has to finish execution of this job.
     * @min `1`
     * @max `10080`
     */
    InProgressTimeoutInMinutes: number;
  };
};
/**
 * Attribute type definition for `AWS::IoT::JobTemplate`.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/job-templates.html}
 */
export type IoTJobTemplateAttributes = {
  Arn: string;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.AbortCriteria`.
 * The criteria that determine when and how a job abort takes place.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html}
 */
export type AbortCriteria = {
  /**
   * The type of job action to take to initiate the job abort.
   */
  Action: Action;
  /**
   * The type of job execution failures that can initiate a job abort.
   */
  FailureType: FailureType;
  /**
   * The minimum number of things which must receive job execution notifications before the job can be aborted.
   * @min `1`
   */
  MinNumberOfExecutedThings: number;
  /**
   * The minimum percentage of job execution failures that must occur to initiate the job abort.
   * @max `100`
   */
  ThresholdPercentage: number;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-action.html}
 */
export type Action = "CANCEL";
/**
 * Type definition for `AWS::IoT::JobTemplate.ExponentialRolloutRate`.
 * Allows you to create an exponential rate of rollout for a job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html}
 */
export type ExponentialRolloutRate = {
  /**
   * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
   * @min `1`
   */
  BaseRatePerMinute: number;
  /**
   * The exponential factor to increase the rate of rollout for a job.
   * @min `1`
   * @max `5`
   */
  IncrementFactor: number;
  /**
   * The criteria to initiate the increase in rate of rollout for a job.
   */
  RateIncreaseCriteria: RateIncreaseCriteria;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.FailureType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-failuretype.html}
 */
export type FailureType = "FAILED" | "REJECTED" | "TIMED_OUT" | "ALL";
/**
 * Type definition for `AWS::IoT::JobTemplate.JobRetryFailureType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobretryfailuretype.html}
 */
export type JobRetryFailureType = "FAILED" | "TIMED_OUT" | "ALL";
/**
 * Type definition for `AWS::IoT::JobTemplate.MaintenanceWindow`.
 * Specifies a start time and duration for a scheduled Job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html}
 */
export type MaintenanceWindow = {
  /**
   * @min `1`
   * @max `1430`
   */
  DurationInMinutes?: number;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  StartTime?: string;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.RateIncreaseCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html}
 */
export type RateIncreaseCriteria = {
  /**
   * @min `1`
   */
  NumberOfNotifiedThings?: number;
  /**
   * @min `1`
   */
  NumberOfSucceededThings?: number;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.RetryCriteria`.
 * Specifies how many times a failure type should be retried.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html}
 */
export type RetryCriteria = {
  FailureType?: JobRetryFailureType;
  /**
   * @min `0`
   * @max `10`
   */
  NumberOfRetries?: number;
};
/**
 * Type definition for `AWS::IoT::JobTemplate.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-tag.html}
 */
export type Tag = {
  /**
   * The tag's key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag's value.
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IoT::JobTemplate. Job templates enable you to preconfigure jobs so that you can deploy them to multiple sets of target devices.
 * @see {@link https://docs.aws.amazon.com/iot/latest/developerguide/job-templates.html}
 */
export class IoTJobTemplate extends $Resource<
  "AWS::IoT::JobTemplate",
  IoTJobTemplateProperties,
  IoTJobTemplateAttributes
> {
  public static readonly Type = "AWS::IoT::JobTemplate";
  constructor(
    logicalId: string,
    properties: IoTJobTemplateProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IoTJobTemplate.Type, properties, options);
  }
}
