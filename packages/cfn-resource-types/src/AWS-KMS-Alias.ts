import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * The AWS::KMS::Alias resource specifies a display name for an AWS KMS key in AWS Key Management Service (AWS KMS). You can use an alias to identify an AWS KMS key in cryptographic operations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html}
 */
export type KMSAliasProperties = {
  /**
   * Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed keys.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(alias/)[a-zA-Z0-9:/_-]+$`
   */
  AliasName: string;
  /**
   * Identifies the AWS KMS key to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
   * @minLength `1`
   * @maxLength `256`
   */
  TargetKeyId: string;
};
/**
 * The AWS::KMS::Alias resource specifies a display name for an AWS KMS key in AWS Key Management Service (AWS KMS). You can use an alias to identify an AWS KMS key in cryptographic operations.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html}
 */
export class KMSAlias extends $Resource<
  "AWS::KMS::Alias",
  KMSAliasProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::KMS::Alias";
  constructor(
    logicalId: string,
    properties: KMSAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, KMSAlias.Type, properties, options);
  }
}
