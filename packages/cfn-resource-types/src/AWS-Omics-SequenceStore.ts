import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::SequenceStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html}
 */
export type OmicsSequenceStoreProperties = {
  /**
   * A description for the store.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
  /**
   * An S3 URI representing the bucket and folder to store failed read set uploads.
   * @minLength `1`
   * @pattern `^s3:\/\/([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])\/?((.{1,1024})\/)?$`
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
   * @minLength `10`
   * @maxLength `36`
   * @pattern `^[0-9]+$`
   */
  SequenceStoreId: string;
};
/**
 * Type definition for `AWS::Omics::SequenceStore.EncryptionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-sequencestore-encryptiontype.html}
 */
export type EncryptionType = "KMS";
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
 * Definition of AWS::Omics::SequenceStore Resource Type
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
