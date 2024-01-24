import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Location::TrackerConsumer Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html}
 */
export type LocationTrackerConsumerProperties = {
  /**
   * @maxLength `1600`
   * @pattern `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
   */
  ConsumerArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[-._\w]+$`
   */
  TrackerName: string;
};
/**
 * Definition of AWS::Location::TrackerConsumer Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html}
 */
export class LocationTrackerConsumer extends $Resource<
  "AWS::Location::TrackerConsumer",
  LocationTrackerConsumerProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::Location::TrackerConsumer";
  constructor(
    logicalId: string,
    properties: LocationTrackerConsumerProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, LocationTrackerConsumer.Type, properties, options);
  }
}
