import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Wisdom::AIGuardrail Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html}
 */
export type WisdomAIGuardrailProperties = {
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantId: string;
  /**
   * Messaging for when violations are detected in text
   * @minLength `1`
   * @maxLength `500`
   */
  BlockedInputMessaging: string;
  /**
   * Messaging for when violations are detected in text
   * @minLength `1`
   * @maxLength `500`
   */
  BlockedOutputsMessaging: string;
  /**
   * Content policy config for a guardrail.
   */
  ContentPolicyConfig?: AIGuardrailContentPolicyConfig;
  /**
   * Contextual grounding policy config for a guardrail.
   */
  ContextualGroundingPolicyConfig?: AIGuardrailContextualGroundingPolicyConfig;
  /**
   * Description of the guardrail or its version
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9\s_.,-]+`
   */
  Name?: string;
  /**
   * Sensitive information policy config for a guardrail.
   */
  SensitiveInformationPolicyConfig?: AIGuardrailSensitiveInformationPolicyConfig;
  Tags?: Tags;
  /**
   * Topic policy config for a guardrail.
   */
  TopicPolicyConfig?: AIGuardrailTopicPolicyConfig;
  /**
   * Word policy config for a guardrail.
   */
  WordPolicyConfig?: AIGuardrailWordPolicyConfig;
};
/**
 * Attribute type definition for `AWS::Wisdom::AIGuardrail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#aws-resource-wisdom-aiguardrail-return-values}
 */
export type WisdomAIGuardrailAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AIGuardrailArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}(:[A-Z0-9_$]+){0,1}$`
   */
  AIGuardrailId: string;
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
   */
  AssistantArn: string;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.AIGuardrailContentPolicyConfig`.
 * Content policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-aiguardrailcontentpolicyconfig.html}
 */
export type AIGuardrailContentPolicyConfig = {
  /**
   * List of content filter configs in content policy.
   * @minLength `1`
   * @maxLength `6`
   */
  FiltersConfig: GuardrailContentFilterConfig[];
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.AIGuardrailContextualGroundingPolicyConfig`.
 * Contextual grounding policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-aiguardrailcontextualgroundingpolicyconfig.html}
 */
export type AIGuardrailContextualGroundingPolicyConfig = {
  /**
   * List of contextual grounding filter configs.
   * @minLength `1`
   */
  FiltersConfig: GuardrailContextualGroundingFilterConfig[];
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.AIGuardrailSensitiveInformationPolicyConfig`.
 * Sensitive information policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-aiguardrailsensitiveinformationpolicyconfig.html}
 */
export type AIGuardrailSensitiveInformationPolicyConfig = {
  /**
   * List of entities.
   * @minLength `1`
   */
  PiiEntitiesConfig?: GuardrailPiiEntityConfig[];
  /**
   * List of regex.
   * @minLength `1`
   */
  RegexesConfig?: GuardrailRegexConfig[];
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.AIGuardrailTopicPolicyConfig`.
 * Topic policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-aiguardrailtopicpolicyconfig.html}
 */
export type AIGuardrailTopicPolicyConfig = {
  /**
   * List of topic configs in topic policy.
   * @minLength `1`
   */
  TopicsConfig: GuardrailTopicConfig[];
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.AIGuardrailWordPolicyConfig`.
 * Word policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-aiguardrailwordpolicyconfig.html}
 */
export type AIGuardrailWordPolicyConfig = {
  /**
   * A config for the list of managed words.
   */
  ManagedWordListsConfig?: GuardrailManagedWordsConfig[];
  /**
   * List of custom word configs.
   * @minLength `1`
   */
  WordsConfig?: GuardrailWordConfig[];
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailContentFilterConfig`.
 * Content filter config in content policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailcontentfilterconfig.html}
 */
export type GuardrailContentFilterConfig = {
  /**
   * Strength for filters
   */
  InputStrength: GuardrailFilterStrength;
  /**
   * Strength for filters
   */
  OutputStrength: GuardrailFilterStrength;
  /**
   * Type of text to text filter in content policy
   */
  Type: GuardrailContentFilterType;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailContentFilterType`.
 * Type of text to text filter in content policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailcontentfiltertype.html}
 */
export type GuardrailContentFilterType =
  | "SEXUAL"
  | "VIOLENCE"
  | "HATE"
  | "INSULTS"
  | "MISCONDUCT"
  | "PROMPT_ATTACK";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailContextualGroundingFilterConfig`.
 * A config for grounding filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailcontextualgroundingfilterconfig.html}
 */
export type GuardrailContextualGroundingFilterConfig = {
  /**
   * The threshold for this filter.
   * @min `0`
   */
  Threshold: number;
  /**
   * Type of contextual grounding filter
   */
  Type: GuardrailContextualGroundingFilterType;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailContextualGroundingFilterType`.
 * Type of contextual grounding filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailcontextualgroundingfiltertype.html}
 */
