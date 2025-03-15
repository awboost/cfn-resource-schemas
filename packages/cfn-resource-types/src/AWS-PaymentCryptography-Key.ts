import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::PaymentCryptography::Key Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html}
 */
export type PaymentCryptographyKeyProperties = {
  Enabled?: boolean;
  Exportable: boolean;
  KeyAttributes: KeyAttributes;
  KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::PaymentCryptography::Key`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html#aws-resource-paymentcryptography-key-return-values}
 */
export type PaymentCryptographyKeyAttributes = {
  /**
   * @minLength `7`
   * @maxLength `322`
   * @pattern `^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:(key/[0-9a-zA-Z]{16,64}|alias/[a-zA-Z0-9/_-]+)$|^alias/[a-zA-Z0-9/_-]+$`
   */
  KeyIdentifier: string;
  /**
   * Defines the source of a key
   */
  KeyOrigin: KeyOrigin;
  /**
   * Defines the state of a key
   */
  KeyState: KeyState;
};
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyalgorithm.html}
 */
export type KeyAlgorithm =
  | "TDES_2KEY"
  | "TDES_3KEY"
  | "AES_128"
  | "AES_192"
  | "AES_256"
  | "RSA_2048"
  | "RSA_3072"
  | "RSA_4096"
  | "ECC_NIST_P256"
  | "ECC_NIST_P384"
  | "ECC_NIST_P521";
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyattributes.html}
 */
export type KeyAttributes = {
  KeyAlgorithm: KeyAlgorithm;
  KeyClass: KeyClass;
  KeyModesOfUse: KeyModesOfUse;
  KeyUsage: KeyUsage;
};
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyCheckValueAlgorithm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keycheckvaluealgorithm.html}
 */
export type KeyCheckValueAlgorithm = "CMAC" | "ANSI_X9_24";
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyClass`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyclass.html}
 */
export type KeyClass =
  | "SYMMETRIC_KEY"
  | "ASYMMETRIC_KEY_PAIR"
  | "PRIVATE_KEY"
  | "PUBLIC_KEY";
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyModesOfUse`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keymodesofuse.html}
 */
export type KeyModesOfUse = {
  Decrypt?: boolean;
  DeriveKey?: boolean;
  Encrypt?: boolean;
  Generate?: boolean;
  NoRestrictions?: boolean;
  Sign?: boolean;
  Unwrap?: boolean;
  Verify?: boolean;
  Wrap?: boolean;
};
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyOrigin`.
 * Defines the source of a key
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyorigin.html}
 */
export type KeyOrigin = "EXTERNAL" | "AWS_PAYMENT_CRYPTOGRAPHY";
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyState`.
 * Defines the state of a key
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keystate.html}
 */
export type KeyState =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "DELETE_PENDING"
  | "DELETE_COMPLETE";
/**
 * Type definition for `AWS::PaymentCryptography::Key.KeyUsage`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-keyusage.html}
 */
export type KeyUsage =
  | "TR31_B0_BASE_DERIVATION_KEY"
  | "TR31_C0_CARD_VERIFICATION_KEY"
  | "TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY"
  | "TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION"
  | "TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS"
  | "TR31_E1_EMV_MKEY_CONFIDENTIALITY"
  | "TR31_E2_EMV_MKEY_INTEGRITY"
  | "TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS"
  | "TR31_E5_EMV_MKEY_CARD_PERSONALIZATION"
  | "TR31_E6_EMV_MKEY_OTHER"
  | "TR31_K0_KEY_ENCRYPTION_KEY"
  | "TR31_K1_KEY_BLOCK_PROTECTION_KEY"
  | "TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT"
  | "TR31_M3_ISO_9797_3_MAC_KEY"
  | "TR31_M1_ISO_9797_1_MAC_KEY"
  | "TR31_M6_ISO_9797_5_CMAC_KEY"
  | "TR31_M7_HMAC_KEY"
  | "TR31_P0_PIN_ENCRYPTION_KEY"
  | "TR31_P1_PIN_GENERATION_KEY"
  | "TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE"
  | "TR31_V1_IBM3624_PIN_VERIFICATION_KEY"
  | "TR31_V2_VISA_PIN_VERIFICATION_KEY"
  | "TR31_K2_TR34_ASYMMETRIC_KEY";
/**
 * Type definition for `AWS::PaymentCryptography::Key.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-paymentcryptography-key-tag.html}
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
 * Definition of AWS::PaymentCryptography::Key Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-key.html}
 */
export class PaymentCryptographyKey extends $Resource<
  "AWS::PaymentCryptography::Key",
  PaymentCryptographyKeyProperties,
  PaymentCryptographyKeyAttributes
> {
  public static readonly Type = "AWS::PaymentCryptography::Key";
  constructor(
    logicalId: string,
    properties: PaymentCryptographyKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PaymentCryptographyKey.Type, properties, options);
  }
}
