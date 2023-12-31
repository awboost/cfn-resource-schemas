import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::MediaTailor::ChannelPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html}
 */
export type MediaTailorChannelPolicyProperties = {
  ChannelName: string;
  /**
   * <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>
   */
  Policy: Record<string, any> | string;
};
/**
 * Definition of AWS::MediaTailor::ChannelPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html}
 */
export class MediaTailorChannelPolicy extends $Resource<
  "AWS::MediaTailor::ChannelPolicy",
  MediaTailorChannelPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaTailor::ChannelPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaTailorChannelPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaTailorChannelPolicy.Type,
      properties,
      MediaTailorChannelPolicy.AttributeNames,
      options,
    );
  }
}
