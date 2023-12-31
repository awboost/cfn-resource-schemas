import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Pinpoint::EventStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html}
 */
export type PinpointEventStreamProperties = {
  ApplicationId: string;
  DestinationStreamArn: string;
  RoleArn: string;
};
/**
 * Attribute type definition for `AWS::Pinpoint::EventStream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#aws-resource-pinpoint-eventstream-return-values}
 */
export type PinpointEventStreamAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::Pinpoint::EventStream
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html}
 */
export class PinpointEventStream extends $Resource<
  "AWS::Pinpoint::EventStream",
  PinpointEventStreamProperties,
  PinpointEventStreamAttributes
> {
  public static readonly Type = "AWS::Pinpoint::EventStream";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: PinpointEventStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      PinpointEventStream.Type,
      properties,
      PinpointEventStream.AttributeNames,
      options,
    );
  }
}
