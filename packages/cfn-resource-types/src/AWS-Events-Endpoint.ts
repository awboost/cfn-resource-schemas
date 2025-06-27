import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::Endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html}
 */
export type EventsEndpointProperties = {
  /**
   * @maxLength `512`
   * @pattern `.*`
   */
  Description?: string;
  /**
   * @minLength `2`
   * @maxLength `2`
   */
  EventBuses: EndpointEventBus[];
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[\.\-_A-Za-z0-9]+$`
   */
  Name?: string;
  ReplicationConfig?: ReplicationConfig;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[a-z-]*:iam::\d{12}:role\/[\w+=,.@/-]+$`
   */
  RoleArn?: string;
  RoutingConfig: RoutingConfig;
};
/**
 * Attribute type definition for `AWS::Events::Endpoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#aws-resource-events-endpoint-return-values}
 */
export type EventsEndpointAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:endpoint\/[/\.\-_A-Za-z0-9]+$`
   */
  Arn: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[A-Za-z0-9\-]+[\.][A-Za-z0-9\-]+$`
   */
  EndpointId: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(https://)?[\.\-a-z0-9]+$`
   */
  EndpointUrl: string;
  State:
    | "ACTIVE"
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | "CREATE_FAILED"
    | "UPDATE_FAILED";
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  StateReason: string;
};
/**
 * Type definition for `AWS::Events::Endpoint.EndpointEventBus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-endpointeventbus.html}
 */
export type EndpointEventBus = {
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^arn:aws[a-z-]*:events:[a-z]+-[a-z-]+-\d+:\d{12}:event-bus/[\w.-]+$`
   */
  EventBusArn: string;
};
/**
 * Type definition for `AWS::Events::Endpoint.FailoverConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html}
 */
export type FailoverConfig = {
  Primary: Primary;
  Secondary: Secondary;
};
/**
 * Type definition for `AWS::Events::Endpoint.Primary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-primary.html}
 */
export type Primary = {
  /**
   * @minLength `1`
   * @maxLength `1600`
   * @pattern `^arn:aws([a-z]|\-)*:route53:::healthcheck/[\-a-z0-9]+$`
   */
  HealthCheck: string;
};
/**
 * Type definition for `AWS::Events::Endpoint.ReplicationConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationconfig.html}
 */
export type ReplicationConfig = {
  State: ReplicationState;
};
/**
 * Type definition for `AWS::Events::Endpoint.ReplicationState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationstate.html}
 */
export type ReplicationState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::Events::Endpoint.RoutingConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-routingconfig.html}
 */
export type RoutingConfig = {
  FailoverConfig: FailoverConfig;
};
/**
 * Type definition for `AWS::Events::Endpoint.Secondary`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-secondary.html}
 */
export type Secondary = {
  /**
   * @minLength `9`
   * @maxLength `20`
   * @pattern `^[\-a-z0-9]+$`
   */
  Route: string;
};
/**
 * Resource Type definition for AWS::Events::Endpoint.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html}
 */
export class EventsEndpoint extends $Resource<
  "AWS::Events::Endpoint",
  EventsEndpointProperties,
  EventsEndpointAttributes
> {
  public static readonly Type = "AWS::Events::Endpoint";
  constructor(
    logicalId: string,
    properties: EventsEndpointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsEndpoint.Type, properties, options);
  }
}
