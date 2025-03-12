import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Chatbot::CustomAction Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html}
 */
export type ChatbotCustomActionProperties = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[a-zA-Z0-9_-]{1,64}$`
   */
  ActionName: string;
  /**
   * @minLength `1`
   * @maxLength `30`
   * @pattern `^[A-Za-z0-9-_]+$`
   */
  AliasName?: string;
  Attachments?: CustomActionAttachment[];
  Definition: CustomActionDefinition;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Chatbot::CustomAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#aws-resource-chatbot-customaction-return-values}
 */
export type ChatbotCustomActionAttributes = {
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:(aws[a-zA-Z-]*)?:chatbot:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:custom-action/[a-zA-Z0-9_-]{1,64}$`
   */
  CustomActionArn: string;
};
/**
 * Type definition for `AWS::Chatbot::CustomAction.CustomActionAttachment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html}
 */
export type CustomActionAttachment = {
  /**
   * @minLength `1`
   * @maxLength `50`
   * @pattern `^[\S\s]+$`
   */
  ButtonText?: string;
  /**
   * @minLength `1`
   * @maxLength `5`
   */
  Criteria?: CustomActionAttachmentCriteria[];
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  NotificationType?: string;
  Variables?: CustomActionAttachmentVariables;
};
/**
 * Type definition for `AWS::Chatbot::CustomAction.CustomActionAttachmentCriteria`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteria.html}
 */
export type CustomActionAttachmentCriteria = {
  Operator: CustomActionAttachmentCriteriaOperator;
  /**
   * @minLength `0`
   * @maxLength `50`
   */
  Value?: string;
  VariableName: string;
};
/**
 * Type definition for `AWS::Chatbot::CustomAction.CustomActionAttachmentCriteriaOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteriaoperator.html}
 */
export type CustomActionAttachmentCriteriaOperator = "HAS_VALUE" | "EQUALS";
/**
 * Type definition for `AWS::Chatbot::CustomAction.CustomActionAttachmentVariables`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentvariables.html}
 */
export type CustomActionAttachmentVariables = Record<string, string>;
/**
 * Type definition for `AWS::Chatbot::CustomAction.CustomActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactiondefinition.html}
 */
export type CustomActionDefinition = {
  /**
   * @minLength `1`
   * @maxLength `5000`
   */
  CommandText: string;
};
/**
 * Type definition for `AWS::Chatbot::CustomAction.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::Chatbot::CustomAction Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html}
 */
export class ChatbotCustomAction extends $Resource<
  "AWS::Chatbot::CustomAction",
  ChatbotCustomActionProperties,
  ChatbotCustomActionAttributes
> {
  public static readonly Type = "AWS::Chatbot::CustomAction";
  constructor(
    logicalId: string,
    properties: ChatbotCustomActionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ChatbotCustomAction.Type, properties, options);
  }
}
