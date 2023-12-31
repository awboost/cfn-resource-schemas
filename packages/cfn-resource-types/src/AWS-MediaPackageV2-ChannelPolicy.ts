import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::MediaPackageV2::ChannelPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html}
 */
export type MediaPackageV2ChannelPolicyProperties = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelGroupName?: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelName?: string;
  Policy: Record<string, any> | string;
};
/**
 * Definition of AWS::MediaPackageV2::ChannelPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channelpolicy.html}
 */
export class MediaPackageV2ChannelPolicy extends $Resource<
  "AWS::MediaPackageV2::ChannelPolicy",
  MediaPackageV2ChannelPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaPackageV2::ChannelPolicy";
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageV2ChannelPolicy.Type, properties, options);
  }
}
