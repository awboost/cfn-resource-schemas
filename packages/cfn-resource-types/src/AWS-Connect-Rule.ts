import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::Connect::Rule`.
 * Resource Type definition for AWS:Connect::Rule
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html}
 */
export type ConnectRuleProperties = {
  /**
   * The list of actions that will be executed when a rule is triggered.
   */
  Actions: Actions;
  /**
   * The conditions of a rule.
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
   * The publish status of a rule, either draft or published.
   */
  PublishStatus: "DRAFT" | "PUBLISHED";
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The event source that triggers the rule.
   */
  TriggerEventSource: RuleTriggerEventSource;
};
/**
 * Attribute type definition for `AWS::Connect::Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html#aws-resource-connect-rule-return-values}
 */
export type ConnectRuleAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*rule/[-a-zA-Z0-9]*$`
   */
  RuleArn: string;
};
/**
 * Type definition for `AWS::Connect::Rule.Actions`.
 * The list of actions that will be executed when a rule is triggered.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html}
 */
export type Actions = {
  /**
   * This action will assign contact category when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  AssignContactCategoryActions?: AssignContactCategoryAction[];
  /**
   * This action will send event bridge notification when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  EventBridgeActions?: EventBridgeAction[];
  /**
   * The action will send notification when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  SendNotificationActions?: SendNotificationAction[];
  /**
   * This action will generate a task when a rule is triggered.
   * @minLength `1`
   * @maxLength `1`
   */
  TaskActions?: TaskAction[];
};
/**
 * Type definition for `AWS::Connect::Rule.AssignContactCategoryAction`.
 * The definition for assigning contact category action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-assigncontactcategoryaction.html}
 */
export type AssignContactCategoryAction = Record<string, any>;
/**
 * Type definition for `AWS::Connect::Rule.EventBridgeAction`.
 * The definition for event bridge action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html}
 */
export type EventBridgeAction = {
  /**
   * The name of the event bridge action.
   * @pattern `^[a-zA-Z0-9._-]{1,100}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::Rule.NotificationRecipientType`.
 * The type of notification recipient.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html}
 */
export type NotificationRecipientType = {
  /**
   * The list of recipients by user arns.
   * @minLength `1`
   * @maxLength `5`
   */
  UserArns?: string[];
  /**
   * The collection of recipients who are identified by user tags
   */
  UserTags?: Record<string, string>;
};
/**
 * Type definition for `AWS::Connect::Rule.Reference`.
 * A contact reference.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html}
 */
export type Reference = {
  Type: "URL" | "ATTACHMENT" | "NUMBER" | "STRING" | "DATE" | "EMAIL";
  /**
   * @pattern `^(/|https:)`
   */
  Value: string;
};
/**
 * Type definition for `AWS::Connect::Rule.RuleTriggerEventSource`.
 * The event source that will trigger the rule.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html}
 */
export type RuleTriggerEventSource = {
  /**
   * The name of event source.
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
    | "OnMetricDataUpdate";
  /**
   * The Amazon Resource Name (ARN) for the AppIntegration association.
   * @pattern `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*integration-association/[-a-zA-Z0-9]*$`
   */
  IntegrationAssociationArn?: string;
};
/**
 * Type definition for `AWS::Connect::Rule.SendNotificationAction`.
 * The definition for sending notification action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html}
 */
export type SendNotificationAction = {
  /**
   * The content of notification.
   * @minLength `1`
   * @maxLength `1024`
   */
  Content: string;
  /**
   * The type of content.
   */
  ContentType: "PLAIN_TEXT";
  /**
   * The means of delivery.
   */
  DeliveryMethod: "EMAIL";
  /**
   * The type of notification recipient.
   */
  Recipient: NotificationRecipientType;
  /**
   * The subject of notification.
   * @minLength `1`
   * @maxLength `200`
   */
  Subject?: string;
};
/**
 * Type definition for `AWS::Connect::Rule.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-tag.html}
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
 * Type definition for `AWS::Connect::Rule.TaskAction`.
 * The definition of task action.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html}
 */
export type TaskAction = {
  /**
   * The Amazon Resource Name (ARN) of the contact flow.
   * @pattern `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*contact-flow/[-a-zA-Z0-9]*$`
   */
  ContactFlowArn: string;
  /**
   * The description which appears in the agent's Contact Control Panel (CCP).
   * @minLength `0`
   * @maxLength `4096`
   */
  Description?: string;
  /**
   * The name which appears in the agent's Contact Control Panel (CCP).
   * @minLength `1`
   * @maxLength `512`
   */
  Name: string;
  /**
   * A formatted URL that is shown to an agent in the Contact Control Panel (CCP).
   */
  References?: Record<string, Reference>;
};
/**
 * Resource type definition for `AWS::Connect::Rule`.
 * Resource Type definition for AWS:Connect::Rule
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
