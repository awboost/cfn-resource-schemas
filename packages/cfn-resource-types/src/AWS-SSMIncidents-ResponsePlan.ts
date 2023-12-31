import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for AWS::SSMIncidents::ResponsePlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html}
 */
export type SSMIncidentsResponsePlanProperties = {
  /**
   * The list of actions.
   * @maxLength `1`
   */
  Actions?: Action[];
  /**
   * The chat channel configuration.
   */
  ChatChannel?: ChatChannel;
  /**
   * The display name of the response plan.
   * @minLength `1`
   * @maxLength `200`
   */
  DisplayName?: string;
  /**
   * The list of engagements to use.
   * @maxLength `5`
   */
  Engagements?: string[];
  /**
   * The incident template configuration.
   */
  IncidentTemplate: IncidentTemplate;
  /**
   * The list of integrations.
   * @maxLength `1`
   */
  Integrations?: Integration[];
  /**
   * The name of the response plan.
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9_-]*$`
   */
  Name: string;
  /**
   * The tags to apply to the response plan.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SSMIncidents::ResponsePlan`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#aws-resource-ssmincidents-responseplan-return-values}
 */
export type SSMIncidentsResponsePlanAttributes = {
  /**
   * The ARN of the response plan.
   * @maxLength `1000`
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  Arn: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.Action`.
 * The automation configuration to launch.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html}
 */
export type Action = {
  /**
   * The configuration to use when starting the SSM automation document.
   */
  SsmAutomation?: SsmAutomation;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.ChatChannel`.
 * The chat channel configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-chatchannel.html}
 */
export type ChatChannel = {
  ChatbotSns?: string[];
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.DynamicSsmParameter`.
 * A parameter with a dynamic value to set when starting the SSM automation document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html}
 */
export type DynamicSsmParameter = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Key: string;
  /**
   * Value of the dynamic parameter to set when starting the SSM automation document.
   */
  Value: DynamicSsmParameterValue;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.DynamicSsmParameterValue`.
 * Value of the dynamic parameter to set when starting the SSM automation document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html}
 */
export type DynamicSsmParameterValue = {
  /**
   * The variable types used as dynamic parameter value when starting the SSM automation document.
   */
  Variable?: VariableType;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.IncidentTemplate`.
 * The incident template configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html}
 */
export type IncidentTemplate = {
  /**
   * The deduplication string.
   * @minLength `1`
   * @maxLength `1000`
   */
  DedupeString?: string;
  /**
   * The impact value.
   * @min `1`
   * @max `5`
   */
  Impact: number;
  /**
   * Tags that get applied to incidents created by the StartIncident API action.
   * @maxLength `50`
   */
  IncidentTags?: Tag[];
  /**
   * The list of notification targets.
   * @maxLength `10`
   */
  NotificationTargets?: NotificationTargetItem[];
  /**
   * The summary string.
   * @minLength `1`
   * @maxLength `4000`
   */
  Summary?: string;
  /**
   * The title string.
   * @maxLength `200`
   */
  Title: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.Integration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-integration.html}
 */
export type Integration = {
  /**
   * The pagerDuty configuration to use when starting the incident.
   */
  PagerDutyConfiguration?: PagerDutyConfiguration;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.NotificationTargetItem`.
 * A notification target.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-notificationtargetitem.html}
 */
export type NotificationTargetItem = {
  /**
   * The ARN of the Chatbot SNS topic.
   * @maxLength `1000`
   * @pattern `^arn:aws(-(cn|us-gov))?:sns:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  SnsTopicArn?: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.PagerDutyConfiguration`.
 * The pagerDuty configuration to use when starting the incident.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html}
 */
export type PagerDutyConfiguration = {
  /**
   * The name of the pagerDuty configuration.
   * @minLength `1`
   * @maxLength `200`
   */
  Name: string;
  /**
   * The pagerDuty incident configuration.
   */
  PagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration;
  /**
   * The AWS secrets manager secretId storing the pagerDuty token.
   * @minLength `1`
   * @maxLength `512`
   */
  SecretId: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.PagerDutyIncidentConfiguration`.
 * The pagerDuty incident configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html}
 */
export type PagerDutyIncidentConfiguration = {
  /**
   * The pagerDuty serviceId.
   * @minLength `1`
   * @maxLength `200`
   */
  ServiceId: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.SsmAutomation`.
 * The configuration to use when starting the SSM automation document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html}
 */
export type SsmAutomation = {
  /**
   * The document name to use when starting the SSM automation document.
   * @maxLength `128`
   */
  DocumentName: string;
  /**
   * The version of the document to use when starting the SSM automation document.
   * @maxLength `128`
   */
  DocumentVersion?: string;
  /**
   * The parameters with dynamic values to set when starting the SSM automation document.
   * @maxLength `200`
   */
  DynamicParameters?: DynamicSsmParameter[];
  /**
   * The parameters to set when starting the SSM automation document.
   * @minLength `1`
   * @maxLength `200`
   */
  Parameters?: SsmParameter[];
  /**
   * The role ARN to use when starting the SSM automation document.
   * @maxLength `1000`
   * @pattern `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   */
  RoleArn: string;
  /**
   * The account type to use when starting the SSM automation document.
   */
  TargetAccount?: "IMPACTED_ACCOUNT" | "RESPONSE_PLAN_OWNER_ACCOUNT";
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.SsmParameter`.
 * A parameter to set when starting the SSM automation document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html}
 */
export type SsmParameter = {
  /**
   * @minLength `1`
   * @maxLength `50`
   */
  Key: string;
  /**
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.Tag`.
 * A key-value pair to tag a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Type definition for `AWS::SSMIncidents::ResponsePlan.VariableType`.
 * The variable types used as dynamic parameter value when starting the SSM automation document.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-variabletype.html}
 */
export type VariableType = "INCIDENT_RECORD_ARN" | "INVOLVED_RESOURCES";
/**
 * Resource type definition for AWS::SSMIncidents::ResponsePlan
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html}
 */
export class SSMIncidentsResponsePlan extends $Resource<
  "AWS::SSMIncidents::ResponsePlan",
  SSMIncidentsResponsePlanProperties,
  SSMIncidentsResponsePlanAttributes
> {
  public static readonly Type = "AWS::SSMIncidents::ResponsePlan";
  public static readonly AttributeNames = ["Arn" as const];
  constructor(
    logicalId: string,
    properties: SSMIncidentsResponsePlanProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      SSMIncidentsResponsePlan.Type,
      properties,
      SSMIncidentsResponsePlan.AttributeNames,
      options,
    );
  }
}
