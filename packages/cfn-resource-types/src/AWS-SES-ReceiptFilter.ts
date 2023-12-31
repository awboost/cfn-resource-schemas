import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::SES::ReceiptFilter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html}
 */
export type SESReceiptFilterProperties = {
  Filter: Filter;
};
/**
 * Attribute type definition for `AWS::SES::ReceiptFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#aws-resource-ses-receiptfilter-return-values}
 */
export type SESReceiptFilterAttributes = {
  Id: string;
};
/**
 * Type definition for `AWS::SES::ReceiptFilter.Filter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html}
 */
export type Filter = {
  IpFilter: IpFilter;
  Name?: string;
};
/**
 * Type definition for `AWS::SES::ReceiptFilter.IpFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html}
 */
export type IpFilter = {
  Cidr: string;
  Policy: string;
};
/**
 * Resource Type definition for AWS::SES::ReceiptFilter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html}
 */
export class SESReceiptFilter extends $Resource<
  "AWS::SES::ReceiptFilter",
  SESReceiptFilterProperties,
  SESReceiptFilterAttributes
> {
  public static readonly Type = "AWS::SES::ReceiptFilter";
  public static readonly AttributeNames = ["Id" as const];
  constructor(
    logicalId: string,
    properties: SESReceiptFilterProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SESReceiptFilter.Type,
      properties,
      SESReceiptFilter.AttributeNames,
      options,
    );
  }
}
