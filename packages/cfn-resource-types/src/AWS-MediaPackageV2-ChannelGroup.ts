import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaPackageV2::ChannelGroup Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelgroup.html}
 */
export type MediaPackageV2ChannelGroupProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelGroupName?: string;
  /**
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
  Arn: string;
  CreatedAt: string;
  EgressDomain: string;
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
 * Definition of AWS::MediaPackageV2::ChannelGroup Resource Type
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
