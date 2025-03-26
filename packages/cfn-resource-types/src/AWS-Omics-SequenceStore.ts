import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Omics::SequenceStore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html}
 */
export type OmicsSequenceStoreProperties = {
  /**
   * Location of the access logs.
   * @pattern `^$|^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,800})/)?$`
   */
  AccessLogLocation?: string;
  /**
   * A description for the store.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  ETagAlgorithmFamily?: ETagAlgorithmFamily;
  /**
   * An S3 location that is used to store files that have failed a direct upload.
   * @minLength `0`
   * @pattern `^$|^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,1024})/)?$`
   */
  FallbackLocation?: string;
  /**
   * A name for the store.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Name: string;
  /**
   * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
   * @minLength `0`
   * @maxLength `50`
   */
  PropagatedSetLevelTags?: string[];
  /**
   * The resource policy that controls S3 access on the store
   */
  S3AccessPolicy?: Record<string, any>;
  /**
   * Server-side encryption (SSE) settings for a store.
   */
  SseConfig?: SseConfig;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::SequenceStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#aws-resource-omics-sequencestore-return-values}
 */
export type OmicsSequenceStoreAttributes = {
  /**
   * The store's ARN.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^arn:.+$`
   */
  Arn: string;
  /**
   * When the store was created.
   */
  CreationTime: string;
  /**
   * This is ARN of the access point associated with the S3 bucket storing read sets.
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^arn:[^:]*:s3:[^:]*:[^:]*:accesspoint/.*$`
   */
  S3AccessPointArn: string;
  /**
   * The S3 URI of the sequence store.
   * @pattern `^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/(.{1,1024})$`
   */
  S3Uri: string;
  /**
   * @minLength `10`
   * @maxLength `36`
   * @pattern `^[0-9]+$`
   */
  SequenceStoreId: string;
  Status: SequenceStoreStatus;
  /**
   * The status message of the sequence store.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  StatusMessage: string;
  /**
   * The last-updated time of the sequence store.
   */
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Omics::SequenceStore.EncryptionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-encryptiontype.html}
 */
export type EncryptionType = "KMS";
/**
 * Type definition for `AWS::Omics::SequenceStore.ETagAlgorithmFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-etagalgorithmfamily.html}
 */
export type ETagAlgorithmFamily = "MD5up" | "SHA256up" | "SHA512up";
/**
 * Type definition for `AWS::Omics::SequenceStore.SequenceStoreStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sequencestorestatus.html}
 */
export type SequenceStoreStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "FAILED";
/**
 * Type definition for `AWS::Omics::SequenceStore.SseConfig`.
 * Server-side encryption (SSE) settings for a store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-sseconfig.html}
 */
export type SseConfig = {
  /**
     * An encryption key ARN.
     * @minLength `20`
     * @maxLength `2048`
     * @pattern `arn:([^:
    ]*):([^:
    ]*):([^:
    ]*):([0-9]{12}):([^:
    ]*)`
     */
  KeyArn?: string;
  Type: EncryptionType;
};
/**
 * Type definition for `AWS::Omics::SequenceStore.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource Type definition for AWS::Omics::SequenceStore
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html}
 */
export class OmicsSequenceStore extends $Resource<
  "AWS::Omics::SequenceStore",
  OmicsSequenceStoreProperties,
  OmicsSequenceStoreAttributes
> {
  public static readonly Type = "AWS::Omics::SequenceStore";
  constructor(
    logicalId: string,
    properties: OmicsSequenceStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsSequenceStore.Type, properties, options);
  }
}
