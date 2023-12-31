import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::MediaTailor::SourceLocation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html}
 */
export type MediaTailorSourceLocationProperties = {
  /**
   * <p>Access configuration parameters.</p>
   */
  AccessConfiguration?: AccessConfiguration;
  /**
   * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
   */
  DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
  /**
   * <p>The HTTP configuration for the source location.</p>
   */
  HttpConfiguration: HttpConfiguration;
  /**
   * <p>A list of the segment delivery configurations associated with this resource.</p>
   */
  SegmentDeliveryConfigurations?: SegmentDeliveryConfiguration[];
  SourceLocationName: string;
  /**
   * The tags to assign to the source location.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::MediaTailor::SourceLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#aws-resource-mediatailor-sourcelocation-return-values}
 */
export type MediaTailorSourceLocationAttributes = {
  /**
   * <p>The ARN of the source location.</p>
   */
  Arn: string;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.AccessConfiguration`.
 * <p>Access configuration parameters.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accessconfiguration.html}
 */
export type AccessConfiguration = {
  AccessType?: AccessType;
  /**
   * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
   */
  SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.AccessType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accesstype.html}
 */
export type AccessType =
  | "S3_SIGV4"
  | "SECRETS_MANAGER_ACCESS_TOKEN"
  | "AUTODETECT_SIGV4";
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.DefaultSegmentDeliveryConfiguration`.
 * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration.html}
 */
export type DefaultSegmentDeliveryConfiguration = {
  /**
   * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
   */
  BaseUrl?: string;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.HttpConfiguration`.
 * <p>The HTTP configuration for the source location.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-httpconfiguration.html}
 */
export type HttpConfiguration = {
  /**
   * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
   */
  BaseUrl: string;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.SecretsManagerAccessTokenConfiguration`.
 * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html}
 */
export type SecretsManagerAccessTokenConfiguration = {
  /**
   * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
   */
  HeaderName?: string;
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
   */
  SecretArn?: string;
  /**
   * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
   */
  SecretStringKey?: string;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.SegmentDeliveryConfiguration`.
 * <p>The segment delivery configuration settings.</p>
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-segmentdeliveryconfiguration.html}
 */
export type SegmentDeliveryConfiguration = {
  /**
   * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
   */
  BaseUrl?: string;
  /**
   * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
   */
  Name?: string;
};
/**
 * Type definition for `AWS::MediaTailor::SourceLocation.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Definition of AWS::MediaTailor::SourceLocation Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html}
 */
export class MediaTailorSourceLocation extends $Resource<
  "AWS::MediaTailor::SourceLocation",
  MediaTailorSourceLocationProperties,
  MediaTailorSourceLocationAttributes
> {
  public static readonly Type = "AWS::MediaTailor::SourceLocation";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: MediaTailorSourceLocationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      MediaTailorSourceLocation.Type,
      properties,
      MediaTailorSourceLocation.AttributeNames,
      options,
    );
  }
}
