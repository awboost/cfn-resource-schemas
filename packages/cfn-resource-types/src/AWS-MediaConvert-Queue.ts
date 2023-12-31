import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::MediaConvert::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html}
 */
export type MediaConvertQueueProperties = {
  Description?: string;
  Name?: string;
  PricingPlan?: string;
  Status?: string;
  Tags?: Record<string, any>;
};
/**
 * Attribute type definition for `AWS::MediaConvert::Queue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#aws-resource-mediaconvert-queue-return-values}
 */
export type MediaConvertQueueAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Resource Type definition for AWS::MediaConvert::Queue
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html}
 */
export class MediaConvertQueue extends $Resource<
  "AWS::MediaConvert::Queue",
  MediaConvertQueueProperties,
  MediaConvertQueueAttributes
> {
  public static readonly Type = "AWS::MediaConvert::Queue";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: MediaConvertQueueProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaConvertQueue.Type,
      properties,
      MediaConvertQueue.AttributeNames,
      options,
    );
  }
}
