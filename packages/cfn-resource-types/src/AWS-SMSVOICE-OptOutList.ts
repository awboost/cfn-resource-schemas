import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::OptOutList
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-optoutlist.html}
 */
export type SMSVOICEOptOutListProperties = {
  /**
   * The name of the new OptOutList.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[A-Za-z0-9_-]+$`
   */
  OptOutListName?: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SMSVOICE::OptOutList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-optoutlist.html#aws-resource-smsvoice-optoutlist-return-values}
 */
export type SMSVOICEOptOutListAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the OptOutList.
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SMSVOICE::OptOutList.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-optoutlist-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::SMSVOICE::OptOutList
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-optoutlist.html}
 */
export class SMSVOICEOptOutList extends $Resource<
  "AWS::SMSVOICE::OptOutList",
  SMSVOICEOptOutListProperties,
  SMSVOICEOptOutListAttributes
> {
  public static readonly Type = "AWS::SMSVOICE::OptOutList";
  constructor(
    logicalId: string,
    properties: SMSVOICEOptOutListProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICEOptOutList.Type, properties, options);
  }
}
