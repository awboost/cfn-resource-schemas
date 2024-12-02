import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Invoicing::InvoiceUnit`.
 * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you to separate AWS account costs and configures your invoice for each business entity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html}
 */
export type InvoicingInvoiceUnitProperties = {
  /**
   * @minLength `0`
   * @maxLength `500`
   * @pattern `^[\S\s]*$`
   */
  Description?: string;
  /**
   * @minLength `12`
   * @maxLength `12`
   * @pattern `^\d{12}$`
   */
  InvoiceReceiver: string;
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^(?! )[\p{L}\p{N}\p{Z}-_]*(?<! )$`
   */
  Name: string;
  ResourceTags?: ResourceTag[];
  Rule: Rule;
  TaxInheritanceDisabled?: boolean;
};
/**
 * Attribute type definition for `AWS::Invoicing::InvoiceUnit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#aws-resource-invoicing-invoiceunit-return-values}
 */
export type InvoicingInvoiceUnitAttributes = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   */
  InvoiceUnitArn: string;
  LastModified: number;
};
/**
 * Type definition for `AWS::Invoicing::InvoiceUnit.ResourceTag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-invoicing-invoiceunit-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Invoicing::InvoiceUnit.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-invoicing-invoiceunit-rule.html}
 */
export type Rule = {
  LinkedAccounts: string[];
};
/**
 * Resource type definition for `AWS::Invoicing::InvoiceUnit`.
 * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you to separate AWS account costs and configures your invoice for each business entity.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html}
 */
export class InvoicingInvoiceUnit extends $Resource<
  "AWS::Invoicing::InvoiceUnit",
  InvoicingInvoiceUnitProperties,
  InvoicingInvoiceUnitAttributes
> {
  public static readonly Type = "AWS::Invoicing::InvoiceUnit";
  constructor(
    logicalId: string,
    properties: InvoicingInvoiceUnitProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, InvoicingInvoiceUnit.Type, properties, options);
  }
}
