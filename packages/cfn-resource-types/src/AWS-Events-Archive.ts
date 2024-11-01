import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::Archive
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html}
 */
export type EventsArchiveProperties = {
  /**
   * @minLength `1`
   * @maxLength `48`
   * @pattern `[\.\-_A-Za-z0-9]+`
   */
  ArchiveName?: string;
  Description?: string;
  EventPattern?: Record<string, any>;
  RetentionDays?: number;
  SourceArn: string;
};
/**
 * Attribute type definition for `AWS::Events::Archive`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#aws-resource-events-archive-return-values}
 */
export type EventsArchiveAttributes = {
  /**
   * @pattern `^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:.+\/.+$`
   */
  Arn: string;
};
/**
 * Resource Type definition for AWS::Events::Archive
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html}
 */
export class EventsArchive extends $Resource<
  "AWS::Events::Archive",
  EventsArchiveProperties,
  EventsArchiveAttributes
> {
  public static readonly Type = "AWS::Events::Archive";
  constructor(
    logicalId: string,
    properties: EventsArchiveProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsArchive.Type, properties, options);
  }
}
