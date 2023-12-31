import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Events::ApiDestination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export type EventsApiDestinationProperties = {
  /**
   * The arn of the connection.
   */
  ConnectionArn: string;
  /**
   * @maxLength `512`
   */
  Description?: string;
  HttpMethod: "GET" | "HEAD" | "POST" | "OPTIONS" | "PUT" | "DELETE" | "PATCH";
  /**
   * Url endpoint to invoke.
   */
  InvocationEndpoint: string;
  /**
   * @min `1`
   */
  InvocationRateLimitPerSecond?: number;
  /**
   * Name of the apiDestination.
   * @minLength `1`
   * @maxLength `64`
   */
  Name?: string;
};
/**
 * Attribute type definition for `AWS::Events::ApiDestination`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#aws-resource-events-apidestination-return-values}
 */
export type EventsApiDestinationAttributes = {
  /**
   * The arn of the api destination.
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::Events::ApiDestination.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html}
 */
export class EventsApiDestination extends $Resource<
  "AWS::Events::ApiDestination",
  EventsApiDestinationProperties,
  EventsApiDestinationAttributes
> {
  public static readonly Type = "AWS::Events::ApiDestination";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: EventsApiDestinationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      EventsApiDestination.Type,
      properties,
      EventsApiDestination.AttributeNames,
      options,
    );
  }
}
