import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Bedrock::Guardrail Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html}
 */
export type BedrockGuardrailProperties = {
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
  ContentPolicyConfig?: ContentPolicyConfig;
  /**
   * Contextual grounding policy config for a guardrail.
   */
  ContextualGroundingPolicyConfig?: ContextualGroundingPolicyConfig;
  /**
   * Description of the guardrail or its version
   * @minLength `1`
   * @maxLength `200`
   */
  Description?: string;
  /**
   * The KMS key with which the guardrail was encrypted at rest
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   */
  KmsKeyArn?: string;
  /**
   * Name of the guardrail
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[0-9a-zA-Z-_]+$`
   */
  Name: string;
  /**
   * Sensitive information policy config for a guardrail.
   */
  SensitiveInformationPolicyConfig?: SensitiveInformationPolicyConfig;
  /**
   * List of Tags
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * Topic policy config for a guardrail.
   */
  TopicPolicyConfig?: TopicPolicyConfig;
  /**
   * Word policy config for a guardrail.
   */
  WordPolicyConfig?: WordPolicyConfig;
};
/**
 * Attribute type definition for `AWS::Bedrock::Guardrail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#aws-resource-bedrock-guardrail-return-values}
 */
export type BedrockGuardrailAttributes = {
  /**
   * Time Stamp
   */
  CreatedAt: string;
  /**
   * List of failure recommendations
   * @maxLength `100`
   */
  FailureRecommendations: string[];
  /**
   * Arn representation for the guardrail
   * @maxLength `2048`
   * @pattern `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:guardrail/[a-z0-9]+$`
   */
  GuardrailArn: string;
  /**
   * Unique id for the guardrail
   * @maxLength `64`
   * @pattern `^[a-z0-9]+$`
   */
  GuardrailId: string;
  /**
   * Status of the guardrail
   */
  Status: GuardrailStatus;
  /**
   * List of status reasons
   * @maxLength `100`
   */
  StatusReasons: string[];
  /**
   * Time Stamp
   */
  UpdatedAt: string;
  /**
   * Guardrail version
   * @pattern `^(([1-9][0-9]{0,7})|(DRAFT))$`
   */
  Version: string;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContentFilterConfig`.
 * Content filter config in content policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfilterconfig.html}
 */
export type ContentFilterConfig = {
  /**
   * List of modalities
   * @minLength `1`
   */
  InputModalities?: Modality[];
  /**
   * Strength for filters
   */
  InputStrength: FilterStrength;
  /**
   * List of modalities
   * @minLength `1`
   */
  OutputModalities?: Modality[];
  /**
   * Strength for filters
   */
  OutputStrength: FilterStrength;
  /**
   * Type of filter in content policy
   */
  Type: ContentFilterType;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContentFilterType`.
 * Type of filter in content policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentfiltertype.html}
 */
export type ContentFilterType =
  | "SEXUAL"
  | "VIOLENCE"
  | "HATE"
  | "INSULTS"
  | "MISCONDUCT"
  | "PROMPT_ATTACK";
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContentPolicyConfig`.
 * Content policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contentpolicyconfig.html}
 */
export type ContentPolicyConfig = {
  /**
   * List of content filter configs in content policy.
   * @minLength `1`
   * @maxLength `6`
   */
  FiltersConfig: ContentFilterConfig[];
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContextualGroundingFilterConfig`.
 * A config for grounding filter.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingfilterconfig.html}
 */
export type ContextualGroundingFilterConfig = {
  /**
   * The threshold for this filter.
   * @min `0`
   */
  Threshold: number;
  /**
   * Type of contextual grounding filter
   */
  Type: ContextualGroundingFilterType;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContextualGroundingFilterType`.
 * Type of contextual grounding filter
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingfiltertype.html}
 */
export type ContextualGroundingFilterType = "GROUNDING" | "RELEVANCE";
/**
 * Type definition for `AWS::Bedrock::Guardrail.ContextualGroundingPolicyConfig`.
 * Contextual grounding policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-contextualgroundingpolicyconfig.html}
 */
export type ContextualGroundingPolicyConfig = {
  /**
   * List of contextual grounding filter configs.
   * @minLength `1`
   */
  FiltersConfig: ContextualGroundingFilterConfig[];
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.FilterStrength`.
 * Strength for filters
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-filterstrength.html}
 */
