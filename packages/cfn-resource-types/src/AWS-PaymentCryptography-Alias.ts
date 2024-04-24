import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::PaymentCryptography::Alias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html}
 */
export type PaymentCryptographyAliasProperties = {
  /**
   * @minLength `7`
   * @maxLength `256`
   * @pattern `^alias/[a-zA-Z0-9/_-]+$`
   */
  AliasName: string;
  /**
   * @minLength `70`
   * @maxLength `150`
   * @pattern `^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:key/[0-9a-zA-Z]{16,64}$`
   */
  KeyArn?: string;
};
/**
 * Definition of AWS::PaymentCryptography::Alias Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html}
 */
export class PaymentCryptographyAlias extends $Resource<
  "AWS::PaymentCryptography::Alias",
  PaymentCryptographyAliasProperties,
  Record<string, never>
> {
  public static readonly Type = "AWS::PaymentCryptography::Alias";
  constructor(
    logicalId: string,
    properties: PaymentCryptographyAliasProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, PaymentCryptographyAlias.Type, properties, options);
  }
}
