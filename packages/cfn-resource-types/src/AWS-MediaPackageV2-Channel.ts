import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaPackageV2::Channel`.
 * <p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html}
 */
export type MediaPackageV2ChannelProperties = {
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
   * <p>Enter any descriptive text that helps you to identify the channel.</p>
   * @minLength `0`
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>
   */
  InputSwitchConfiguration?: InputSwitchConfiguration;
  InputType?: InputType;
  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaPackageV2::Channel`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html#aws-resource-mediapackagev2-channel-return-values}
 */
export type MediaPackageV2ChannelAttributes = {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string;
  /**
   * <p>The date and time the channel was created.</p>
   */
  CreatedAt: string;
  IngestEndpointUrls: string[];
  /**
   * <p>The list of ingest endpoints.</p>
   */
  IngestEndpoints: {
    /**
     * <p>The system-generated unique identifier for the IngestEndpoint.</p>
     */
    Id: string;
    /**
     * <p>The ingest domain URL where the source stream should be sent.</p>
     */
    Url: string;
  }[];
  /**
   * <p>The date and time the channel was modified.</p>
   */
  ModifiedAt: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::Channel.IngestEndpoint`.
 * <p>The ingest domain URL where the source stream should be sent.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-ingestendpoint.html}
 */
export type IngestEndpoint = {
  /**
   * <p>The system-generated unique identifier for the IngestEndpoint.</p>
   */
  Id?: string;
  /**
   * <p>The ingest domain URL where the source stream should be sent.</p>
   */
  Url?: string;
};
/**
 * Type definition for `AWS::MediaPackageV2::Channel.InputSwitchConfiguration`.
 * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-inputswitchconfiguration.html}
 */
export type InputSwitchConfiguration = {
  /**
   * <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is true. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   */
  MQCSInputSwitching?: boolean;
  /**
   * @min `1`
   * @max `2`
   */
  PreferredInput?: number;
};
/**
 * Type definition for `AWS::MediaPackageV2::Channel.InputType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-inputtype.html}
 */
export type InputType = "HLS" | "CMAF";
/**
 * Type definition for `AWS::MediaPackageV2::Channel.OutputHeaderConfiguration`.
 * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-outputheaderconfiguration.html}
 */
export type OutputHeaderConfiguration = {
  /**
   * <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   */
  PublishMQCS?: boolean;
};
/**
 * Type definition for `AWS::MediaPackageV2::Channel.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackagev2-channel-tag.html}
 */
export type Tag = {
  Key?: string;
  Value?: string;
};
/**
 * Resource type definition for `AWS::MediaPackageV2::Channel`.
 * <p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackagev2-channel.html}
 */
export class MediaPackageV2Channel extends $Resource<
  "AWS::MediaPackageV2::Channel",
  MediaPackageV2ChannelProperties,
  MediaPackageV2ChannelAttributes
> {
  public static readonly Type = "AWS::MediaPackageV2::Channel";
  constructor(
    logicalId: string,
    properties: MediaPackageV2ChannelProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaPackageV2Channel.Type, properties, options);
  }
}
