import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::PlaybackKeyPair
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html}
 */
export type IVSPlaybackKeyPairProperties = {
  /**
   * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * The public portion of a customer-generated key pair.
   */
  PublicKeyMaterial?: string;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::PlaybackKeyPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html#aws-resource-ivs-playbackkeypair-return-values}
 */
export type IVSPlaybackKeyPairAttributes = {
  /**
   * Key-pair identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:playback-key/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Key-pair identifier.
   */
  Fingerprint: string;
};
/**
 * Type definition for `AWS::IVS::PlaybackKeyPair.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-playbackkeypair-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::IVS::PlaybackKeyPair
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-playbackkeypair.html}
 */
export class IVSPlaybackKeyPair extends $Resource<
  "AWS::IVS::PlaybackKeyPair",
  IVSPlaybackKeyPairProperties,
  IVSPlaybackKeyPairAttributes
> {
  public static readonly Type = "AWS::IVS::PlaybackKeyPair";
  constructor(
    logicalId: string,
    properties: IVSPlaybackKeyPairProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSPlaybackKeyPair.Type, properties, options);
  }
}
