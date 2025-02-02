import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::IVS::PublicKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-publickey.html}
 */
export type IVSPublicKeyProperties = {
  /**
   * Name of the public key to be imported. The value does not need to be unique.
   * @minLength `0`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_]*$`
   */
  Name?: string;
  /**
   * The public portion of a customer-generated key pair. This field is required to create the AWS::IVS::PublicKey resource.
   * @pattern `-----BEGIN PUBLIC KEY-----\r?\n([a-zA-Z0-9+/=\r\n]+)\r?\n-----END PUBLIC KEY-----(\r?\n)?`
   */
  PublicKeyMaterial?: string;
  /**
   * A list of key-value pairs that contain metadata for the asset model.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IVS::PublicKey`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-publickey.html#aws-resource-ivs-publickey-return-values}
 */
export type IVSPublicKeyAttributes = {
  /**
   * Key-pair identifier.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^arn:aws:ivs:[a-z0-9-]+:[0-9]+:public-key/[a-zA-Z0-9-]+$`
   */
  Arn: string;
  /**
   * Key-pair identifier.
   */
  Fingerprint: string;
};
/**
 * Type definition for `AWS::IVS::PublicKey.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-publickey-tag.html}
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
 * Resource Type definition for AWS::IVS::PublicKey
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-publickey.html}
 */
export class IVSPublicKey extends $Resource<
  "AWS::IVS::PublicKey",
  IVSPublicKeyProperties,
  IVSPublicKeyAttributes
> {
  public static readonly Type = "AWS::IVS::PublicKey";
  constructor(
    logicalId: string,
    properties: IVSPublicKeyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, IVSPublicKey.Type, properties, options);
  }
}