export type FilterStrength = "NONE" | "LOW" | "MEDIUM" | "HIGH";
/**
 * Type definition for `AWS::Bedrock::Guardrail.GuardrailStatus`.
 * Status of the guardrail
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-guardrailstatus.html}
 */
export type GuardrailStatus =
  | "CREATING"
  | "UPDATING"
  | "VERSIONING"
  | "READY"
  | "FAILED"
  | "DELETING";
/**
 * Type definition for `AWS::Bedrock::Guardrail.ManagedWordsConfig`.
 * A managed words config.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordsconfig.html}
 */
export type ManagedWordsConfig = {
  /**
   * Options for managed words.
   */
  Type: ManagedWordsType;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.ManagedWordsType`.
 * Options for managed words.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-managedwordstype.html}
 */
export type ManagedWordsType = "PROFANITY";
/**
 * Type definition for `AWS::Bedrock::Guardrail.Modality`.
 * Modality for filters
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-modality.html}
 */
export type Modality = "TEXT" | "IMAGE";
/**
 * Type definition for `AWS::Bedrock::Guardrail.PiiEntityConfig`.
 * Pii entity configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientityconfig.html}
 */
export type PiiEntityConfig = {
  /**
   * Options for sensitive information action.
   */
  Action: SensitiveInformationAction;
  /**
   * The currently supported PII entities
   */
  Type: PiiEntityType;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.PiiEntityType`.
 * The currently supported PII entities
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-piientitytype.html}
 */
export type PiiEntityType =
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
 * Type definition for `AWS::Bedrock::Guardrail.RegexConfig`.
 * A regex configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-regexconfig.html}
 */
export type RegexConfig = {
  /**
   * Options for sensitive information action.
   */
  Action: SensitiveInformationAction;
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
 * Type definition for `AWS::Bedrock::Guardrail.SensitiveInformationAction`.
 * Options for sensitive information action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationaction.html}
 */
export type SensitiveInformationAction = "BLOCK" | "ANONYMIZE";
/**
 * Type definition for `AWS::Bedrock::Guardrail.SensitiveInformationPolicyConfig`.
 * Sensitive information policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html}
 */
export type SensitiveInformationPolicyConfig = {
  /**
   * List of entities.
   * @minLength `1`
   */
  PiiEntitiesConfig?: PiiEntityConfig[];
  /**
   * List of regex.
   * @minLength `1`
   */
  RegexesConfig?: RegexConfig[];
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.Tag`.
 * Definition of the key/value pair for a tag
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-tag.html}
 */
export type Tag = {
  /**
   * Tag Key
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Key: string;
  /**
   * Tag Value
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9\s._:/=+@-]*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.TopicConfig`.
 * Topic config in topic policy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicconfig.html}
 */
export type TopicConfig = {
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
  Type: TopicType;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.TopicPolicyConfig`.
 * Topic policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topicpolicyconfig.html}
 */
export type TopicPolicyConfig = {
  /**
   * List of topic configs in topic policy.
   * @minLength `1`
   */
  TopicsConfig: TopicConfig[];
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.TopicType`.
 * Type of topic in a policy
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-topictype.html}
 */
export type TopicType = "DENY";
/**
 * Type definition for `AWS::Bedrock::Guardrail.WordConfig`.
 * A custom word config.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordconfig.html}
 */
export type WordConfig = {
  /**
   * The custom word text.
   * @minLength `1`
   */
  Text: string;
};
/**
 * Type definition for `AWS::Bedrock::Guardrail.WordPolicyConfig`.
 * Word policy config for a guardrail.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-guardrail-wordpolicyconfig.html}
 */
export type WordPolicyConfig = {
  /**
   * A config for the list of managed words.
   */
  ManagedWordListsConfig?: ManagedWordsConfig[];
  /**
   * List of custom word configs.
   * @minLength `1`
   */
  WordsConfig?: WordConfig[];
};
/**
 * Definition of AWS::Bedrock::Guardrail Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html}
 */
export class BedrockGuardrail extends $Resource<
  "AWS::Bedrock::Guardrail",
  BedrockGuardrailProperties,
  BedrockGuardrailAttributes
> {
  public static readonly Type = "AWS::Bedrock::Guardrail";
  constructor(
    logicalId: string,
    properties: BedrockGuardrailProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, BedrockGuardrail.Type, properties, options);
  }
}
