import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::IVS::StreamKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html}
 */
export type IVSStreamKeyProperties = {
  /**
   * Channel ARN for the stream.
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$`
   */
  ChannelArn: string;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::StreamKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html#aws-resource-ivs-streamkey-return-values}
 */
export type IVSStreamKeyAttributes = {
  /**
   * Stream Key ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stream-key/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Stream-key value.
   */
  Value: string;
};
/**
 * Type definition for `AWS::IVS::StreamKey.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-streamkey-tag.html}
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
 * Resource Type definition for AWS::IVS::StreamKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-streamkey.html}
 */
export class IVSStreamKey extends $Resource<
  "AWS::IVS::StreamKey",
  IVSStreamKeyProperties,
  IVSStreamKeyAttributes
> {
  public static readonly Type = "AWS::IVS::StreamKey";
  public static readonly AttributeNames = ["Arn" as const, "Value" as const];
  constructor(
    logicalId: string,
    properties: IVSStreamKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IVSStreamKey.Type,
      properties,
      IVSStreamKey.AttributeNames,
      options,
    );
  }
}
