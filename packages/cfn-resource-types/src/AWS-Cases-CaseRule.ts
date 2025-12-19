import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Cases::CaseRule`.
 * A case rule. In the Amazon Connect admin website, case rules are known as case field conditions. Case rules are used to define the situations under which fields should have certain effects (such as required).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-caserule.html}
 */
export type CasesCaseRuleProperties = {
  /**
   * A description explaining the purpose and behavior of this case rule. Helps administrators understand when and why this rule applies to case fields.
   * @maxLength `255`
   */
  Description?: string;
  /**
   * The unique identifier of the Cases domain.
   * @minLength `1`
   * @maxLength `500`
   */
  DomainId?: string;
  /**
   * A descriptive name for the case rule. Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^.*[\S]$`
   */
  Name: string;
  /**
   * Defines the rule behavior and conditions. Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.
   */
  Rule: CaseRuleDetails;
  /**
   * The tags that you attach to this case rule.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Cases::CaseRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-caserule.html#aws-resource-cases-caserule-return-values}
 */
export type CasesCaseRuleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of a case rule.
   * @minLength `1`
   * @maxLength `500`
   */
  CaseRuleArn: string;
  /**
   * The unique identifier of a case rule.
   * @minLength `1`
   * @maxLength `500`
   */
  CaseRuleId: string;
  /**
   * The time at which the case rule was created.
   */
  CreatedTime: string;
  /**
   * The time at which the case rule was created or last modified.
   */
  LastModifiedTime: string;
};
/**
 * Type definition for `AWS::Cases::CaseRule.BooleanCondition`.
 * A boolean condition for a rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-booleancondition.html}
 */
export type BooleanCondition =
  | {
      /**
       * Boolean operands for a condition.
       */
      EqualTo: BooleanOperands;
    }
  | {
      /**
       * Boolean operands for a condition.
       */
      NotEqualTo: BooleanOperands;
    };
/**
 * Type definition for `AWS::Cases::CaseRule.BooleanOperands`.
 * Boolean operands for a condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-booleanoperands.html}
 */
export type BooleanOperands = {
  OperandOne: OperandOne;
  /**
   * The right hand operand in the condition.
   */
  OperandTwo: OperandTwo;
  /**
   * The value of the outer rule if the condition evaluates to true.
   */
  Result: boolean;
};
/**
 * Type definition for `AWS::Cases::CaseRule.CaseRuleDetails`.
 * Defines the rule behavior and conditions. Specifies the rule type and the conditions under which it applies. In the Amazon Connect admin website, this corresponds to case field conditions.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-caseruledetails.html}
 */
export type CaseRuleDetails =
  | {
      /**
       * A required rule type, used to indicate whether a field is required.
       */
      Required: RequiredCaseRule;
    }
  | {
      /**
       * Hidden rule type, used to indicate whether a field is hidden
       */
      Hidden: HiddenCaseRule;
    };
/**
 * Type definition for `AWS::Cases::CaseRule.EmptyOperandValue`.
 * An empty operand value.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-emptyoperandvalue.html}
 */
export type EmptyOperandValue = Record<string, any>;
/**
 * Type definition for `AWS::Cases::CaseRule.HiddenCaseRule`.
 * Hidden rule type, used to indicate whether a field is hidden
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-hiddencaserule.html}
 */
export type HiddenCaseRule = {
  /**
   * List of conditions for the hidden rule; the first condition to evaluate to true dictates the value of the rule
   * @maxLength `100`
   */
  Conditions: BooleanCondition[];
  /**
   * The value of the rule (i.e. whether the field is hidden) should none of the conditions evaluate to true
   */
  DefaultValue: boolean;
};
/**
 * Type definition for `AWS::Cases::CaseRule.OperandOne`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-operandone.html}
 */
export type OperandOne = {
  /**
   * The field ID this operand should take the value of.
   * @minLength `1`
   * @maxLength `500`
   */
  FieldId: string;
};
/**
 * Type definition for `AWS::Cases::CaseRule.OperandTwo`.
 * The right hand operand in the condition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-operandtwo.html}
 */
export type OperandTwo =
  | {
      /**
       * A string value to compare against the field value in the condition evaluation.
       * @minLength `1`
       * @maxLength `1500`
       */
      StringValue: string;
    }
  | {
      /**
       * A boolean value to compare against the field value in the condition evaluation.
       */
      BooleanValue: boolean;
    }
  | {
      /**
       * A numeric value to compare against the field value in the condition evaluation.
       */
      DoubleValue: number;
    }
  | {
      /**
       * An empty operand value.
       */
      EmptyValue: EmptyOperandValue;
    };
/**
 * Type definition for `AWS::Cases::CaseRule.RequiredCaseRule`.
 * A required rule type, used to indicate whether a field is required.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-requiredcaserule.html}
 */
export type RequiredCaseRule = {
  /**
   * An ordered list of boolean conditions that determine when the field should be required. Conditions are evaluated in order, and the first condition that evaluates to true determines whether the field is required, overriding the default value.
   * @maxLength `100`
   */
  Conditions: BooleanCondition[];
  /**
   * The default required state for the field when none of the specified conditions are met. If true, the field is required by default; if false, the field is optional by default.
   */
  DefaultValue: boolean;
};
/**
 * Type definition for `AWS::Cases::CaseRule.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cases-caserule-tag.html}
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
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::Cases::CaseRule`.
 * A case rule. In the Amazon Connect admin website, case rules are known as case field conditions. Case rules are used to define the situations under which fields should have certain effects (such as required).
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cases-caserule.html}
 */
export class CasesCaseRule extends $Resource<
  "AWS::Cases::CaseRule",
  CasesCaseRuleProperties,
  CasesCaseRuleAttributes
> {
  public static readonly Type = "AWS::Cases::CaseRule";
  constructor(
    logicalId: string,
    properties: CasesCaseRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, CasesCaseRule.Type, properties, options);
  }
}