export type GuardrailContextualGroundingFilterType = "GROUNDING" | "RELEVANCE";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailFilterStrength`.
 * Strength for filters
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailfilterstrength.html}
 */
export type GuardrailFilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailManagedWordsConfig`.
 * A managed words config.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailmanagedwordsconfig.html}
 */
export type GuardrailManagedWordsConfig = {
  /**
   * Options for managed words.
   */
  Type: GuardrailManagedWordsType;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailManagedWordsType`.
 * Options for managed words.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailmanagedwordstype.html}
 */
export type GuardrailManagedWordsType = "PROFANITY";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailPiiEntityConfig`.
 * Pii entity configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailpiientityconfig.html}
 */
export type GuardrailPiiEntityConfig = {
  /**
   * Options for sensitive information action.
   */
  Action: GuardrailSensitiveInformationAction;
  /**
   * The currently supported PII entities
   */
  Type: GuardrailPiiEntityType;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailPiiEntityType`.
 * The currently supported PII entities
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailpiientitytype.html}
 */
export type GuardrailPiiEntityType =
  | "ADDRESS"
  | "AGE"
  | "AWS_ACCESS_KEY"
  | "AWS_SECRET_KEY"
  | "CA_HEALTH_NUMBER"
  | "CA_SOCIAL_INSURANCE_NUMBER"
  | "CREDIT_DEBIT_CARD_CVV"
  | "CREDIT_DEBIT_CARD_EXPIRY"
  | "CREDIT_DEBIT_CARD_NUMBER"
  | "DRIVER_ID"
  | "EMAIL"
  | "INTERNATIONAL_BANK_ACCOUNT_NUMBER"
  | "IP_ADDRESS"
  | "LICENSE_PLATE"
  | "MAC_ADDRESS"
  | "NAME"
  | "PASSWORD"
  | "PHONE"
  | "PIN"
  | "SWIFT_CODE"
  | "UK_NATIONAL_HEALTH_SERVICE_NUMBER"
  | "UK_NATIONAL_INSURANCE_NUMBER"
  | "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"
  | "URL"
  | "USERNAME"
  | "US_BANK_ACCOUNT_NUMBER"
  | "US_BANK_ROUTING_NUMBER"
  | "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"
  | "US_PASSPORT_NUMBER"
  | "US_SOCIAL_SECURITY_NUMBER"
  | "VEHICLE_IDENTIFICATION_NUMBER";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailRegexConfig`.
 * A regex configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailregexconfig.html}
 */
export type GuardrailRegexConfig = {
  /**
   * Options for sensitive information action.
   */
  Action: GuardrailSensitiveInformationAction;
  /**
   * The regex description.
   * @minLength `1`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * The regex name.
   * @minLength `1`
   * @maxLength `100`
   */
  Name: string;
  /**
   * The regex pattern.
   * @minLength `1`
   */
  Pattern: string;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailSensitiveInformationAction`.
 * Options for sensitive information action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailsensitiveinformationaction.html}
 */
export type GuardrailSensitiveInformationAction = "BLOCK" | "ANONYMIZE";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailTopicConfig`.
 * Topic config in topic policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailtopicconfig.html}
 */
export type GuardrailTopicConfig = {
  /**
   * Definition of topic in topic policy
   * @minLength `1`
   * @maxLength `200`
   */
  Definition: string;
  /**
   * List of text examples
   * @minLength `0`
   */
  Examples?: string[];
  /**
   * Name of topic in topic policy
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[0-9a-zA-Z-_ !?.]+$`
   */
  Name: string;
  /**
   * Type of topic in a policy
   */
  Type: GuardrailTopicType;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailTopicType`.
 * Type of topic in a policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailtopictype.html}
 */
export type GuardrailTopicType = "DENY";
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.GuardrailWordConfig`.
 * A custom word config.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-guardrailwordconfig.html}
 */
export type GuardrailWordConfig = {
  /**
   * The custom word text.
   * @minLength `1`
   */
  Text: string;
};
/**
 * Type definition for `AWS::Wisdom::AIGuardrail.Tags`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-aiguardrail-tags.html}
 */
export type Tags = Record<string, string>;
/**
 * Definition of AWS::Wisdom::AIGuardrail Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html}
 */
export class WisdomAIGuardrail extends $Resource<
  "AWS::Wisdom::AIGuardrail",
  WisdomAIGuardrailProperties,
  WisdomAIGuardrailAttributes
> {
  public static readonly Type = "AWS::Wisdom::AIGuardrail";
  constructor(
    logicalId: string,
    properties: WisdomAIGuardrailProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, WisdomAIGuardrail.Type, properties, options);
  }
}
