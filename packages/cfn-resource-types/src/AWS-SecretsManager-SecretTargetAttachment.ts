import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SecretsManager::SecretTargetAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html}
 */
export type SecretsManagerSecretTargetAttachmentProperties = {
  SecretId: string;
  TargetId: string;
  TargetType: string;
};
/**
 * Attribute type definition for `AWS::SecretsManager::SecretTargetAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html#aws-resource-secretsmanager-secrettargetattachment-return-values}
 */
export type SecretsManagerSecretTargetAttachmentAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::SecretsManager::SecretTargetAttachment
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html}
 */
export class SecretsManagerSecretTargetAttachment extends $Resource<
  "AWS::SecretsManager::SecretTargetAttachment",
  SecretsManagerSecretTargetAttachmentProperties,
  SecretsManagerSecretTargetAttachmentAttributes
> {
  public static readonly Type = "AWS::SecretsManager::SecretTargetAttachment";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SecretsManagerSecretTargetAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecretsManagerSecretTargetAttachment.Type,
      properties,
      SecretsManagerSecretTargetAttachment.AttributeNames,
      options,
    );
  }
}
