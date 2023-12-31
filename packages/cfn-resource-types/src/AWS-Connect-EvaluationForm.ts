import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::EvaluationForm
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html}
 */
export type ConnectEvaluationFormProperties = {
  /**
   * The description of the evaluation form.
   * @maxLength `1024`
   */
  Description?: string;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The list of evaluation form items.
   * @minLength `1`
   * @maxLength `200`
   */
  Items: EvaluationFormBaseItem[];
  /**
   * The scoring strategy.
   */
  ScoringStrategy?: ScoringStrategy;
  /**
   * The status of the evaluation form.
   */
  Status: "DRAFT" | "ACTIVE";
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The title of the evaluation form.
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
   * The Amazon Resource Name (ARN) for the evaluation form.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*evaluation-form/[-a-zA-Z0-9]*$`
   */
  EvaluationFormArn: string;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormBaseItem`.
 * The evaluation form base item.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformbaseitem.html}
 */
export type EvaluationFormBaseItem = {
  /**
   * The evaluation form section item
   */
  Section: EvaluationFormSection;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormItem`.
 * The evaluation form item.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformitem.html}
 */
export type EvaluationFormItem = {
  /**
   * The evaluation form question item
   */
  Question?: EvaluationFormQuestion;
  /**
   * The evaluation form section item
   */
  Section?: EvaluationFormSection;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionAutomation`.
 * The automation properties for the numeric question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html}
 */
export type EvaluationFormNumericQuestionAutomation = {
  /**
   * The automation property name of the question.
   */
  PropertyValue: NumericQuestionPropertyValueAutomation;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionOption`.
 * The option ranges used for scoring in numeric questions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html}
 */
export type EvaluationFormNumericQuestionOption = {
  /**
   * The flag to mark the option as automatic fail.
   */
  AutomaticFail?: boolean;
  /**
   * The maximum value of the option range.
   */
  MaxValue: number;
  /**
   * The minimum value of the option range.
   */
  MinValue: number;
  /**
   * The score of the option range.
   * @min `0`
   * @max `10`
   */
  Score?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormNumericQuestionProperties`.
 * The properties of the numeric question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html}
 */
export type EvaluationFormNumericQuestionProperties = {
  /**
   * The automation properties for the numeric question.
   */
  Automation?: EvaluationFormNumericQuestionAutomation;
  /**
   * The maximum value for answers of the question.
   */
  MaxValue: number;
  /**
   * The minimum value for answers of the question.
   */
  MinValue: number;
  /**
   * The list of option ranges used for scoring.
   * @minLength `1`
   * @maxLength `10`
   */
  Options?: EvaluationFormNumericQuestionOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormQuestion`.
 * The evaluation form question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestion.html}
 */
export type EvaluationFormQuestion = {
  /**
   * The instructions for the question.
   * @maxLength `1024`
   */
  Instructions?: string;
  /**
   * The flag to enable not applicable answers to the question.
   */
  NotApplicableEnabled?: boolean;
  /**
   * The type of the question.
   */
  QuestionType: "NUMERIC" | "SINGLESELECT" | "TEXT";
  /**
   * The properties of the question
   */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;
  /**
   * The identifier used to reference the question.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The title of the question.
   * @minLength `1`
   * @maxLength `350`
   */
  Title: string;
  /**
   * The question weight used for scoring.
   * @min `0`
   * @max `100`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormQuestionTypeProperties`.
 * The properties of the question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html}
 */
export type EvaluationFormQuestionTypeProperties = {
  /**
   * The properties of the numeric question.
   */
  Numeric?: EvaluationFormNumericQuestionProperties;
  /**
   * The properties of the single-select question.
   */
  SingleSelect?: EvaluationFormSingleSelectQuestionProperties;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSection`.
 * The evaluation form section.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsection.html}
 */
export type EvaluationFormSection = {
  /**
   * The instructions for the section.
   * @maxLength `1024`
   */
  Instructions?: string;
  /**
   * The list of section items.
   * @minLength `1`
   * @maxLength `200`
   */
  Items?: EvaluationFormItem[];
  /**
   * The identifier to reference the section.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The title of the section.
   * @minLength `1`
   * @maxLength `128`
   */
  Title: string;
  /**
   * The item weight used for scoring.
   * @min `0`
   * @max `100`
   */
  Weight?: number;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomation`.
 * The automation properties for the single-select question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html}
 */
export type EvaluationFormSingleSelectQuestionAutomation = {
  /**
   * The option reference identifier of the default answer.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  DefaultOptionRefId?: string;
  /**
   * The answer options for the automation.
   * @minLength `1`
   * @maxLength `20`
   */
  Options: EvaluationFormSingleSelectQuestionAutomationOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionAutomationOption`.
 * The automation option for the single-select question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html}
 */
export type EvaluationFormSingleSelectQuestionAutomationOption = {
  /**
   * The automation option based on Rules categories.
   */
  RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionOption`.
 * The option for a question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html}
 */
export type EvaluationFormSingleSelectQuestionOption = {
  /**
   * The flag to mark the option as automatic fail.
   */
  AutomaticFail?: boolean;
  /**
   * The identifier used to reference the option.
   * @pattern `^[a-zA-Z0-9._-]{1,40}$`
   */
  RefId: string;
  /**
   * The score of the option.
   * @min `0`
   * @max `10`
   */
  Score?: number;
  /**
   * The title of the option.
   * @minLength `1`
   * @maxLength `128`
   */
  Text: string;
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.EvaluationFormSingleSelectQuestionProperties`.
 * The properties of the single-select question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html}
 */
export type EvaluationFormSingleSelectQuestionProperties = {
  /**
   * The automation properties for the single-select question.
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation;
  /**
   * The display mode of the single-select question.
   */
  DisplayAs?: "DROPDOWN" | "RADIO";
  /**
   * The list of options for the question.
   * @minLength `2`
   * @maxLength `256`
   */
  Options: EvaluationFormSingleSelectQuestionOption[];
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.NumericQuestionPropertyValueAutomation`.
 * The automation property name of the question.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html}
 */
export type NumericQuestionPropertyValueAutomation = {
  /**
   * The automation property label.
   */
  Label:
    | "OVERALL_CUSTOMER_SENTIMENT_SCORE"
    | "OVERALL_AGENT_SENTIMENT_SCORE"
    | "NON_TALK_TIME"
    | "NON_TALK_TIME_PERCENTAGE"
    | "NUMBER_OF_INTERRUPTIONS"
    | "CONTACT_DURATION"
    | "AGENT_INTERACTION_DURATION"
    | "CUSTOMER_HOLD_TIME";
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.ScoringStrategy`.
 * The scoring strategy.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-scoringstrategy.html}
 */
export type ScoringStrategy = {
  /**
   * The scoring mode.
   */
  Mode: "QUESTION_ONLY" | "SECTION_ONLY";
  /**
   * The scoring status.
   */
  Status: "ENABLED" | "DISABLED";
};
/**
 * Type definition for `AWS::Connect::EvaluationForm.SingleSelectQuestionRuleCategoryAutomation`.
 * The automation option based on Rules categories.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html}
 */
export type SingleSelectQuestionRuleCategoryAutomation = {
  /**
   * The category name as defined in Rules.
   * @minLength `1`
   * @maxLength `50`
   */
  Category: string;
  /**
   * The automation condition applied on contact categories.
   */
  Condition: "PRESENT" | "NOT_PRESENT";
  /**
   * The option identifier referencing the option to be selected when the automation option is triggered.
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
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that's 1 to 256 characters in length.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::EvaluationForm
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
