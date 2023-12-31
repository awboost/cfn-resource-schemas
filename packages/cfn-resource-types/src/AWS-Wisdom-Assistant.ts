import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Definition of AWS::Wisdom::Assistant Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html}
 */
export type WisdomAssistantProperties = {
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `255`
   */
  Name: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
  Tags?: Tag[];
  Type: AssistantType;
};
/**
 * Attribute type definition for `AWS::Wisdom::Assistant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html#aws-resource-wisdom-assistant-return-values}
 */
export type WisdomAssistantAttributes = {
  /**
   * @pattern `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
   */
  AssistantArn: string;
  /**
   * @pattern `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   */
  AssistantId: string;
};
/**
 * Type definition for `AWS::Wisdom::Assistant.AssistantType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-assistanttype.html}
 */
export type AssistantType = "AGENT";
/**
 * Type definition for `AWS::Wisdom::Assistant.ServerSideEncryptionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-serversideencryptionconfiguration.html}
 */
export type ServerSideEncryptionConfiguration = {
  /**
   * @minLength `1`
   * @maxLength `4096`
   */
  KmsKeyId?: string;
};
/**
 * Type definition for `AWS::Wisdom::Assistant.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wisdom-assistant-tag.html}
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
 * Definition of AWS::Wisdom::Assistant Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistant.html}
 */
export class WisdomAssistant extends $Resource<
  "AWS::Wisdom::Assistant",
  WisdomAssistantProperties,
  WisdomAssistantAttributes
> {
  public static readonly Type = "AWS::Wisdom::Assistant";
  public static readonly AttributeNames = [
    "AssistantArn" as const,
    "AssistantId" as const,
  ];
  constructor(
    logicalId: string,
    properties: WisdomAssistantProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WisdomAssistant.Type,
      properties,
      WisdomAssistant.AttributeNames,
      options,
    );
  }
}
