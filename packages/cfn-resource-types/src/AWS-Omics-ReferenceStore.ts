import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Omics::ReferenceStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html}
 */
export type OmicsReferenceStoreProperties = {
  /**
   * A description for the store.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
   */
  Description?: string;
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
 * Attribute type definition for `AWS::Omics::ReferenceStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#aws-resource-omics-referencestore-return-values}
 */
export type OmicsReferenceStoreAttributes = {
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
  ReferenceStoreId: string;
};
/**
 * Type definition for `AWS::Omics::ReferenceStore.EncryptionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-encryptiontype.html}
 */
export type EncryptionType = "KMS";
/**
 * Type definition for `AWS::Omics::ReferenceStore.SseConfig`.
 * Server-side encryption (SSE) settings for a store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-sseconfig.html}
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
 * Type definition for `AWS::Omics::ReferenceStore.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-referencestore-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::Omics::ReferenceStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html}
 */
export class OmicsReferenceStore extends $Resource<
  "AWS::Omics::ReferenceStore",
  OmicsReferenceStoreProperties,
  OmicsReferenceStoreAttributes
> {
  public static readonly Type = "AWS::Omics::ReferenceStore";
  constructor(
    logicalId: string,
    properties: OmicsReferenceStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, OmicsReferenceStore.Type, properties, options);
  }
}
