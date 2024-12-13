import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::Rule`.
 * Creates a rule for the specified CON instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html}
 */
export type ConnectRuleProperties = {
  /**
   * A list of actions to be run when the rule is triggered.
   */
  Actions: Actions;
  /**
   * The conditions of the rule.
   */
  Function: string;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the rule.
   * @pattern `^[a-zA-Z0-9._-]{1,200}$`
   */
  Name: string;
  /**
   * The publish status of the rule.
   *Allowed values*: ``DRAFT`` | ``PUBLISHED``
   */
  PublishStatus: "DRAFT" | "PUBLISHED";
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The event source to trigger the rule.
   */
  TriggerEventSource: RuleTriggerEventSource;
};
/**
 * Attribute type definition for `AWS::Connect::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#aws-resource-connect-rule-return-values}
 */
export type ConnectRuleAttributes = {
  /**
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*rule/[-a-zA-Z0-9]*$`
   */
  RuleArn: string;
};
/**
 * Type definition for `AWS::Connect::Rule.Actions`.
 * A list of actions to be run when the rule is triggered.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html}
 */
export type Actions = {
  /**
   * Information about the contact category action. The syntax can be empty, for example, ``{}``.
   * @minLength `1`
   * @maxLength `1`
   */
  AssignContactCategoryActions?: AssignContactCategoryAction[];
  /**
   * This action will create a case when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  CreateCaseActions?: CreateCaseAction[];
  /**
   * This action will end associated tasks when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  EndAssociatedTasksActions?: EndAssociatedTasksAction[];
  /**
   * Information about the EV action.
   * @minLength `1`
   * @maxLength `1`
   */
  EventBridgeActions?: EventBridgeAction[];
  /**
   * Information about the send notification action.
   * @minLength `1`
   * @maxLength `1`
   */
  SendNotificationActions?: SendNotificationAction[];
  /**
   * This action will submit an auto contact evaluation when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  SubmitAutoEvaluationActions?: SubmitAutoEvaluationAction[];
  /**
   * Information about the task action. This field is required if ``TriggerEventSource`` is one of the following values: ``OnZendeskTicketCreate`` | ``OnZendeskTicketStatusUpdate`` | ``OnSalesforceCaseCreate``
   * @minLength `1`
   * @maxLength `1`
   */
  TaskActions?: TaskAction[];
  /**
   * This action will update a case when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  UpdateCaseActions?: UpdateCaseAction[];
};
/**
 * Type definition for `AWS::Connect::Rule.AssignContactCategoryAction`.
 * The definition for assigning contact category action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-assigncontactcategoryaction.html}
 */
export type AssignContactCategoryAction = Record<string, any>;
/**
 * Type definition for `AWS::Connect::Rule.CreateCaseAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-createcaseaction.html}
 */
export type CreateCaseAction = {
  /**
   * An array of case fields
   * @minLength `1`
   * @maxLength `100`
   */
  Fields: Field[];
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  TemplateId: string;
};
/**
 * Type definition for `AWS::Connect::Rule.EndAssociatedTasksAction`.
 * The definition for ending associated task action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-endassociatedtasksaction.html}
 */
export type EndAssociatedTasksAction = Record<string, any>;
/**
 * Type definition for `AWS::Connect::Rule.EventBridgeAction`.
 * The EV action definition.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html}
 */
export type EventBridgeAction = {
  /**
   * The name.
   * @pattern `^[a-zA-Z0-9._-]{1,100}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::Rule.Field`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-field.html}
 */
export type Field = {
  /**
   * @minLength `1`
   * @maxLength `500`
   */
  Id: string;
  /**
   * Object for case field values.
   */
  Value: FieldValue;
};
/**
 * Type definition for `AWS::Connect::Rule.FieldValue`.
 * Object for case field values.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-fieldvalue.html}
 */
export type FieldValue = {
  BooleanValue?: boolean;
  DoubleValue?: number;
  EmptyValue?: Record<string, any>;
  StringValue?: string;
};
/**
 * Type definition for `AWS::Connect::Rule.NotificationRecipientType`.
 * The type of notification recipient.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html}
 */
export type NotificationRecipientType = {
  /**
   * The Amazon Resource Name (ARN) of the user account.
   * @minLength `1`
   * @maxLength `5`
   */
  UserArns?: string[];
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. CON users with the specified tags will be notified.
   */
  UserTags?: Record<string, string>;
};
/**
 * Type definition for `AWS::Connect::Rule.Reference`.
 * Information about the reference when the ``referenceType`` is ``URL``. Otherwise, null. (Supports variable injection in the ``Value`` field.)
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html}
 */
export type Reference = {
  /**
   * The type of the reference. ``DATE`` must be of type Epoch timestamp.
   *Allowed values*: ``URL`` | ``ATTACHMENT`` | ``NUMBER`` | ``STRING`` | ``DATE`` | ``EMAIL``
   */
  Type: "URL" | "ATTACHMENT" | "NUMBER" | "STRING" | "DATE" | "EMAIL";
  /**
   * A valid value for the reference. For example, for a URL reference, a formatted URL that is displayed to an agent in the Contact Control Panel (CCP).
   * @pattern `^(/|https:)`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Connect::Rule.RuleTriggerEventSource`.
 * The name of the event source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html}
 */
export type RuleTriggerEventSource = {
  /**
   * The name of the event source.
   */
  EventSourceName:
    | "OnContactEvaluationSubmit"
    | "OnPostCallAnalysisAvailable"
    | "OnRealTimeCallAnalysisAvailable"
    | "OnRealTimeChatAnalysisAvailable"
    | "OnPostChatAnalysisAvailable"
    | "OnZendeskTicketCreate"
    | "OnZendeskTicketStatusUpdate"
    | "OnSalesforceCaseCreate"
    | "OnMetricDataUpdate"
    | "OnCaseCreate"
    | "OnCaseUpdate";
  /**
   * The Amazon Resource Name (ARN) of the integration association. ``IntegrationAssociationArn`` is required if ``TriggerEventSource`` is one of the following values: ``OnZendeskTicketCreate`` | ``OnZendeskTicketStatusUpdate`` | ``OnSalesforceCaseCreate``
   * @pattern `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*integration-association/[-a-zA-Z0-9]*$`
   */
  IntegrationAssociationArn?: string;
};
/**
 * Type definition for `AWS::Connect::Rule.SendNotificationAction`.
 * Information about the send notification action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html}
 */
export type SendNotificationAction = {
  /**
   * Notification content. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Administrators Guide*.
   * @minLength `1`
   * @maxLength `1024`
   */
  Content: string;
  /**
   * Content type format.
   *Allowed value*: ``PLAIN_TEXT``
   */
  ContentType: "PLAIN_TEXT";
  /**
   * Notification delivery method.
   *Allowed value*: ``EMAIL``
   */
  DeliveryMethod: "EMAIL";
  /**
   * Notification recipient.
   */
  Recipient: NotificationRecipientType;
  /**
   * The subject of the email if the delivery method is ``EMAIL``. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Administrators Guide*.
   * @minLength `1`
   * @maxLength `200`
   */
  Subject?: string;
};
/**
 * Type definition for `AWS::Connect::Rule.SubmitAutoEvaluationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-submitautoevaluationaction.html}
 */
export type SubmitAutoEvaluationAction = {
  /**
   * @pattern `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*evaluation-form/[-a-zA-Z0-9]*$`
   */
  EvaluationFormArn: string;
};
/**
 * Type definition for `AWS::Connect::Rule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-tag.html}
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
 * Type definition for `AWS::Connect::Rule.TaskAction`.
 * Information about the task action. This field is required if ``TriggerEventSource`` is one of the following values: ``OnZendeskTicketCreate`` | ``OnZendeskTicketStatusUpdate`` | ``OnSalesforceCaseCreate``
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html}
 */
export type TaskAction = {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @pattern `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn: string;
  /**
   * The description. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Administrators Guide*.
   * @minLength `0`
   * @maxLength `4096`
   */
  Description?: string;
  /**
   * The name. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the *Administrators Guide*.
   * @minLength `1`
   * @maxLength `512`
   */
  Name: string;
  /**
   * Information about the reference when the ``referenceType`` is ``URL``. Otherwise, null. ``URL`` is the only accepted type. (Supports variable injection in the ``Value`` field.)
   */
  References?: Record<string, Reference>;
};
/**
 * Type definition for `AWS::Connect::Rule.UpdateCaseAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-updatecaseaction.html}
 */
export type UpdateCaseAction = {
  /**
   * An array of case fields
   * @minLength `1`
   * @maxLength `100`
   */
  Fields: Field[];
};
/**
 * Resource type definition for `AWS::Connect::Rule`.
 * Creates a rule for the specified CON instance.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html}
 */
export class ConnectRule extends $Resource<
  "AWS::Connect::Rule",
  ConnectRuleProperties,
  ConnectRuleAttributes
> {
  public static readonly Type = "AWS::Connect::Rule";
  constructor(
    logicalId: string,
    properties: ConnectRuleProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectRule.Type, properties, options);
  }
}
