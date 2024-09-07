import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EC2::KeyPair`.
 * Specifies a key pair for use with an EC2long instance as follows:
  +  To import an existing key pair, include the ``PublicKeyMaterial`` property.
  +  To create a new key pair, omit the ``PublicKeyMaterial`` property.
  
 When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.
 When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: ``/ec2/keypair/{key_pair_id}``. For more information about retrieving private key, and the required permissions, see [Create a key pair using](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the *User Guide*.
 When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html}
 */
export type EC2KeyPairProperties = {
  /**
     * The format of the key pair.
     Default: ``pem``
     */
  KeyFormat?: "pem" | "ppk";
  /**
     * A unique name for the key pair.
     Constraints: Up to 255 ASCII characters
     */
  KeyName: string;
  /**
     * The type of key pair. Note that ED25519 keys are not supported for Windows instances.
     If the ``PublicKeyMaterial`` property is specified, the ``KeyType`` property is ignored, and the key type is inferred from the ``PublicKeyMaterial`` value.
     Default: ``rsa``
     */
  KeyType?: "rsa" | "ed25519";
  /**
   * The public key material. The ``PublicKeyMaterial`` property is used to import a key pair. If this property is not specified, then a new key pair will be created.
   */
  PublicKeyMaterial?: string;
  /**
   * The tags to apply to the key pair.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::KeyPair`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#aws-resource-ec2-keypair-return-values}
 */
export type EC2KeyPairAttributes = {
  KeyFingerprint: string;
  KeyPairId: string;
};
/**
 * Type definition for `AWS::EC2::KeyPair.Tag`.
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-keypair-tag.html}
 */
export type Tag = {
  /**
   * The tag key.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The tag value.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::EC2::KeyPair`.
 * Specifies a key pair for use with an EC2long instance as follows:
  +  To import an existing key pair, include the ``PublicKeyMaterial`` property.
  +  To create a new key pair, omit the ``PublicKeyMaterial`` property.
  
 When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.
 When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: ``/ec2/keypair/{key_pair_id}``. For more information about retrieving private key, and the required permissions, see [Create a key pair using](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the *User Guide*.
 When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
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
