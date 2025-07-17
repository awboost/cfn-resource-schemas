import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::EvaluationForm`.
 * Creates an evaluation form for the specified CON instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html}
 */
export type ConnectEvaluationFormProperties = {
  AutoEvaluationConfiguration?: AutoEvaluationConfiguration;
  /**
   * The description of the evaluation form.
   *Length Constraints*: Minimum length of 0. Maximum length of 1024.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
   *Minimum size*: 1
   *Maximum size*: 100
   * @minLength `1`
   * @maxLength `200`
   */
  Items: EvaluationFormBaseItem[];
  /**
   * A scoring strategy of the evaluation form.
   */
  ScoringStrategy?: ScoringStrategy;
  /**
   * The status of the evaluation form.
   *Allowed values*: ``DRAFT`` | ``ACTIVE``
   */
  Status: "DRAFT" | "ACTIVE";
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * A title of the evaluation form.
   * @minLength `1`
   * @maxLength `128`
   */
  Title: string;
};
/**
 * Attribute type definition for `AWS::Connect::EvaluationForm`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#aws-resource-connect-evaluationform-return-values}
 */
export type ConnectEvaluationFormAttributes = {
  /**
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*evaluation-form/[-a-zA-Z0-9]*$`
   */
  EvaluationFormArn: string;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.AutoEvaluationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-autoevaluationconfiguration.html}
 */
export type AutoEvaluationConfiguration = {
  Enabled?: boolean;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormBaseItem`.
 * An item at the root level. All items must be sections.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformbaseitem.html}
 */
export type EvaluationFormBaseItem = {
  /**
   * A subsection or inner section of an item.
   */
  Section: EvaluationFormSection;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormItem`.
 * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html}
 */
export type EvaluationFormItem = {
  /**
   * The information of the question.
   */
  Question?: EvaluationFormQuestion;
  /**
   * The information of the section.
   */
  Section?: EvaluationFormSection;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionAutomation`.
 * Information about the automation configuration in numeric questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html}
 */
export type EvaluationFormNumericQuestionAutomation = {
  AnswerSource?: any;
  /**
   * The property value of the automation.
   */
  PropertyValue?: NumericQuestionPropertyValueAutomation;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionOption`.
 * Information about the option range used for scoring in numeric questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html}
 */
export type EvaluationFormNumericQuestionOption = {
  /**
   * The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   */
  AutomaticFail?: boolean;
  /**
   * The maximum answer value of the range option.
   */
  MaxValue: number;
  /**
   * The minimum answer value of the range option.
   */
  MinValue: number;
  /**
   * The score assigned to answer values within the range option.
   *Minimum*: 0
   *Maximum*: 10
   * @min `0`
   * @max `10`
   */
  Score?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionProperties`.
 * Information about properties for a numeric question in an evaluation form.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html}
 */
export type EvaluationFormNumericQuestionProperties = {
  /**
   * The automation properties of the numeric question.
   */
  Automation?: EvaluationFormNumericQuestionAutomation;
  /**
   * The maximum answer value.
   */
  MaxValue: number;
  /**
   * The minimum answer value.
   */
  MinValue: number;
  /**
   * The scoring options of the numeric question.
   * @minLength `1`
   * @maxLength `10`
   */
  Options?: EvaluationFormNumericQuestionOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormQuestion`.
 * Information about a question from an evaluation form.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html}
 */
