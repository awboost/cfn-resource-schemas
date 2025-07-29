import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaPackageV2::OriginEndpointPolicy`.
 * <p>Represents a resource policy that allows or denies access to an origin endpoint.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html}
 */
export type MediaPackageV2OriginEndpointPolicyProperties = {
  CdnAuthConfiguration?: CdnAuthConfiguration;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelGroupName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  ChannelName: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  OriginEndpointName: string;
  Policy: Record<string, any> | string;
};
/**
 * Type definition for `AWS::MediaPackageV2::OriginEndpointPolicy.CdnAuthConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-originendpointpolicy-cdnauthconfiguration.html}
 */
export type CdnAuthConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  CdnIdentifierSecretArns: string[];
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  SecretsRoleArn: string;
};
/**
 * Resource type definition for `AWS::MediaPackageV2::OriginEndpointPolicy`.
 * <p>Represents a resource policy that allows or denies access to an origin endpoint.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-originendpointpolicy.html}
 */
export class MediaPackageV2OriginEndpointPolicy extends $Resource<
  "AWS::MediaPackageV2::OriginEndpointPolicy",
  MediaPackageV2OriginEndpointPolicyProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::MediaPackageV2::OriginEndpointPolicy";
  constructor(
    logicalId: string,
    properties: MediaPackageV2OriginEndpointPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaPackageV2OriginEndpointPolicy.Type,
      properties,
      options,
    );
  }
}
