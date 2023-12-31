import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Omics::VariantStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html}
 */
export type OmicsVariantStoreProperties = {
  /**
   * @maxLength `500`
   */
  Description?: string;
  /**
   * @pattern `^([a-z]){1}([a-z0-9_]){2,254}`
   */
  Name: string;
  Reference: ReferenceItem;
  SseConfig?: SseConfig;
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::Omics::VariantStore`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#aws-resource-omics-variantstore-return-values}
 */
export type OmicsVariantStoreAttributes = {
  CreationTime: string;
  /**
   * @pattern `^[a-f0-9]{12}$`
   */
  Id: string;
  Status: StoreStatus;
  /**
   * @maxLength `1000`
   */
  StatusMessage: string;
  /**
     * @minLength `20`
     * @maxLength `2048`
     * @pattern `^arn:([^:
    ]*):([^:
    ]*):([^:
    ]*):([0-9]{12}):([^:
    ]*)$`
     */
  StoreArn: string;
  StoreSizeBytes: number;
  UpdateTime: string;
};
/**
 * Type definition for `AWS::Omics::VariantStore.EncryptionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-encryptiontype.html}
 */
export type EncryptionType = "KMS";
/**
 * Type definition for `AWS::Omics::VariantStore.ReferenceItem`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-referenceitem.html}
 */
export type ReferenceItem = {
  /**
   * @minLength `1`
   * @maxLength `127`
   * @pattern `^arn:.+$`
   */
  ReferenceArn: string;
};
/**
 * Type definition for `AWS::Omics::VariantStore.SseConfig`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-sseconfig.html}
 */
export type SseConfig = {
  /**
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
 * Type definition for `AWS::Omics::VariantStore.StoreStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-storestatus.html}
 */
export type StoreStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED";
/**
 * Type definition for `AWS::Omics::VariantStore.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-variantstore-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Definition of AWS::Omics::VariantStore Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html}
 */
export class OmicsVariantStore extends $Resource<
  "AWS::Omics::VariantStore",
  OmicsVariantStoreProperties,
  OmicsVariantStoreAttributes
> {
  public static readonly Type = "AWS::Omics::VariantStore";
  public static readonly AttributeNames = [
    "CreationTime" as const,
    "Id" as const,
    "Status" as const,
    "StatusMessage" as const,
    "StoreArn" as const,
    "StoreSizeBytes" as const,
    "UpdateTime" as const,
  ];
  constructor(
    logicalId: string,
    properties: OmicsVariantStoreProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      OmicsVariantStore.Type,
      properties,
      OmicsVariantStore.AttributeNames,
      options,
    );
  }
}
