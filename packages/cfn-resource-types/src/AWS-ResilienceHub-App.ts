import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type Definition for AWS::ResilienceHub::App.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html}
 */
export type ResilienceHubAppProperties = {
  /**
   * Assessment execution schedule.
   */
  AppAssessmentSchedule?: "Disabled" | "Daily";
  /**
   * A string containing full ResilienceHub app template body.
   * @minLength `0`
   * @maxLength `409600`
   * @pattern `^[\w\s:,-\.'\/{}\[\]:"]+$`
   */
  AppTemplateBody: string;
  /**
   * App description.
   * @minLength `0`
   * @maxLength `500`
   */
  Description?: string;
  /**
   * The list of events you would like to subscribe and get notification for.
   */
  EventSubscriptions?: EventSubscription[];
  /**
   * Name of the app.
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
   */
  PermissionModel?: PermissionModel;
  /**
   * Amazon Resource Name (ARN) of the Resiliency Policy.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  ResiliencyPolicyArn?: string;
  /**
   * An array of ResourceMapping objects.
   */
  ResourceMappings: ResourceMapping[];
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::ResilienceHub::App`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#aws-resource-resiliencehub-app-return-values}
 */
export type ResilienceHubAppAttributes = {
  /**
   * Amazon Resource Name (ARN) of the App.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  AppArn: string;
  /**
   * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
   */
  DriftStatus: "NotChecked" | "NotDetected" | "Detected";
};
/**
 * Type definition for `AWS::ResilienceHub::App.EventSubscription`.
 * Indicates an event you would like to subscribe and get notification for.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-eventsubscription.html}
 */
export type EventSubscription = {
  /**
   * The type of event you would like to subscribe and get notification for.
   */
  EventType: "ScheduledAssessmentFailure" | "DriftDetected";
  /**
   * Unique name to identify an event subscription.
   * @maxLength `256`
   */
  Name: string;
  /**
   * Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   */
  SnsTopicArn?: string;
};
/**
 * Type definition for `AWS::ResilienceHub::App.PermissionModel`.
 * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-permissionmodel.html}
 */
export type PermissionModel = {
  /**
   * Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
   */
  CrossAccountRoleArns?: string[];
  /**
   * Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
   * @pattern `((\u002F[\u0021-\u007E]+\u002F){1,511})?[A-Za-z0-9+=,.@_/-]{1,64}`
   */
  InvokerRoleName?: string;
  /**
   * Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.
   */
  Type: "LegacyIAMUser" | "RoleBased";
};
/**
 * Type definition for `AWS::ResilienceHub::App.PhysicalResourceId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html}
 */
export type PhysicalResourceId = {
  /**
   * @pattern `^[0-9]{12}$`
   */
  AwsAccountId?: string;
  /**
   * @pattern `^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$`
   */
  AwsRegion?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Identifier: string;
  /**
   * @pattern `Arn|Native`
   */
  Type: string;
};
/**
 * Type definition for `AWS::ResilienceHub::App.ResourceMapping`.
 * Resource mapping is used to map logical resources from template to physical resource
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html}
 */
export type ResourceMapping = {
  EksSourceName?: string;
  LogicalStackName?: string;
  /**
   * @pattern `CfnStack|Resource|Terraform|EKS`
   */
  MappingType: string;
  PhysicalResourceId: PhysicalResourceId;
  /**
   * @pattern `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   */
  ResourceName?: string;
  TerraformSourceName?: string;
};
/**
 * Type definition for `AWS::ResilienceHub::App.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Resource Type Definition for AWS::ResilienceHub::App.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html}
 */
export class ResilienceHubApp extends $Resource<
  "AWS::ResilienceHub::App",
  ResilienceHubAppProperties,
  ResilienceHubAppAttributes
> {
  public static readonly Type = "AWS::ResilienceHub::App";
  constructor(
    logicalId: string,
    properties: ResilienceHubAppProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ResilienceHubApp.Type, properties, options);
  }
}
