import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::AppIntegrations::EventIntegration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html}
 */
export type AppIntegrationsEventIntegrationProperties = {
  /**
   * The event integration description.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The Amazon Eventbridge bus for the event integration.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  EventBridgeBus: string;
  /**
   * The EventFilter (source) associated with the event integration.
   */
  EventFilter: EventFilter;
  /**
   * The name of the event integration.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9/\._\-]+$`
   */
  Name: string;
  /**
   * The tags (keys and values) associated with the event integration.
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::AppIntegrations::EventIntegration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html#aws-resource-appintegrations-eventintegration-return-values}
 */
export type AppIntegrationsEventIntegrationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the event integration.
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws[-a-z]*:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  EventIntegrationArn: string;
};
/**
 * Type definition for `AWS::AppIntegrations::EventIntegration.EventFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-eventfilter.html}
 */
export type EventFilter = {
  /**
   * The source of the events.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^aws\.partner\/.*$`
   */
  Source: string;
};
/**
 * Type definition for `AWS::AppIntegrations::EventIntegration.Metadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-metadata.html}
 */
export type Metadata = {
  /**
   * A key to identify the metadata.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*\S.*`
   */
  Key: string;
  /**
   * Corresponding metadata value for the key.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `.*\S.*`
   */
  Value: string;
};
/**
 * Type definition for `AWS::AppIntegrations::EventIntegration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appintegrations-eventintegration-tag.html}
 */
export type Tag = {
  /**
   * A key to identify the tag.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * Corresponding tag value for the key.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::AppIntegrations::EventIntegration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-eventintegration.html}
 */
export class AppIntegrationsEventIntegration extends $Resource<
  "AWS::AppIntegrations::EventIntegration",
  AppIntegrationsEventIntegrationProperties,
  AppIntegrationsEventIntegrationAttributes
> {
  public static readonly Type = "AWS::AppIntegrations::EventIntegration";
  public static readonly AttributeNames = ["EventIntegrationArn" as const];
  constructor(
    logicalId: string,
    properties: AppIntegrationsEventIntegrationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      AppIntegrationsEventIntegration.Type,
      properties,
      AppIntegrationsEventIntegration.AttributeNames,
      options,
    );
  }
}
