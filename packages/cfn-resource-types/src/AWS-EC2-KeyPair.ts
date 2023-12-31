import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::EC2::KeyPair creates an SSH key pair
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html}
 */
export type EC2KeyPairProperties = {
  /**
   * The format of the private key
   */
  KeyFormat?: "pem" | "ppk";
  /**
   * The name of the SSH key pair
   */
  KeyName: string;
  /**
   * The crypto-system used to generate a key pair.
   */
  KeyType?: "rsa" | "ed25519";
  /**
   * Plain text public key to import
   */
  PublicKeyMaterial?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::KeyPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#aws-resource-ec2-keypair-return-values}
 */
export type EC2KeyPairAttributes = {
  /**
   * A short sequence of bytes used for public key verification
   */
  KeyFingerprint: string;
  /**
   * An AWS generated ID for the key pair
   */
  KeyPairId: string;
};
/**
 * Type definition for `AWS::EC2::KeyPair.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-keypair-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * The AWS::EC2::KeyPair creates an SSH key pair
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html}
 */
export class EC2KeyPair extends $Resource<
  "AWS::EC2::KeyPair",
  EC2KeyPairProperties,
  EC2KeyPairAttributes
> {
  public static readonly Type = "AWS::EC2::KeyPair";
  constructor(
    logicalId: string,
    properties: EC2KeyPairProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2KeyPair.Type, properties, options);
  }
}
