import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::SecretsManager::Secret`.
 * Creates a new secret. A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.
 For RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
 To retrieve a secret in a CFNshort template, use a *dynamic reference*. For more information, see [Retrieve a secret in an resource](https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html).
 A common scenario is to first create a secret with ``GenerateSecretString``, which generates a password, and then use a dynamic reference to retrieve the username and password from the secret to use as credentials for a new database. See the example *Creating a Redshift cluster and a secret for the admin credentials*.
 For information about creating a secret in the c
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html}
 */
export type SecretsManagerSecretProperties = {
  /**
   * The description of the secret.
   */
  Description?: string;
  /**
     * A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use ``SecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
     We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
     */
  GenerateSecretString?: GenerateSecretString;
  /**
     * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by ``alias/``, for example ``alias/aws/secretsmanager``. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
     To use a KMS key in a different account, use the key ARN or the alias ARN.
     If you don't specify this value, then Secrets Manager uses the key ``aws/secretsmanager``. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
     If the secret is in a different AWS account from the credentials calling the API, then you can't use ``aws/secretsmanager`` to encrypt the secret, and you must create and use a customer managed KMS key.
     */
  KmsKeyId?: string;
  /**
     * The name of the new secret.
     The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
     Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
     */
  Name?: string;
  /**
   * A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.
   */
  ReplicaRegions?: ReplicaRegion[];
  /**
   * The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use ``GenerateSecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
   */
  SecretString?: string;
  /**
     * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:
      ``[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]``
     Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
     Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
     If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an ``Access Denied`` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazo
     */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SecretsManager::Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#aws-resource-secretsmanager-secret-return-values}
 */
export type SecretsManagerSecretAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.GenerateSecretString`.
 * Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
 *Required permissions:* ``secretsmanager:GetRandomPassword``. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html}
 */
export type GenerateSecretString = {
  /**
   * A string of the characters that you don't want in the password.
   */
  ExcludeCharacters?: string;
  /**
   * Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.
   */
  ExcludeLowercase?: boolean;
  /**
   * Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.
   */
  ExcludeNumbers?: boolean;
  /**
   * Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.
   */
  ExcludePunctuation?: boolean;
  /**
   * Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.
   */
  ExcludeUppercase?: boolean;
  /**
   * The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the ``SecretStringTemplate`` parameter. If you specify this parameter, then you must also specify ``SecretStringTemplate``.
   */
  GenerateStringKey?: string;
  /**
   * Specifies whether to include the space character. If you include this switch, the password can contain space characters.
   */
  IncludeSpace?: boolean;
  /**
   * The length of the password. If you don't include this parameter, the default length is 32 characters.
   */
  PasswordLength?: number;
  /**
   * Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.
   */
  RequireEachIncludedType?: boolean;
  /**
   * A template that the generated string must match. When you make a change to this property, a new secret version is created.
   */
  SecretStringTemplate?: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.ReplicaRegion`.
 * Specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html}
 */
export type ReplicaRegion = {
  /**
   * The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses ``aws/secretsmanager``.
   */
  KmsKeyId?: string;
  /**
   * A string that represents a ``Region``, for example "us-east-1".
   */
  Region: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.Tag`.
 * A structure that contains information about a tag.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-tag.html}
 */
export type Tag = {
  /**
   * The key identifier, or name, of the tag.
   */
  Key: string;
  /**
   * The string value associated with the key of the tag.
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::SecretsManager::Secret`.
 * Creates a new secret. A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.
 For RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
 To retrieve a secret in a CFNshort template, use a *dynamic reference*. For more information, see [Retrieve a secret in an resource](https://docs.aws.amazon.com/secretsmanager/latest/userguide/cfn-example_reference-secret.html).
 A common scenario is to first create a secret with ``GenerateSecretString``, which generates a password, and then use a dynamic reference to retrieve the username and password from the secret to use as credentials for a new database. See the example *Creating a Redshift cluster and a secret for the admin credentials*.
 For information about creating a secret in the c
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html}
 */
export class SecretsManagerSecret extends $Resource<
  "AWS::SecretsManager::Secret",
  SecretsManagerSecretProperties,
  SecretsManagerSecretAttributes
> {
  public static readonly Type = "AWS::SecretsManager::Secret";
  constructor(
    logicalId: string,
    properties: SecretsManagerSecretProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SecretsManagerSecret.Type, properties, options);
  }
}
