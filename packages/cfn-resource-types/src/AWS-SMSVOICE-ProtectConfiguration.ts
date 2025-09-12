import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::SMSVOICE::ProtectConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-protectconfiguration.html}
 */
export type SMSVOICEProtectConfigurationProperties = {
  /**
   * An array of CountryRule containing the rules for the NumberCapability.
   */
  CountryRuleSet?: CountryRuleSet;
  /**
   * When set to true deletion protection is enabled and protect configuration cannot be deleted. By default this is set to false.
   */
  DeletionProtectionEnabled?: boolean;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SMSVOICE::ProtectConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-protectconfiguration.html#aws-resource-smsvoice-protectconfiguration-return-values}
 */
export type SMSVOICEProtectConfigurationAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the protect configuration.
   */
  Arn: string;
  /**
   * The unique identifier for the protect configuration.
   */
  ProtectConfigurationId: string;
};
/**
 * Type definition for `AWS::SMSVOICE::ProtectConfiguration.CountryRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-protectconfiguration-countryrule.html}
 */
export type CountryRule = {
  /**
   * The two-letter ISO country code
   * @pattern `^[A-Z]{2}$`
   */
  CountryCode: string;
  /**
   * The types of protection that can be used.
   */
  ProtectStatus: "ALLOW" | "BLOCK" | "MONITOR" | "FILTER";
};
/**
 * Type definition for `AWS::SMSVOICE::ProtectConfiguration.CountryRuleSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-protectconfiguration-countryruleset.html}
 */
export type CountryRuleSet = {
  MMS?: CountryRule[];
  SMS?: CountryRule[];
  VOICE?: CountryRule[];
};
/**
 * Type definition for `AWS::SMSVOICE::ProtectConfiguration.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-smsvoice-protectconfiguration-tag.html}
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
 * Resource Type definition for AWS::SMSVOICE::ProtectConfiguration
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-smsvoice-protectconfiguration.html}
 */
export class SMSVOICEProtectConfiguration extends $Resource<
  "AWS::SMSVOICE::ProtectConfiguration",
  SMSVOICEProtectConfigurationProperties,
  SMSVOICEProtectConfigurationAttributes
> {
  public static readonly Type = "AWS::SMSVOICE::ProtectConfiguration";
  constructor(
    logicalId: string,
    properties: SMSVOICEProtectConfigurationProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SMSVOICEProtectConfiguration.Type, properties, options);
  }
}
