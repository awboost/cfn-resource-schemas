import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::CustomerProfiles::EventStream`.
 * An Event Stream resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html}
 */
export type CustomerProfilesEventStreamProperties = {
  /**
   * The unique name of the domain.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  DomainName: string;
  /**
   * The name of the event stream.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  EventStreamName: string;
  /**
   * The tags used to organize, track, or control access for this resource.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name
   * @minLength `1`
   * @maxLength `255`
   */
  Uri: string;
};
/**
 * Attribute type definition for `AWS::CustomerProfiles::EventStream`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html#aws-resource-customerprofiles-eventstream-return-values}
 */
export type CustomerProfilesEventStreamAttributes = {
  /**
   * The timestamp of when the export was created.
   */
  CreatedAt: string;
  /**
   * Details regarding the Kinesis stream.
   */
  DestinationDetails: {
    /**
     * The status of enabling the Kinesis stream as a destination for export.
     */
    Status: Status;
    /**
     * The StreamARN of the destination to deliver profile events to. For example, arn:aws:kinesis:region:account-id:stream/stream-name
     * @minLength `1`
     * @maxLength `255`
     */
    Uri: string;
  };
  /**
   * A unique identifier for the event stream.
   * @minLength `1`
   * @maxLength `255`
   */
  EventStreamArn: string;
  /**
   * The operational state of destination stream for export.
   */
  State: "RUNNING" | "STOPPED";
};
/**
 * Type definition for `AWS::CustomerProfiles::EventStream.Status`.
 * The status of enabling the Kinesis stream as a destination for export.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-status.html}
 */
export type Status = "HEALTHY" | "UNHEALTHY";
/**
 * Type definition for `AWS::CustomerProfiles::EventStream.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-eventstream-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
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
 * Resource type definition for `AWS::CustomerProfiles::EventStream`.
 * An Event Stream resource of Amazon Connect Customer Profiles
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventstream.html}
 */
export class CustomerProfilesEventStream extends $Resource<
  "AWS::CustomerProfiles::EventStream",
  CustomerProfilesEventStreamProperties,
  CustomerProfilesEventStreamAttributes
> {
  public static readonly Type = "AWS::CustomerProfiles::EventStream";
  constructor(
    logicalId: string,
    properties: CustomerProfilesEventStreamProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CustomerProfilesEventStream.Type, properties, options);
  }
}
