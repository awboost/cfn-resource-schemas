import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaPackageV2::ChannelGroup`.
 * <p>Represents a channel group that facilitates the grouping of multiple channels.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html}
 */
export type MediaPackageV2ChannelGroupProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelGroupName: string;
  /**
   * <p>Enter any descriptive text that helps you to identify the channel group.</p>
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackageV2::ChannelGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html#aws-resource-mediapackagev2-channelgroup-return-values}
 */
export type MediaPackageV2ChannelGroupAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string;
  /**
   * <p>The date and time the channel group was created.</p>
   */
  CreatedAt: string;
  /**
   * <p>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   */
  EgressDomain: string;
  /**
   * <p>The date and time the channel group was modified.</p>
   */
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::ChannelGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channelgroup-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::MediaPackageV2::ChannelGroup`.
 * <p>Represents a channel group that facilitates the grouping of multiple channels.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html}
 */
export class MediaPackageV2ChannelGroup extends $Resource<
  "AWS::MediaPackageV2::ChannelGroup",
  MediaPackageV2ChannelGroupProperties,
  MediaPackageV2ChannelGroupAttributes
> {
  public static readonly Type = "AWS::MediaPackageV2::ChannelGroup";
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageV2ChannelGroup.Type, properties, options);
  }
}
