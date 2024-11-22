import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::IngestConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-ingestconfiguration.html}
 */
export type IVSIngestConfigurationProperties = {
  /**
   * Ingest Protocol.
   */
  IngestProtocol?: "RTMP" | "RTMPS";
  /**
   * Whether ingest configuration allows insecure ingest.
   */
  InsecureIngest?: boolean;
  /**
   * IngestConfiguration
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * Stage ARN. A value other than an empty string indicates that stage is linked to IngestConfiguration. Default: "" (recording is disabled).
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stage/[a-zA-Z0-9-]+$`
   */
  StageArn?: string;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * User defined indentifier for participant associated with IngestConfiguration.
   */
  UserId?: string;
};
/**
 * Attribute type definition for `AWS::IVS::IngestConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-ingestconfiguration.html#aws-resource-ivs-ingestconfiguration-return-values}
 */
export type IVSIngestConfigurationAttributes = {
  /**
   * IngestConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:ingest-configuration/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Participant Id is automatically generated on creation and assigned.
   * @minLength `0`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  ParticipantId: string;
  /**
   * State of IngestConfiguration which determines whether IngestConfiguration is in use or not.
   */
  State: "ACTIVE" | "INACTIVE";
  /**
   * Stream-key value.
   */
  StreamKey: string;
};
/**
 * Type definition for `AWS::IVS::IngestConfiguration.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-ingestconfiguration-tag.html}
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
 * Resource Type definition for AWS::IVS::IngestConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-ingestconfiguration.html}
 */
export class IVSIngestConfiguration extends $Resource<
  "AWS::IVS::IngestConfiguration",
  IVSIngestConfigurationProperties,
  IVSIngestConfigurationAttributes
> {
  public static readonly Type = "AWS::IVS::IngestConfiguration";
  constructor(
    logicalId: string,
    properties: IVSIngestConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSIngestConfiguration.Type, properties, options);
  }
}
