import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CloudTrail::Channel`.
 * A channel receives events from a specific source (such as an on-premises storage solution or application, or a partner event data source), and delivers the events to one or more event data stores. You use channels to ingest events into CloudTrail from sources outside AWS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html}
 */
export type CloudTrailChannelProperties = {
  /**
   * One or more resources to which events arriving through a channel are logged and stored.
   * @maxLength `10`
   */
  Destinations?: Destination[];
  /**
   * The name of the channel.
   * @minLength `3`
   * @maxLength `128`
   * @pattern `(^[a-zA-Z0-9._\-]+$)`
   */
  Name?: string;
  /**
   * The ARN of an on-premises storage solution or application, or a partner event source.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `(.*)`
   */
  Source?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::CloudTrail::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#aws-resource-cloudtrail-channel-return-values}
 */
export type CloudTrailChannelAttributes = {
  /**
   * The Amazon Resource Name (ARN) of a channel.
   * @minLength `3`
   * @maxLength `256`
   * @pattern `(^[a-zA-Z0-9._/\-:]+$)`
   */
  ChannelArn: string;
};
/**
 * Type definition for `AWS::CloudTrail::Channel.Destination`.
 * The resource that receives events arriving from a channel.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html}
 */
export type Destination = {
  /**
   * The ARN of a resource that receives events from a channel.
   * @minLength `3`
   * @maxLength `1024`
   * @pattern `(^[a-zA-Z0-9._/\-:]+$)`
   */
  Location: string;
  /**
   * The type of destination for events arriving from a channel.
   */
  Type: "EVENT_DATA_STORE";
};
/**
 * Type definition for `AWS::CloudTrail::Channel.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-tag.html}
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
 * Resource type definition for `AWS::CloudTrail::Channel`.
 * A channel receives events from a specific source (such as an on-premises storage solution or application, or a partner event data source), and delivers the events to one or more event data stores. You use channels to ingest events into CloudTrail from sources outside AWS.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html}
 */
export class CloudTrailChannel extends $Resource<
  "AWS::CloudTrail::Channel",
  CloudTrailChannelProperties,
  CloudTrailChannelAttributes
> {
  public static readonly Type = "AWS::CloudTrail::Channel";
  constructor(
    logicalId: string,
    properties: CloudTrailChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CloudTrailChannel.Type, properties, options);
  }
}
