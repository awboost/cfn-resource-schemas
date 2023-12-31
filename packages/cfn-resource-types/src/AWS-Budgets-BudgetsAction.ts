import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::Budgets::BudgetsAction`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html}
 */
export type BudgetsBudgetsActionProperties = {
  ActionThreshold: ActionThreshold;
  ActionType: "APPLY_IAM_POLICY" | "APPLY_SCP_POLICY" | "RUN_SSM_DOCUMENTS";
  ApprovalModel?: "AUTOMATIC" | "MANUAL";
  BudgetName: string;
  Definition: Definition;
  ExecutionRoleArn: string;
  NotificationType: "ACTUAL" | "FORECASTED";
  /**
   * @minLength `1`
   * @maxLength `11`
   */
  Subscribers: Subscriber[];
};
/**
 * Attribute type definition for `AWS::Budgets::BudgetsAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#aws-resource-budgets-budgetsaction-return-values}
 */
export type BudgetsBudgetsActionAttributes = {
  ActionId: string;
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.ActionThreshold`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-actionthreshold.html}
 */
export type ActionThreshold = {
  Type: "PERCENTAGE" | "ABSOLUTE_VALUE";
  Value: number;
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.Definition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-definition.html}
 */
export type Definition = {
  IamActionDefinition?: IamActionDefinition;
  ScpActionDefinition?: ScpActionDefinition;
  SsmActionDefinition?: SsmActionDefinition;
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.IamActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-iamactiondefinition.html}
 */
export type IamActionDefinition = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Groups?: string[];
  PolicyArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Roles?: string[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  Users?: string[];
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.ScpActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-scpactiondefinition.html}
 */
export type ScpActionDefinition = {
  PolicyId: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  TargetIds: string[];
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.SsmActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-ssmactiondefinition.html}
 */
export type SsmActionDefinition = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  InstanceIds: string[];
  Region: string;
  Subtype: "STOP_EC2_INSTANCES" | "STOP_RDS_INSTANCES";
};
/**
 * Type definition for `AWS::Budgets::BudgetsAction.Subscriber`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-budgets-budgetsaction-subscriber.html}
 */
export type Subscriber = {
  Address: string;
  Type: "SNS" | "EMAIL";
};
/**
 * Resource type definition for `AWS::Budgets::BudgetsAction`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html}
 */
export class BudgetsBudgetsAction extends $Resource<
  "AWS::Budgets::BudgetsAction",
  BudgetsBudgetsActionProperties,
  BudgetsBudgetsActionAttributes
> {
  public static readonly Type = "AWS::Budgets::BudgetsAction";
  public static readonly AttributeNames = ["ActionId" as const];
  constructor(
    logicalId: string,
    properties: BudgetsBudgetsActionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      BudgetsBudgetsAction.Type,
      properties,
      BudgetsBudgetsAction.AttributeNames,
      options,
    );
  }
}
