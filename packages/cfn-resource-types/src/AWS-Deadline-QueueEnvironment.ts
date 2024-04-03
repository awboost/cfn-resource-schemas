import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::QueueEnvironment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html}
 */
export type DeadlineQueueEnvironmentProperties = {
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId: string;
  /**
   * @min `0`
   * @max `10000`
   */
  Priority: number;
  /**
   * @pattern `^queue-[0-9a-f]{32}$`
   */
  QueueId: string;
  /**
   * @minLength `1`
   * @maxLength `15000`
   */
  Template: string;
  TemplateType: EnvironmentTemplateType;
};
/**
 * Attribute type definition for `AWS::Deadline::QueueEnvironment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#aws-resource-deadline-queueenvironment-return-values}
 */
export type DeadlineQueueEnvironmentAttributes = {
  Name: string;
  /**
   * @pattern `^queueenv-[0-9a-f]{32}$`
   */
  QueueEnvironmentId: string;
};
/**
 * Type definition for `AWS::Deadline::QueueEnvironment.EnvironmentTemplateType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-queueenvironment-environmenttemplatetype.html}
 */
export type EnvironmentTemplateType = "JSON" | "YAML";
/**
 * Definition of AWS::Deadline::QueueEnvironment Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html}
 */
export class DeadlineQueueEnvironment extends $Resource<
  "AWS::Deadline::QueueEnvironment",
  DeadlineQueueEnvironmentProperties,
  DeadlineQueueEnvironmentAttributes
> {
  public static readonly Type = "AWS::Deadline::QueueEnvironment";
  constructor(
    logicalId: string,
    properties: DeadlineQueueEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineQueueEnvironment.Type, properties, options);
  }
}
