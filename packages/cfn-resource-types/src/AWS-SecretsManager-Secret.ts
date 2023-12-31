import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SecretsManager::Secret
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html}
 */
export type SecretsManagerSecretProperties = {
  /**
   * (Optional) Specifies a user-provided description of the secret.
   */
  Description?: string;
  /**
   * (Optional) Specifies text data that you want to encrypt and store in this new version of the secret.
   */
  GenerateSecretString?: GenerateSecretString;
  /**
   * (Optional) Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) used to encrypt the SecretString.
   */
  KmsKeyId?: string;
  /**
   * The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy.
   */
  Name?: string;
  /**
   * (Optional) A list of ReplicaRegion objects. The ReplicaRegion type consists of a Region (required) and the KmsKeyId which can be an ARN, Key ID, or Alias.
   */
  ReplicaRegions?: ReplicaRegion[];
  /**
   * (Optional) Specifies text data that you want to encrypt and store in this new version of the secret.
   */
  SecretString?: string;
  /**
   * The list of user-defined tags associated with the secret. Use tags to manage your AWS resources. For additional information about tags, see TagResource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SecretsManager::Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secret.html#aws-resource-secretsmanager-secret-return-values}
 */
export type SecretsManagerSecretAttributes = {
  /**
   * secret Id, the Arn of the resource.
   */
  Id: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.GenerateSecretString`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-generatesecretstring.html}
 */
export type GenerateSecretString = {
  /**
   * A string that excludes characters in the generated password. By default, all characters from the included sets can be used. The string can be a minimum length of 0 characters and a maximum length of 7168 characters.
   */
  ExcludeCharacters?: string;
  /**
   * Specifies the generated password should not include lowercase letters. By default, ecrets Manager disables this parameter, and the generated password can include lowercase False, and the generated password can include lowercase letters.
   */
  ExcludeLowercase?: boolean;
  /**
   * Specifies that the generated password should exclude digits. By default, Secrets Manager does not enable the parameter, False, and the generated password can include digits.
   */
  ExcludeNumbers?: boolean;
  /**
   * Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included.
   */
  ExcludePunctuation?: boolean;
  /**
   * Specifies that the generated password should not include uppercase letters. The default behavior is False, and the generated password can include uppercase letters.
   */
  ExcludeUppercase?: boolean;
  /**
   * The JSON key name used to add the generated password to the JSON structure specified by the SecretStringTemplate parameter. If you specify this parameter, then you must also specify SecretStringTemplate.
   */
  GenerateStringKey?: string;
  /**
   * Specifies that the generated password can include the space character. By default, Secrets Manager disables this parameter, and the generated password doesn't include space
   */
  IncludeSpace?: boolean;
  /**
   * The desired length of the generated password. The default value if you do not include this parameter is 32 characters.
   */
  PasswordLength?: number;
  /**
   * Specifies whether the generated password must include at least one of every allowed character type. By default, Secrets Manager enables this parameter, and the generated password includes at least one of every character type.
   */
  RequireEachIncludedType?: boolean;
  /**
   * A properly structured JSON string that the generated password can be added to. If you specify this parameter, then you must also specify GenerateStringKey.
   */
  SecretStringTemplate?: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.ReplicaRegion`.
 * A custom type that specifies a Region and the KmsKeyId for a replica secret.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-replicaregion.html}
 */
export type ReplicaRegion = {
  /**
   * The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses aws/secretsmanager.
   */
  KmsKeyId?: string;
  /**
   * (Optional) A string that represents a Region, for example "us-east-1".
   */
  Region: string;
};
/**
 * Type definition for `AWS::SecretsManager::Secret.Tag`.
 * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-secret-tag.html}
 */
export type Tag = {
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length.
   */
  Key: string;
  /**
   * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws.
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SecretsManager::Secret
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
