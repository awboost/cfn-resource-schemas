import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
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
  constructor(
    logicalId: string,
    properties: SecretsManagerSecretTargetAttachmentProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SecretsManagerSecretTargetAttachment.Type,
      properties,
      options,
    );
  }
}