export type EvaluationFormQuestion = {
  /**
   * The instructions of the section.
   *Length Constraints*: Minimum length of 0. Maximum length of 1024.
   * @maxLength `1024`
   */
  Instructions?: string;
  /**
   * The flag to enable not applicable answers to the question.
   */
  NotApplicableEnabled?: boolean;
  /**
   * The type of the question.
   *Allowed values*: ``NUMERIC`` | ``SINGLESELECT`` | ``TEXT``
   */
  QuestionType: "NUMERIC" | "SINGLESELECT" | "TEXT";
  /**
   * The properties of the type of question. Text questions do not have to define question type properties.
   */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;
  /**
   * The identifier of the question. An identifier must be unique within the evaluation form.
   *Length Constraints*: Minimum length of 1. Maximum length of 40.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The title of the question.
   *Length Constraints*: Minimum length of 1. Maximum length of 350.
   * @minLength `1`
   * @maxLength `350`
   */
  Title: string;
  /**
   * The scoring weight of the section.
   *Minimum*: 0
   *Maximum*: 100
   * @min `0`
   * @max `100`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormQuestionTypeProperties`.
 * Information about properties for a question in an evaluation form. The question type properties must be either for a numeric question or a single select question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html}
 */
export type EvaluationFormQuestionTypeProperties = {
  /**
   * The properties of the numeric question.
   */
  Numeric?: EvaluationFormNumericQuestionProperties;
  /**
   * The properties of the numeric question.
   */
  SingleSelect?: EvaluationFormSingleSelectQuestionProperties;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSection`.
 * Information about a section from an evaluation form. A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html}
 */
export type EvaluationFormSection = {
  /**
   * The instructions of the section.
   * @maxLength `1024`
   */
  Instructions?: string;
  /**
   * The items of the section.
   *Minimum*: 1
   * @minLength `1`
   * @maxLength `200`
   */
  Items?: EvaluationFormItem[];
  /**
   * The identifier of the section. An identifier must be unique within the evaluation form.
   *Length Constraints*: Minimum length of 1. Maximum length of 40.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The title of the section.
   *Length Constraints*: Minimum length of 1. Maximum length of 128.
   * @minLength `1`
   * @maxLength `128`
   */
  Title: string;
  /**
   * The scoring weight of the section.
   *Minimum*: 0
   *Maximum*: 100
   * @min `0`
   * @max `100`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomation`.
 * Information about the automation configuration in single select questions. Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html}
 */
export type EvaluationFormSingleSelectQuestionAutomation = {
  /**
   * The identifier of the default answer option, when none of the automation options match the criteria.
   *Length Constraints*: Minimum length of 1. Maximum length of 40.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  DefaultOptionRefId?: string;
  /**
   * The automation options of the single select question.
   *Minimum*: 1
   *Maximum*: 20
   * @minLength `1`
   * @maxLength `20`
   */
  Options: EvaluationFormSingleSelectQuestionAutomationOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomationOption`.
 * The automation options of the single select question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html}
 */
export type EvaluationFormSingleSelectQuestionAutomationOption = {
  /**
   * The automation option based on a rule category for the single select question.
   */
  RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionOption`.
 * Information about the automation configuration in single select questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html}
 */
export type EvaluationFormSingleSelectQuestionOption = {
  /**
   * The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   */
  AutomaticFail?: boolean;
  /**
   * The identifier of the answer option. An identifier must be unique within the question.
   *Length Constraints*: Minimum length of 1. Maximum length of 40.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The score assigned to the answer option.
   *Minimum*: 0
   *Maximum*: 10
   * @min `0`
   * @max `10`
   */
  Score?: number;
  /**
   * The title of the answer option.
   *Length Constraints*: Minimum length of 1. Maximum length of 128.
   * @minLength `1`
   * @maxLength `128`
   */
  Text: string;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionProperties`.
 * Information about the options in single select questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html}
 */
export type EvaluationFormSingleSelectQuestionProperties = {
  /**
   * The display mode of the single select question.
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation;
  /**
   * The display mode of the single select question.
   *Allowed values*: ``DROPDOWN`` | ``RADIO``
   */
  DisplayAs?: "DROPDOWN" | "RADIO";
  /**
   * The answer options of the single select question.
   *Minimum*: 2
   *Maximum*: 256
   * @minLength `2`
   * @maxLength `256`
   */
  Options: EvaluationFormSingleSelectQuestionOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.NumericQuestionPropertyValueAutomation`.
 * Information about the property value used in automation of a numeric questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html}
 */
export type NumericQuestionPropertyValueAutomation = {
  /**
   * The property label of the automation.
   */
  Label:
    | "OVERALL_CUSTOMER_SENTIMENT_SCORE"
    | "OVERALL_AGENT_SENTIMENT_SCORE"
    | "NON_TALK_TIME"
    | "NON_TALK_TIME_PERCENTAGE"
    | "NUMBER_OF_INTERRUPTIONS"
    | "CONTACT_DURATION"
    | "AGENT_INTERACTION_DURATION"
    | "CUSTOMER_HOLD_TIME"
    | "LONGEST_HOLD_DURATION"
    | "NUMBER_OF_HOLDS"
    | "AGENT_INTERACTION_AND_HOLD_DURATION";
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.ScoringStrategy`.
 * A scoring strategy of the evaluation form.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html}
 */
export type ScoringStrategy = {
  /**
   * The scoring mode of the evaluation form.
   *Allowed values*: ``QUESTION_ONLY`` | ``SECTION_ONLY``
   */
  Mode: "QUESTION_ONLY" | "SECTION_ONLY";
  /**
   * The scoring status of the evaluation form.
   *Allowed values*: ``ENABLED`` | ``DISABLED``
   */
  Status: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.SingleSelectQuestionRuleCategoryAutomation`.
 * Information about the automation option based on a rule category for a single select question.
 *Length Constraints*: Minimum length of 1. Maximum length of 50.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html}
 */
export type SingleSelectQuestionRuleCategoryAutomation = {
  /**
   * The category name, as defined in Rules.
   *Minimum*: 1
   *Maximum*: 50
   * @minLength `1`
   * @maxLength `50`
   */
  Category: string;
  /**
   * The condition to apply for the automation option. If the condition is PRESENT, then the option is applied when the contact data includes the category. Similarly, if the condition is NOT_PRESENT, then the option is applied when the contact data does not include the category.
   *Allowed values*: ``PRESENT`` | ``NOT_PRESENT``
   *Maximum*: 50
   */
  Condition: "PRESENT" | "NOT_PRESENT";
  /**
   * The identifier of the answer option. An identifier must be unique within the question.
   *Length Constraints*: Minimum length of 1. Maximum length of 40.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  OptionRefId: string;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Connect::EvaluationForm`.
 * Creates an evaluation form for the specified CON instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html}
 */
export class ConnectEvaluationForm extends $Resource<
  "AWS::Connect::EvaluationForm",
  ConnectEvaluationFormProperties,
  ConnectEvaluationFormAttributes
> {
  public static readonly Type = "AWS::Connect::EvaluationForm";
  constructor(
    logicalId: string,
    properties: ConnectEvaluationFormProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectEvaluationForm.Type, properties, options);
  }
}
