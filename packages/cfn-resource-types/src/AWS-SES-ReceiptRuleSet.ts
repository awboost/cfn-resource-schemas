import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SES::ReceiptRuleSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html}
 */
export type SESReceiptRuleSetProperties = {
  RuleSetName?: string;
};
/**
 * Attribute type definition for `AWS::SES::ReceiptRuleSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html#aws-resource-ses-receiptruleset-return-values}
 */
export type SESReceiptRuleSetAttributes = {
  Id: string;
};
/**
 * Resource Type definition for AWS::SES::ReceiptRuleSet
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html}
 */
export class SESReceiptRuleSet extends $Resource<
  "AWS::SES::ReceiptRuleSet",
  SESReceiptRuleSetProperties,
  SESReceiptRuleSetAttributes
> {
  public static readonly Type = "AWS::SES::ReceiptRuleSet";
  constructor(
    logicalId: string,
    properties: SESReceiptRuleSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESReceiptRuleSet.Type, properties, options);
  }
}
