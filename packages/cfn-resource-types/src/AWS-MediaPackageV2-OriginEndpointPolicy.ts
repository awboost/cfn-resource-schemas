import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::MediaPackageV2::OriginEndpointPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html}
 */
export type MediaPackageV2OriginEndpointPolicyProperties = {
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
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  OriginEndpointName?: string;
  Policy: Record<string, any> | string;
};
/**
 * Definition of AWS::MediaPackageV2::OriginEndpointPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html}
 */
export class MediaPackageV2OriginEndpointPolicy extends $Resource<
  "AWS::MediaPackageV2::OriginEndpointPolicy",
  MediaPackageV2OriginEndpointPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaPackageV2::OriginEndpointPolicy";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: MediaPackageV2OriginEndpointPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaPackageV2OriginEndpointPolicy.Type,
      properties,
      MediaPackageV2OriginEndpointPolicy.AttributeNames,
      options,
    );
  }
}
